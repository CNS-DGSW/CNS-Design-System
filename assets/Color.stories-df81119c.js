var O=Object.defineProperty;var a=(e,t)=>O(e,"name",{value:t,configurable:!0});import{R as c}from"./index-104fde4c.js";import{A as C,C as h,M as x}from"./Props-aa0f843e.js";import"./iframe-8d273d91.js";import{h as l}from"./index-3a9c37d7.js";import"./string-46568c3f.js";import"./es.map.constructor-bd845ce0.js";import"./es.number.to-fixed-e24f2a99.js";function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}a(P,"_defineProperty");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}a(d,"ownKeys");function f(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?d(Object(r),!0).forEach(function(n){P(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}a(f,"_objectSpread2");function w(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}a(w,"_objectWithoutPropertiesLoose");function D(e,t){if(e==null)return{};var r=w(e,t),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}a(D,"_objectWithoutProperties");var j=a(function(t){return typeof t=="function"},"isFunction"),k=c.createContext({}),E=a(function(t){var r=c.useContext(k),n=r;return t&&(n=j(t)?t(r):f(f({},r),t)),n},"useMDXComponents"),_="mdxType",M={inlineCode:"code",wrapper:a(function(t){var r=t.children;return c.createElement(c.Fragment,{},r)},"wrapper")},b=c.forwardRef(function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=D(e,["components","mdxType","originalType","parentName"]),s=E(r),p=n,T=s["".concat(i,".").concat(p)]||s[p]||M[p]||o;return r?c.createElement(T,f(f({ref:t},u),{},{components:r})):c.createElement(T,f({ref:t},u))});b.displayName="MDXCreateElement";function m(e,t){var r=arguments,n=t&&t.mdxType;if(typeof e=="string"||n){var o=r.length,i=new Array(o);i[0]=b;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[_]=typeof e=="string"?e:n,i[1]=u;for(var p=2;p<o;p++)i[p]=r[p];return c.createElement.apply(null,i)}return c.createElement.apply(null,r)}a(m,"createElement");function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},g.apply(this,arguments)}a(g,"_extends");const S=a(e=>a(function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),m("div",r)},"MDXDefaultShortcode"),"makeShortcode"),N=S("ColorPallete"),X={},I="wrapper";function v({components:e,...t}){return m(I,g({},X,t,{components:e,mdxType:"MDXLayout"}),m(x,{title:"DESIGN TOKEN/Colors",mdxType:"Meta"}),m("h1",null,"Colors"),m("br",null),m("h3",null,"Light Theme"),m("h4",null,"PrimaryColor"),m(N,{mdxType:"ColorPallete"},m(h,{title:"black",subtitle:"Black",colors:{black:l.lightThemeToken.black},mdxType:"ColorItem"}),m(h,{title:"white",subtitle:"White",colors:{white:l.lightThemeToken.white},mdxType:"ColorItem"}),m(h,{title:"blue",subtitle:"Blue",colors:{100:l.lightThemeToken.blue100,300:l.lightThemeToken.blue300,400:l.lightThemeToken.blue400,900:l.lightThemeToken.blue900},mdxType:"ColorItem"}),m(h,{title:"gray",subtitle:"Gray",colors:{100:l.lightThemeToken.gray100,200:l.lightThemeToken.gray200,300:l.lightThemeToken.gray300,400:l.lightThemeToken.gray400,500:l.lightThemeToken.gray500,600:l.lightThemeToken.gray600,700:l.lightThemeToken.gray700,800:l.lightThemeToken.gray800,900:l.lightThemeToken.gray900},mdxType:"ColorItem"})))}a(v,"MDXContent");v.isMDXComponent=!0;const K=a(()=>{throw new Error("Docs-only story")},"__page");K.parameters={docsOnly:!0};const y={title:"DESIGN TOKEN/Colors",tags:["stories-mdx"],includeStories:["__page"]},F={};y.parameters=y.parameters||{};y.parameters.docs={...y.parameters.docs||{},page:()=>m(C,{mdxStoryNameToKey:F,mdxComponentAnnotations:y},m(v,null))};const z=["__page"];export{z as __namedExportsOrder,K as __page,y as default};
//# sourceMappingURL=Color.stories-df81119c.js.map
