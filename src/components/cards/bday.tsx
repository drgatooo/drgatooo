import Countdown, { CountdownRenderProps } from 'react-countdown';
import { BDAY_EVENT_LINK } from '@drgato/util/constants';
import Marquee from 'react-fast-marquee';
import { getBirthdayDate } from '@drgato/util';
import confetti from 'canvas-confetti';

export default function BDayCard() {
  const bdayDate = getBirthdayDate();

  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (!completed) {
      const pHours = hours < 10 ? `0${hours}` : hours;
      const pMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const pSeconds = seconds < 10 ? `0${seconds}` : seconds;

      return (
        <>
          <h3>🎂 🥳</h3>
          <span className={'text-md'} suppressHydrationWarning>
            Faltan{' '}
            <span className={'font-bold'}>
              {days > 7
                ? `${days} días`
                : days >= 1
                ? `${days} días`
                : `${pHours}:${pMinutes}:${pSeconds}`}
            </span>
          </span>
          <span className={'text-xs mt-2'}>¡Agregar a tu calendario!</span>
        </>
      );
    } else
      return (
        <>
          <Marquee>
            <span className={'mx-2 font-bold'}>¡Hoy es mi cumpleaños! 🎉</span>
          </Marquee>
        </>
      );
  };

  return (
    <button
      onClick={() => {
        if (bdayDate.getTime() - new Date().getTime() < 0) {
          confetti({
            particleCount: 100,
            spread: 100,
            origin: { y: 0.6 }
          });
        } else {
          window.open(BDAY_EVENT_LINK, '_blank', 'noopener noreferrer');
        }
      }}
      className={
        'card card-interactive group flex justify-between text-center flex-col rounded-xl p-3 overflow-hidden'
      }
    >
      <Countdown date={bdayDate} renderer={renderer} />
    </button>
  );
}
