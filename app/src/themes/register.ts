import type { Theme } from '@d11f/themes';
import { useThemeStore } from '@d11f/themes';

export const registerThemes = (themes: Theme[]) => {
	const themesStore = useThemeStore();
	themes.forEach((theme) => themesStore.registerTheme(theme));
};
