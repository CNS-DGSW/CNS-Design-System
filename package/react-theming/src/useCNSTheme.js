export const useCNSThemeing = (theme) => {
    if (theme === undefined) {
        const isLightOsTheme = window.matchMedia('(prefers-color-scheme: light)');
        return isLightOsTheme ? 'LIGHT' : 'DARK';
    }
    return theme;
};
