import { THEMES } from '@drgato/util/constants';
import { useColorMode } from '@drgato/hooks/useColorMode';
import { constructClassName } from '@drgato/util';
import { useVaporwave } from '@drgato/hooks/useVaporwave';

export default function ToggleColorModeCard() {
  const { colorMode, nextColorMode } = useColorMode();
  const theme = THEMES.find(t => t.className === colorMode);
  const { audio, toggleAudio } = useVaporwave();

  return (
    <>
      <button
        className={constructClassName(
          colorMode == 'floralShoppe' || !audio?.paused ? 'fixed' : 'hidden',
          'button z-10 bottom-5 right-5 bg-card p-2 aspect-square w-8 h-9'
        )}
        onClick={toggleAudio}
      >
        <span className="icon-[mdi--music]" role="img" aria-hidden="true" />
      </button>
      <button
        onClick={() => {
          nextColorMode();
          document.getElementById('icon')!.classList.add('changeTheme');
          setTimeout(() => {
            document.getElementById('icon')!.classList.remove('changeTheme');
          }, 250);
        }}
        className={
          'card card-interactive group gap-2 flex justify-center items-center flex-col backdrop:blur-3xl rounded-xl p-3 overflow-hidden'
        }
      >
        <div id={'icon'} className={''} style={{ animationFillMode: 'backwards' }}>
          {theme?.icon({ className: 'w-10 h-10' })}
        </div>
        <div className="flex flex-col">
          <span className={'text-center font-bold'}>{theme?.name ?? colorMode}</span>
          <span className={'text-xs'}>tema actual</span>
        </div>
      </button>
    </>
  );
}
