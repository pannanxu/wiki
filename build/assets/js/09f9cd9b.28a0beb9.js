"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3598],{9613:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(9496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},k=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),i=d(t),k=o,m=i["".concat(s,".").concat(k)]||i[k]||u[k]||a;return t?n.createElement(m,c(c({ref:r},p),{},{components:t})):n.createElement(m,c({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=k;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[i]="string"==typeof e?e:o,c[1]=l;for(var d=2;d<a;d++)c[d]=t[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},744:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=t(4778),o=(t(9496),t(9613));const a={},c="Docker",l={unversionedId:"\u540e\u7aef/Docker",id:"\u540e\u7aef/Docker",title:"Docker",description:"https://docs.docker.com/engine/install/",source:"@site/docs/\u540e\u7aef/Docker.md",sourceDirName:"\u540e\u7aef",slug:"/\u540e\u7aef/Docker",permalink:"/docs/\u540e\u7aef/Docker",draft:!1,editUrl:"https://github.com/pannanxu/wiki/docs/\u540e\u7aef/Docker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Caddy",permalink:"/docs/\u540e\u7aef/Caddy"},next:{title:"Flawable",permalink:"/docs/\u540e\u7aef/Flowable"}},s={},d=[],p={toc:d},i="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(i,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker"},"Docker"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"https://docs.docker.com/engine/install/")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"rpm -qa |grep docker\nyum list installed |grep docker\nyum -y remove xxx \nsudo yum remove docker \\\n                  docker-client \\\n                  docker-client-latest \\\n                  docker-common \\\n                  docker-latest \\\n                  docker-latest-logrotate \\\n                  docker-logrotate \\\n                  docker-engine\n\nsudo yum install -y yum-utils\n\nsudo yum-config-manager \\\n    --add-repo \\\n    https://download.docker.com/linux/centos/docker-ce.repo\n\nsudo yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin\n\nyum list docker-ce --showduplicates | sort -r\n\nsudo systemctl start docker\n\nsudo docker run hello-world\n\ndocker run --name mysql57 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=dQ5X4wFLkBsW3cq -d mysql:5.7\n")),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u4ee5\u975e root \u7528\u6237\u8eab\u4efd\u8fd0\u884c docker\uff0c\u5219\u9700\u8981\u5c06\u5176\u6dfb\u52a0\u5230 docker \u7ec4\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e0d\u5b58\u5728\u5219\u521b\u5efa docker \u7ec4")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo groupadd docker\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u5c06\u60a8\u7684\u7528\u6237\u6dfb\u52a0\u5230 docker \u7ec4\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo usermod -aG docker $USER\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u767b\u5f55\u5230\u65b0",(0,o.kt)("inlineCode",{parentName:"li"},"docker"),"\u7ec4\uff08\u4ee5\u907f\u514d\u5fc5\u987b\u6ce8\u9500/\u91cd\u65b0\u767b\u5f55\uff1b\u4f46\u5982\u679c\u4e0d\u591f\uff0c\u8bf7\u5c1d\u8bd5\u91cd\u65b0\u542f\u52a8\uff09\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"newgrp docker\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u68c0\u67e5docker\u662f\u5426\u53ef\u4ee5\u5728\u6ca1\u6709root\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run hello-world\n")),(0,o.kt)("p",null,"\u5982\u679c\u4ecd\u7136\u51fa\u73b0\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u542f\u52a8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"reboot\n")))}u.isMDXComponent=!0}}]);