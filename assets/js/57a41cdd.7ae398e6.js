"use strict";(self.webpackChunkhel_doc=self.webpackChunkhel_doc||[]).push([[4973],{8570:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(79);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=p,k=d["".concat(l,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:p,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(2203),p=(n(79),n(8570));const r={sidebar_position:4},i="\u6a21\u5757\u53d1\u5e03",o={unversionedId:"tutorial/helmod-pub",id:"tutorial/helmod-pub",title:"\u6a21\u5757\u53d1\u5e03",description:"js \u5e93\u3001react \u7ec4\u4ef6\u3001vue \u7ec4\u4ef6\u7b49\u53d1\u5e03\u6d41\u7a0b\u5747\u4e00\u6837\uff0c\u5dee\u5f02\u5728\u4e8esubApp.js\u6587\u4ef6\u7684\u4f4d\u7f6e\u4e0d\u540c\uff0cjs \u5e93\u3001react \u7ec4\u4ef6\u7684subApp.js\u6587\u4ef6\u5728/configs\u76ee\u5f55\u4e0b\uff0cjs \u5e93\u3001vue \u7ec4\u4ef6\u7684subApp.js\u6587\u4ef6\u5728``\u76ee\u5f55\u4e0b",source:"@site/docs/tutorial/helmod-pub.md",sourceDirName:"tutorial",slug:"/tutorial/helmod-pub",permalink:"/hel/docs/tutorial/helmod-pub",editUrl:"https://github.com/tnfe/hel/doc/docs/tutorial/helmod-pub.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorial",previous:{title:"\u6a21\u5757\u5f00\u53d1-vue \u7ec4\u4ef6",permalink:"/hel/docs/tutorial/helmod-dev-vue"},next:{title:"\u5236\u4f5c lib \u6a21\u677f\u9879\u76ee",permalink:"/hel/docs/tutorial/\u5b9e\u6218/tpl-lib"}},l={},s=[{value:"\u53d1\u5e03\u5230 unpkg",id:"\u53d1\u5e03\u5230-unpkg",level:2},{value:"\u8c03\u6574 subApp \u6587\u4ef6",id:"\u8c03\u6574-subapp-\u6587\u4ef6",level:3},{value:"\u8c03\u6574\u7248\u672c\u53f7",id:"\u8c03\u6574\u7248\u672c\u53f7",level:3},{value:"\u6267\u884c\u63a8\u9001\u547d\u4ee4",id:"\u6267\u884c\u63a8\u9001\u547d\u4ee4",level:3},{value:"sdk \u83b7\u53d6\u8be5\u7248\u672c\u4ee3\u7801",id:"sdk-\u83b7\u53d6\u8be5\u7248\u672c\u4ee3\u7801",level:3},{value:"\u53d1\u5e03\u5230\u81ea\u5b9a\u4e49\u6587\u4ef6\u670d\u52a1",id:"\u53d1\u5e03\u5230\u81ea\u5b9a\u4e49\u6587\u4ef6\u670d\u52a1",level:2},{value:"\u8c03\u6574 subApp \u6587\u4ef6",id:"\u8c03\u6574-subapp-\u6587\u4ef6-1",level:3},{value:"\u751f\u6210\u8fd0\u884c\u4ee3\u7801",id:"\u751f\u6210\u8fd0\u884c\u4ee3\u7801",level:3},{value:"\u63a8\u9001\u8fd0\u884c\u4ee3\u7801\u5230\u6587\u4ef6\u670d\u52a1",id:"\u63a8\u9001\u8fd0\u884c\u4ee3\u7801\u5230\u6587\u4ef6\u670d\u52a1",level:3}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"\u6a21\u5757\u53d1\u5e03"},"\u6a21\u5757\u53d1\u5e03"),(0,p.kt)("p",null,"js \u5e93\u3001react \u7ec4\u4ef6\u3001vue \u7ec4\u4ef6\u7b49\u53d1\u5e03\u6d41\u7a0b\u5747\u4e00\u6837\uff0c\u5dee\u5f02\u5728\u4e8e",(0,p.kt)("inlineCode",{parentName:"p"},"subApp.js"),"\u6587\u4ef6\u7684\u4f4d\u7f6e\u4e0d\u540c\uff0cjs \u5e93\u3001react \u7ec4\u4ef6\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"subApp.js"),"\u6587\u4ef6\u5728",(0,p.kt)("inlineCode",{parentName:"p"},"<rootProject>/configs"),"\u76ee\u5f55\u4e0b\uff0cjs \u5e93\u3001vue \u7ec4\u4ef6\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"subApp.js"),"\u6587\u4ef6\u5728",(0,p.kt)("inlineCode",{parentName:"p"},"<rootProject>"),"\u76ee\u5f55\u4e0b"),(0,p.kt)("h2",{id:"\u53d1\u5e03\u5230-unpkg"},"\u53d1\u5e03\u5230 unpkg"),(0,p.kt)("h3",{id:"\u8c03\u6574-subapp-\u6587\u4ef6"},"\u8c03\u6574 subApp \u6587\u4ef6"),(0,p.kt)("p",null,"\u6253\u5f00\u8ddf\u76ee\u5f55",(0,p.kt)("inlineCode",{parentName:"p"},"subApp.js"),"\uff0c\u8c03\u6574\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff08\u9ed8\u8ba4\u662f\u6258\u7ba1\u5230 unpkg\uff09"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"const helDevUtils = require('hel-dev-utils');\nconst pkg = require('./package.json');\n\nconst subApp = helDevUtils.createVue2SubApp(pkg, { npmCdnType: 'unpkg' });\n\nmodule.exports = subApp;\n")),(0,p.kt)("h3",{id:"\u8c03\u6574\u7248\u672c\u53f7"},"\u8c03\u6574\u7248\u672c\u53f7"),(0,p.kt)("p",null,"\u8c03\u6574\u6a21\u5757\u7248\u672c\u53f7\uff0c\u5373",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),"\u91cc",(0,p.kt)("inlineCode",{parentName:"p"},"version"),"\u5b57\u6bb5\u503c"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'{\n  // \u7565 ...\n   // highlight-start\n  "version": "1.1.3",\n   // highlight-end\n}\n')),(0,p.kt)("h3",{id:"\u6267\u884c\u63a8\u9001\u547d\u4ee4"},"\u6267\u884c\u63a8\u9001\u547d\u4ee4"),(0,p.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u811a\u672c\u547d\u4ee4\uff0c\u65e2\u4f1a\u89e6\u53d1\u6e90\u7801\u53d1\u5e03\u5230",(0,p.kt)("inlineCode",{parentName:"p"},"npm"),"\uff0c\u4e5f\u4f1a\u89e6\u53d1\u8fd0\u884c\u65f6\u4ee3\u7801\u53d1\u5e03\u5230",(0,p.kt)("inlineCode",{parentName:"p"},"unpkg")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\nnpm publish\n")),(0,p.kt)("p",null,"\u53d1\u5e03\u540e",(0,p.kt)("inlineCode",{parentName:"p"},"unpkg"),"\u670d\u52a1\u53ef\u80fd\u4f1a\u6709\u5341\u51e0\u79d2\u7684\u751f\u6548\u5ef6\u8fdf\u65f6\u95f4\uff0c\u53ef\u5728\u6d4f\u89c8\u5668\u6309\u4ee5\u4e0b\u8bed\u6cd5\u683c\u5f0f\u8bbf\u95ee\u6700\u65b0\u7248\u672c\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"hel-meta"),"\u5143\u6570\u636e\u7248\u672c\u53f7\u662f\u5426\u548c",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),"\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"version"),"\u5b57\u6bb5\u4fdd\u6301\u4e00\u81f4\uff0c\u5982\u679c\u4e00\u81f4\u5373\u8868\u793a\u8fd0\u884c\u4ee3\u7801\u6587\u4ef6\u5df2\u6210\u529f\u5230",(0,p.kt)("inlineCode",{parentName:"p"},"unpkg")," cdn \u670d\u52a1"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"https://unpkg.com/<appGroupName>@latest/hel_dist/hel-meta.json\n")),(0,p.kt)("p",null,"\u4f8b\u5982 ",(0,p.kt)("a",{parentName:"p",href:"https://unpkg.com/hel-tpl-remote-vue-comps@latest/hel_dist/hel-meta.json"},"https://unpkg.com/hel-tpl-remote-vue-comps@latest/hel_dist/hel-meta.json")),(0,p.kt)("h3",{id:"sdk-\u83b7\u53d6\u8be5\u7248\u672c\u4ee3\u7801"},"sdk \u83b7\u53d6\u8be5\u7248\u672c\u4ee3\u7801"),(0,p.kt)("p",null,"\u6548\u679c\u89c1",(0,p.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/demo-load-remote-vue-comp-st0295?file=/src/main.js:0-577"},"\u7ebf\u4e0a\u793a\u4f8b")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"import { preFetchLib } from 'hel-micro';\n\nasync function main() {\n  await preFetchLib('hel-tpl-remote-vue-comps', '1.1.3');\n  // \u4e0d\u6307\u5b9a\u7248\u672c\uff0c\u9ed8\u8ba4\u83b7\u53d6 latest\n  // await preFetchLib(\"hel-tpl-remote-vue-comps\");\n  await import('./loadApp');\n}\n")),(0,p.kt)("h2",{id:"\u53d1\u5e03\u5230\u81ea\u5b9a\u4e49\u6587\u4ef6\u670d\u52a1"},"\u53d1\u5e03\u5230\u81ea\u5b9a\u4e49\u6587\u4ef6\u670d\u52a1"),(0,p.kt)("h3",{id:"\u8c03\u6574-subapp-\u6587\u4ef6-1"},"\u8c03\u6574 subApp \u6587\u4ef6"),(0,p.kt)("p",null,"\u6253\u5f00\u8ddf\u76ee\u5f55",(0,p.kt)("inlineCode",{parentName:"p"},"subApp.js"),"\uff0c\u8c03\u6574\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u6b64\u5904\u4ee5",(0,p.kt)("inlineCode",{parentName:"p"},"github.io"),"\u6258\u7ba1\u4e3a\u4f8b\uff0c\u7528\u6237\u53ef\u4f20\u5165\u81ea\u5df1\u7684",(0,p.kt)("strong",{parentName:"p"},"\u6587\u4ef6\u670d\u52a1\u6258\u7ba1\u8def\u5f84"),"\uff0c\u4ee5\u4e0b\u793a\u4f8b\u4ee3\u7801\u89c1",(0,p.kt)("a",{parentName:"p",href:"https://github.com/hel-eco/hel-tpl-remote-vue-comp"},"\u4ed3\u5e93"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"const helDevUtils = require('hel-dev-utils');\nconst pkg = require('./package.json');\n\n// deploy to github.io\nconst subApp = helDevUtils.createVue2SubApp(pkg, { defaultHomePage: 'https://hel-eco.github.io/hel-tpl-remote-vue-comp/as_v1' });\n\nmodule.exports = subApp;\n")),(0,p.kt)("h3",{id:"\u751f\u6210\u8fd0\u884c\u4ee3\u7801"},"\u751f\u6210\u8fd0\u884c\u4ee3\u7801"),(0,p.kt)("p",null,"\u6784\u5efa\u751f\u6210\u6e90\u7801\u548c\u8fd0\u884c\u65f6\u4ee3\u7801"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,p.kt)("h3",{id:"\u63a8\u9001\u8fd0\u884c\u4ee3\u7801\u5230\u6587\u4ef6\u670d\u52a1"},"\u63a8\u9001\u8fd0\u884c\u4ee3\u7801\u5230\u6587\u4ef6\u670d\u52a1"),(0,p.kt)("hr",null),(0,p.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),(0,p.kt)("strong",{parentName:"h5"},"\u6b64\u6bb5\u6709\u4e0a\u4e0b\u6a2a\u5411\u5206\u5272\u7684\u5185\u5bb9\u4ec5\u4ee3\u8868\u5982\u4f55\u5c06\u7ec4\u4ef6\u6258\u7ba1\u5230 github.io \u6587\u4ef6\u670d\u52a1"),"\uff0c\u7528\u6237\u53ef\u5c06\u6587\u4ef6\u6258\u7ba1\u6258\u7ba1\u5230\u81ea\u5df1\u7684\u6587\u4ef6\u670d\u52a1 :::")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"\u8bbe\u5b9a github pages \u76ee\u5f55\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"/docs"),"\uff0c\u7136\u540e\u53ef\u5212\u5206\u5b50\u76ee\u5f55\u540c\u65f6\u591a\u4e2a\u7248\u672c\u7684\u7ec4\u4ef6\uff0c\u6b64\u5904\u6211\u4eec\u5efa\u8bae\u4e00\u4e2a",(0,p.kt)("inlineCode",{parentName:"p"},"/docs/as_v1"),"\u76ee\u5f55\u8868\u793a\u653e\u7f6e\u7b2c\u4e00\u4e2a\u7248\u672c\u7684\u8fd0\u884c\u4ee3\u7801"),(0,p.kt)("p",{parentName:"div"},"\u62f7\u8d1d",(0,p.kt)("inlineCode",{parentName:"p"},"hel_dist"),"\u76ee\u5f55\u4e0b\u5230\u7684\u6240\u6709\u4ea7\u7269\u5230",(0,p.kt)("inlineCode",{parentName:"p"},"/docs"),"\u76ee\u5f55\u4e0b\uff0c\u65b9\u4fbf\u8bbf\u95ee",(0,p.kt)("inlineCode",{parentName:"p"},"github.io"),"\u5c55\u793a\u65f6\u5c55\u793a\u9ed8\u8ba4\u9996\u9875\uff0c\u540c\u65f6\u518d\u62f7\u8d1d\u4ea7\u7269\u5230",(0,p.kt)("inlineCode",{parentName:"p"},"/docs/as_v1"),"\u76ee\u5f55\u4e0b\uff0c\u65b9\u4fbf sdk \u53ef\u4ee5\u6307\u5b9a\u7248\u672c\u53f7\u83b7\u53d6\u6258\u7ba1\u4ee3\u7801"),(0,p.kt)("p",{parentName:"div"},"\u6267\u884c",(0,p.kt)("inlineCode",{parentName:"p"},"git push"),"\uff0c\u5c06\u4ea7\u7269\u63a8\u9001\u5230",(0,p.kt)("inlineCode",{parentName:"p"},"github.io"),"\u670d\u52a1"),(0,p.kt)("hr",{parentName:"div"}),(0,p.kt)("p",{parentName:"div"},"\u79fb\u9664",(0,p.kt)("inlineCode",{parentName:"p"},"packjson.json"),"\u91cc\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"unpkg"),"\u5b57\u6bb5\u63cf\u8ff0\uff0c\u8868\u793a\u4e0d\u5c06\u4ea7\u7269\u6258\u7ba1\u5230",(0,p.kt)("inlineCode",{parentName:"p"},"unpkg"),"\u670d\u52a1"),(0,p.kt)("p",{parentName:"div"},"\u79fb\u9664",(0,p.kt)("inlineCode",{parentName:"p"},"packjson.json"),"\u91cc\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"files"),"\u5b57\u6bb5\u91cc\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"hel_dist"),"\u5173\u952e\u5b57\uff0c\u8868\u793a\u4e0d\u5c06\u4ea7\u7269\u63a8\u5230",(0,p.kt)("inlineCode",{parentName:"p"},"npm"),"\uff08\u5373\u5b89\u88c5\u6a21\u5757\u65b9\u7684 node_modules \u91cc\u4e0d\u4f1a\u5305\u542b\u6b64\u76ee\u5f55\uff09"),(0,p.kt)("p",{parentName:"div"},"\u6267\u884c",(0,p.kt)("inlineCode",{parentName:"p"},"git push"),"\u63a8\u9001\u8fd0\u884c\u4ee3\u7801"),(0,p.kt)("blockquote",{parentName:"div"},(0,p.kt)("p",{parentName:"blockquote"},"git add\u3001git commit \u7b49\u6b64\u5904\u7701\u7565\uff0c\u7528\u6237\u5b89\u88c5\u6b63\u5e38\u64cd\u4f5c\u63a8\u9001\u4ee3\u7801\u5373\u53ef")),(0,p.kt)("h3",{parentName:"div",id:"\u63a8\u9001\u6e90\u7801\u5230-npm"},"\u63a8\u9001\u6e90\u7801\u5230 npm"),(0,p.kt)("pre",{parentName:"div"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"npm run publish\n")),(0,p.kt)("h3",{parentName:"div",id:"sdk-\u83b7\u53d6\u8be5\u7248\u672c\u4ee3\u7801-1"},"sdk \u83b7\u53d6\u8be5\u7248\u672c\u4ee3\u7801"),(0,p.kt)("p",{parentName:"div"},"\u6548\u679c\u89c1",(0,p.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/demo-load-remote-vue-comp-st0295?file=/src/main.js:0-577"},"\u7ebf\u4e0a\u793a\u4f8b"),"\uff0c\u9700\u901a\u8fc7\u4f20\u5165",(0,p.kt)("inlineCode",{parentName:"p"},"getSubAppAndItsVersionFn"),"\u51fd\u6570\u6765\u81ea\u5b9a\u4e49\u5143\u6570\u636e\u83b7\u53d6\u8bf7\u6c42"),(0,p.kt)("pre",{parentName:"div"},(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"import { preFetchLib } from 'hel-micro';\n\nasync function main() {\n  await preFetchLib('hel-tpl-remote-vue-comps', {\n    async getSubAppAndItsVersionFn() {\n      // \u81ea\u5b9a\u4e49\u5143\u6570\u636e\u83b7\u53d6\u8bf7\u6c42\n      const res = await fetch('https://hel-eco.github.io/hel-tpl-remote-vue-comp/as_v1/hel-meta.json');\n      const meta = await res.json();\n      return meta;\n    },\n  });\n\n  await import('./loadApp');\n}\n")),(0,p.kt)("h3",{parentName:"div",id:"\u7ba1\u63a7\u53f0\u642d\u5efa\u53ef\u9009\u9879"},"\u7ba1\u63a7\u53f0\u642d\u5efa(\u53ef\u9009\u9879)"))),(0,p.kt)("p",null,"\u7528\u6237\u53ef\u5c06",(0,p.kt)("inlineCode",{parentName:"p"},"hel-meta.json"),"\u4fdd\u5b58\u5230\u540e\u53f0\u6570\u636e\u5e93\uff08\u53ef\u7ed3\u5408 devops \u6d41\u6c34\u7ebf\uff09\uff0c\u4ee5\u4fbf\u642d\u4e00\u4e2a\u4e2d\u5fc3\u5316\u7684\u6a21\u5757\u7ba1\u63a7\u5e73\u53f0\uff0c\u5bf9\u6a21\u5757\u5b9e\u65bd",(0,p.kt)("strong",{parentName:"p"},"\u7248\u672c\u9884\u89c8"),"\u3001",(0,p.kt)("strong",{parentName:"p"},"\u7070\u5ea6\u653e\u91cf"),"\u3001",(0,p.kt)("strong",{parentName:"p"},"\u79d2\u7ea7\u56de\u6eda"),"\u7b49\u5de5\u4f5c"),(0,p.kt)("p",null,":::"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://tnfe.gtimg.com/image/f13q7cuzxt_1652895450360.png",alt:"hel pack"})),(0,p.kt)("p",null,"\u5176\u4f59\u6587\u6863\u6b63\u5728\u62fc\u547d\u5efa\u8bbe\u4e2d\uff0c\u6709\u7591\u95ee\u53ef\u8054\u7cfb ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/fantasticsoul"},"fantasticsoul")," \u6216\u63d0 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/tnfe/hel/issues"},"issue")," ...."))}m.isMDXComponent=!0}}]);