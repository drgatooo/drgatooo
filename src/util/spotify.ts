import type * as SpotifyTypes from 'spotify-types';
import axios from 'axios';

const SpotifyEndpoints = {
  getToken: 'https://accounts.spotify.com/api/token',
  nowPlaying: 'https://api.spotify.com/v1/me/player/currently-playing',
  currentUser: 'https://api.spotify.com/v1/me',
  currentUserAlbums: 'https://api.spotify.com/v1/me/albums'
};

export class SpotifyApi {
  public token = '';
  public key = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString('base64');

  public constructor() {
    void this.getAccessToken().then(() => console.log('Spotify token refreshed'));
  }

  public awaitToken() {
    return new Promise(resolve => {
      const interval = setInterval(() => {
        if (this.token) {
          clearInterval(interval);
          resolve(this.token);
        }
      }, 100);
    });
  }

  public async getAccessToken() {
    const { data } = await axios(SpotifyEndpoints.getToken, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${this.key}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        grant_type: 'refresh_token',
        refresh_token: process.env.SPOTIFY_REFRESH_TOKEN
      }
    });

    this.token = data.access_token;
    setTimeout(() => this.getAccessToken(), (data.expires_in - 5) * 1000);
    return data;
  }

  public async getNowPlaying() {
    if (!this.token) await this.awaitToken();

    const { data } = await axios<SpotifyTypes.CurrentlyPlaying>(SpotifyEndpoints.nowPlaying, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });

    return data;
  }

  public async getCurrentUser() {
    if (!this.token) await this.awaitToken();

    const { data } = await axios<SpotifyTypes.PrivateUser>(SpotifyEndpoints.currentUser, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });

    return data;
  }

  public async getAlbums() {
    if (!this.token) await this.awaitToken();

    const { data } = await axios<SpotifyTypes.Paging<SpotifyTypes.Album>>(
      SpotifyEndpoints.currentUserAlbums,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.token}`
        },
        params: {
          limit: 50
        }
      }
    );

    return data;
  }

  public async getPlaylist(id: string) {
    if (!this.token) await this.awaitToken();

    const { data } = await axios<SpotifyTypes.Playlist>(
      `https://api.spotify.com/v1/playlists/${id}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }
    );

    return data;
  }
}

let { spotify } = global;

if (typeof spotify == 'undefined') {
  spotify = global.spotify = new SpotifyApi();
}
