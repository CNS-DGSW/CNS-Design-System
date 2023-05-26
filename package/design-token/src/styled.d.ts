import "styled-components"
import { ColorsThemeType } from "./colors/types"
import { FontThemeType } from "./fonts/types"

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: ColorsThemeType;
        fonts: FontThemeType
    }
}