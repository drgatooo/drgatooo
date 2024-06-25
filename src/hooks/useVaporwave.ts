import { useEffect, useState } from 'react';

export function useVaporwave() {
  const [audio, setAudio] = useState<HTMLAudioElement>();

  useEffect(() => {
    const initialAudio = document.createElement('audio');
    initialAudio.src = '/macintoshplus.mp3';

    setAudio(initialAudio);
  }, []);

  const toggleAudio = () => {
    if (!audio) return void 0;

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return { toggleAudio, audio };
}
