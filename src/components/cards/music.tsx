import { NowPlayingResponse } from '@drgato/pages/api/spotify/now-playing';
import { SpotifyIcon } from '../icons/spotify';
import axios from 'axios';
import useSWR from 'swr';
import CustomLink from '../customLink';

export default function MusicCard() {
  const { data, isLoading } = useSWR<NowPlayingResponse>('/api/spotify/now-playing', fetcher, {
    refreshInterval: 60000
  });

  return (
    <CustomLink
      href={data?.track ? data.track.external_urls.spotify : 'https://open.spotify.com/'}
      external
      className={
        'card card-interactive min-h-32 group h-full col-span-2 md:col-span-1 md:row-span-2 flex rounded-xl p-3 overflow-hidden'
      }
    >
      {data?.track && (
        <div
          className={'group-hover:blur-xl absolute transition top-0 left-0 w-full h-full'}
          style={{
            background: `url(${data.track.album.images[0].url}) center center / cover`,
            opacity: 0.35
          }}
        />
      )}
      <div className={'z-10 flex flex-col justify-between gap-5'}>
        <div className={'flex items-center'}>
          <SpotifyIcon />
          <span className={'text-sm font-bold ml-1'}>
            {isLoading ? '...' : data?.track ? 'ESCUCHANDO' : 'Spotify'}
          </span>
        </div>

        <div className={'flex flex-col'}>
          <span className={'font-bold text-lg line-clamp-2'}>
            {isLoading ? 'Cargando...' : data?.track ? `${data.track.name}` : 'Inactivo 😴'}
          </span>
          <span className={'text-sm line-clamp-2'}>
            {isLoading
              ? 'Cargando...'
              : data?.track
              ? `${data.track.artists.map(a => a.name).join(', ')}`
              : ''}
          </span>
        </div>
      </div>
    </CustomLink>
  );
}

async function fetcher(url: string) {
  const res = await axios.get<NowPlayingResponse>(url);
  return res.data;
}
