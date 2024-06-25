import { THEMES } from '@drgato/util/constants';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function useColorMode() {
  const { theme, setTheme } = useTheme();
  const [loadedTheme, setLoadedTheme] = useState<string>();

  useEffect(() => {
    setTimeout(() => {
      setLoadedTheme(theme ?? 'coffee');

      if (loadedTheme && !THEMES.map(t => t.className).includes(loadedTheme)) {
        console.log(loadedTheme);
        setTheme('coffee');
      }
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  const nextColorMode = () => {
    const newTheme =
      THEMES[(THEMES.findIndex(t => t.className === loadedTheme) + 1) % THEMES.length];
    console.log(newTheme);
    setTheme(newTheme.className);
  };

  return { colorMode: loadedTheme, nextColorMode };
}
