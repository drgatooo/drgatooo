import { THEMES } from '@drgato/util/constants';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme();
  const [loadedTheme, setLoadedTheme] = useState('Cargando...');

  useEffect(() => {
    setTimeout(() => setLoadedTheme((resolvedTheme as string) || 'coffee'), 50);
  }, [resolvedTheme]);

  const nextColorMode = () => {
    const newTheme =
      THEMES[(THEMES.findIndex(t => t.className === loadedTheme) + 1) % THEMES.length];
    setTheme(newTheme.className);
  };

  return { colorMode: loadedTheme, nextColorMode };
}
