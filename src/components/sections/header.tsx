import Image from 'next/image';
import Avatar from '../avatar';
import Link from '../customLink';
import { useColorMode } from '@drgato/hooks/useColorMode';
import { useEffect, useState } from 'react';
import { isTenPower, randomFireworks } from '@drgato/util';

export default function HeaderSection() {
  const [counter, setCounter] = useState(0);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const previousCounter = localStorage.getItem('counter');
    if (previousCounter) {
      setCounter(parseInt(previousCounter));
    }
  }, []);

  const handleCounter = () => {
    const currentCounter = counter;

    localStorage.setItem('counter', (counter + 1).toString());
    setCounter(counter + 1);

    if (isTenPower(currentCounter + 1)) {
      randomFireworks();
      alert('¡Felicidades! Has llegado a un número redondo 🎉');
    }
  };

  return (
    <header
      className={
        'flex my-5 items-center flex-col md:flex-row justify-between text-center md:text-left gap-5'
      }
    >
      <div className="flex flex-col gap-5 items-center md:flex-row text-center md:text-left">
        <div className="relative">
          <LofiOverlay colorMode={colorMode} />
          <LoveOverlay colorMode={colorMode} />
          <Avatar src={'/perfil.png'} name={'drgato'} size={'md'} />
        </div>
        <div className="flex flex-col">
          <h1>Mathias Gomez</h1>
          <span>
            <Link external href={'https://github.com/drgatooo'}>
              @drgatooo
            </Link>{' '}
            / <Link href={'mailto:mathias@drgato.dev'}>mathias@drgato.dev</Link>
          </span>
        </div>
      </div>

      <button className={'button'} onClick={handleCounter}>
        Counter: {counter}
      </button>
    </header>
  );
}

function LofiOverlay({ colorMode }: { colorMode?: string }) {
  return (
    <Image
      src={
        'https://cdn.discordapp.com/avatar-decoration-presets/a_77b7b6a740a9451e1ef39c0252154ef8.png?size=240&passthrough=true'
      }
      alt={'lofi cat'}
      width={'96'}
      height={'96'}
      style={{
        visibility: colorMode === 'coffee' ? 'visible' : 'hidden'
      }}
      className={`absolute -top-3`}
      unoptimized
    />
  );
}

function LoveOverlay({ colorMode }: { colorMode?: string }) {
  return (
    <Image
      src={
        'https://cdn.discordapp.com/avatar-decoration-presets/a_8ffa2ba9bff18e96b76c2e66fd0d7fa3.png?size=240&passthrough=true'
      }
      alt={'love overlay'}
      width={'96'}
      height={'96'}
      style={{
        visibility: colorMode === 'love' ? 'visible' : 'hidden'
      }}
      className={`absolute -top-3`}
      unoptimized
    />
  );
}
