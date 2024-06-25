import { useCats } from '@drgato/hooks/useCats';
import Image from 'next/image';
import React from 'react';

export default function RandomCatsSection() {
  const { cat, isLoading, newCat } = useCats();

  return (
    <section className={'flex flex-col gap-5'}>
      <h2>🐈 Gatos random</h2>

      <p>Fácilmente esta sección carrea toda la página.</p>

      <div>
        <div className={'relative max-h-[500px] aspect-square overflow-hidden'}>
          {isLoading || !cat ? (
            <div className={'animate-pulse bg-card w-full h-full'} />
          ) : (
            <div
              style={{
                backgroundImage: `url(${cat})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%'
              }}
            />
            // <Image
            //   src={cat}
            //   alt={'random cat'}
            //   width={0}
            //   height={0}
            //   sizes="50vw"
            //   style={{ width: '100%', height: '300px' }}
            //   className={'absolute top-0 left-0'}
            // />
          )}
        </div>
        <span
          onClick={newCat}
          className={'cursor-pointer hover:underline text-sm text-right w-full'}
        >
          Quiero más gatos
        </span>
      </div>
    </section>
  );
}
