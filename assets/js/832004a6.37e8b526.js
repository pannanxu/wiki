"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[397],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,v=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="BIO",l={unversionedId:"\u540e\u7aef/JDK/Bio",id:"\u540e\u7aef/JDK/Bio",title:"BIO",description:"I/O \u6a21\u578b",source:"@site/docs/\u540e\u7aef/JDK/Bio.md",sourceDirName:"\u540e\u7aef/JDK",slug:"/\u540e\u7aef/JDK/Bio",permalink:"/docs/\u540e\u7aef/JDK/Bio",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Git",permalink:"/docs/\u540e\u7aef/Git"},next:{title:"JDK \u6e90\u7801",permalink:"/docs/\u540e\u7aef/JDK/JDK\u6e90\u7801"}},c={},p=[{value:"I/O \u6a21\u578b",id:"io-\u6a21\u578b",level:2},{value:"BIO",id:"bio-1",level:3},{value:"NIO",id:"nio",level:3},{value:"AIO",id:"aio",level:3},{value:"Java BIO",id:"java-bio",level:2},{value:"Java BIO\u5de5\u4f5c\u673a\u5236",id:"java-bio\u5de5\u4f5c\u673a\u5236",level:3},{value:"Java BIO Example",id:"java-bio-example",level:3},{value:"\u670d\u52a1\u7aef",id:"\u670d\u52a1\u7aef",level:4},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",level:4},{value:"Java BIO \u5b58\u5728\u7684\u95ee\u9898",id:"java-bio-\u5b58\u5728\u7684\u95ee\u9898",level:3}],u={toc:p},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bio"},"BIO"),(0,a.kt)("h2",{id:"io-\u6a21\u578b"},"I/O \u6a21\u578b"),(0,a.kt)("p",null,"I/O \u6a21\u578b\u5c31\u662f\u7528\u4ec0\u4e48\u6837\u7684\u901a\u9053\u8fdb\u884c\u6570\u636e\u7684\u53d1\u9001\u548c\u63a5\u6536\uff0c\u5f88\u5927\u7a0b\u5ea6\u4e0a\u51b3\u5b9a\u4e86\u7a0b\u5e8f\u901a\u4fe1\u7684\u6027\u80fd\u3002"),(0,a.kt)("p",null,"Java\u4e00\u5171\u652f\u6301\u4e09\u79cd\u7f51\u7edc\u7f16\u7a0b\u6a21\u578b\uff1aBIO\u3001NIO\u3001AIO"),(0,a.kt)("h3",{id:"bio-1"},"BIO"),(0,a.kt)("p",null,"Java BIO \u5c31\u662f\u4f20\u7edf\u7684 Java io \u7f16\u7a0b\uff0c\u76f8\u5173\u7684\u63a5\u53e3\u548c\u7c7b\u90fd\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"java.io")," \u5305\u4e2d"),(0,a.kt)("p",null,"BIO (Blocking I/O) \uff1a\u540c\u6b65\u5e76\u963b\u585e\uff0c\u670d\u52a1\u5668\u5b9e\u73b0\u6a21\u5f0f\u4e3a\u4e00\u4e2a\u8fde\u63a5\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u5373\u5ba2\u6237\u7aef\u6709\u8fde\u63a5\u8bf7\u6c42\u65f6\u670d\u52a1\u5668\u7aef\u5c31\u9700\u8981\u542f\u52a8\u4e00\u4e2a\u7ebf\u7a0b\u8fdb\u884c\u5904\u7406\uff0c\u5982\u679c\u8fd9\u4e2a\u8fde\u63a5\u4e0d\u505a\u4efb\u4f55\u4e8b\u60c5\u4f1a\u9020\u6210\u4e0d\u5fc5\u8981\u7684\u7ebf\u7a0b\u5f00\u9500\uff0c\u53ef\u4ee5\u901a\u8fc7\u7ebf\u7a0b\u6c60\u673a\u5236\u6539\u5584"),(0,a.kt)("p",null,"BIO\u65b9\u5f0f\u9002\u7528\u4e8e\u94fe\u63a5\u6570\u6bd4\u8f83\u5c0f\uff0c\u4e14\u56fa\u5b9a\u7684\u67b6\u6784\uff0c\u8fd9\u79cd\u65b9\u5f0f\u5bf9\u670d\u52a1\u5668\u8d44\u6e90\u8981\u6c42\u6bd4\u8f83\u641e\uff0c\u5e76\u53d1\u5c40\u9650\u4e8e\u5e94\u7528\u4e2d\uff0cJDK1.4\u4ee5\u524d\u552f\u4e00\u7684\u9009\u62e9"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-ages-test0001.oss-cn-hangzhou.aliyuncs.com/images/image-20210117183620122.png",alt:"image-20210117183620122"})),(0,a.kt)("h3",{id:"nio"},"NIO"),(0,a.kt)("p",null,"\u540c\u6b65\u975e\u963b\u585e\uff0c\u670d\u52a1\u5668\u5b9e\u73b0\u6a21\u5f0f\u4e3a\u4e00\u4e2a\u7ebf\u7a0b\u5904\u7406\u591a\u4e2a\u8fde\u63a5\uff0c\u5373\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u8fde\u63a5\u8bf7\u6c42\u90fd\u4f1a\u6ce8\u518c\u5230\u591a\u8def\u590d\u7528\u5668\u4e0a\uff0c\u591a\u8def\u590d\u7528\u5668\u8f6e\u8be2\u5230\u8fde\u63a5\u6709I/O\u8bf7\u6c42\u5c31\u8fdb\u884c\u5904\u7406"),(0,a.kt)("p",null,"NIO \u65b9\u5f0f\u9002\u7528\u4e8e\u8fde\u63a5\u6570\u91cf\u591a\uff0c\u4e14\u8fde\u63a5\u6bd4\u8f83\u77ed\u7684\u67b6\u6784\uff0c\u6bd4\u5982\u804a\u5929\u670d\u52a1\u5668\uff0c\u5f39\u5e55\u7cfb\u7edf\uff0c\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u901a\u8baf\u7b49\uff0cJDK1.4\u5f00\u59cb\u652f\u6301"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-ages-test0001.oss-cn-hangzhou.aliyuncs.com/images/image-20210117184414022.png",alt:"image-20210117184414022"})),(0,a.kt)("h3",{id:"aio"},"AIO"),(0,a.kt)("p",null,"\u5f02\u6b65\u975e\u963b\u585e\uff0cAIO\u5f15\u5165\u5f02\u6b65\u901a\u9053\u7684\u6982\u5ff5\uff0c\u91c7\u7528\u4e86 Proactor \u6a21\u5f0f\uff0c\u7b80\u5316\u4e86\u7a0b\u5e8f\u7f16\u5199\uff0c\u6709\u6548\u7684\u8bf7\u6c42\u624d\u542f\u52a8\u7ebf\u7a0b\uff0c\u5b83\u7684\u7279\u70b9\u662f\u5148\u7531\u64cd\u4f5c\u7cfb\u7edf\u5b8c\u6210\u540e\u624d\u901a\u77e5\u670d\u52a1\u7aef\u542f\u52a8\u7ebf\u7a0b\u53bb\u5904\u7406"),(0,a.kt)("p",null,"\u4e00\u822c\u9002\u7528\u4e8e\u8fde\u63a5\u6570\u8f83\u591a\uff0c\u4e14\u8fde\u63a5\u65f6\u95f4\u8f83\u957f\u7684\u5e94\u7528\uff0c\u5145\u5206\u8c03\u7528 OS \u53c2\u4e0e\u5e76\u53d1\u64cd\u4f5c\uff0cJDK7\u5f00\u59cb\u652f\u6301"),(0,a.kt)("h2",{id:"java-bio"},"Java BIO"),(0,a.kt)("h3",{id:"java-bio\u5de5\u4f5c\u673a\u5236"},"Java BIO\u5de5\u4f5c\u673a\u5236"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u542f\u52a8\u4e00\u4e2a ServerSocket"),(0,a.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u542f\u52a8 SOcket \u5bf9\u670d\u52a1\u5668\u8fdb\u884c\u901a\u4fe1\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u670d\u52a1\u5668\u7aef\u9700\u8981\u5bf9\u6bcf\u4e2a\u5ba2\u6237\u7b80\u5386\u4e00\u4e2a\u7a0b\u5e8f\u4e0e\u4e4b\u901a\u8baf"),(0,a.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u53d1\u8d77\u8bf7\u6c42\u540e\uff0c\u5148\u54a8\u8be2\u670d\u52a1\u5668\u662f\u5426\u6709\u7ebf\u7a0b\u54cd\u5e94\uff0c\u5982\u679c\u6ca1\u6709\u5219\u4f1a\u7b49\u5f85\uff0c\u6216\u5219\u62d2\u7edd"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u6709\u54cd\u5e94\uff0c\u5ba2\u6237\u7aef\u7ebf\u7a0b\u4f1a\u7b49\u5f85\u8bf7\u6c42\u7ed3\u675f\u540e\uff0c\u5728\u7ee7\u7eed\u6267\u884c")),(0,a.kt)("h3",{id:"java-bio-example"},"Java BIO Example"),(0,a.kt)("h4",{id:"\u670d\u52a1\u7aef"},"\u670d\u52a1\u7aef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package io.mvvm.bio;\n\nimport java.io.IOException;\nimport java.io.InputStream;\nimport java.net.ServerSocket;\nimport java.net.Socket;\nimport java.util.concurrent.ExecutorService;\nimport java.util.concurrent.Executors;\n\n/**\n * @program: Netty\n * @description: BIO \u670d\u52a1\u7aef\n * @author: \u6f58\n * @create: 2021-01-17 19:03\n **/\npublic class BioServer {\n\n    public static void main(String[] args) throws Exception {\n        // \u521b\u5efa\u4e00\u4e2a\u7ebf\u7a0b\u6c60, \u5982\u679c\u6709\u5ba2\u6237\u7aef\u8fde\u63a5\u5c31\u521b\u5efa\u4e00\u4e2a\u7ebf\u7a0b\u8fdb\u884c\u901a\u8baf\n        ExecutorService newCachedThreadPool = Executors.newCachedThreadPool();\n\n        // \u521b\u5efa ServerSocket\n        ServerSocket serverSocket = new ServerSocket(6666);\n        System.out.println("\u670d\u52a1\u7aef\u542f\u52a8...");\n\n        while (true) {\n            System.out.println("Thread ID\uff1a" + Thread.currentThread().getId() +\n                    " Thread Name\uff1a" + Thread.currentThread().getName());\n            // \u76d1\u542c\uff0c\u7b49\u5f85\u5ba2\u6237\u7aef\u8fde\u63a5\n            System.out.println("\u7b49\u5f85\u5ba2\u6237\u7aef\u8fde\u63a5");\n            final Socket socket = serverSocket.accept();\n            System.out.println("\u8fde\u63a5\u5230\u4e00\u4e2a\u5ba2\u6237\u7aef");\n\n            // \u521b\u5efa\u4e00\u4e2a\u7ebf\u7a0b\u8fdb\u884c\u901a\u8baf\n            newCachedThreadPool.execute(() -> {\n                handler(socket);\n            });\n        }\n    }\n\n    private static void handler(Socket socket) {\n        try {\n            System.out.println("Thread ID\uff1a" + Thread.currentThread().getId() +\n                    " Thread Name\uff1a" + Thread.currentThread().getName());\n            byte[] bytes = new byte[1024];\n            // \u901a\u8fc7 Socket \u83b7\u53d6\u8f93\u5165\u6d41\n            InputStream inputStream = socket.getInputStream();\n\n            // \u5faa\u73af\u8bfb\u53d6\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u6570\u636e\n            while (true) {\n                System.out.println("Thread ID\uff1a" + Thread.currentThread().getId() +\n                        " Thread Name\uff1a" + Thread.currentThread().getName());\n\n                System.out.println("\u8bfb\u53d6\u6570\u636e...");\n                int read = inputStream.read(bytes);\n                if (read != -1) {\n                    System.out.println(new String(bytes, 0, read));\n                } else {\n                    break;\n                }\n            }\n        } catch (Exception e) {\n            e.printStackTrace();\n        } finally {\n            try {\n                socket.close();\n            } catch (IOException e) {\n                e.printStackTrace();\n            }\n        }\n    }\n\n}\n\n')),(0,a.kt)("h4",{id:"\u5ba2\u6237\u7aef"},"\u5ba2\u6237\u7aef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package io.mvvm.bio;\n\nimport java.io.BufferedReader;\nimport java.io.IOException;\nimport java.io.InputStreamReader;\nimport java.io.PrintWriter;\nimport java.net.Socket;\nimport java.util.Scanner;\n\n/**\n * @program: Netty\n * @description: Bio \u5ba2\u6237\u7aef\n * @author: \u6f58\n * @create: 2021-01-17 19:19\n **/\npublic class BioClient {\n    public static void main(String[] args) {\n        // \u901a\u8fc7\u6784\u9020\u51fd\u6570\u521b\u5efaSocket\uff0c\u5e76\u4e14\u8fde\u63a5\u6307\u5b9a\u5730\u5740\u548c\u7aef\u53e3\u7684\u670d\u52a1\u7aef\n        try {\n            Socket socket = new Socket("127.0.0.1", 6666);\n\n            PrintWriter pw = null;\n            // \u5199\u6570\u636e\u5230\u670d\u52a1\u7aef\n            while (true) {\n                pw = new PrintWriter(socket.getOutputStream());\n                System.out.print("\u8bf7\u8f93\u5165\u9700\u8981\u53d1\u9001\u7684\u5185\u5bb9\uff1a");\n                pw.println(new Scanner(System.in).next());\n                pw.flush();\n            }\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}\n\n')),(0,a.kt)("h3",{id:"java-bio-\u5b58\u5728\u7684\u95ee\u9898"},"Java BIO \u5b58\u5728\u7684\u95ee\u9898"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6bcf\u6b21\u8bf7\u6c42\u90fd\u9700\u8981\u521b\u5efa\u72ec\u7acb\u7684\u7ebf\u7a0b\u548c\u5bf9\u5e94\u7684\u5ba2\u6237\u7aef\u8fdb\u884c\u6570\u636e\u4f20\u8f93"),(0,a.kt)("li",{parentName:"ol"},"\u5e76\u53d1\u6570\u8f83\u5927\u65f6\uff0c\u9700\u8981\u521b\u5efa\u5927\u91cf\u7ebf\u7a0b\u6765\u5904\u7406\u8fde\u63a5\uff0c\u7cfb\u7edf\u8d44\u6e90\u5360\u7528\u8f83\u5927"),(0,a.kt)("li",{parentName:"ol"},"\u8fde\u63a5\u5efa\u7acb\u540e\uff0c\u5982\u679c\u5f53\u524d\u7ebf\u7a0b\u5c55\u793a\u6ca1\u6709\u6570\u636e\u53ef\u8bfb\uff0c\u5219\u7ebf\u7a0b\u5c31\u963b\u585e\u5728 Read \u64cd\u4f5c\u4e0a\uff0c\u9020\u6210\u7ebf\u7a0b\u8d44\u6e90\u6d6a\u8d39")))}s.isMDXComponent=!0}}]);