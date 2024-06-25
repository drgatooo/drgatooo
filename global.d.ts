import type { SpotifyApi } from '@drgato/util/spotify';

declare global {
  type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
  };

  // eslint-disable-next-line no-var
  var spotify: SpotifyApi;

  namespace NodeJS {
    interface ProcessEnv {
      SPOTIFY_CLIENT_ID: string;
      SPOTIFY_CLIENT_SECRET: string;
    }
  }
}

export {};
