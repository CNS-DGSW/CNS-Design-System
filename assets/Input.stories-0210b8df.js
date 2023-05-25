var d=Object.defineProperty;var a=(e,o)=>d(e,"name",{value:o,configurable:!0});import{s as u,C as n,j as i,l as m}from"./index-8989420b.js";import"./index-104fde4c.js";import"./iframe-8d273d91.js";import"./index-3a9c37d7.js";const c=u.input`
    ${({inputSize:e})=>e&&y[e]}
    border-radius:${({radius:e})=>`${e}px;`}
    box-sizing:border-box;
    height: 48px;
    border: 1px solid #d8dae0;
    padding: 15px;
    &:disabled {
        background: #f2f3f5;
    }
`,y={xs:n`
        width: 150px;
    `,sm:n`
        width: 224px;
    `,md:n`
        width: 310px;
    `,lg:n`
        width: 650px;
    `},r=a(({disable:e,radius:o=8,inputSize:l="md",type:s,value:p})=>i.jsx(c,{inputSize:l,disabled:e,radius:o,type:s,value:p}),"Input");try{r.displayName="Input",r.__docgenInfo={description:"",displayName:"Input",props:{inputSize:{defaultValue:{value:"md"},description:"",name:"inputSize",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},radius:{defaultValue:{value:"8"},description:"",name:"radius",required:!1,type:{name:"number"}},disable:{defaultValue:null,description:"",name:"disable",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"HTMLInputTypeAttribute"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}}}catch{}const v={parameters:{storySource:{source:`import { CNSThemeProvider } from '@dgswcns/react-styled-theme';\r
import { ComponentMeta, ComponentStory } from '@storybook/react';\r
import React from 'react';\r
import { Input } from './Input';\r
\r
export default {\r
    title: 'components/Input',\r
    component: Input,\r
    argTypes: {\r
        inputSize: {\r
            options: ['xs', 'sm', 'md', 'lg'],\r
            control: { type: 'radio' },\r
        },\r
        value: {\r
            type: 'string',\r
        },\r
        type: {\r
            type: 'string',\r
        },\r
        disable: {\r
            defaultValue: false,\r
            type: 'boolean',\r
        },\r
        radius: {\r
            defaultValue: 8,\r
            type: 'number',\r
        },\r
    },\r
} as ComponentMeta<typeof Input>;\r
\r
const Template: ComponentStory<typeof Input> = (args) => (\r
    <CNSThemeProvider theme="LIGHT">\r
        <Input {...args} />\r
    </CNSThemeProvider>\r
);\r
\r
export const Primary = Template.bind({});\r
Primary.args = {\r
    inputSize: 'sm',\r
};\r
\r
export const Small = Template.bind({});\r
Small.args = {\r
    inputSize: 'sm',\r
};\r
\r
export const Medium = Template.bind({});\r
Medium.args = {\r
    inputSize: 'md',\r
};\r
\r
export const Large = Template.bind({});\r
Large.args = {\r
    inputSize: 'lg',\r
};\r
`,locationsMap:{primary:{startLoc:{col:47,line:31},endLoc:{col:1,line:35},startBody:{col:47,line:31},endBody:{col:1,line:35}},small:{startLoc:{col:47,line:31},endLoc:{col:1,line:35},startBody:{col:47,line:31},endBody:{col:1,line:35}},medium:{startLoc:{col:47,line:31},endLoc:{col:1,line:35},startBody:{col:47,line:31},endBody:{col:1,line:35}},large:{startLoc:{col:47,line:31},endLoc:{col:1,line:35},startBody:{col:47,line:31},endBody:{col:1,line:35}}}}},title:"components/Input",component:r,argTypes:{inputSize:{options:["xs","sm","md","lg"],control:{type:"radio"}},value:{type:"string"},type:{type:"string"},disable:{defaultValue:!1,type:"boolean"},radius:{defaultValue:8,type:"number"}}},t=a(e=>i.jsx(m,{theme:"LIGHT",children:i.jsx(r,{...e})}),"Template"),g=t.bind({});g.args={inputSize:"sm"};const f=t.bind({});f.args={inputSize:"sm"};const b=t.bind({});b.args={inputSize:"md"};const x=t.bind({});x.args={inputSize:"lg"};const z=["Primary","Small","Medium","Large"];export{x as Large,b as Medium,g as Primary,f as Small,z as __namedExportsOrder,v as default};
//# sourceMappingURL=Input.stories-0210b8df.js.map
