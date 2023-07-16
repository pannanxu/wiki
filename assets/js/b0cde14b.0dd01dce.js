"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[2313],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),k=a,g=c["".concat(o,".").concat(k)]||c[k]||m[k]||l;return n?r.createElement(g,p(p({ref:t},s),{},{components:n})):r.createElement(g,p({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:a,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={},p="SpringCloud",i={unversionedId:"\u540e\u7aef/SpringCloud/README",id:"\u540e\u7aef/SpringCloud/README",title:"SpringCloud",description:"\u7cfb\u7edf\u67b6\u6784\u7684\u6f14\u53d8",source:"@site/docs/\u540e\u7aef/SpringCloud/README.md",sourceDirName:"\u540e\u7aef/SpringCloud",slug:"/\u540e\u7aef/SpringCloud/",permalink:"/docs/\u540e\u7aef/SpringCloud/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Spring \u6e90\u7801",permalink:"/docs/\u540e\u7aef/Spring/\u6e90\u7801"},next:{title:"Apollo",permalink:"/docs/\u540e\u7aef/SpringCloud/Apollo"}},o={},u=[{value:"\u7cfb\u7edf\u67b6\u6784\u7684\u6f14\u53d8",id:"\u7cfb\u7edf\u67b6\u6784\u7684\u6f14\u53d8",level:2},{value:"\u96c6\u4e2d\u5f0f\u67b6\u6784",id:"\u96c6\u4e2d\u5f0f\u67b6\u6784",level:3},{value:"\u5782\u76f4\u5e94\u7528\u67b6\u6784",id:"\u5782\u76f4\u5e94\u7528\u67b6\u6784",level:3},{value:"\u5206\u5e03\u5f0f\u670d\u52a1",id:"\u5206\u5e03\u5f0f\u670d\u52a1",level:3},{value:"\u9762\u5411\u670d\u52a1\u67b6\u6784",id:"\u9762\u5411\u670d\u52a1\u67b6\u6784",level:3},{value:"\u5fae\u670d\u52a1\u67b6\u6784",id:"\u5fae\u670d\u52a1\u67b6\u6784",level:3},{value:"\u5fae\u670d\u52a1\u7279\u70b9",id:"\u5fae\u670d\u52a1\u7279\u70b9",level:4},{value:"\u670d\u52a1\u8c03\u7528\u65b9\u5f0f",id:"\u670d\u52a1\u8c03\u7528\u65b9\u5f0f",level:2},{value:"\u5e38\u89c1\u7684\u8fdc\u7a0b\u8c03\u7528\u65b9\u5f0f",id:"\u5e38\u89c1\u7684\u8fdc\u7a0b\u8c03\u7528\u65b9\u5f0f",level:3},{value:"1\u3001RPC",id:"1rpc",level:5},{value:"2\u3001Http",id:"2http",level:5},{value:"Http\u5ba2\u6237\u7aef\u5de5\u5177",id:"http\u5ba2\u6237\u7aef\u5de5\u5177",level:3},{value:"Spring\u7684RestTemplate",id:"spring\u7684resttemplate",level:3},{value:"1\u3001\u521b\u5efa\u4e1a\u52a1\u903b\u8f91\u5c42(user-service)",id:"1\u521b\u5efa\u4e1a\u52a1\u903b\u8f91\u5c42user-service",level:5}],s={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"springcloud"},"SpringCloud"),(0,a.kt)("h2",{id:"\u7cfb\u7edf\u67b6\u6784\u7684\u6f14\u53d8"},"\u7cfb\u7edf\u67b6\u6784\u7684\u6f14\u53d8"),(0,a.kt)("p",null,"\u968f\u7740\u4e92\u8054\u7f51\u7684\u53d1\u5c55\uff0c\u7f51\u7ad9\u7684\u5e94\u7528\u89c4\u6a21\u4e0d\u65ad\u6269\u5927\uff0c\u9700\u6c42\u7684\u6fc0\u589e\uff0c\u5e26\u6765\u7684\u662f\u6280\u672f\u4e0a\u7684\u538b\u529b\u3002\u7cfb\u7edf\u67b6\u6784\u4e5f\u56e0\u6b64\u5728\u4e0d\u65ad\u7684\u6f14\u53d8\u3001\u5347\u7ea7\u3001\u8fed\u4ee3\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-ages-test0001.oss-cn-hangzhou.aliyuncs.com/images/1591797493895.png",alt:"img"})),(0,a.kt)("h3",{id:"\u96c6\u4e2d\u5f0f\u67b6\u6784"},"\u96c6\u4e2d\u5f0f\u67b6\u6784"),(0,a.kt)("p",null,"\u5f53\u7f51\u7ad9\u6d41\u91cf\u5f88\u5c0f\u7684\u65f6\u5019\uff0c\u53ea\u9700\u8981\u4e00\u4e2a\u5e94\u7528\uff0c\u5c06\u6240\u6709\u7684\u529f\u80fd\u90fd\u90e8\u7f72\u5230\u4e00\u8d77\uff0c\u4ee5\u51cf\u5c11\u90e8\u7f72\u8282\u70b9\u548c\u6210\u672c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-ages-test0001.oss-cn-hangzhou.aliyuncs.com/images/1591797514846.png",alt:"img"})),(0,a.kt)("p",null,"\u4f18\u70b9\uff1a\u7cfb\u7edf\u5f00\u53d1\u901f\u5ea6\u5feb\uff0c\u7ef4\u62a4\u6210\u672c\u4f4e\uff0c\u9002\u5408\u5f00\u53d1\u5e76\u53d1\u8981\u6c42\u8f83\u4f4e\u7684\u7cfb\u7edf"),(0,a.kt)("p",null,"\u7f3a\u70b9\uff1a\u5355\u70b9\u5bb9\u9519\u7387\u4f4e\uff0c\u5e76\u53d1\u80fd\u529b\u5dee"),(0,a.kt)("h3",{id:"\u5782\u76f4\u5e94\u7528\u67b6\u6784"},"\u5782\u76f4\u5e94\u7528\u67b6\u6784"),(0,a.kt)("p",null,"\u5f53\u8bbf\u95ee\u91cf\u9010\u6e10\u589e\u5927\uff0c\u5355\u4e00\u5e94\u7528\u65e0\u6cd5\u6ee1\u8db3\u9700\u6c42\uff0c\u6b64\u65f6\u4e3a\u4e86\u5e94\u5bf9\u66f4\u9ad8\u7684\u5e76\u53d1\u548c\u4e1a\u52a1\u9700\u6c42\uff0c\u6211\u4eec\u6839\u636e\u4e1a\u52a1\u529f\u80fd\u5bf9\u7cfb\u7edf\u8fdb\u884c\u62c6\u5206\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-ages-test0001.oss-cn-hangzhou.aliyuncs.com/images/1591797530176.png",alt:"img"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f18\u70b9")),(0,a.kt)("p",null,"\u7cfb\u7edf\u62c6\u5206\u5b9e\u73b0\u4e86\u6d41\u91cf\u5206\u62c5\uff0c\u89e3\u51b3\u4e86\u5e76\u53d1\u95ee\u9898"),(0,a.kt)("p",null,"\u53ef\u4ee5\u9488\u5bf9\u4e0d\u540c\u7684\u6a21\u5757\u8fdb\u884c\u4f18\u5316"),(0,a.kt)("p",null,"\u65b9\u4fbf\u6c34\u5e73\u6269\u5c55\uff0c\u8d1f\u8f7d\u5747\u8861\uff0c\u5bb9\u9519\u7387\u9ad8"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7f3a\u70b9")),(0,a.kt)("p",null,"\u7cfb\u7edf\u4e4b\u95f4\u76f8\u4e92\u72ec\u7acb\uff0c\u5f00\u53d1\u4e2d\u4f1a\u6709\u5f88\u591a\u91cd\u590d\u4ee3\u7801\uff0c\u5f71\u54cd\u5f00\u53d1\u6548\u7387"),(0,a.kt)("h3",{id:"\u5206\u5e03\u5f0f\u670d\u52a1"},"\u5206\u5e03\u5f0f\u670d\u52a1"),(0,a.kt)("p",null,"\u5f53\u5782\u76f4\u5e94\u7528\u8d8a\u6765\u8d8a\u591a\u7684\u65f6\u5019\uff0c\u5e94\u7528\u4e4b\u95f4\u4ea4\u4e92\u4e0d\u53ef\u907f\u514d\uff0c\u4f5c\u4e3a\u72ec\u7acb\u7684\u670d\u52a1\uff0c\u9010\u6e10\u5f62\u6210\u7a33\u5b9a\u7684\u670d\u52a1\u4e2d\u5fc3\uff0c\u662f\u524d\u6bb5\u5e94\u7528\u80fd\u66f4\u5feb\u901f\u7684\u5f71\u54cd\u591a\u53d8\u7684\u5e02\u573a\u9700\u6c42"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-ages-test0001.oss-cn-hangzhou.aliyuncs.com/images/1591797545349.png",alt:"img"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f18\u70b9\uff1a"),"\u5c06\u57fa\u7840\u670d\u52a1\u8fdb\u884c\u4e86\u62bd\u53d6\uff0c\u7cfb\u7edf\u4e4b\u95f4\u4e92\u76f8\u901a\u7528\uff0c\u63d0\u9ad8\u4e86\u4ee3\u7801\u7684\u91cd\u7528\u6027\u548c\u5f00\u53d1\u6548\u7387"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7f3a\u70b9\uff1a"),"\u7cfb\u7edf\u4e4b\u95f4\u8026\u5408\u8f83\u9ad8\uff0c\u8c03\u7528\u5173\u7cfb\u590d\u6742\uff0c\u96be\u4ee5\u7ef4\u62a4"),(0,a.kt)("h3",{id:"\u9762\u5411\u670d\u52a1\u67b6\u6784"},"\u9762\u5411\u670d\u52a1\u67b6\u6784"),(0,a.kt)("p",null,"SOA(Service Oriented Architecure)\u9762\u5411\u670d\u52a1\u7684\u67b6\u6784\uff1a\u5b83\u662f\u4e00\u79cd\u8bbe\u8ba1\u65b9\u6cd5\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u591a\u4e2a\u670d\u52a1\uff0c\u670d\u52a1\u4e0e\u670d\u52a1\u4e4b\u95f4\u901a\u8fc7\u4e92\u76f8\u4f9d\u8d56\u6700\u7ec8\u63d0\u4f9b\u4e00\u7cfb\u5217\u7684\u529f\u80fd\u3002\u4e00\u4e2a\u670d\u52a1\u901a\u5e38\u4ee5\u72ec\u7acb\u7684\u5f62\u5f0f\u5b58\u5728\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u8fdb\u884c\u4e2d\uff0c\u5404\u4e2a\u670d\u52a1\u4e4b\u95f4\u901a\u8fc7\u7f51\u7edc\u8c03\u7528\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-ages-test0001.oss-cn-hangzhou.aliyuncs.com/images/1591797558773.png",alt:"img"})),(0,a.kt)("p",null,"ESB(\u4f01\u4e1a\u670d\u52a1\u603b\u7ebf)\uff1a\u7b80\u5355\u7684\u8bf4ESB\u5c31\u662f\u4e00\u6839\u7ba1\u9053\uff0c\u7528\u6765\u8fde\u63a5\u5404\u4e2a\u670d\u52a1\u8282\u70b9\uff0c\u4e3a\u4e86\u7ee7\u627f\u4e0d\u540c\u7cfb\u7edf\uff0c\u4e0d\u540c\u534f\u8bae\u7684\u670d\u52a1\uff0cESB\u505a\u4e86\u6d88\u606f\u7684\u8f6c\u6362\u89e3\u91ca\u548c\u8def\u7531\u5de5\u4f5c\uff0c\u8ba9\u4e0d\u540c\u7684\u670d\u52a1\u4e92\u8054\u4e92\u901a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SOA\u7f3a\u70b9")),(0,a.kt)("p",null,"\u6bcf\u4e2a\u4f9b\u5e94\u5546\u7684ESB\u4ea7\u54c1\u6709\u504f\u5dee\uff0c\u81ea\u8eab\u5b9e\u73b0\u8f83\u4e3a\u590d\u6742\uff1b\u5e94\u7528\u670d\u52a1\u7c92\u5ea6\u8f83\u5927\uff0cESB\u7ee7\u627f\u6574\u5408\u6240\u6709\u7684\u670d\u52a1\u548c\u534f\u8bae\uff0c\u6570\u636e\u8f6c\u6362\u4f7f\u5f97\u8fd0\u7ef4\u3001\u6d4b\u8bd5\u548c\u90e8\u7f72\u6bd4\u8f83\u56f0\u96be\uff0c\u6240\u6709\u7684\u670d\u52a1\u90fd\u901a\u8fc7\u4e00\u4e2a\u901a\u8def\u901a\u8baf\uff0c\u76f4\u63a5\u964d\u4f4e\u4e86\u901a\u4fe1\u901f\u5ea6"),(0,a.kt)("p",null,"(dubbo\u8981\u6bd4\u8fd9\u4e2a\u4f18\u5316\uff0c\u7cfb\u7edf\u4e4b\u95f4\u901a\u8baf\u91c7\u7528RPC\u8fd9\u79cd\u65b9\u5f0f\uff0c\u8fd9\u79cd\u65b9\u5f0f\u662f\u76f4\u63a5\u4f7f\u7528\u4e8c\u8fdb\u5236\uff0c\u6548\u7387\u6bd4\u8f83\u9ad8)"),(0,a.kt)("h3",{id:"\u5fae\u670d\u52a1\u67b6\u6784"},"\u5fae\u670d\u52a1\u67b6\u6784"),(0,a.kt)("p",null,"\u5fae\u670d\u52a1\u67b6\u6784\u662f\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e00\u5957\u5c0f\u670d\u52a1\u5f00\u53d1\u5355\u4e2a\u5e94\u7528\u7684\u65b9\u5f0f\u6216\u9014\u5f84"),"\uff0c\u6bcf\u4e2a\u670d\u52a1\u57fa\u4e8e\u5355\u4e00\u4e1a\u52a1\u80fd\u529b\u6784\u5efa\uff08\u804c\u80fd\u5355\u4e00\uff09\uff0c\u8fd0\u884c\u5728\u81ea\u5df1\u7684\u8fdb\u7a0b\u4e2d\uff0c\u5e76\u4f7f\u7528\u8f7b\u91cf\u7ea7\u673a\u5236\u901a\u4fe1\uff0c\u901a\u5e38\u662fHttp API\uff0c\u5e76\u80fd\u591f\u901a\u8fc7\u81ea\u52a8\u5316\u90e8\u7f72\u673a\u5236\u6765\u72ec\u7acb\u90e8\u7f72\uff0c\u8fd9\u4e9b\u670d\u52a1\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u4ee5\u53ca\u4e0d\u540c\u7684\u6570\u636e\u5b58\u50a8\u6280\u672f\uff0c\u5e76\u4fdd\u6301\u6700\u4f4e\u7684\u96c6\u4e2d\u5f0f\u7ba1\u7406"),(0,a.kt)("p",null,"(dubbo\uff1a\u4f7f\u7528RPC\u534f\u8bae\u901a\u8baf\uff0c\u91c7\u7528\u7684\u5c31\u662f\u4e8c\u8fdb\u5236\u901a\u8baf\uff0c\u5982\u679c\u8981\u4f7f\u7528dubbo\u5b9e\u73b0\u7cfb\u7edf\u4e4b\u95f4\u7684\u901a\u8baf\uff0c\u5fc5\u987b\u4fdd\u8bc1\u9879\u76ee\u662fjava\u8bed\u8a00\u5f00\u53d1\u7684\u3002dubbo\u662f\u4e0d\u80fd\u5b9e\u73b0\u8de8\u8bed\u8a00\u5e73\u53f0\u901a\u8baf"),(0,a.kt)("p",null,"dubbox\uff1a\u540e\u6765\u662f\u5f53\u5f53\u7f51\u5bf9\u5b83\u8fdb\u884c\u5347\u7ea7\uff0c\u8ba9dubbo\u5728\u652f\u6301RPC\u7684\u540c\u65f6\uff0c\u4e5f\u652f\u6301Http API\uff08RestAPI\uff09\u901a\u8baf )"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-ages-test0001.oss-cn-hangzhou.aliyuncs.com/images/1591797585782.png",alt:"img"})),(0,a.kt)("p",null,"API Gateway: \u7f51\u5173\u662f\u4e00\u4e2a\u670d\u52a1\u5668\uff0c\u662f\u7cfb\u7edf\u7684\u552f\u4e00\u5165\u53e3\uff0c\u4e3a\u6bcf\u4e2a\u5ba2\u6237\u7aef\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5b9a\u5236\u7684API\u3002API\u7f51\u5173\u6838\u5fc3\u662f\uff0c\u6240\u6709\u7684\u5ba2\u6237\u7aef\u548c\u6d88\u8d39\u7aef\u90fd\u901a\u8fc7\u7edf\u4e00\u7684\u7f51\u5173\u4ecb\u5165\u5fae\u670d\u52a1\uff0c\u5728\u7f51\u7ba1\u5c42\u5904\u7406\u6240\u6709\u7684\u975e\u4e1a\u52a1\u529f\u80fd\u3002\u5982\u5b83\u8fd8\u53ef\u4ee5\u5177\u6709\u5176\u4ed6\u804c\u8d23\uff1a\u8eab\u4efd\u9a8c\u8bc1\u3001\u76d1\u63a7\u3001\u8d1f\u8f7d\u5747\u8861\u3001\u7f13\u5b58\u3001\u8bf7\u6c42\u5206\u7247\u4e0e\u7ba1\u7406\u3002\u901a\u5e38\u7f51\u5173\u63d0\u4f9bRESTFUL/http\u7684\u65b9\u5f0f\u8bbf\u95ee\u670d\u52a1\uff0c\u800c\u670d\u52a1\u7aef\u901a\u8fc7\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u8fdb\u884c\u670d\u52a1\u6ce8\u518c\u548c\u7ba1\u7406"),(0,a.kt)("h4",{id:"\u5fae\u670d\u52a1\u7279\u70b9"},"\u5fae\u670d\u52a1\u7279\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5355\u4e00\u804c\u8d23\uff1a\u5fae\u670d\u52a1\u4e2d\u6bcf\u4e2a\u670d\u52a1\u90fd\u5bf9\u5e94\u552f\u4e00\u7684\u4e1a\u52a1\u80fd\u529b,\u505a\u5230\u5355\u4e00\u804c\u8d23"),(0,a.kt)("li",{parentName:"ul"},"\u5fae\uff1a\u5fae\u670d\u52a1\u7684\u670d\u52a1\u62c6\u5206\u7c92\u5ea6\u5f88\u5c0f\uff0c\u4f8b\u5982\u4e00\u4e2a\u7528\u6237\u7ba1\u7406\u5c31\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u670d\u52a1\uff0c\u6bcf\u4e2a\u670d\u52a1\u867d\u7136\u5c0f\uff0c\u4f46\u662f\u201c\u4e94\u810f\u4ff1\u5168\u201d"),(0,a.kt)("li",{parentName:"ul"},"\u9762\u5411\u670d\u52a1\uff1a\u6bcf\u4e2a\u670d\u52a1\u90fd\u8981\u5bf9\u5916\u66b4\u6f0fRest\u98ce\u683c\u670d\u52a1\u63a5\u53e3API\u3002\u5e76\u4e0d\u5173\u5fc3\u670d\u52a1\u7684\u6280\u672f\u5b9e\u73b0\uff0c\u505a\u5230\u4e0e\u5e73\u53f0\u548c\u8bed\u8a00\u65e0\u5173\uff0c\u4e5f\u4e0d\u9650\u5b9a\u7528\u4ec0\u4e48\u6280\u672f\u5b9e\u73b0\uff0c\u53ea\u8981\u63d0\u4f9bRest\u7684\u63a5\u53e3\u5373\u53ef"),(0,a.kt)("li",{parentName:"ul"},"\u81ea\u6cbb\uff1a\u670d\u52a1\u4e4b\u95f4\u76f8\u4e92\u72ec\u7acb\uff0c\u4e92\u4e0d\u5e72\u6270",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u56e2\u961f\u72ec\u7acb\uff1a\u6bcf\u4e2a\u670d\u52a1\u90fd\u53ef\u4ee5\u4e00\u4e2a\u72ec\u7acb\u7684\u56e2\u961f\u5f00\u53d1\uff0c\u4eba\u6570\u4e0d\u80fd\u8fc7\u591a"),(0,a.kt)("li",{parentName:"ul"},"\u6280\u672f\u72ec\u7acb\uff1a\u9762\u5411\u7684\u662f\u670d\u52a1\uff0c\u63d0\u4f9bRest\u63a5\u53e3\uff0c\u4f7f\u7528\u4ec0\u4e48\u6280\u672f\u6ca1\u6709\u4eba\u5e72\u6d89"),(0,a.kt)("li",{parentName:"ul"},"\u524d\u540e\u7aef\u5206\u79bb\uff1a\u91c7\u7528\u524d\u540e\u7aef\u5206\u79bb\u5f00\u53d1\uff0c\u63d0\u4f9b\u7edf\u4e00Rest\u63a5\u53e3\uff0c\u540e\u7aef\u4e0d\u7528\u518d\u4e3aPC\u3001\u79fb\u52a8\u7aef\u5f00\u53d1\u4e0d\u540c\u7684\u63a5\u53e3"),(0,a.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u72ec\u7acb\uff1a\u670d\u52a1\u4e4b\u95f4\u867d\u7136\u6709\u8c03\u7528\uff0c\u4f46\u662f\u8981\u505a\u5230\u670d\u52a1\u5668\u91cd\u542f\u4e0d\u5f71\u54cd\u5176\u4ed6\u7684\u670d\u52a1\u5668\u3002\u6709\u5229\u4e8e\u6301\u7eed\u96c6\u6210\u548c\u6301\u7eed\u4ea4\u4ed8\u3002\u6bcf\u4e2a\u670d\u52a1\u90fd\u662f\u72ec\u7acb\u7684\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u590d\u7528\u3001\u53ef\u4ee5\u66ff\u6362\u3001\u964d\u4f4e\u4e86\u8026\u5408\u5ea6\uff0c\u6613\u4e8e\u7ef4\u62a4")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e92\u8054\u7f51\u7cbe\u795e\uff1a\u5148\u4e0a\u7ebf\uff0c\u540e\u8fed\u4ee3")),(0,a.kt)("p",null,"\u5fae\u670d\u52a1\u67b6\u6784\u4e0eSOA\u90fd\u662f\u5bf9\u7cfb\u7edf\u8fdb\u884c\u4e86\u62c6\u5206\uff1b\u5fae\u670d\u52a1\u67b6\u6784\u5e08\u57fa\u4e8eSOA\u601d\u60f3\uff0c\u53ef\u4ee5\u628a\u5fae\u670d\u52a1\u5f53\u4f5c\u53bb\u9664\u4e86ESB\u603b\u7ebf\u7684SOA\u3002ESB\u662fSOA\u67b6\u6784\u4e2d\u7684\u4e2d\u5fc3\u603b\u7ebf"),(0,a.kt)("h2",{id:"\u670d\u52a1\u8c03\u7528\u65b9\u5f0f"},"\u670d\u52a1\u8c03\u7528\u65b9\u5f0f"),(0,a.kt)("h3",{id:"\u5e38\u89c1\u7684\u8fdc\u7a0b\u8c03\u7528\u65b9\u5f0f"},"\u5e38\u89c1\u7684\u8fdc\u7a0b\u8c03\u7528\u65b9\u5f0f"),(0,a.kt)("h5",{id:"1rpc"},"1\u3001RPC"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Remote Produce Call\u3002\u57fa\u4e8eSocket\u7684\u901a\u8baf\uff08\u662f\u7528\u6700\u5e95\u5c42\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u901a\u8baf\uff0c\u91c7\u7528\u4e8c\u8fdb\u5236\u7684\u5f62\u5f0f\uff0c\u901a\u8baf\u7684\u6548\u7387\u6700\u9ad8\u7684\uff09\u3002\u5de5\u4f5c\u5728\u4f1a\u8bdd\u5c42\u3002\u81ea\u5b9a\u4e49\u6570\u636e\u683c\u5f0f\uff0c\u901f\u5ea6\u5feb\uff0c\u6548\u7387\u9ad8\u3002\u65e9\u671f\u7684webservice\uff0c\u73b0\u5728\u70ed\u95e8\u7684dubbox\uff0c\u90fd\u662fRPC\u7684\u5178\u578b\u4ee3\u8868\uff08\u53ea\u80fd\u662fjava\u8bed\u8a00\u7f16\u5199\u7684\u670d\u52a1\u4e4b\u95f4\u901a\u8baf\uff09")),(0,a.kt)("h5",{id:"2http"},"2\u3001Http"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"http\u5176\u5b9e\u662f\u4e00\u79cd\u7f51\u7edc\u4f20\u8f93\u534f\u8bae\uff0c\u57fa\u4e8eTCP\uff0c\u5de5\u4f5c\u5728\u5e94\u7528\u5c42\uff0c\u89c4\u5b9a\u4e86\u6570\u636e\u4f20\u8f93\u7684\u683c\u5f0f\u3002\u73b0\u5728\u5ba2\u6237\u7aef\u6d4f\u89c8\u5668\u4e0e\u670d\u52a1\u5668\u901a\u8baf\u57fa\u672c\u4e0a\u90fd\u662f\u91c7\u7528\u7684http\u534f\u8bae\uff0c\u4e5f\u53ef\u4ee5\u7528\u6765\u8fdb\u884c\u8fdc\u7a0b\u670d\u52a1\u8c03\u7528\u3002\u7f3a\u70b9\u662f\u6d88\u606f\u5c01\u88c5\u81c3\u80bf\uff0c\u4f18\u52bf\u662f\u5bf9\u670d\u52a1\u7684\u63d0\u4f9b\u548c\u8c03\u7528\u65b9\u6ca1\u6709\u4efb\u4f55\u6280\u672f\u9650\u5b9a\uff08\u53ef\u4ee5\u8de8\u8bed\u8a00\uff09\uff0c\u81ea\u7531\u7075\u6d3b\uff0c\u66f4\u7b26\u5408\u5fae\u670d\u52a1\u7684\u7406\u5ff5")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u4eec\u7684\u516c\u53f8\u5168\u90e8\u91c7\u7528\u7684java\u6280\u672f\u6808\uff0c\u90a3\u4e48\u4f7f\u7528dubbo\u4f5c\u4e3a\u5fae\u670d\u52a1\u67b6\u6784\u5e08\u4e00\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"\u76f8\u53cd\u5982\u679c\u516c\u53f8\u7684\u6280\u672f\u6808\u591a\u6837\u5316\uff0c\u800c\u4e14\u4f60\u66f4\u52a0\u9752\u7750\u4e8eSpring\u5bb6\u65cf\uff0c\u90a3\u4e48SpringCloud\u642d\u5efa\u5fae\u670d\u52a1\u5c31\u662f\u4e0d\u4e8c\u9009\u62e9\uff0c\u5728\u6211\u4eec\u7684\u9879\u76ee\u4e2d\uff0c\u4f1a\u6240\u9009\u62e9SpringCloud\u5957\u4ef6\uff0c\u56e0\u6b64\u4f1a\u4f7f\u7528http\u65b9\u5f0f\u6765\u5b9e\u73b0\u5fae\u670d\u52a1\u4e4b\u95f4\u7684\u8c03\u7528")),(0,a.kt)("h3",{id:"http\u5ba2\u6237\u7aef\u5de5\u5177"},"Http\u5ba2\u6237\u7aef\u5de5\u5177"),(0,a.kt)("p",null,"\u65e2\u7136\u5fae\u670d\u52a1\u9009\u62e9\u4e86http\uff0c\u90a3\u4e48\u6211\u4eec\u5c31\u9700\u8981\u8003\u8651\u81ea\u5df1\u6765\u5b9e\u73b0\u5bf9\u8bf7\u6c42\u548c\u54cd\u5e94\u7684\u5904\u7406\uff0c\u4e0d\u8fc7\u5f00\u6e90\u4e16\u754c\u5df2\u7ecf\u6709\u5f88\u591a\u7684http\u5ba2\u6237\u7aef\u5de5\u5177\uff0c\u80fd\u591f\u5e2e\u52a9\u6211\u4eec\u505a\u8fd9\u4e9b\u4e8b\u60c5\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HttpClient"),(0,a.kt)("li",{parentName:"ul"},"OkHttp"),(0,a.kt)("li",{parentName:"ul"},"URLConnection")),(0,a.kt)("p",null,"\u4ed6\u4eec\u4e4b\u95f4\u7684API\u5404\u4e0d\u76f8\u540c\uff0c\u800cspring\u4e5f\u6709\u5bf9http\u7684\u5ba2\u6237\u7aef\u5de5\u5177\u8fdb\u884c\u4e86\u5c01\u88c5\uff08\u8fd9\u4e09\u79cd\u90fd\u6709\uff09\uff0c\u63d0\u4f9b\u4e86\u5de5\u5177\u7c7b\uff1aRestTemplate"),(0,a.kt)("h3",{id:"spring\u7684resttemplate"},"Spring\u7684RestTemplate"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528spring\u63d0\u4f9b\u7684\u4e00\u4e2aRestTemplate\u6765\u5b9e\u73b0http\u7684\u4ea4\u4e92")),(0,a.kt)("p",null,"\u521b\u5efaspringboot\u9879\u76ee"),(0,a.kt)("h5",{id:"1\u521b\u5efa\u4e1a\u52a1\u903b\u8f91\u5c42user-service"},"1\u3001\u521b\u5efa\u4e1a\u52a1\u903b\u8f91\u5c42(user-service)"),(0,a.kt)("p",null,"\u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- mapper\u542f\u52a8\u5668(\u51c6\u5907\u4f7f\u7528mybatis\u4f5c\u4e3a\u6301\u4e45\u5c42) --\x3e\n<dependency>\n    <groupId>tk.mybatis</groupId>\n    <artifactId>mapper-spring-boot-starter</artifactId>\n    <version>2.0.3</version>\n</dependency>\n\x3c!-- mysql\u9a71\u52a8 --\x3e\n<dependency>\n    <groupId>mysql</groupId>\n    <artifactId>mysql-connector-java</artifactId>\n</dependency>\n\x3c!-- \u4e3a\u4e86\u5f00\u53d1\u65b9\u4fbf\uff0c\u6211\u8fd9\u91cc\u5f15\u5165lombok --\x3e\n<dependency>\n    <groupId>org.projectlombok</groupId>\n    <artifactId>lombok</artifactId>\n</dependency>\n")),(0,a.kt)("p",null,"pojo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Data\n@Table(name = "tb_user")\npublic class User {\n    @Id\n    @KeySql(useGeneratedKeys = true)\n    private Long id;\n    private String userName;        /*\u7528\u6237\u540d*/\n    private String password;        /*\u5bc6\u7801*/\n    private String name;            /*\u59d3\u540d*/\n    private Integer age;            /*\u5e74\u9f84*/\n    private Integer sex;            /*\u6027\u522b\uff0c1\u7537\u6027\uff0c2\u5973\u6027*/\n    private Date birthday;          /*\u751f\u65e5*/\n    private String note;            /*\u5907\u6ce8*/\n    private Date created;           /*\u521b\u5efa\u65f6\u95f4*/\n    private Date updated;           /*\u4fee\u6539\u65f6\u95f4*/\n}\n')),(0,a.kt)("p",null,"mapper\u63a5\u53e3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import tk.mybatis.mapper.common.Mapper;\npublic interface UserMapper extends Mapper<User> {\n}\n")),(0,a.kt)("p",null,"\u5728\u542f\u52a8\u7c7b\u4e2d\u626b\u63cfmapper"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@SpringBootApplication\n@MapperScan(basePackages = "com.cn.mapper")\npublic class UserServiceApplication {\n   \n    public static void main(String[] args) {\n        SpringApplication.run(UserServiceApplication.class, args);\n    }\n\n}\n')),(0,a.kt)("p",null,"service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface UserService {\n    /**\n     * \u6839\u636e\u4e3b\u952e\u67e5\u8be2\u5bf9\u8c61\n     * @param id     \u4e3b\u952e\n     * @return       \u5bf9\u8c61\n     */\n    User getUserById(Long id);\n}\n-------------\n@Service\npublic class UserServiceImpl implements UserService {\n    @Autowired(required = false)\n    private UserMapper userMapper;\n\n    @Override\n    public User getUserById(Long id) {\n        return userMapper.selectByPrimaryKey(id);\n    }\n}\n")),(0,a.kt)("p",null,"\u7f16\u5199\u63a7\u5236\u5c42\u63d0\u4f9bRstful\u63a5\u53e3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/user")\npublic class UserContorller {\n    @Autowired\n    private UserService userService;\n\n    @RequestMapping("/{id}")\n    public User getById(@PathVariable("id") Long id){\n        return userService.getUserById(id);\n    }\n}\n')),(0,a.kt)("p",null,"2\u3001\u521b\u5efa\u8868\u73b0\u5c42\uff08user-web\uff09"),(0,a.kt)("p",null,"pojo\uff1a\u540c\u4e0a"),(0,a.kt)("p",null,"\u542f\u52a8\u7c7b\u914d\u7f6eRestTemplate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@SpringBootApplication\npublic class UserWebApplication {\n    @Bean\n    public RestTemplate restTemplate(){\n        return new RestTemplate();\n    }\n    public static void main(String[] args) {\n        SpringApplication.run(UserWebApplication.class, args);\n    }\n}\nimport com.cn.pojo.User;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\nimport org.springframework.web.client.RestTemplate;\n\n@RestController\n@RequestMapping("/consumer")\npublic class ConsumerController {\n    @Autowired\n    private RestTemplate restTemplate;\n    @RequestMapping("/{id}")\n    public User getByid(@PathVariable("id") Long id){\n        //\u901a\u8fc7http\u7684\u65b9\u5f0f\u5b9e\u73b0\u7cfb\u7edf\u4e4b\u95f4\u7684\u901a\u8baf\n        String url = "http://localhost:9091/user/" + id;//\u8fd9\u4e2a\u662fuser-service\u63d0\u4f9b\u7684rest api\u98ce\u683c\u7684\u63a5\u53e3\n        User user = restTemplate.getForObject(url, User.class);\n        return user;\n    }\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e0a\u9762\u7684\u64cd\u4f5c\u6211\u4eec\u662f\u4f7f\u7528user-service\u5bf9\u5916\u63d0\u4f9b\u4e86\u6839\u636e\u4e3b\u952e\u67e5\u8be2\u7528\u6237\u7684\u63a5\u53e3\uff0c\u7136\u540e\u5728user-web\u901a\u8fc7RestTemplate\u8c03\u7528service\u7684\u63a5\u53e3"),(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u6837\u5199\u4f1a\u5b58\u5728\u786c\u7f16\u7801\u7684\u95ee\u9898\uff0c\u4e0d\u65b9\u4fbf\u540e\u671f\u7ef4\u62a4\uff0c\u5e76\u4e14\u6211\u4eec\u9700\u8981\u8bb0\u4f4furl\u7684\u5730\u5740\uff0c\u5982\u679c\u53d1\u751f\u6539\u53d8\uff0c\u6536\u4e0d\u5230\u901a\u77e5\uff0c\u5730\u5740\u5c06\u4f1a\u5931\u6548"),(0,a.kt)("p",{parentName:"blockquote"},"web\u5c42\u5e76\u4e0d\u77e5\u9053service\u5c42\u7684\u72b6\u6001\uff0c\u4f8b\u5982\u670d\u52a1\u5668\u5b95\u673a"),(0,a.kt)("p",{parentName:"blockquote"},"service\u5c42\u4e5f\u53ea\u6709\u4e00\u53f0\uff0c\u4e0d\u5177\u5907\u9ad8\u53ef\u7528"),(0,a.kt)("p",{parentName:"blockquote"},"\u5373\u4fbf\u662fservice\u642d\u5efa\u6210\u4e86\u96c6\u7fa4\uff0cweb\u8fd8\u9700\u8981\u53bb\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861")),(0,a.kt)("p",null,"\u5176\u5b9e\u4e0a\u9762\u8bf4\u7684\u95ee\u9898\uff0c\u6982\u62ec\u4e00\u4e0b\u5c31\u662f\u5206\u5e03\u5f0f\u670d\u52a1\u5fc5\u7136\u8981\u9762\u4e34\u7684\u95ee\u9898\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7ba1\u7406",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u4f55\u81ea\u52a8\u6ce8\u518c\u548c\u53d1\u73b0"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u4f55\u5b9e\u73b0\u72b6\u6001\u76d1\u63a7"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u4f55\u5b9e\u73b0\u52a8\u6001\u8def\u7531"))),(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5982\u4f55\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861"),(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5982\u4f55\u89e3\u51b3\u5bb9\u707e\u95ee\u9898"),(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5982\u4f55\u5b9e\u73b0\u7edf\u4e00\u914d\u7f6e")))}m.isMDXComponent=!0}}]);