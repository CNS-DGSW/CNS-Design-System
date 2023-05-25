var y=Object.defineProperty;var l=(e,n)=>y(e,"name",{value:n,configurable:!0});import{s as h,C as r,j as a,l as b}from"./index-8989420b.js";import"./index-104fde4c.js";import"./iframe-8d273d91.js";import"./index-3a9c37d7.js";const g=h.button`
    ${({size:e})=>e&&f[e]}
    ${({color:e})=>e&&x[e]};
    border: ${({border:e,theme:{colors:n}})=>e?`${e}px solid ${n.blue400}`:"none"};
    border-radius: ${({radius:e})=>e?`${e}px`:"0px"};
    box-shadow: ${({shadow:e})=>e&&"0px 4px 30px rgba(0, 0, 0, 0.25); border-radius: 30px;"};

    &:hover {
        ${({hover:e})=>e&&`background: ${e}`}
    }
    cursor: ${({disable:e})=>e===!0?"not-allowed":"pointer"};
`,f={xs:r`
        width: 32px;
        height: 32px;
        font-size: 14px;
    `,sm:r`
        width: 78px;
        height: 48px;
    `,md:r`
        width: 240px;
        height: 58px;
    `,lg:r`
        width: 288px;
        height: 58px;
    `},x={blue400:r`
        background-color: ${({theme:{colors:e}})=>e.blue400};
        color: ${({theme:{colors:e}})=>e.white};
    `,white:r`
        background-color: ${({theme:{colors:e}})=>e.white};
        color: ${({theme:{colors:e}})=>e.blue400};
    `,gray400:r`
        background-color: ${({theme:{colors:e}})=>e.white};
        color: ${({theme:{colors:e}})=>e.gray400};
        border: ${({theme:{colors:e}})=>`1px solid ${e.gray400} !important`};
    `},o=l(({size:e="md",color:n="blue400",clickEvent:s,hover:d,border:c,radius:u,disable:i,shadow:m,children:p})=>a.jsx(g,{size:e,color:n,hover:d,border:c,onClick:i?void 0:s,radius:u,shadow:m,disable:i,children:p}),"Button");try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},color:{defaultValue:{value:"blue400"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"blue400"'},{value:'"gray400"'},{value:'"white"'}]}},clickEvent:{defaultValue:null,description:"",name:"clickEvent",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:"string | null"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"string | null"}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:'number | "circle"'}},disable:{defaultValue:null,description:"",name:"disable",required:!1,type:{name:"boolean"}},shadow:{defaultValue:null,description:"",name:"shadow",required:!1,type:{name:"boolean"}}}}}catch{}const C={parameters:{storySource:{source:`import React from 'react';\r
import { ComponentStory, ComponentMeta } from '@storybook/react';\r
import { Button } from './Button';\r
import { CNSThemeProvider } from '@dgswcns/react-styled-theme';\r
\r
export default {\r
    title: 'components/Button',\r
    component: Button,\r
    argTypes: {\r
        color: {\r
            options: ['blue400', 'white', 'gray400'],\r
            control: { type: 'radio' },\r
        },\r
        size: {\r
            options: ['xs', 'sm', 'md', 'lg'],\r
            control: { type: 'radio' },\r
        },\r
        children: {\r
            type: 'string',\r
        },\r
        clickEvent: {\r
            type: 'function',\r
        },\r
        hover: {\r
            type: 'string',\r
        },\r
        border: {\r
            type: 'string',\r
        },\r
        radius: {\r
            defaultValue: 0,\r
            type: 'number',\r
        },\r
        disable: {\r
            defaultValue: false,\r
            type: 'boolean',\r
        },\r
        shadow: {\r
            defaultValue: false,\r
            type: 'boolean',\r
        },\r
    },\r
} as ComponentMeta<typeof Button>;\r
\r
const Template: ComponentStory<typeof Button> = (args) => (\r
    <CNSThemeProvider theme="LIGHT">\r
        <Button {...args} />\r
    </CNSThemeProvider>\r
);\r
\r
export const Primary = Template.bind({});\r
Primary.args = {\r
    size: 'sm',\r
    color: 'blue400',\r
    children: '버튼',\r
};\r
\r
export const Small = Template.bind({});\r
Small.args = {\r
    size: 'sm',\r
    color: 'blue400',\r
    children: '버튼',\r
};\r
\r
export const Medium = Template.bind({});\r
Medium.args = {\r
    size: 'md',\r
    color: 'blue400',\r
    children: '버튼',\r
};\r
\r
export const Large = Template.bind({});\r
Large.args = {\r
    size: 'lg',\r
    color: 'blue400',\r
    children: '버튼',\r
};\r
`,locationsMap:{primary:{startLoc:{col:48,line:45},endLoc:{col:1,line:49},startBody:{col:48,line:45},endBody:{col:1,line:49}},small:{startLoc:{col:48,line:45},endLoc:{col:1,line:49},startBody:{col:48,line:45},endBody:{col:1,line:49}},medium:{startLoc:{col:48,line:45},endLoc:{col:1,line:49},startBody:{col:48,line:45},endBody:{col:1,line:49}},large:{startLoc:{col:48,line:45},endLoc:{col:1,line:49},startBody:{col:48,line:45},endBody:{col:1,line:49}}}}},title:"components/Button",component:o,argTypes:{color:{options:["blue400","white","gray400"],control:{type:"radio"}},size:{options:["xs","sm","md","lg"],control:{type:"radio"}},children:{type:"string"},clickEvent:{type:"function"},hover:{type:"string"},border:{type:"string"},radius:{defaultValue:0,type:"number"},disable:{defaultValue:!1,type:"boolean"},shadow:{defaultValue:!1,type:"boolean"}}},t=l(e=>a.jsx(b,{theme:"LIGHT",children:a.jsx(o,{...e})}),"Template"),v=t.bind({});v.args={size:"sm",color:"blue400",children:"버튼"};const B=t.bind({});B.args={size:"sm",color:"blue400",children:"버튼"};const $=t.bind({});$.args={size:"md",color:"blue400",children:"버튼"};const w=t.bind({});w.args={size:"lg",color:"blue400",children:"버튼"};const _=["Primary","Small","Medium","Large"];export{w as Large,$ as Medium,v as Primary,B as Small,_ as __namedExportsOrder,C as default};
//# sourceMappingURL=Button.stories-5b743400.js.map
