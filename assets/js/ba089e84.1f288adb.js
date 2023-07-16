"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9852],{3905:(n,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var t=r(7294);function o(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function a(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function l(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function i(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var p=t.createContext({}),s=function(n){var e=t.useContext(p),r=e;return n&&(r="function"==typeof n?n(e):l(l({},e),n)),r},c=function(n){var e=s(n.components);return t.createElement(p.Provider,{value:e},n.children)},u="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},g=t.forwardRef((function(n,e){var r=n.components,o=n.mdxType,a=n.originalType,p=n.parentName,c=i(n,["components","mdxType","originalType","parentName"]),u=s(r),g=o,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||a;return r?t.createElement(m,l(l({ref:e},c),{},{components:r})):t.createElement(m,l({ref:e},c))}));function m(n,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=r.length,l=new Array(a);l[0]=g;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=n,i[u]="string"==typeof n?n:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3710:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var t=r(7462),o=(r(7294),r(3905));const a={},l="Consul",i={unversionedId:"\u540e\u7aef/SpringCloud/SpringCloudConsul",id:"\u540e\u7aef/SpringCloud/SpringCloudConsul",title:"Consul",description:"\u4ec0\u4e48\u662fConsul",source:"@site/docs/\u540e\u7aef/SpringCloud/SpringCloudConsul.md",sourceDirName:"\u540e\u7aef/SpringCloud",slug:"/\u540e\u7aef/SpringCloud/SpringCloudConsul",permalink:"/docs/\u540e\u7aef/SpringCloud/SpringCloudConsul",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Config",permalink:"/docs/\u540e\u7aef/SpringCloud/SpringCloudConfig"},next:{title:"Gateway",permalink:"/docs/\u540e\u7aef/SpringCloud/SpringCloudGateway"}},p={},s=[{value:"\u4ec0\u4e48\u662fConsul",id:"\u4ec0\u4e48\u662fconsul",level:2},{value:"\u5b89\u88c5Consul",id:"\u5b89\u88c5consul",level:2},{value:"\u4e0b\u8f7dConsul",id:"\u4e0b\u8f7dconsul",level:3},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:3},{value:"\u6ce8\u518c\u670d\u52a1",id:"\u6ce8\u518c\u670d\u52a1",level:2},{value:"\u521b\u5efa\u5de5\u7a0b",id:"\u521b\u5efa\u5de5\u7a0b",level:3},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:3},{value:"\u6d88\u8d39\u670d\u52a1",id:"\u6d88\u8d39\u670d\u52a1",level:2},{value:"\u521b\u5efa\u5de5\u7a0b",id:"\u521b\u5efa\u5de5\u7a0b-1",level:3},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5-1",level:3}],c={toc:s},u="wrapper";function d(n){let{components:e,...r}=n;return(0,o.kt)(u,(0,t.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"consul"},"Consul"),(0,o.kt)("h2",{id:"\u4ec0\u4e48\u662fconsul"},"\u4ec0\u4e48\u662fConsul"),(0,o.kt)("p",null,"consul \u662f\u4e00\u4e2a\u652f\u6301\u591a\u6570\u636e\u4e2d\u5fc3\u5206\u5e03\u5f0f\u9ad8\u53ef\u7528\uff0c\u7528\u4e8e\u670d\u52a1\u53d1\u73b0\u548c\u914d\u7f6e\u5171\u4eab\u7684\u5de5\u5177\u3002"),(0,o.kt)("p",null,"Consul\u5305\u542b\u591a\u4e2a\u7ec4\u4ef6,\u4f46\u662f\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53,\u4e3a\u4f60\u7684\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u670d\u52a1\u53d1\u73b0\u548c\u670d\u52a1\u914d\u7f6e\u7684\u5de5\u5177.\u4ed6\u63d0\u4f9b\u4ee5\u4e0b\u5173\u952e\u7279\u6027:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u670d\u52a1\u53d1\u73b0")," Consul\u7684\u5ba2\u6237\u7aef\u53ef\u7528\u63d0\u4f9b\u4e00\u4e2a\u670d\u52a1,\u6bd4\u5982 api \u6216\u8005mysql ,\u53e6\u5916\u4e00\u4e9b\u5ba2\u6237\u7aef\u53ef\u7528\u4f7f\u7528Consul\u53bb\u53d1\u73b0\u4e00\u4e2a\u6307\u5b9a\u670d\u52a1\u7684\u63d0\u4f9b\u8005.\u901a\u8fc7DNS\u6216\u8005HTTP\u5e94\u7528\u7a0b\u5e8f\u53ef\u7528\u5f88\u5bb9\u6613\u7684\u627e\u5230\u4ed6\u6240\u4f9d\u8d56\u7684\u670d\u52a1."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5065\u5eb7\u68c0\u67e5")," Consul\u5ba2\u6237\u7aef\u53ef\u7528\u63d0\u4f9b\u4efb\u610f\u6570\u91cf\u7684\u5065\u5eb7\u68c0\u67e5,\u6307\u5b9a\u4e00\u4e2a\u670d\u52a1(\u6bd4\u5982:webserver\u662f\u5426\u8fd4\u56de\u4e86200 OK \u72b6\u6001\u7801)\u6216\u8005\u4f7f\u7528\u672c\u5730\u8282\u70b9(\u6bd4\u5982:\u5185\u5b58\u4f7f\u7528\u662f\u5426\u5927\u4e8e90%). \u8fd9\u4e2a\u4fe1\u606f\u53ef\u7531operator\u7528\u6765\u76d1\u89c6\u96c6\u7fa4\u7684\u5065\u5eb7.\u88ab\u670d\u52a1\u53d1\u73b0\u7ec4\u4ef6\u7528\u6765\u907f\u514d\u5c06\u6d41\u91cf\u53d1\u9001\u5230\u4e0d\u5065\u5eb7\u7684\u4e3b\u673a."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Key/Value\u5b58\u50a8")," \u5e94\u7528\u7a0b\u5e8f\u53ef\u7528\u6839\u636e\u81ea\u5df1\u7684\u9700\u8981\u4f7f\u7528Consul\u7684\u5c42\u7ea7\u7684Key/Value\u5b58\u50a8.\u6bd4\u5982\u52a8\u6001\u914d\u7f6e,\u529f\u80fd\u6807\u8bb0,\u534f\u8c03,\u9886\u8896\u9009\u4e3e\u7b49\u7b49,\u7b80\u5355\u7684HTTP API\u8ba9\u4ed6\u66f4\u6613\u4e8e\u4f7f\u7528."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u591a\u6570\u636e\u4e2d\u5fc3"),": Consul\u652f\u6301\u5f00\u7bb1\u5373\u7528\u7684\u591a\u6570\u636e\u4e2d\u5fc3.\u8fd9\u610f\u5473\u7740\u7528\u6237\u4e0d\u9700\u8981\u62c5\u5fc3\u9700\u8981\u5efa\u7acb\u989d\u5916\u7684\u62bd\u8c61\u5c42\u8ba9\u4e1a\u52a1\u6269\u5c55\u5230\u591a\u4e2a\u533a\u57df."),(0,o.kt)("h2",{id:"\u5b89\u88c5consul"},"\u5b89\u88c5Consul"),(0,o.kt)("h3",{id:"\u4e0b\u8f7dconsul"},"\u4e0b\u8f7dConsul"),(0,o.kt)("p",null,"\u8fdb\u5165",(0,o.kt)("a",{parentName:"p",href:"https://www.consul.io/downloads"},"https://www.consul.io/downloads")),(0,o.kt)("p",null,"\u9009\u62e9\u81ea\u5df1\u7684\u7cfb\u7edf\u540e\u4e0b\u8f7d\uff0c\u8fd9\u91cc\u4ee5Windows\u7248\u76841.7.1\u7248\u672c\u6f14\u793a"),(0,o.kt)("p",null,"\u4e0b\u8f7d\u5b8c\u6bd5\u540e\u89e3\u538b\u5f97\u5230\u4e00\u4e2aconsul.exe"),(0,o.kt)("h3",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),(0,o.kt)("p",null,"\u5728cmd\u4e2d\u6267\u884c\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"consul agent -dev")),(0,o.kt)("p",null,"\u6267\u884c\u540e\u5982\u679c\u770b\u5230\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"Consul agent running!"),"\u5219\u4ee3\u8868\u8fd0\u884c\u6210\u529f"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-ages-test0001.oss-cn-hangzhou.aliyuncs.com/images/image-20201008004146313.png",alt:"image-20201008004146313"})),(0,o.kt)("p",null,"\u7136\u540e\u6211\u4eec\u8bbf\u95ee\u5730\u5740\uff1a",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:8500/"},"http://127.0.0.1:8500/")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-ages-test0001.oss-cn-hangzhou.aliyuncs.com/images/image-20201008004210732.png",alt:"image-20201008004210732"})),(0,o.kt)("h2",{id:"\u6ce8\u518c\u670d\u52a1"},"\u6ce8\u518c\u670d\u52a1"),(0,o.kt)("h3",{id:"\u521b\u5efa\u5de5\u7a0b"},"\u521b\u5efa\u5de5\u7a0b"),(0,o.kt)("p",null,"\u9996\u5148\u5728\u7236\u5de5\u7a0b\u52a0\u5165\u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"}," <spring-cloud-consul-discovery.version>2.2.0.RELEASE</spring-cloud-consul-discovery.version>\n <dependencyManagement>\n         <dependencies>\n             <dependency>\n                 <groupId>org.springframework.cloud</groupId>\n                 <artifactId>spring-cloud-starter-consul-discovery</artifactId>\n                 <version>${spring-cloud-consul-discovery.version}</version>\n             </dependency>\n         </dependencies>\n </dependencyManagement>\n")),(0,o.kt)("p",null,"\u521b\u5efa\u5b50\u5de5\u7a0b\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"spring-cloud-consul-discovery-provider")),(0,o.kt)("p",null,"pom"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"}," <dependencies>\n     <dependency>\n         <groupId>org.springframework.boot</groupId>\n         <artifactId>spring-boot-starter-web</artifactId>\n     </dependency>\n \n     \x3c!-- consul\u6ce8\u518c\u4e2d\u5fc3 --\x3e\n     <dependency>\n         <groupId>org.springframework.cloud</groupId>\n         <artifactId>spring-cloud-starter-consul-discovery</artifactId>\n     </dependency>\n \n     \x3c!-- \u5065\u5eb7\u68c0\u67e5 --\x3e\n     <dependency>\n         <groupId>org.springframework.boot</groupId>\n         <artifactId>spring-boot-starter-actuator</artifactId>\n     </dependency>\n </dependencies>\n")),(0,o.kt)("p",null,"application.yml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"}," server:\n   port: 4444\n spring:\n   application:\n     name: spring-cloud-consul-discovery-provider\n   cloud:\n     consul:\n       host: 127.0.0.1 # consul\u6ce8\u518c\u4e2d\u5fc3\u7684\u5730\u5740\n       port: 8500      #              \u7684\u7aef\u53e3\n \n management:\n   endpoints:\n     web:\n       exposure:\n         include: '*'\n")),(0,o.kt)("p",null,"ConsulDiscoveryProviderApplication.java"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"}," package io.mvvm;\n \n import org.springframework.boot.SpringApplication;\n import org.springframework.boot.autoconfigure.SpringBootApplication;\n import org.springframework.cloud.client.discovery.EnableDiscoveryClient;\n \n @SpringBootApplication\n @EnableDiscoveryClient\n public class ConsulDiscoveryProviderApplication {\n \n     public static void main(String[] args) {\n         SpringApplication.run(ConsulDiscoveryProviderApplication.class,args);\n     }\n \n }\n")),(0,o.kt)("p",null,"DemoController.java"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},' package io.mvvm.controller;\n \n import org.springframework.web.bind.annotation.GetMapping;\n import org.springframework.web.bind.annotation.PathVariable;\n import org.springframework.web.bind.annotation.RestController;\n \n @RestController\n public class DemoController {\n \n     @GetMapping("/get/{str}")\n     public String get(@PathVariable("str") String str){\n         System.out.println("provider");\n         System.out.println("------" + str + "-------");\n         return str;\n     }\n \n }\n')),(0,o.kt)("h3",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,o.kt)("p",null,"\u542f\u52a8\u670d\u52a1\u540e\u8bbf\u95eeConsul\u6ce8\u518c\u4e2d\u5fc3\u7684\u9762\u677f\uff0c\u67e5\u770b\u662f\u5426\u6ce8\u518c\u6210\u529f"),(0,o.kt)("p",null,"\uff08\u5ffd\u7565\u5176\u4ed6\u7684\u670d\u52a1\uff0c\u505a\u5230\u8fd9\u4e00\u6b65\u53ea\u4f1a\u6709\u4e24\u4e2aservices\uff09"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-ages-test0001.oss-cn-hangzhou.aliyuncs.com/images/image-20201008013524909.png",alt:"image-20201008013524909"})),(0,o.kt)("h2",{id:"\u6d88\u8d39\u670d\u52a1"},"\u6d88\u8d39\u670d\u52a1"),(0,o.kt)("h3",{id:"\u521b\u5efa\u5de5\u7a0b-1"},"\u521b\u5efa\u5de5\u7a0b"),(0,o.kt)("p",null,"\u521b\u5efa\u5b50\u5de5\u7a0b\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"spring-cloud-consul-discovery-consumer")),(0,o.kt)("p",null,"pom"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"}," <dependencies>\n     <dependency>\n         <groupId>org.springframework.boot</groupId>\n         <artifactId>spring-boot-starter-web</artifactId>\n     </dependency>\n \n     \x3c!-- consul\u6ce8\u518c\u4e2d\u5fc3 --\x3e\n     <dependency>\n         <groupId>org.springframework.cloud</groupId>\n         <artifactId>spring-cloud-starter-consul-discovery</artifactId>\n     </dependency>\n \n     \x3c!-- \u5065\u5eb7\u68c0\u67e5 --\x3e\n     <dependency>\n         <groupId>org.springframework.boot</groupId>\n         <artifactId>spring-boot-starter-actuator</artifactId>\n     </dependency>\n \n     \x3c!-- openfeign --\x3e\n     <dependency>\n         <groupId>org.springframework.cloud</groupId>\n         <artifactId>spring-cloud-starter-openfeign</artifactId>\n     </dependency>\n </dependencies>\n")),(0,o.kt)("p",null,"application.yml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"}," server:\n   port: 4433\n spring:\n   application:\n     name: spring-cloud-consul-discovery-consumer\n   cloud:\n     consul:\n       host: 127.0.0.1 # consul\u6ce8\u518c\u4e2d\u5fc3\u7684\u5730\u5740\n       port: 8500      #              \u7684\u7aef\u53e3\n \n management:\n   endpoints:\n     web:\n       exposure:\n         include: '*'\n")),(0,o.kt)("p",null,"ConsulDiscoveryConsumerApplication.java"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},' package io.mvvm;\n \n import org.springframework.boot.SpringApplication;\n import org.springframework.boot.autoconfigure.SpringBootApplication;\n import org.springframework.cloud.client.discovery.EnableDiscoveryClient;\n import org.springframework.cloud.openfeign.EnableFeignClients;\n \n @SpringBootApplication\n @EnableDiscoveryClient\n @EnableFeignClients(basePackages = "io.mvvm.client")    // \u626b\u63cfopenfeign\u7684\u5305\n public class ConsulDiscoveryConsumerApplication {\n \n     public static void main(String[] args) {\n         SpringApplication.run(ConsulDiscoveryConsumerApplication.class,args);\n     }\n \n }\n')),(0,o.kt)("p",null,"DemoClient.java"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package io.mvvm.client;\n\nimport org.springframework.cloud.openfeign.FeignClient;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.PathVariable;\n\n@FeignClient("spring-cloud-consul-discovery-provider")\npublic interface DemoClient {\n\n    @GetMapping("/get/{str}")\n    String get(@PathVariable("str") String str);\n\n}\n')),(0,o.kt)("p",null,"DemoController.java"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package io.mvvm.controller;\n\nimport io.mvvm.client.DemoClient;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.RestController;\n\nimport javax.annotation.Resource;\n\n@RestController\npublic class DemoController {\n\n    @Resource\n    private DemoClient demoClient;\n\n    @GetMapping("/consumer/{str}")\n    public String get(@PathVariable("str") String str){\n        System.out.println("consumer");\n        String client = demoClient.get(str);\n        System.out.println("------" + client + "-------");\n        return client;\n    }\n\n}\n')),(0,o.kt)("h3",{id:"\u6d4b\u8bd5-1"},"\u6d4b\u8bd5"),(0,o.kt)("p",null,"\u8bbf\u95eehttp://localhost:4433/getc/123"),(0,o.kt)("p",null,"\u67e5\u770b\u662f\u5426\u8c03\u7528\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"provider"),"\u670d\u52a1\u7684controller"),(0,o.kt)("p",null,"\u4ee3\u7801\u5730\u5740\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/aumu/spring-cloud-alibaba-demo"},"https://gitee.com/aumu/spring-cloud-alibaba-demo")))}d.isMDXComponent=!0}}]);