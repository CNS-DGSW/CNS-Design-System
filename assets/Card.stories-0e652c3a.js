var p=Object.defineProperty;var a=(e,l)=>p(e,"name",{value:l,configurable:!0});import{s as b,C as r,j as t,l as y}from"./index-8989420b.js";import"./index-104fde4c.js";import"./iframe-8d273d91.js";import"./index-3a9c37d7.js";const g=b.div`
    ${({size:e})=>e&&C[e]}
    ${({backgroundColor:e})=>e&&h[e]};
    border-radius: ${({radius:e})=>e?"15px":"0px"};
    box-shadow: ${({shadow:e})=>e&&"0px 4px 30px rgba(0, 0, 0, 0.25); "};

    &:hover {
        ${({hover:e})=>e&&`background: ${e}`}
    }
`,C={sm:r`
        width: 432px;
    `,md:r`
        width: 318px;
    `,lg:r`
        width: 1000px;
    `},h={blue300:r`
        background-color: ${({theme:{colors:e}})=>e.blue300};
    `,blue400:r`
        background-color: ${({theme:{colors:e}})=>e.blue400};
    `,blue900:r`
        background-color: ${({theme:{colors:e}})=>e.blue900};
    `,gray200:r`
        background-color: ${({theme:{colors:e}})=>e.white};
    `},n=a(({size:e="md",backgroundColor:l="gray200",clickEvent:d,hover:i,radius:s,shadow:c,children:u,style:m})=>t.jsx(g,{size:e,backgroundColor:l,hover:i,onClick:d,radius:s,shadow:c,style:m,children:u}),"Card");try{n.displayName="Card",n.__docgenInfo={description:"",displayName:"Card",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},backgroundColor:{defaultValue:{value:"gray200"},description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"blue400"'},{value:'"blue300"'},{value:'"blue900"'},{value:'"gray200"'}]}},clickEvent:{defaultValue:null,description:"",name:"clickEvent",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:"string | null"}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:"boolean"}},shadow:{defaultValue:null,description:"",name:"shadow",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSObject"}}}}}catch{}const _={parameters:{storySource:{source:`import React from 'react';\r
import { ComponentStory, ComponentMeta } from '@storybook/react';\r
import { Card } from './Card';\r
import { CNSThemeProvider } from '@dgswcns/react-styled-theme';\r
\r
export default {\r
    title: 'components/Card',\r
    component: Card,\r
    argTypes: {\r
        backgroundColor: {\r
            options: ['blue300', 'blue400', 'blue900', 'gray200'],\r
            control: { type: 'radio' },\r
        },\r
        size: {\r
            options: ['sm', 'md', 'lg'],\r
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
        radius: {\r
            defaultValue: false,\r
            type: 'boolean',\r
        },\r
        shadow: {\r
            defaultValue: false,\r
            type: 'boolean',\r
        },\r
    },\r
} as ComponentMeta<typeof Card>;\r
\r
const Template: ComponentStory<typeof Card> = (args) => (\r
    <CNSThemeProvider theme="LIGHT">\r
        <Card {...args} />\r
    </CNSThemeProvider>\r
);\r
\r
export const Primary = Template.bind({});\r
Primary.args = {\r
    size: 'sm',\r
    backgroundColor: 'blue400',\r
    children: 'Card',\r
};\r
\r
export const Small = Template.bind({});\r
Small.args = {\r
    size: 'sm',\r
    backgroundColor: 'blue400',\r
    children: 'Card',\r
};\r
\r
export const Medium = Template.bind({});\r
Medium.args = {\r
    size: 'md',\r
    backgroundColor: 'blue400',\r
    children: 'Card',\r
};\r
\r
export const Large = Template.bind({});\r
Large.args = {\r
    size: 'lg',\r
    backgroundColor: 'blue400',\r
    children: 'Card',\r
};\r
`,locationsMap:{primary:{startLoc:{col:46,line:38},endLoc:{col:1,line:42},startBody:{col:46,line:38},endBody:{col:1,line:42}},small:{startLoc:{col:46,line:38},endLoc:{col:1,line:42},startBody:{col:46,line:38},endBody:{col:1,line:42}},medium:{startLoc:{col:46,line:38},endLoc:{col:1,line:42},startBody:{col:46,line:38},endBody:{col:1,line:42}},large:{startLoc:{col:46,line:38},endLoc:{col:1,line:42},startBody:{col:46,line:38},endBody:{col:1,line:42}}}}},title:"components/Card",component:n,argTypes:{backgroundColor:{options:["blue300","blue400","blue900","gray200"],control:{type:"radio"}},size:{options:["sm","md","lg"],control:{type:"radio"}},children:{type:"string"},clickEvent:{type:"function"},hover:{type:"string"},radius:{defaultValue:!1,type:"boolean"},shadow:{defaultValue:!1,type:"boolean"}}},o=a(e=>t.jsx(y,{theme:"LIGHT",children:t.jsx(n,{...e})}),"Template"),f=o.bind({});f.args={size:"sm",backgroundColor:"blue400",children:"Card"};const v=o.bind({});v.args={size:"sm",backgroundColor:"blue400",children:"Card"};const k=o.bind({});k.args={size:"md",backgroundColor:"blue400",children:"Card"};const x=o.bind({});x.args={size:"lg",backgroundColor:"blue400",children:"Card"};const w=["Primary","Small","Medium","Large"];export{x as Large,k as Medium,f as Primary,v as Small,w as __namedExportsOrder,_ as default};
//# sourceMappingURL=Card.stories-0e652c3a.js.map
