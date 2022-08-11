import { themeDark } from './colors/dark';
import { themeLight } from './colors/light';

export const getStorageTheme = (valueTheme: string | null | undefined) => {
  if (typeof window !== 'undefined') {
    const themeValue = window.localStorage.getItem('THEME') == 'light';
  }

  const theme = valueTheme == 'dark' ? true : false;

  const defaultTheme = {
    title: 'theme',
    backgroundColor: theme
      ? themeDark.colors.background
      : themeLight.colors.background,
    containerColor: theme
      ? themeDark.colors.container
      : themeLight.colors.container,
    titleColor: theme ? themeDark.colors.primary : themeLight.colors.primary,
    textColor: theme ? themeDark.colors.textLight : themeLight.colors.textLight,
    font: theme ? themeDark.fonts[0] : themeLight.fonts[0],
    fontTitle: theme ? themeDark.fontSizes.large : themeLight.fontSizes.large,
    fontText: theme ? themeDark.fontSizes.small : themeLight.fontSizes.small,
  };

  return defaultTheme;
};
