import confetti from 'canvas-confetti';

export function constructClassName(...classNames: string[]): string {
  return classNames.join(' ').trim();
}

export function getBirthdayDate(): Date {
  const day = 18;
  const month = 9 - 1;

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  if (currentMonth > month || (currentMonth === month && currentDay > day)) {
    return new Date(today.getFullYear() + 1, month, day);
  }

  return new Date(today.getFullYear(), month, day);
}

export function isTenPower(n: number): boolean {
  return Math.log10(n) % 1 === 0;
}

export function randomFireworks(duration: number = 15) {
  const durationMs = duration * 1000;
  const animationEnd = Date.now() + durationMs;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval: NodeJS.Timeout = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / durationMs);
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
    });
  }, 250);
}
