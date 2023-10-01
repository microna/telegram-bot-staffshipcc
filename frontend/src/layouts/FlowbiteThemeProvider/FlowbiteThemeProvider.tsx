import { useEffect, FC, PropsWithChildren } from 'react';
import { Flowbite, useThemeMode } from 'flowbite-react';
import theme from './theme';

export const FlowbiteThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const dark = localStorage.getItem('theme') === 'dark';

  return (
    <Flowbite theme={{ dark, theme }}>
      <PersistFlowbiteThemeToLocalStorage />
      {children}
    </Flowbite>
  );
};

const PersistFlowbiteThemeToLocalStorage: FC = () => {
  const [themeMode] = useThemeMode();

  useEffect(() => {
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  return null;
};
