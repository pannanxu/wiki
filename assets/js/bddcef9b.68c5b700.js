"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[757],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},E="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),E=d(n),u=a,p=E["".concat(c,".").concat(u)]||E[u]||s[u]||o;return n?r.createElement(p,l(l({ref:t},m),{},{components:n})):r.createElement(p,l({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[E]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={},l=void 0,i={unversionedId:"\u540e\u7aef/\u6570\u636e\u5e93/MySQL/SQLCode",id:"\u540e\u7aef/\u6570\u636e\u5e93/MySQL/SQLCode",title:"SQLCode",description:"SQL \u7247\u6bb5",source:"@site/docs/\u540e\u7aef/\u6570\u636e\u5e93/MySQL/SQLCode.md",sourceDirName:"\u540e\u7aef/\u6570\u636e\u5e93/MySQL",slug:"/\u540e\u7aef/\u6570\u636e\u5e93/MySQL/SQLCode",permalink:"/wiki/docs/\u540e\u7aef/\u6570\u636e\u5e93/MySQL/SQLCode",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"information_schema",permalink:"/wiki/docs/\u540e\u7aef/\u6570\u636e\u5e93/MySQL/information_schema"},next:{title:"\u5b89\u88c5",permalink:"/wiki/docs/\u540e\u7aef/\u6570\u636e\u5e93/MySQL/\u5b89\u88c5"}},c={},d=[{value:"SQL \u7247\u6bb5",id:"sql-\u7247\u6bb5",level:2},{value:"\u5206\u7ec4\u6392\u5e8f \u83b7\u53d6\u6700\u65b0\u4e00\u6761\u6570\u636e",id:"\u5206\u7ec4\u6392\u5e8f-\u83b7\u53d6\u6700\u65b0\u4e00\u6761\u6570\u636e",level:2},{value:"Limit\u65b9\u6cd5",id:"limit\u65b9\u6cd5",level:3},{value:"Max\u51fd\u6570",id:"max\u51fd\u6570",level:3},{value:"ONLY_FULL_GROUP_BY \u95ee\u9898",id:"only_full_group_by-\u95ee\u9898",level:2},{value:"\u4e50\u89c2\u9501",id:"\u4e50\u89c2\u9501",level:2},{value:"SQL \u7247\u6bb5",id:"sql-\u7247\u6bb5-1",level:2},{value:"\u65f6\u95f4\u6761\u4ef6",id:"\u65f6\u95f4\u6761\u4ef6",level:3}],m={toc:d},E="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(E,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"sql-\u7247\u6bb5"},"SQL \u7247\u6bb5"),(0,a.kt)("h2",{id:"\u5206\u7ec4\u6392\u5e8f-\u83b7\u53d6\u6700\u65b0\u4e00\u6761\u6570\u636e"},"\u5206\u7ec4\u6392\u5e8f \u83b7\u53d6\u6700\u65b0\u4e00\u6761\u6570\u636e"),(0,a.kt)("h3",{id:"limit\u65b9\u6cd5"},"Limit\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * \nFROM (\n  SELECT * FROM `table` ORDER BY update_time DESC LIMIT 10000\n) tab \nGROUP BY tab.parent_id\n")),(0,a.kt)("h3",{id:"max\u51fd\u6570"},"Max\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * \nFROM `table` tab\n    INNER JOIN (\n    SELECT MAX(id) as id \n    FROM `table` \n    GROUP BY open_id\n  ) itab \n    ON tab.id = itab.id\nORDER BY tab.update_time\n")),(0,a.kt)("h2",{id:"only_full_group_by-\u95ee\u9898"},"ONLY_FULL_GROUP_BY \u95ee\u9898"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"## 1\u3001\u6267\u884cSQL\u5f97\u5230\u4e00\u4e2a\u503c\nselect @@sql_mode;\n## 2\u3001\u5907\u4efd\u6b64\u503c\n## 3\u3001\u53bb\u6389ONLY_FULL_GROUP_BY\u540e\u7684\u503c\nSET GLOBAL sql_mode='\u53bb\u6389ONLY_FULL_GROUP_BY\u540e\u7684\u503c';\n\n## \u6216\u8005\u4e00\u952e\u6267\u884c\nSET SESSION sql_mode = (SELECT REPLACE(@@sql_mode, 'ONLY_FULL_GROUP_BY,', ''));\n\n## \u6216\u8005\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\n[mysqld]\nsql_mode=\n")),(0,a.kt)("h2",{id:"\u4e50\u89c2\u9501"},"\u4e50\u89c2\u9501"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ee5\u7248\u672c\u53f7\u4e3a\u9501, \u66f4\u65b0\u6570\u636e\u65f6\u5c06\u65e7\u7248\u672c\u53f7\u4f5c\u4e3a\u6761\u4ef6, \u5e76\u4fee\u6539\u7248\u672c\u53f7"),(0,a.kt)("p",{parentName:"blockquote"},"\u6b64 version \u5b57\u6bb5\u53ef\u4ee5\u5b9a\u4e49\u4e3a\u65f6\u95f4\u7b49\u5176\u4ed6\u7c7b\u578b\u6570\u636e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"update `table` set `name` = 'newValue', `version` = 2 where id = 1 and version = 1\n")),(0,a.kt)("h2",{id:"sql-\u7247\u6bb5-1"},"SQL \u7247\u6bb5"),(0,a.kt)("h3",{id:"\u65f6\u95f4\u6761\u4ef6"},"\u65f6\u95f4\u6761\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u4eca\u5929\nselect * from \u8868\u540d where to_days(\u65f6\u95f4\u5b57\u6bb5\u540d) = to_days(now());\n-- \u6628\u5929\nSELECT * FROM \u8868\u540d where DATE_SUB(CURDATE(), INTERVAL 1 DAY) <= date(\u65f6\u95f4\u5b57\u6bb5\u540d)\n-- \u8fd17\u5929\nSELECT * FROM \u8868\u540d where DATE_SUB(CURDATE(), INTERVAL 7 DAY) <= date(\u65f6\u95f4\u5b57\u6bb5\u540d)\n-- \u8fd130\u5929\nSELECT * FROM \u8868\u540d where DATE_SUB(CURDATE(), INTERVAL 30 DAY) <= date(\u65f6\u95f4\u5b57\u6bb5\u540d)\n-- \u672c\u6708\nSELECT * FROM \u8868\u540d WHERE DATE_FORMAT(\u65f6\u95f4\u5b57\u6bb5\u540d, '%Y%m') = DATE_FORMAT(CURDATE() , '%Y%m')\n-- \u4e0a\u4e00\u6708\nSELECT * FROM \u8868\u540d WHERE PERIOD_DIFF(date_format(now() , '%Y%m'), date_format(\u65f6\u95f4\u5b57\u6bb5\u540d, '%Y%m')) = 1\n-- \u67e5\u8be2\u672c\u5b63\u5ea6\u6570\u636e\nselect * from \u8868\u540d where QUARTER(\u65f6\u95f4\u5b57\u6bb5\u540d) = QUARTER(now());\n-- \u67e5\u8be2\u4e0a\u5b63\u5ea6\u6570\u636e\nselect * from \u8868\u540d where QUARTER(\u65f6\u95f4\u5b57\u6bb5\u540d) = QUARTER(DATE_SUB(now(), interval 1 QUARTER));\n-- \u67e5\u8be2\u672c\u5e74\u6570\u636e\nselect * from \u8868\u540d where YEAR(\u65f6\u95f4\u5b57\u6bb5\u540d) = YEAR(NOW());\n-- \u67e5\u8be2\u4e0a\u5e74\u6570\u636e\nselect * from \u8868\u540d where year(\u65f6\u95f4\u5b57\u6bb5\u540d) = year(date_sub(now(), interval 1 year));\n-- \u67e5\u8be2\u5f53\u524d\u8fd9\u5468\u7684\u6570\u636e\nSELECT * FROM \u8868\u540d WHERE YEARWEEK(date_format(\u65f6\u95f4\u5b57\u6bb5\u540d, '%Y-%m-%d')) = YEARWEEK(now());\n-- \u67e5\u8be2\u4e0a\u5468\u7684\u6570\u636e\nSELECT * FROM \u8868\u540d WHERE YEARWEEK(date_format(\u65f6\u95f4\u5b57\u6bb5\u540d, '%Y-%m-%d')) = YEARWEEK(now()) - 1;\n-- \u67e5\u8be2\u4e0a\u4e2a\u6708\u7684\u6570\u636e\nselect * from \u8868\u540d where date_format(\u65f6\u95f4\u5b57\u6bb5\u540d, '%Y-%m') = date_format(DATE_SUB(curdate(), INTERVAL 1 MONTH), '%Y-%m');\nselect * from \u8868\u540d where DATE_FORMAT(\u65f6\u95f4\u5b57\u6bb5\u540d, '%Y%m') = DATE_FORMAT(CURDATE(), '%Y%m') ; \nselect * from \u8868\u540d where WEEKOFYEAR(FROM_UNIXTIME(\u65f6\u95f4\u5b57\u6bb5\u540d, '%y-%m-%d')) = WEEKOFYEAR(now()) \nselect * from \u8868\u540d where MONTH(FROM_UNIXTIME(\u65f6\u95f4\u5b57\u6bb5\u540d, '%y-%m-%d')) = MONTH(now()) \nselect * from \u8868\u540d where YEAR(FROM_UNIXTIME(\u65f6\u95f4\u5b57\u6bb5\u540d, '%y-%m-%d')) = YEAR(now()) and MONTH(FROM_UNIXTIME(\u65f6\u95f4\u5b57\u6bb5\u540d, '%y-%m-%d')) = MONTH(now()) \nselect * from \u8868\u540d where \u65f6\u95f4\u5b57\u6bb5\u540d between \u4e0a\u6708\u6700\u540e\u4e00\u5929 and \u4e0b\u6708\u7b2c\u4e00\u5929\n-- \u67e5\u8be2\u5f53\u524d\u6708\u4efd\u7684\u6570\u636e\nselect * from \u8868\u540d where date_format(\u65f6\u95f4\u5b57\u6bb5\u540d, '%Y-%m') = date_format(now(),'%Y-%m')\n")))}s.isMDXComponent=!0}}]);