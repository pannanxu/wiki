"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[4773],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),i=u(a),m=r,y=i["".concat(c,".").concat(m)]||i[m]||p[m]||l;return a?n.createElement(y,o(o({ref:t},d),{},{components:a})):n.createElement(y,o({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[i]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),s=a(6550),c=a(1980),u=a(7392),d=a(12);function i(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??i(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[c,u]=y({queryString:a,groupId:n}),[i,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=c??i;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var b=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:s,selectValue:c,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==s&&(i(t),c(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},4404:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>u,toc:()=>i});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),o=a(5162);const s={},c=void 0,u={unversionedId:"\u540e\u7aef/Caddy",id:"\u540e\u7aef/Caddy",title:"Caddy",description:"\u5b89\u88c5",source:"@site/docs/\u540e\u7aef/Caddy.mdx",sourceDirName:"\u540e\u7aef",slug:"/\u540e\u7aef/Caddy",permalink:"/docs/\u540e\u7aef/Caddy",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u540e\u7aef",permalink:"/docs/category/\u540e\u7aef"},next:{title:"Docker",permalink:"/docs/\u540e\u7aef/Docker"}},d={},i=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u91cd\u8f7d\u914d\u7f6e",id:"\u91cd\u8f7d\u914d\u7f6e",level:3},{value:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",level:3}],p={toc:i},m="wrapper";function y(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)(l.Z,{groupId:"system",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"centos",label:"CentOS",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://caddy2.dengxiaolong.com/docs/install#fedora-redhat-centos"},"https://caddy2.dengxiaolong.com/docs/install#fedora-redhat-centos")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yum install yum-plugin-copr\nyum copr enable @caddy/caddy\nyum install caddy\n"))),(0,r.kt)(o.Z,{value:"Debain",label:"Debian\u3001Ubuntu\u3001Raspbian",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://caddy2.dengxiaolong.com/docs/install#debian-ubuntu-raspbian"},"https://caddy2.dengxiaolong.com/docs/install#debian-ubuntu-raspbian")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https\ncurl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg\ncurl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list\nsudo apt update\nsudo apt install caddy\n")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5b89\u88c5\u5b8c\u6210\u540e\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"caddy version")," \u68c0\u67e5\u662f\u5426\u5b89\u88c5\u6210\u529f")),(0,r.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,r.kt)(l.Z,{groupId:"system",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"centos",label:"CentOS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u540e\u53f0\u5141\u8bb8\uff1acaddy start --config /etc/caddy/Caddyfile\n# \u5b88\u62a4\u8fdb\u7a0b\uff1acaddy run --config /etc/caddy/Caddyfile\n\nvim /etc/caddy/Caddyfile\n\n# caddy fmt /etc/caddy/Caddyfile\n# caddy adapt --config /etc/caddy/Caddyfile\n# caddy reload --config /etc/caddy/Caddyfile\n\nsystemctl daemon-reload\nsystemctl enable caddy\n\nsystemctl start caddy\nsystemctl stop caddy\nsystemctl status caddy\nsystemctl reload caddy\nsystemctl restart caddy\n"))),(0,r.kt)(o.Z,{value:"Debain",label:"Debian\u3001Ubuntu\u3001Raspbian",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u524d\u53f0\u8fd0\u884c\ncaddy run\n# \u540e\u53f0\u8fd0\u884c\ncaddy start\n# \u505c\u6b62\u8fd0\u884c\ncaddy stop\n")))),(0,r.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("h3",{id:"\u91cd\u8f7d\u914d\u7f6e"},"\u91cd\u8f7d\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"caddy reload --config /etc/caddy/Caddyfile\n")),(0,r.kt)("h3",{id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vim /etc/caddy/Caddyfile\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"ex.am.com {\n        handle /* {\n                reverse_proxy /* localhost:8090\n        }\n        file_server\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e0d\u751f\u6548\u5219\u4f7f\u7528 fmt \u547d\u4ee4\u683c\u5f0f\u5316, \u7136\u540e\u5c06\u5f97\u5230\u7684\u5185\u5bb9\u91cd\u65b0\u8986\u76d6\u8fdb\u6587\u4ef6\u4e2d"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"caddy fmt /etc/caddy/Caddyfile\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(common_headers) {\n    encode {\n    gzip\n    }\n    tls {\n        on_demand\n    }\n}\n\n\nsk.xx.com {\n    import common_headers\n        handle /mini-apis/* {\n                reverse_proxy /mini-apis/* localhost:8081\n        }\n\n        handle /app-apis/* {\n                reverse_proxy /app-apis/* localhost:8082\n        }\n\n        handle /admin-apis/* {\n                reverse_proxy /admin-apis/* localhost:8080\n        }\n\n        root * /usr/local/jar/wwwroot\n    file_server\n}\n\n")))}y.isMDXComponent=!0}}]);