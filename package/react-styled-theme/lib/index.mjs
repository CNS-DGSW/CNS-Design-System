<<<<<<< HEAD
import t,{useMemo as o}from"react";import{ThemeProvider as h}from"styled-components";import{color as i}from"@dgswcns/design-token";import{useCNSThemeing as n}from"@dgswcns/react-theming";var k=({theme:e,children:r})=>{let m=o(()=>({LIGHT:"lightThemeToken",DARK:"darkThemeToken"}),[]),T=o(()=>({colors:i[m[n(e)]],fonts:{}}),[e]);return t.createElement(h,{theme:T},r)};export{k as CNSThemeProvider};
=======
import T,{useMemo as o}from"react";import{ThemeProvider as h}from"styled-components";import*as i from"@dgswcns/design-token";import{useCNSThemeing as n}from"@dgswcns/react-theming";var k=({theme:e,children:r})=>{let m=o(()=>({LIGHT:"lightThemeToken",DARK:"darkThemeToken"}),[]),t=o(()=>i[m[n(e)]],[e]);return T.createElement(h,{theme:t},r)};export{k as CNSThemeProvider};
>>>>>>> 5ba20bbff4d0e2e6c5eec10c21a70b1c4d9a6cbd
