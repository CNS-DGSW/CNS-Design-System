export type ThemeType = "LIGHT" | "DARK";

export const useCNSThemeing = (theme: ThemeType | undefined): ThemeType => {
    if(theme===undefined){
        const isLightOsTheme = window.matchMedia('(prefers-color-scheme: light)')
        return isLightOsTheme ? 'LIGHT' : 'DARK';
    }
    return theme;
};
