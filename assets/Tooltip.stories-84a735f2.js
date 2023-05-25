var s=Object.defineProperty;var i=(t,n)=>s(t,"name",{value:n,configurable:!0});import{s as a,C as o,j as e,l as p}from"./index-8989420b.js";import"./index-104fde4c.js";import"./iframe-8d273d91.js";import"./index-3a9c37d7.js";const m=a.span`
    position: relative;
    & > span {
        visibility: hidden;
    }
    :hover {
        & > span {
            visibility: visible;
        }
    }
`,c=a.span`
    position: absolute;
    padding: 5px;
    background-color: ${({theme:{colors:t}})=>t.gray600};
    border-radius: 8px;
    font-size: 10px;
    color: ${({theme:{colors:t}})=>t.white};
    ${({direction:t})=>d[t]};
`,d={bottom:o`
        top: 100%;
        left: 50%;
        transform: translate(-50%, 70%);
    `,left:o`
        top: 50%;
        right: 100%;
        transform: translate(0%, -50%);
    `,right:o`
        top: 50%;
        left: 100%;
        transform: translate(0%, -50%);
    `,top:o`
        bottom: 100%;
        left: 50%;
        transform: translate(-50%, -70%);
    `},r=i(({direction:t="bottom",title:n,children:l})=>e.jsxs(m,{children:[e.jsx(c,{direction:t,children:n}),l]}),"Tooltip");try{r.displayName="Tooltip",r.__docgenInfo={description:"",displayName:"Tooltip",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},direction:{defaultValue:{value:"bottom"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"top"'},{value:'"bottom"'},{value:'"right"'}]}}}}}catch{}const v={parameters:{storySource:{source:`import React from 'react';\r
import { ComponentStory, ComponentMeta } from '@storybook/react';\r
\r
import { Tooltip } from './Tooltip';\r
import { CNSThemeProvider } from '@dgswcns/react-styled-theme';\r
\r
export default {\r
    title: 'components/Tooltip',\r
    component: Tooltip,\r
    argTypes: {},\r
} as ComponentMeta<typeof Tooltip>;\r
\r
const Template: ComponentStory<typeof Tooltip> = (args) => (\r
    <CNSThemeProvider theme="LIGHT">\r
        <Tooltip {...args} />\r
    </CNSThemeProvider>\r
);\r
\r
export const Primary = Template.bind({});\r
Primary.args = {\r
    title: 'tooltip',\r
    children: 'button',\r
    direction: 'bottom',\r
};\r
`,locationsMap:{primary:{startLoc:{col:49,line:13},endLoc:{col:1,line:17},startBody:{col:49,line:13},endBody:{col:1,line:17}}}}},title:"components/Tooltip",component:r,argTypes:{}},u=i(t=>e.jsx(p,{theme:"LIGHT",children:e.jsx(r,{...t})}),"Template"),y=u.bind({});y.args={title:"tooltip",children:"button",direction:"bottom"};const x=["Primary"];export{y as Primary,x as __namedExportsOrder,v as default};
//# sourceMappingURL=Tooltip.stories-84a735f2.js.map
