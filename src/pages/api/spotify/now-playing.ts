import '../../../util/spotify';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Playlist, Track } from 'spotify-types';

export interface NowPlayingResponse {
  track: Track | null;
  context?: Playlist;
}

export default async function handler(_: NextApiRequest, res: NextApiResponse<NowPlayingResponse>) {
  const data = await global.spotify.getNowPlaying();
  if (!data.is_playing || !data.item || data.currently_playing_type !== 'track') {
    res.status(200).json({ track: null });
    return;
  }

  let ctx: Playlist | undefined;

  if (data.context?.type === 'playlist') {
    ctx = await global.spotify.getPlaylist(data.context.uri.split(':')[2]).catch(() => undefined);
  }

  return res.status(200).json({ track: data.item as Track, context: ctx });
}
