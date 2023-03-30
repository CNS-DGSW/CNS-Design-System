"use strict";var i=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var d=(r,o)=>{for(var a in o)i(r,a,{get:o[a],enumerable:!0})},E=(r,o,a,p)=>{if(o&&typeof o=="object"||typeof o=="function")for(let t of f(o))!l.call(r,t)&&t!==a&&i(r,t,{get:()=>o[t],enumerable:!(p=s(o,t))||p.enumerable});return r};var b=r=>E(i({},"__esModule",{value:!0}),r);var c={};d(c,{color:()=>y,fonts:()=>n});module.exports=b(c);var n={};d(n,{fontToken:()=>h});var e=require("styled-components"),h={h1:e.css`
        font-size: 200px;
        @media screen and (max-width: 1600px) {
        }
    `,h2:e.css`
        font-size: 60px;
        @media screen and (max-width: 1600px) {
        }
    `,h3:e.css`
        font-size: 46px;
        @media screen and (max-width: 1600px) {
        }
    `,h4:e.css`
        font-size: 34px;
        @media screen and (max-width: 1600px) {
        }
    `,h5:e.css`
        font-size: 32px;
        @media screen and (max-width: 1600px) {
        }
    `,subtitle1:e.css`
        font-size: 28px;
        @media screen and (max-width: 1600px) {
        }
    `,subtitle2:e.css`
        font-size: 24px;
        @media screen and (max-width: 1600px) {
        }
    `,subtitle3:e.css`
        font-size: 22px;
        @media screen and (max-width: 1600px) {
        }
    `,subtitle4:e.css`
        font-size: 20px;
        @media screen and (max-width: 1600px) {
        }
    `,p1:e.css`
        font-size: 18px;
        @media screen and (max-width: 1600px) {
        }
    `,p2:e.css`
        font-size: 16px;
        @media screen and (max-width: 1600px) {
        }
    `,p3:e.css`
        font-size: 14px;
        @media screen and (max-width: 1600px) {
        }
    `,p4:e.css`
        font-size: 12px;
        @media screen and (max-width: 1600px) {
        }
    `,extrabold:900,bold:700,medium:400,semibold:300};var m=Object.freeze({white:"#ffffff",black:"#000000",blue100:"#F8FAFD",blue200:"",blue300:"#8EC9FF",blue400:"#1485EE",blue500:"",blue600:"",blue700:"",blue800:"",blue900:"#1E2F44",gray100:"#FAFAFA",gray200:"#F5F5F5",gray300:"#EEEEEE",gray400:"#E0E0E0",gray500:"#BDBDBD",gray600:"#9E9E9E",gray700:"#757575",gray800:"#424344",gray900:"#212121"}),x=Object.freeze({white:"#fffff",black:"#000000",blue100:"#F8FAFD",blue200:"",blue300:"",blue400:"#1485EE",blue500:"",blue600:"",blue700:"",blue800:"",blue900:"#1E2F44",gray100:"#FAFAFA",gray200:"#F5F5F5",gray300:"#EEEEEE",gray400:"#E0E0E0",gray500:"#BDBDBD",gray600:"#9E9E9E",gray700:"#757575",gray800:"#424344",gray900:"#212121"});var y={darkThemeToken:x,lightThemeToken:m};0&&(module.exports={color,fonts});
