import { THEMES } from '@drgato/util/constants';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function useColorMode() {
  const { theme, setTheme } = useTheme();
  const [loadedTheme, setLoadedTheme] = useState<string>();

  useEffect(() => {
    setTimeout(() => {
      setLoadedTheme(theme ?? 'coffee');
    }, 50);
  }, [theme]);

  const nextColorMode = () => {
    const newTheme =
      THEMES[(THEMES.findIndex(t => t.className === loadedTheme) + 1) % THEMES.length];
    console.log(newTheme);
    setTheme(newTheme.className);
  };

  return { colorMode: loadedTheme, nextColorMode };
}
