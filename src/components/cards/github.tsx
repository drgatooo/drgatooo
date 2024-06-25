import { GithubIcon } from '../icons/github';
import type { GHPublicUser } from '@drgato/util/types';
import Link from 'next/link';
import axios from 'axios';
import useSWR from 'swr';

export default function GithubCard() {
  const { data, isLoading } = useSWR<GHPublicUser>(
    'https://api.github.com/users/drgatooo',
    async (url: string) => {
      const { data } = await axios.get(url);
      console.log(data);
      return data;
    }
  );

  return (
    <Link
      href={'https://github.com/drgatooo'}
      target={'_blank'}
      rel={'noopener noreferrer'}
      role={'button'}
      className={
        'card card-interactive col-span-2 flex flex-col backdrop:blur-3xl rounded-xl overflow-hidden'
      }
    >
      <GithubIcon
        className={'absolute -bottom-1/4 -right-1/2'}
        opacity={0.2}
        width={'120%'}
        height={'120%'}
      />

      <div className="w-full header pt-3 pb-2 px-3">
        <h3>GitHub</h3>
      </div>
      <div className="px-3 pb-3 pt-2 h-full justify-center flex flex-col gap-2">
        <span>@drgatooo</span>
        <span>
          {data ? (
            <>
              <span className={'font-bold'}>{data.public_repos}</span> repositorios
            </>
          ) : (
            'Cargando...'
          )}
        </span>
      </div>
    </Link>
  );
}
