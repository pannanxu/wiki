"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5050],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),o=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return l.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=o(a),m=n,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return a?l.createElement(k,i(i({ref:t},p),{},{components:a})):l.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[d]="string"==typeof e?e:n,i[1]=u;for(var o=2;o<r;o++)i[o]=a[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294),n=a(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var l=a(7462),n=a(7294),r=a(6010),i=a(2466),u=a(6550),s=a(1980),o=a(7392),p=a(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:l,default:n}}=e;return{value:t,label:a,attributes:l,default:n}}))}function c(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const l=(0,u.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:l}=e,r=c(e),[i,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=a.find((e=>e.default))??a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[s,o]=k({queryString:a,groupId:l}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,r]=(0,p.Nk)(a);return[l,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:l}),h=(()=>{const e=s??d;return m({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);u(e),o(e),g(e)}),[o,g,r]),tabValues:r}}var h=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:u,selectValue:s,tabValues:o}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=p.indexOf(t),l=o[a].value;l!==u&&(d(t),s(l))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},i,{className:(0,r.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":u===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:l}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function f(e){const t=g(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",v.tabList)},n.createElement(b,(0,l.Z)({},e,t)),n.createElement(N,(0,l.Z)({},e,t)))}function y(e){const t=(0,h.Z)();return n.createElement(f,(0,l.Z)({key:String(t)},e))}},3722:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>u,metadata:()=>o,toc:()=>d});var l=a(7462),n=(a(7294),a(3905)),r=a(4866),i=a(5162);const u={},s="Git",o={unversionedId:"\u540e\u7aef/Git",id:"\u540e\u7aef/Git",title:"Git",description:"\u57fa\u64cd",source:"@site/docs/\u540e\u7aef/Git.mdx",sourceDirName:"\u540e\u7aef",slug:"/\u540e\u7aef/Git",permalink:"/wiki/docs/\u540e\u7aef/Git",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flawable",permalink:"/wiki/docs/\u540e\u7aef/Flowable"},next:{title:"BIO",permalink:"/wiki/docs/\u540e\u7aef/JDK/Bio"}},p={},d=[{value:"\u57fa\u64cd",id:"\u57fa\u64cd",level:2},{value:"\u7528\u6237\u540d &amp; \u90ae\u7bb1",id:"\u7528\u6237\u540d--\u90ae\u7bb1",level:3},{value:"\u652f\u6301\u4e2d\u6587\u8def\u5f84",id:"\u652f\u6301\u4e2d\u6587\u8def\u5f84",level:3},{value:"\u67e5\u770bGit\u914d\u7f6e",id:"\u67e5\u770bgit\u914d\u7f6e",level:3},{value:"\u62c9\u53d6\u4ed3\u5e93",id:"\u62c9\u53d6\u4ed3\u5e93",level:3},{value:"\u6dfb\u52a0\u6587\u4ef6\u5230\u7d22\u5f15\u533a",id:"\u6dfb\u52a0\u6587\u4ef6\u5230\u7d22\u5f15\u533a",level:3},{value:"\u521b\u5efa\u63d0\u4ea4",id:"\u521b\u5efa\u63d0\u4ea4",level:3},{value:"\u521b\u5efa\u5206\u652f",id:"\u521b\u5efa\u5206\u652f",level:3},{value:"\u5207\u6362\u5206\u652f",id:"\u5207\u6362\u5206\u652f",level:3},{value:"\u67e5\u770b\u672c\u5730\u4ed3\u5e93\u5bf9\u5e94\u7684\u8fdc\u7a0b\u4ed3\u5e93\u5730\u5740",id:"\u67e5\u770b\u672c\u5730\u4ed3\u5e93\u5bf9\u5e94\u7684\u8fdc\u7a0b\u4ed3\u5e93\u5730\u5740",level:3},{value:"\u5c06\u672c\u5730\u5206\u652f\u4e0e\u8fdc\u7a0b\u5206\u652f\u5efa\u7acb\u5173\u7cfb",id:"\u5c06\u672c\u5730\u5206\u652f\u4e0e\u8fdc\u7a0b\u5206\u652f\u5efa\u7acb\u5173\u7cfb",level:3},{value:"\u4ee3\u7801\u540c\u6b65",id:"\u4ee3\u7801\u540c\u6b65",level:3},{value:"\u67e5\u770b\u5f53\u524d\u4ee3\u7801\u5e93\u7684\u6587\u4ef6\u4fee\u6539\u72b6\u6001\u5217\u8868",id:"\u67e5\u770b\u5f53\u524d\u4ee3\u7801\u5e93\u7684\u6587\u4ef6\u4fee\u6539\u72b6\u6001\u5217\u8868",level:3},{value:"\u5c06\u672c\u5730\u63d0\u4ea4\u63a8\u9001\u81f3\u8fdc\u7aef",id:"\u5c06\u672c\u5730\u63d0\u4ea4\u63a8\u9001\u81f3\u8fdc\u7aef",level:3},{value:"\u5c06dev\u5206\u652f\u5408\u5e76\u5230master",id:"\u5c06dev\u5206\u652f\u5408\u5e76\u5230master",level:3},{value:"\u62c9\u53d6\u8fdc\u7a0b\u67d0\u4e00\u4e2a\u5206\u652f",id:"\u62c9\u53d6\u8fdc\u7a0b\u67d0\u4e00\u4e2a\u5206\u652f",level:3},{value:"\u6807\u7b7e",id:"\u6807\u7b7e",level:3},{value:"\u4ee3\u7801\u5408\u5e76(merge) &amp; \u53d8\u57fa(rebase)",id:"\u4ee3\u7801\u5408\u5e76merge--\u53d8\u57farebase",level:2},{value:"\u5408\u5e76 pr",id:"\u5408\u5e76-pr",level:3},{value:"Stash",id:"stash",level:2},{value:"reset",id:"reset",level:2},{value:"pull",id:"pull",level:2},{value:"\u5c06\u8fdc\u7a0b(origin)\u6307\u5b9a\u5206\u652f \u62c9\u53d6\u5230 \u672c\u5730\u6307\u5b9a\u5206\u652f",id:"\u5c06\u8fdc\u7a0borigin\u6307\u5b9a\u5206\u652f-\u62c9\u53d6\u5230-\u672c\u5730\u6307\u5b9a\u5206\u652f",level:3},{value:"\u5c06\u8fdc\u7a0b\u6307\u5b9a\u5206\u652f \u62c9\u53d6\u5230 \u5f53\u524d\u5206\u652f",id:"\u5c06\u8fdc\u7a0b\u6307\u5b9a\u5206\u652f-\u62c9\u53d6\u5230-\u5f53\u524d\u5206\u652f",level:3},{value:"\u5c06 <code>\u672c\u5730\u7684</code> <code>\u5f53\u524d\u5206\u652f</code> \u4e0e <code>\u8fdc\u7a0b\u5206\u652f\u540c\u540d\u7684</code> \u62c9\u53d6\u5230 <code>\u672c\u5730\u5f53\u524d\u5206\u652f</code>\u4e0a",id:"\u5c06-\u672c\u5730\u7684-\u5f53\u524d\u5206\u652f-\u4e0e-\u8fdc\u7a0b\u5206\u652f\u540c\u540d\u7684-\u62c9\u53d6\u5230-\u672c\u5730\u5f53\u524d\u5206\u652f\u4e0a",level:3},{value:"push",id:"push",level:2},{value:"\u5c06\u672c\u5730\u5f53\u524d\u5206\u652f \u63a8\u9001\u5230 \u8fdc\u7a0b\u6307\u5b9a\u5206\u652f\u4e0a",id:"\u5c06\u672c\u5730\u5f53\u524d\u5206\u652f-\u63a8\u9001\u5230-\u8fdc\u7a0b\u6307\u5b9a\u5206\u652f\u4e0a",level:3},{value:"\u5c06\u672c\u5730\u5f53\u524d\u5206\u652f \u63a8\u9001\u5230 \u4e0e\u672c\u5730\u5f53\u524d\u5206\u652f\u540c\u540d\u7684\u8fdc\u7a0b\u5206\u652f\u4e0a",id:"\u5c06\u672c\u5730\u5f53\u524d\u5206\u652f-\u63a8\u9001\u5230-\u4e0e\u672c\u5730\u5f53\u524d\u5206\u652f\u540c\u540d\u7684\u8fdc\u7a0b\u5206\u652f\u4e0a",level:3},{value:"\u5c06\u672c\u5730\u5f53\u524d\u5206\u652f \u63a8\u9001\u5230 \u4e0e\u672c\u5730\u5f53\u524d\u5206\u652f\u540c\u540d\u7684\u8fdc\u7a0b\u5206\u652f\u4e0a",id:"\u5c06\u672c\u5730\u5f53\u524d\u5206\u652f-\u63a8\u9001\u5230-\u4e0e\u672c\u5730\u5f53\u524d\u5206\u652f\u540c\u540d\u7684\u8fdc\u7a0b\u5206\u652f\u4e0a-1",level:3},{value:"\u5de5\u4f5c\u6d41",id:"\u5de5\u4f5c\u6d41",level:2},{value:".gitignore",id:"gitignore",level:2},{value:"\u5e38\u7528\u914d\u7f6e",id:"\u5e38\u7528\u914d\u7f6e",level:3},{value:"\u751f\u6210",id:"\u751f\u6210",level:2},{value:"1\u3001\u67e5\u770b\u5df2\u5b58\u5728\u7684 SSH \u5bc6\u94a5",id:"1\u67e5\u770b\u5df2\u5b58\u5728\u7684-ssh-\u5bc6\u94a5",level:3},{value:"2\u3001\u751f\u6210 SSH \u5bc6\u94a5",id:"2\u751f\u6210-ssh-\u5bc6\u94a5",level:3},{value:"3\u3001\u62f7\u8d1d\u516c\u94a5",id:"3\u62f7\u8d1d\u516c\u94a5",level:3},{value:"\u591a\u4e2a\u5bc6\u94a5\u7ba1\u7406",id:"\u591a\u4e2a\u5bc6\u94a5\u7ba1\u7406",level:2},{value:"\u5b9a\u4e49\u8ba4\u8bc1\u5bc6\u94a5\u8def\u5f84\u89c4\u5219",id:"\u5b9a\u4e49\u8ba4\u8bc1\u5bc6\u94a5\u8def\u5f84\u89c4\u5219",level:3}],c={toc:d},m="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"git"},"Git"),(0,n.kt)("h2",{id:"\u57fa\u64cd"},"\u57fa\u64cd"),(0,n.kt)("h3",{id:"\u7528\u6237\u540d--\u90ae\u7bb1"},"\u7528\u6237\u540d & \u90ae\u7bb1"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'# \u8bf7\u66ff\u6362\u4f60\u7684\u7528\u6237\u540d\ngit config [--global] user.name "Your Name"      \n# \u8bf7\u66ff\u6362\u4f60\u81ea\u5df1\u7684\u90ae\u7bb1\ngit config [--global] user.email your@email\n')),(0,n.kt)("h3",{id:"\u652f\u6301\u4e2d\u6587\u8def\u5f84"},"\u652f\u6301\u4e2d\u6587\u8def\u5f84"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git config [--global] core.quotepath false\n")),(0,n.kt)("h3",{id:"\u67e5\u770bgit\u914d\u7f6e"},"\u67e5\u770bGit\u914d\u7f6e"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git config [--global] --list\n")),(0,n.kt)("h3",{id:"\u62c9\u53d6\u4ed3\u5e93"},"\u62c9\u53d6\u4ed3\u5e93"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git clone <\u4ed3\u5e93\u5730\u5740>\n")),(0,n.kt)("h3",{id:"\u6dfb\u52a0\u6587\u4ef6\u5230\u7d22\u5f15\u533a"},"\u6dfb\u52a0\u6587\u4ef6\u5230\u7d22\u5f15\u533a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git add MacOS\u73af\u5883\u914d\u7f6e.md\n")),(0,n.kt)("h3",{id:"\u521b\u5efa\u63d0\u4ea4"},"\u521b\u5efa\u63d0\u4ea4"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'git commit -m -s "Initial commit" [--amend]\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--amend")," \u5408\u5e76\u4e0a\u4e00\u6b21\u672apush\u7684 commit \u8bb0\u5f55")),(0,n.kt)("h3",{id:"\u521b\u5efa\u5206\u652f"},"\u521b\u5efa\u5206\u652f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout -b <branch> <start-point>\n")),(0,n.kt)("h3",{id:"\u5207\u6362\u5206\u652f"},"\u5207\u6362\u5206\u652f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout master\n")),(0,n.kt)("h3",{id:"\u67e5\u770b\u672c\u5730\u4ed3\u5e93\u5bf9\u5e94\u7684\u8fdc\u7a0b\u4ed3\u5e93\u5730\u5740"},"\u67e5\u770b\u672c\u5730\u4ed3\u5e93\u5bf9\u5e94\u7684\u8fdc\u7a0b\u4ed3\u5e93\u5730\u5740"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git remote -v\n")),(0,n.kt)("h3",{id:"\u5c06\u672c\u5730\u5206\u652f\u4e0e\u8fdc\u7a0b\u5206\u652f\u5efa\u7acb\u5173\u7cfb"},"\u5c06\u672c\u5730\u5206\u652f\u4e0e\u8fdc\u7a0b\u5206\u652f\u5efa\u7acb\u5173\u7cfb"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git branch -u origin/master\n")),(0,n.kt)("h3",{id:"\u4ee3\u7801\u540c\u6b65"},"\u4ee3\u7801\u540c\u6b65"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u548c\u8fdc\u7a0b\u5206\u652f\u540c\u6b65, \u82e5\u548c\u8fdc\u7a0b\u5206\u652f\u504f\u79bb, \u6267\u884c\u5408\u5e76\u4ee5\u5b8c\u6210\u66f4\u65b0")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git pull\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u548c\u8fdc\u7a0b\u5206\u652f\u540c\u6b65, \u82e5\u548c\u8fdc\u7a0b\u5206\u652f\u504f\u79bb, \u5c06\u672c\u5730\u5dee\u5f02\u63d0\u4ea4\u53d8\u57fa\u5230\u8fdc\u7a0b\u5206\u652f, \u4ee5\u5b8c\u6210\u66f4\u65b0")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git pull --rebase\n")),(0,n.kt)("h3",{id:"\u67e5\u770b\u5f53\u524d\u4ee3\u7801\u5e93\u7684\u6587\u4ef6\u4fee\u6539\u72b6\u6001\u5217\u8868"},"\u67e5\u770b\u5f53\u524d\u4ee3\u7801\u5e93\u7684\u6587\u4ef6\u4fee\u6539\u72b6\u6001\u5217\u8868"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git status\n")),(0,n.kt)("h3",{id:"\u5c06\u672c\u5730\u63d0\u4ea4\u63a8\u9001\u81f3\u8fdc\u7aef"},"\u5c06\u672c\u5730\u63d0\u4ea4\u63a8\u9001\u81f3\u8fdc\u7aef"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git push\n")),(0,n.kt)("h3",{id:"\u5c06dev\u5206\u652f\u5408\u5e76\u5230master"},"\u5c06dev\u5206\u652f\u5408\u5e76\u5230master"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout master\ngit merge dev\n")),(0,n.kt)("p",null,"\u7b80\u5199"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-gitexclude"},"git merge dev master\n")),(0,n.kt)("h3",{id:"\u62c9\u53d6\u8fdc\u7a0b\u67d0\u4e00\u4e2a\u5206\u652f"},"\u62c9\u53d6\u8fdc\u7a0b\u67d0\u4e00\u4e2a\u5206\u652f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git fetch origin(\u6e90) \u5206\u652f\u540d\u79f0\n")),(0,n.kt)("h3",{id:"\u6807\u7b7e"},"\u6807\u7b7e"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521b\u5efa\u4e00\u4e2a v1.0 \u7684\u6807\u7b7e\uff0c\u8bf4\u660e\u662f\uff1a\u7248\u672c 1.0\ngit tag -a v1.0 -m '\u7248\u672c 1.0'\n# \u5217\u51fatag\u5217\u8868\ngit tag\n# \u5339\u914d\u51fa \u4ee5 v1. \u5f00\u5934\u7684\u6807\u7b7e\ngit tag -l 'v1.*'\n# \u67e5\u770b\u6807\u7b7e\u7684\u4fe1\u606f\ngit show v1.0\n# \u63a8\u9001\u6807\u7b7e\u5230\u670d\u52a1\u5668\u4e2d git push origin --tags\u63a8\u9001\u6240\u6709\u6807\u7b7e\ngit push origin v1.0\n")),(0,n.kt)("h2",{id:"\u4ee3\u7801\u5408\u5e76merge--\u53d8\u57farebase"},"\u4ee3\u7801\u5408\u5e76(merge) & \u53d8\u57fa(rebase)"),(0,n.kt)("h3",{id:"\u5408\u5e76-pr"},"\u5408\u5e76 pr"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# \u6dfb\u52a0\u63d0\u4ea4 pr \u7684\u4ed3\u5e93\u5730\u5740\ngit remote add guqing https://github.com/guqing/halo.git\n# \u52a0\u8f7d\u4ed3\u5e93\u4fe1\u606f\ngit fetch guqing\n# \u5408\u5e76\u6307\u5b9a\u5206\u652f\ngit cherry-pick  <commitId>\n")),(0,n.kt)("h2",{id:"stash"},"Stash"),(0,n.kt)("p",null,"Stash \u5c06\u5df2\u4fee\u6539\u7684\u4ee3\u7801\u653e\u5165\u6682\u5b58\u533a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git stash save 'Hello' [--keep-index]\ngit stash list\ngit stash apply 'stash@{0}'\ngit stash drop 'stash@{0}'\ngit stash pop 'stash@{0}'\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u8bf4\u660e")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"save")," \u4fdd\u5b58\u5f53\u524d\u5206\u652f\u4fee\u6539\u7684\u5185\u5bb9\u5230\u6682\u5b58\u533a\u4e2d\u5e76\u8bbe\u7f6e\u8bf4\u660e\u4e3a\u201cHello\u201d; ",(0,n.kt)("inlineCode",{parentName:"li"},"--keep-index")," \u8868\u793a\u4e0d\u4f1a\u6682\u5b58\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"git add")," \u6682\u5b58\u540e\u7684\u4e1c\u897f "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list")," \u5217\u51fa\u6682\u5b58\u533a"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"apply")," \u4f7f\u7528\u6307\u5b9a\u7684\u6682\u5b58\u533a\uff0c\u6b64\u64cd\u4f5c\u4e0d\u4f1a\u5220\u9664\u6682\u5b58\u533a"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"drop")," \u5220\u9664\u6307\u5b9a\u7684\u6682\u5b58\u533a"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pop")," \u4f7f\u7528\u6307\u5b9a\u7684\u6682\u5b58\u533a\uff0c\u5e76\u4e14\u5220\u9664")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5e94\u7528\u573a\u666f:")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5f53\u6211\u4eec\u5728 dev \u5206\u652f\u5f00\u53d1\u65f6\uff0cmaster \u51fa\u73b0\u4e00\u4e2a\u7d27\u6025bug\uff0c\u9700\u8981\u6211\u4eec\u5207\u6362\u5230 master \u5206\u652f\u8fdb\u884c\u4fee\u6539"),(0,n.kt)("p",{parentName:"blockquote"},"\u4f46\u662f\u6b64\u65f6\u6211\u4eec\u5728 dev \u5206\u652f\u5f00\u53d1\u7684\u4ee3\u7801\u5e76\u6ca1\u6709\u5b8c\u6210\uff0c\u5982\u679c\u8d38\u7136\u5207\u6362\u5206\u652f\u5230 master \u4f1a\u7167\u6210 dev \u5206\u652f\u672a\u63d0\u4ea4\u7684\u4ee3\u7801\u4e22\u5931"),(0,n.kt)("p",{parentName:"blockquote"},"\u4e3a\u4e86\u89e3\u51b3\u6b64\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"stash save")," \u547d\u4ee4\uff0c\u5c06 dev \u5206\u652f\u7684\u4ee3\u7801\u5b58\u5165\u6682\u5b58\u533a\u4e2d\uff0c\u7136\u540e\u518d\u5207\u6362\u5230 master \u8fdb\u884c\u4fee\u590d bug"),(0,n.kt)("p",{parentName:"blockquote"},"\u5f53\u518d\u6b21\u5207\u6362\u56de dev \u5206\u652f\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"stash pop")," \u6062\u590d\u6682\u5b58\u533a\u7684\u4ee3\u7801")),(0,n.kt)("h2",{id:"reset"},"reset"),(0,n.kt)("p",null,"\u64a4\u9500\u4e0a\u4e00\u6b21 commit \u4f46\u4fdd\u7559\u5de5\u4f5c\u7a7a\u95f4\u5df2\u4fee\u6539\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git reset --mixed HEAD^ --\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"HEAD^")," \u64a4\u9500\u4e0a\u4e00\u6b21 commit \u7684\u4ee3\u7801"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"HEAD~3")," \u64a4\u9500\u6700\u8fd1\u4e09\u6b21 commit \u7684\u4ee3\u7801"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--mixed")," \u4e0d\u5220\u9664\u5de5\u4f5c\u7a7a\u95f4\u4ee3\u7801\u3001\u64a4\u9500 commit\u3001\u64a4\u9500 git add"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--soft")," \u4e0d\u5220\u9664\u5de5\u4f5c\u7a7a\u95f4\u4ee3\u7801\u3001\u64a4\u9500 commit\u3001\u4e0d\u64a4\u9500 git add"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--hard")," \u5220\u9664\u5de5\u4f5c\u7a7a\u95f4\u4ee3\u7801\u3001\u64a4\u9500 commit\u3001\u64a4\u9500 git add")),(0,n.kt)("h2",{id:"pull"},"pull"),(0,n.kt)("h3",{id:"\u5c06\u8fdc\u7a0borigin\u6307\u5b9a\u5206\u652f-\u62c9\u53d6\u5230-\u672c\u5730\u6307\u5b9a\u5206\u652f"},"\u5c06\u8fdc\u7a0b(origin)\u6307\u5b9a\u5206\u652f \u62c9\u53d6\u5230 \u672c\u5730\u6307\u5b9a\u5206\u652f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git pull origin <\u8fdc\u7a0b\u5206\u652f\u540d>:<\u672c\u5730\u5206\u652f\u540d>\n")),(0,n.kt)("h3",{id:"\u5c06\u8fdc\u7a0b\u6307\u5b9a\u5206\u652f-\u62c9\u53d6\u5230-\u5f53\u524d\u5206\u652f"},"\u5c06\u8fdc\u7a0b\u6307\u5b9a\u5206\u652f \u62c9\u53d6\u5230 \u5f53\u524d\u5206\u652f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git pull origin <\u8fdc\u7a0b\u5206\u652f\u540d>\n")),(0,n.kt)("h3",{id:"\u5c06-\u672c\u5730\u7684-\u5f53\u524d\u5206\u652f-\u4e0e-\u8fdc\u7a0b\u5206\u652f\u540c\u540d\u7684-\u62c9\u53d6\u5230-\u672c\u5730\u5f53\u524d\u5206\u652f\u4e0a"},"\u5c06 ",(0,n.kt)("inlineCode",{parentName:"h3"},"\u672c\u5730\u7684")," ",(0,n.kt)("inlineCode",{parentName:"h3"},"\u5f53\u524d\u5206\u652f")," \u4e0e ",(0,n.kt)("inlineCode",{parentName:"h3"},"\u8fdc\u7a0b\u5206\u652f\u540c\u540d\u7684")," \u62c9\u53d6\u5230 ",(0,n.kt)("inlineCode",{parentName:"h3"},"\u672c\u5730\u5f53\u524d\u5206\u652f"),"\u4e0a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git pull\n")),(0,n.kt)("h2",{id:"push"},"push"),(0,n.kt)("h3",{id:"\u5c06\u672c\u5730\u5f53\u524d\u5206\u652f-\u63a8\u9001\u5230-\u8fdc\u7a0b\u6307\u5b9a\u5206\u652f\u4e0a"},"\u5c06\u672c\u5730\u5f53\u524d\u5206\u652f \u63a8\u9001\u5230 \u8fdc\u7a0b\u6307\u5b9a\u5206\u652f\u4e0a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git push origin <\u672c\u5730\u5206\u652f\u540d>:<\u8fdc\u7a0b\u5206\u652f\u540d>\n")),(0,n.kt)("h3",{id:"\u5c06\u672c\u5730\u5f53\u524d\u5206\u652f-\u63a8\u9001\u5230-\u4e0e\u672c\u5730\u5f53\u524d\u5206\u652f\u540c\u540d\u7684\u8fdc\u7a0b\u5206\u652f\u4e0a"},"\u5c06\u672c\u5730\u5f53\u524d\u5206\u652f \u63a8\u9001\u5230 \u4e0e\u672c\u5730\u5f53\u524d\u5206\u652f\u540c\u540d\u7684\u8fdc\u7a0b\u5206\u652f\u4e0a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git push origin <\u672c\u5730\u5206\u652f\u540d>\n")),(0,n.kt)("h3",{id:"\u5c06\u672c\u5730\u5f53\u524d\u5206\u652f-\u63a8\u9001\u5230-\u4e0e\u672c\u5730\u5f53\u524d\u5206\u652f\u540c\u540d\u7684\u8fdc\u7a0b\u5206\u652f\u4e0a-1"},"\u5c06\u672c\u5730\u5f53\u524d\u5206\u652f \u63a8\u9001\u5230 \u4e0e\u672c\u5730\u5f53\u524d\u5206\u652f\u540c\u540d\u7684\u8fdc\u7a0b\u5206\u652f\u4e0a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git push\n")),(0,n.kt)("h2",{id:"\u5de5\u4f5c\u6d41"},"\u5de5\u4f5c\u6d41"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u96c6\u4e2d\u5f0f\u5de5\u4f5c\u6d41\uff1a\u5f00\u53d1\u8005\u76f4\u63a5\u5728\u672c\u5730 master \u5206\u652f\u5f00\u53d1\u4ee3\u7801\uff0c\u5f00\u53d1\u5b8c\u6210\u540e push \u5230\u8fdc\u7aef\u4ed3\u5e93 master \u5206\u652f\u3002  "),(0,n.kt)("li",{parentName:"ul"},"\u529f\u80fd\u5206\u652f\u5de5\u4f5c\u6d41\uff1a\u5f00\u53d1\u8005\u57fa\u4e8e master \u5206\u652f\u521b\u5efa\u4e00\u4e2a\u65b0\u5206\u652f\uff0c\u5728\u65b0\u5206\u652f\u8fdb\u884c\u5f00\u53d1\uff0c\u5f00\u53d1\u5b8c\u6210\u540e\u5408\u5e76\u5230\u8fdc\u7aef\u4ed3\u5e93 master \u5206\u652f\u3002  "),(0,n.kt)("li",{parentName:"ul"},"Git Flow \u5de5\u4f5c\u6d41\uff1aGit Flow \u5de5\u4f5c\u6d41\u4e3a\u4e0d\u540c\u7684\u5206\u652f\u5206\u914d\u4e00\u4e2a\u660e\u786e\u7684\u89d2\u8272\uff0c\u5e76\u5b9a\u4e49\u5206\u652f\u4e4b\u95f4\u4ec0\u4e48\u65f6\u5019\u3001\u5982\u4f55\u8fdb\u884c\u4ea4\u4e92\uff0c\u6bd4\u8f83\u9002\u5408\u5927\u578b\u9879\u76ee\u7684\u5f00\u53d1\u3002  "),(0,n.kt)("li",{parentName:"ul"},"Forking \u5de5\u4f5c\u6d41\uff1a\u5f00\u53d1\u8005\u5148 fork \u9879\u76ee\u5230\u4e2a\u4eba\u4ed3\u5e93\uff0c\u5728\u4e2a\u4eba\u4ed3\u5e93\u5b8c\u6210\u5f00\u53d1\u540e\uff0c\u63d0\u4ea4 pull request \u5230\u76ee\u6807\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u8fdc\u7a0b\u4ed3\u5e93 review \u540e\uff0c\u5408\u5e76 pull request \u5230 master \u5206\u652f")),(0,n.kt)("h2",{id:"gitignore"},".gitignore"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"# Hello")," \u6ce8\u91ca"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"*.class")," \u5ffd\u7565\u6240\u6709\u4ee5 ",(0,n.kt)("inlineCode",{parentName:"li"},".class")," \u7ed3\u5c3e\u7684\u6587\u4ef6"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"!a.class")," \u9664\u4e86\u6587\u4ef6\u540d\u79f0\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"a.class")," \u7684\u6587\u4ef6\u4e0d\u4f1a\u88ab\u5ffd\u7565"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/target")," \u5ffd\u7565 ",(0,n.kt)("inlineCode",{parentName:"li"},"/target")," ",(0,n.kt)("em",{parentName:"li"},"\u6839\u76ee\u5f55")," \u4e0b\u7684\u6587\u4ef6"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"target/")," \u5ffd\u7565 ",(0,n.kt)("inlineCode",{parentName:"li"},"target/")," ",(0,n.kt)("em",{parentName:"li"},"\u76ee\u5f55")," \u4e0b\u6240\u6709\u7684\u6587\u4ef6"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"target/*.html")," \u5ffd\u7565 ",(0,n.kt)("inlineCode",{parentName:"li"},"target")," ",(0,n.kt)("em",{parentName:"li"},"\u6839\u76ee\u5f55")," \u4e0b\u6240\u6709\u4ee5 ",(0,n.kt)("inlineCode",{parentName:"li"},".html")," \u7ed3\u5c3e\u7684\u6587\u4ef6")),(0,n.kt)("h3",{id:"\u5e38\u7528\u914d\u7f6e"},"\u5e38\u7528\u914d\u7f6e"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-.gitignore"},"HELP.md\ntarget/\n!.mvn/wrapper/maven-wrapper.jar\n!**/src/main/**\n!**/src/test/**\n\n#### STS ####\n.apt_generated\n.classpath\n.factorypath\n.project\n.settings\n.springBeans\n.sts4-cache\n\n#### IntelliJ IDEA ####\n.idea\n*.iws\n*.iml\n*.ipr\n\n#### NetBeans ####\n/nbproject/private/\n/nbbuild/\n/dist/\n/nbdist/\n/.nb-gradle/\nbuild/\n\n#### VS Code ####\n.vscode/\n\n#### \u5176\u4ed6 ####\n")),(0,n.kt)("h1",{id:"ssh-\u914d\u7f6e"},"SSH \u914d\u7f6e"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Linux\u3001Mac \u8bf7\u76f4\u63a5\u4f7f\u7528\u7ec8\u7aef\u8fd0\u884c\u547d\u4ee4"),(0,n.kt)("p",{parentName:"admonition"},"Windows \u9700\u8981\u5728 WSL\uff08\u9700\u8981 windows10 \u6216\u4ee5\u4e0a\uff09\u6216 Git Bash\u4e0b\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4")),(0,n.kt)("h2",{id:"\u751f\u6210"},"\u751f\u6210"),(0,n.kt)("p",null,"\u7b97\u6cd5\u7c7b\u578b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ED25519 \uff08\u63a8\u8350\uff09\uff1a\u516c\u94a5\uff1aid_ed25519.pub\uff1b\u79c1\u94a5\uff1aid_ed25519"),(0,n.kt)("li",{parentName:"ul"},"RSA \uff08\u4e0d\u63a8\u8350\uff09\uff1a\u516c\u94a5\uff1aid_rsa.pub\uff1b\u79c1\u94a5\uff1aid_rsa")),(0,n.kt)("h3",{id:"1\u67e5\u770b\u5df2\u5b58\u5728\u7684-ssh-\u5bc6\u94a5"},"1\u3001\u67e5\u770b\u5df2\u5b58\u5728\u7684 SSH \u5bc6\u94a5"),(0,n.kt)(r.Z,{groupId:"gen-ssh-algorithm",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"ED25519",label:"ED25519 \u7b97\u6cd5",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cat ~/.ssh/id_ed25519.pub\n"))),(0,n.kt)(i.Z,{value:"RSA",label:"RSA \u7b97\u6cd5",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cat ~/.ssh/id_rsa.pub\n")))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u8fd4\u56de\u4e00\u957f\u4e32\u4ee5 ssh-ed25519 \u6216 ssh-rsa \u5f00\u5934\u7684\u5b57\u7b26\u4e32, \u8bf4\u660e\u5df2\u5b58\u5728\u672c\u5730\u516c\u94a5\uff0c\u4f60\u53ef\u4ee5\u8df3\u8fc7\u6b65\u9aa4\u4e8c\u751f\u6210 SSH \u5bc6\u94a5\uff0c\u76f4\u63a5\u64cd\u4f5c\u6b65\u9aa4\u4e09\u3002")),(0,n.kt)("h3",{id:"2\u751f\u6210-ssh-\u5bc6\u94a5"},"2\u3001\u751f\u6210 SSH \u5bc6\u94a5"),(0,n.kt)(r.Z,{groupId:"gen-ssh-algorithm",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"ED25519",label:"ED25519 \u7b97\u6cd5",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'ssh-keygen -t ed25519 -C "\u6ce8\u91ca\u5185\u5bb9"\n'))),(0,n.kt)(i.Z,{value:"RSA",label:"RSA \u7b97\u6cd5",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'ssh-keygen -t rsa -C "\u6ce8\u91ca\u5185\u5bb9"\n')))),(0,n.kt)("admonition",{title:"\u8b66\u544a",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"\u5bc6\u94a5\u7528\u4e8e\u9274\u6743\uff0c\u8bf7\u8c28\u614e\u4fdd\u7ba1\u3002\u516c\u94a5\u6587\u4ef6\u4ee5 .pub \u6269\u5c55\u540d\u7ed3\u5c3e\uff0c\u53ef\u4ee5\u516c\u5f00\u7ed9\u5176\u4ed6\u4eba\uff0c\u800c\u6ca1\u6709 .pub \u6269\u5c55\u540d\u7684\u79c1\u94a5\u6587\u4ef6\u4e0d\u8981\u6cc4\u9732\u7ed9\u4efb\u4f55\u4eba\uff01")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},'ssh-keygen -t ed25519 -C "\u6ce8\u91ca\u5185\u5bb9"\n\nGenerating public/private ed25519 key pair.\n# \u5bc6\u94a5\u9ed8\u8ba4\u751f\u6210\u8def\u5f84\nEnter file in which to save the key (/Users/pan/.ssh/id_ed25519):  \n# \u5bc6\u94a5\u53e3\u4ee4\uff0c\u4e0d\u8bbe\u7f6e\u53ef\u4ee5\u76f4\u63a5\u56de\u8f66\u8bbe\u7f6e\u4e3a\u7a7a\nEnter passphrase (empty for no passphrase): \n# \u91cd\u590d\u5bc6\u94a5\u53e3\u4ee4\uff0c\u4e0a\u9762\u8bbe\u7f6e\u4e86\u5c31\u91cd\u590d\u8f93\u5165\uff0c\u6ca1\u8bbe\u7f6e\u5c31\u76f4\u63a5\u56de\u8f66\nEnter same passphrase again: \n\nYour identification has been saved in /Users/pan/.ssh/id_ed25519\nYour public key has been saved in /Users/pan/.ssh/id_ed25519.pub\n# ...\n')),(0,n.kt)("h3",{id:"3\u62f7\u8d1d\u516c\u94a5"},"3\u3001\u62f7\u8d1d\u516c\u94a5"),(0,n.kt)(r.Z,{groupId:"gen-ssh-algorithm",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"win",label:"Windows\uff08\u5728WSL\u6216Git Bash\u4e0b\uff09",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cat ~/.ssh/id_ed25519.pub | clip\n"))),(0,n.kt)(i.Z,{value:"mac",label:"MacOS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"tr -d '\\n' < ~/.ssh/id_ed25519.pub | pbcopy\n"))),(0,n.kt)(i.Z,{value:"linux",label:"GNU/Linux",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"xclip -sel clip < ~/.ssh/id_ed25519.pub\n")))),(0,n.kt)("h2",{id:"\u591a\u4e2a\u5bc6\u94a5\u7ba1\u7406"},"\u591a\u4e2a\u5bc6\u94a5\u7ba1\u7406"),(0,n.kt)("p",null,"\u5f53\u672c\u5730\u5b58\u5728\u591a\u4e2a\u5bc6\u94a5\uff0c\u5982\u679c\u4e0d\u8bbe\u7f6e\u8ba4\u8bc1\u89c4\u5219\uff0c\u672c\u673a\u5c06\u968f\u673a\u9009\u62e9\u4e00\u4e2a\u5bc6\u94a5\u7528\u4e8e\u8ba4\u8bc1\uff0c\u53ef\u80fd\u9020\u6210\u8ba4\u8bc1\u5931\u8d25\u3002"),(0,n.kt)("p",null,"\u56e0\u6b64\uff0c\u5728\u5982\u4e0b\u573a\u666f\u4e2d\uff0c\u9700\u8981\u81ea\u884c\u5b9a\u4e49\u8ba4\u8bc1\u5bc6\u94a5\u7684\u8def\u5f84\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u672c\u5730\u5b58\u5728\u591a\u4e2a\u5bc6\u94a5\u5bf9\u5e94\u4e0d\u540c\u7684\u4ee3\u7801\u5e73\u53f0\uff08GitLab\uff0cGitHub\uff0c\u4e91\u6548\u7b49\uff09\u3002")),(0,n.kt)("h3",{id:"\u5b9a\u4e49\u8ba4\u8bc1\u5bc6\u94a5\u8def\u5f84\u89c4\u5219"},"\u5b9a\u4e49\u8ba4\u8bc1\u5bc6\u94a5\u8def\u5f84\u89c4\u5219"),(0,n.kt)("p",null,"\u7f16\u8f91\u6587\u4ef6 ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.ssh/config")," "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Windows \u5e73\u53f0\u8bf7\u4f7f\u7528WSL\uff08Windows10\u6216\u4ee5\u4e0a\uff09\u6216 Git Bash")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-config"},"# github \u9ed8\u8ba4\u7528\u6237\nHost github.com\n  PreferredAuthentications publickey\n  IdentityFile ~/.ssh/github.com/id_ed25519\n\n# github \u7528\u6237 a\nName github-user-a\nHost github.com\n  PreferredAuthentications publickey\n  IdentityFile ~/.ssh/github.com/usera/id_ed25519\n\n# codeup \u9ed8\u8ba4\u7528\u6237\nHost codeup.aliyun.com\n  PreferredAuthentications publickey\n  IdentityFile ~/.ssh/codeup.aliyun.com/id_ed25519\n\n# codeup \u7528\u6237 a\nName codeup-user-a\nHost codeup.aliyun.com\n  PreferredAuthentications publickey\n  IdentityFile ~/.ssh/codeup.aliyun.com/usera/id_ed25519\n")),(0,n.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# github \u9ed8\u8ba4\u7528\u6237\ngit clone git@github.com:example/repo.git\n\n# github \u7528\u6237 a\ngit clone git@github-user-a:example/repo.git\n\n# codeup \u9ed8\u8ba4\u7528\u6237\ngit clone git@codeup.aliyun.com:example/repo.com\n\n# codeup \u7528\u6237 a\ngit clone git@codeup-user-a:example/repo.com\n")))}k.isMDXComponent=!0}}]);