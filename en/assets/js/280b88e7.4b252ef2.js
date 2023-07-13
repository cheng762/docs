"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9090],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,k=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(k,l(l({ref:t},i),{},{components:n})):o.createElement(k,l({ref:t},i))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=h;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[d]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9595:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={id:"Join_Dev_Network",title:"Dev Network",sidebar_label:"Dev Network"},l=void 0,p={unversionedId:"Join_Dev_Network",id:"Join_Dev_Network",isDocsHomePage:!1,title:"Dev Network",description:"This article will describe how to debug local applications by connecting to the PlatON DevNet(development Network).",source:"@site/../docs/\u63a5\u5165\u5f00\u53d1\u7f51.md",sourceDirName:".",slug:"/Join_Dev_Network",permalink:"/docs/en/Join_Dev_Network",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/\u63a5\u5165\u5f00\u53d1\u7f51.md",version:"current",frontMatter:{id:"Join_Dev_Network",title:"Dev Network",sidebar_label:"Dev Network"},sidebar:"docs",previous:{title:"Development guide",permalink:"/docs/en/PlatON_Overview_DevGuide"},next:{title:"Private Network",permalink:"/docs/en/Build_Private_Chain"}},c=[{value:"How to access the dev network to debug local applications?",id:"how-to-access-the-dev-network-to-debug-local-applications",children:[{value:"<strong>Step 1: Connect to the DevNet via RPC address</strong>",id:"step-1-connect-to-the-devnet-via-rpc-address",children:[]},{value:"<strong>Step 2: Apply for DevNet Test Token</strong>",id:"step-2-apply-for-devnet-test-token",children:[]}]},{value:"How to deploy a devnet node?",id:"how-to-deploy-a-devnet-node",children:[]}],s={toc:c},i="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(i,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article will describe how to debug local applications by connecting to the PlatON DevNet(development Network)."),(0,a.kt)("p",null,"ChainId: 2206132"),(0,a.kt)("p",null,"openapi\uff1a"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://devnet2openapi.platon.network/rpc"},"https://devnet2openapi.platon.network/rpc")," or wss://devnet2openapi.platon.network/ws"),(0,a.kt)("p",null,"faucet\uff1a"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://devnet2faucet.platon.network/faucet"},"https://devnet2faucet.platon.network/faucet")),(0,a.kt)("p",null,"explorer\uff1a"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://devnet2scan.platon.network"},"https://devnet2scan.platon.network")),(0,a.kt)("h2",{id:"how-to-access-the-dev-network-to-debug-local-applications"},"How to access the dev network to debug local applications?"),(0,a.kt)("h3",{id:"step-1-connect-to-the-devnet-via-rpc-address"},(0,a.kt)("strong",{parentName:"h3"},"Step 1: Connect to the DevNet via RPC address")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://devnet2openapi.platon.network/rpc or wss://devnet2openapi.platon.network/ws\n")),(0,a.kt)("h4",{id:"access-method-1--connect-to-the-devnet-via-the-local-platon-node"},"Access method 1:  Connect to the DevNet via the local PlatON node"),(0,a.kt)("p",null,"on the ubuntu 18.04 server, download and install the PlatON binary with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wget https://download.platon.network/platon/platon/1.4.0/platon -P /usr/bin    \n")),(0,a.kt)("p",null,"Connect to the development network by."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"platon attach https://devnet2openapi.platon.network/rpc\n")),(0,a.kt)("h4",{id:"access-method-2-connect-to-the-platon-devnet-through-the-sdks"},"Access method 2: Connect to the PlatON DevNet through the SDKs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use the ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/Java_SDK"},"Java SDK")," to connect to the DevNet, for example, as follows.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'Web3j platonWeb3j = Web3j.build(new HttpService("https://devnet2openapi.platon.network/rpc"));\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/Python_SDK"},"Python SDK")," to access the DevNet, the example is as follows.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'w3 = Web3(HTTPProvider("https://devnet2openapi.platon.network/rpc"))\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/JS_SDK"},"JS SDK")," to access the DevNet, the example is as follows.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var Web3 = require('web3');\nvar web3 = new Web3('http://https://devnet2openapi.platon.network/rpc');\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/Json_Rpc"},"JSON RPC")," to access the DevNet, the example is as follows.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl"},'curl -X POST -H \'content-type: application/json\' --data \'{"jsonrpc": "2.0", "method": "web3_clientVersion", "params":[], "id":67}\' https://devnet2openapi.platon.network/rpc\n')),(0,a.kt)("p",null,"Not limited to the above language SDKs, you also have access through SDKs in other languages."),(0,a.kt)("h3",{id:"step-2-apply-for-devnet-test-token"},(0,a.kt)("strong",{parentName:"h3"},"Step 2: Apply for DevNet Test Token")),(0,a.kt)("p",null,"Click ",(0,a.kt)("a",{parentName:"p",href:"https://devnet2faucet.platon.network/faucet/"},"faucet")," to receive the Test Token. If you have a large Test Token request, please send an email to ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@latticex.foundation"},"support@latticex.foundation")," using the following format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," Title: PlatON Development Network Token Request\n Your Name:\n Contact information\uff1a\n Wechart ID (or other instant messaging software)\uff1a\n Amount\uff1a\n Use\uff1a\n Receiving addressA:\n Remarks:\n")),(0,a.kt)("p",null,"After successfully accessing the DevNet, you can send transactions after completing the test Token collection to start your test journey and can check the transactions in ",(0,a.kt)("a",{parentName:"p",href:"https://devnet2scan.platon.network"},"DevNet Browser"),"."),(0,a.kt)("h2",{id:"how-to-deploy-a-devnet-node"},"How to deploy a devnet node?"),(0,a.kt)("p",null,"If you want to deploy a DevNet verification node, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/Become_PlatON_Dev_Verification"},"Run a dev node"),"."))}d.isMDXComponent=!0}}]);