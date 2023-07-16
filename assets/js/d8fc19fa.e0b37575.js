"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=i(n),k=a,m=s["".concat(c,".").concat(k)]||s[k]||d[k]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const l={},o="WebPack",p={unversionedId:"\u524d\u7aef/Webpack",id:"\u524d\u7aef/Webpack",title:"WebPack",description:"\u5b89\u88c5",source:"@site/docs/\u524d\u7aef/Webpack.md",sourceDirName:"\u524d\u7aef",slug:"/\u524d\u7aef/Webpack",permalink:"/docs/\u524d\u7aef/Webpack",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vite.JS",permalink:"/docs/\u524d\u7aef/ViteJs"},next:{title:"\u6982\u8ff0",permalink:"/docs/\u5e74\u7ec8&\u672a\u6765/2022"}},c={},i=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2}],u={toc:i},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webpack"},"WebPack"),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install <--global> --save-dev webpack<@version>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<--global>")," \u5168\u5c40\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"li"},"webpack"),"; \u4e0d\u5efa\u8bae\u6b64\u64cd\u4f5c, \u4e00\u822c\u4ee5\u9879\u76ee\u4e3a\u5355\u4f4d\u505a\u6700\u5c0f\u5316\u7684\u5b89\u88c5;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<@version>")," \u6307\u5b9a\u7248\u672c\u7684\u5b89\u88c5\u65b9\u5f0f, \u5982\u679c\u4e0d\u52a0\u6b64\u53c2\u6570\u5219\u4f7f\u7528\u6700\u65b0\u7248")),(0,a.kt)("p",null,"\u5982\u679c\u4f7f\u75284.x\u7248\u672c\u7684webpack\uff0c\u5219\u9700\u8981\u989d\u5916\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack-cli")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev webpack-cli\n")),(0,a.kt)("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u7b80\u5316\u6210\u4e00\u6761\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install webpack webpack-cli --save-dev\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u521d\u59cb\u5316\u5de5\u7a0b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm init -y\n")),(0,a.kt)("p",null,"\u6b64\u64cd\u4f5c\u4f1a\u5728\u5de5\u7a0b\u76ee\u5f55\u4e2d\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6"),(0,a.kt)("p",null,"\u63a5\u7740\u5728\u5de5\u7a0b\u4e2d\u521b\u5efa\u4e00\u4e9b\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"webpack\n  |- package.json\n+ |- index.html\n+ |- /src\n+   |- index.js\n")),(0,a.kt)("h1",{id:"\u5165\u53e3entry"},"\u5165\u53e3(entry)"),(0,a.kt)("h1",{id:"\u8f93\u51faoutput"},"\u8f93\u51fa(output)"),(0,a.kt)("h1",{id:"loader"},"loader"),(0,a.kt)("h1",{id:"\u63d2\u4ef6plugins"},"\u63d2\u4ef6(plugins)"))}d.isMDXComponent=!0}}]);