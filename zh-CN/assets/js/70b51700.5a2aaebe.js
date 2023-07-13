"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5259],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>k});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var o=r.createContext({}),u=function(n){var e=r.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},s=function(n){var e=u(n.components);return r.createElement(o.Provider,{value:e},n.children)},c="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,l=n.originalType,o=n.parentName,s=p(n,["components","mdxType","originalType","parentName"]),c=u(t),m=a,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return t?r.createElement(k,i(i({ref:e},s),{},{components:t})):r.createElement(k,i({ref:e},s))}));function k(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var l=t.length,i=new Array(l);i[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=n,p[c]="string"==typeof n?n:a,i[1]=p;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6791:(n,e,t)=>{t.r(e),t.d(e,{contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=t(7462),a=(t(7294),t(3905));const l={id:"PRC20_contract",title:"PRC-20",sidebar_label:"PRC-20"},i=void 0,p={unversionedId:"PRC20_contract",id:"PRC20_contract",isDocsHomePage:!1,title:"PRC-20",description:"PRC-20\u5408\u7ea6",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/prc-20.md",sourceDirName:".",slug:"/PRC20_contract",permalink:"/docs/zh-CN/PRC20_contract",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/website/i18n/zh-CN/docusaurus-plugin-content-docs/current/prc-20.md",version:"current",frontMatter:{id:"PRC20_contract",title:"PRC-20",sidebar_label:"PRC-20"},sidebar:"docs",previous:{title:"Samurai API",permalink:"/docs/zh-CN/Samurai_API"},next:{title:"PRC-721",permalink:"/docs/zh-CN/PRC721_contract"}},o=[{value:"PRC-20\u5408\u7ea6",id:"prc-20\u5408\u7ea6",children:[{value:"\u534f\u8bae\u6807\u51c6",id:"\u534f\u8bae\u6807\u51c6",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u67e5\u770b",id:"\u67e5\u770b",children:[]},{value:"\u5408\u7ea6\u53d1\u884c",id:"\u5408\u7ea6\u53d1\u884c",children:[]},{value:"\u8c03\u7528\u65b9\u6cd5",id:"\u8c03\u7528\u65b9\u6cd5",children:[]}]}],u={toc:o},s="wrapper";function c(n){let{components:e,...t}=n;return(0,a.kt)(s,(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prc-20\u5408\u7ea6"},"PRC-20\u5408\u7ea6"),(0,a.kt)("p",null,"PRC-20\u662f\u5728PlatON\u4e0a\u901a\u8fc7\u667a\u80fd\u5408\u7ea6\u5b9e\u73b0\u4ee3\u5e01API\u7684\u4e00\u5957\u6807\u51c6\uff0c\u5b83\u63d0\u4f9b\u7684\u529f\u80fd\u5305\u62ec\u4ee3\u5e01\u8f6c\u8d26\u3001\u67e5\u8be2\u4ee3\u5e01\u4f59\u989d\u4ee5\u53ca\u7f51\u7edc\u4e0a\u53ef\u7528\u7684\u4ee3\u5e01\u603b\u4f9b\u5e94\u91cf\u7b49\u63a5\u53e3\uff0c\u4e0e",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-20"},"ERC-20"),"\u5b8c\u5168\u517c\u5bb9\u3002"),(0,a.kt)("h3",{id:"\u534f\u8bae\u6807\u51c6"},"\u534f\u8bae\u6807\u51c6"),(0,a.kt)("p",null,"PRC-20\u534f\u8bae\u662f\u5bf9\u53ef\u5151\u6362\u540c\u8d28\u4ee3\u5e01\uff08Fungible Tokens\uff09\u5b9a\u4e49\u7684\u6807\u51c6\uff0c\u540c\u8d28\u4ee3\u5e01\u6bcf\u4e2aToken\u4e0e\u53e6\u5916Token\u5177\u6709\u5b8c\u5168\u76f8\u540c\u7684\u7c7b\u578b\u548c\u4ef7\u503c\uff0c\u8be5\u5408\u7ea6\u6807\u51c6\u4e2d\u89c4\u5b9a\u4e86\u5408\u7ea6\u5b9a\u4e49\u7684\u51fd\u6570\u3001\u4e8b\u4ef6\u7b49\uff0c\u6240\u6709\u9075\u5b88\u8fd9\u4e00\u6807\u51c6\u7f16\u5199\u7684\u5408\u7ea6\u90fd\u88ab\u8ba4\u4e3a\u662f\u4e00\u4e2aPRC-20\u5408\u7ea6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"contract PRC20 {\n\n    //required\n    function totalSupply() constant returns (uint theTotalSupply);\n    function balanceOf(address _owner) constant returns (uint balance);\n    function transfer(address _to, uint _value) returns (bool success);\n    function transferFrom(address _from, address _to, uint _value) returns (bool success);\n    function approve(address _spender, uint _value) returns (bool success);\n    function allowance(address _owner, address _spender) constant returns (uint remaining);\n    \n    //optional\n    function name() public view returns (string);\n    function symbol() public view returns (string);\n    function decimals() public view returns (uint8);\n    \n    //events\n    event Transfer(address indexed _from, address indexed _to, uint _value);\n    event Approval(address indexed _owner, address indexed _spender, uint _value);\n}\n")),(0,a.kt)("h4",{id:"\u5fc5\u987b\u5b9e\u73b0\u7684\u63a5\u53e3"},"\u5fc5\u987b\u5b9e\u73b0\u7684\u63a5\u53e3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"totalSupply")),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u8fd4\u56de\u4ee4\u724c\u603b\u7684\u53d1\u884c\u91cf\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"balanceOf")),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u8fd4\u56de\u67e5\u8be2\u8d26\u6237\u7684\u4ee4\u724c\u4f59\u989d\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"transfer")),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u7528\u6765\u4ece\u667a\u80fd\u5408\u7ea6\u5730\u5740\u91cc\u8f6c\u8d26\u4ee4\u724c\u5230\u6307\u5b9a\u8d26\u6237\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"approve")),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u7528\u6765\u6388\u6743\u7b2c\u4e09\u65b9\uff08\u4f8b\u5982Dapp\uff09\u4ece\u4ee4\u724c\u62e5\u6709\u8005\u8d26\u6237\u8f6c\u8d26\u4ee4\u724c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"transferFrom")),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u4f9b\u7b2c\u4e09\u65b9\u4ece\u4ee4\u724c\u62e5\u6709\u8005\u8d26\u6237\u8f6c\u8d26\u4ee4\u724c\u3002\u9700\u8981\u914d\u5408approve()\u65b9\u6cd5\u4f7f\u7528\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"allowance")),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u7528\u6765\u67e5\u8be2\u53ef\u4f9b\u7b2c\u4e09\u65b9\u8f6c\u8d26\u7684\u67e5\u8be2\u8d26\u6237\u7684\u4ee4\u724c\u4f59\u989d\u3002"),(0,a.kt)("h4",{id:"\u53ef\u9009\u5b9e\u73b0\u7684\u63a5\u53e3"},"\u53ef\u9009\u5b9e\u73b0\u7684\u63a5\u53e3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name")),(0,a.kt)("p",null,"\u8fd4\u56de\u4ee4\u724c\u540d\u79f0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"symbol")),(0,a.kt)("p",null,"\u8fd4\u56de\u4ee4\u724c\u7b26\u53f7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"decimals")),(0,a.kt)("p",null,"\u8fd4\u56de\u4ee4\u724c\u7cbe\u5ea6"),(0,a.kt)("h4",{id:"\u4e8b\u4ef6"},"\u4e8b\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Transfer")),(0,a.kt)("p",null,"\u5f53\u901a\u8bc1\u88ab\u6210\u529f\u8f6c\u8d26\u540e\uff0c\u4f1a\u89e6\u53d1Transfer\u8f6c\u8d26\u4e8b\u4ef6\uff0c\u5728\u94fe\u4e0a\u8bb0\u5f55\u8f6c\u8d26\u4fe1\u606f\u65e5\u5fd7\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Approval")),(0,a.kt)("p",null,"\u5f53approve()\u65b9\u6cd5\u88ab\u6210\u529f\u8c03\u7528\u540e\uff0c\u4f1a\u89e6\u53d1Approval\u4e8b\u4ef6\uff0c\u5728\u94fe\u4e0a\u8bb0\u5f55\u6388\u6743\u4fe1\u606f\u65e5\u5fd7\u3002"),(0,a.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("p",null,"PRC-20\u6807\u51c6\u4e0eERC-20\u5b8c\u5168\u517c\u5bb9\uff0c\u793a\u4f8b\u53ef\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/openzeppelin-contracts/tree/9b3710465583284b8c4c5d2245749246bb2e0094/contracts/token/ERC20"},"\u8fd9\u91cc"),"\u3002"),(0,a.kt)("h3",{id:"\u67e5\u770b"},"\u67e5\u770b"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7PlatON",(0,a.kt)("a",{parentName:"p",href:"https://scan.platon.network/tokens/tokensTranfer/prc20"},"\u6d4f\u89c8\u5668"),"\u67e5\u770b\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"https://devdocs.platon.network/docs/zh-CN/ATON-user-manual/"},"ATON"),"\u67e5\u770bPRC-20\u5408\u7ea6\u4ea4\u6613\u3002"),(0,a.kt)("h3",{id:"\u5408\u7ea6\u53d1\u884c"},"\u5408\u7ea6\u53d1\u884c"),(0,a.kt)("p",null,"\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/docs/zh-CN/Solidity_Dev_Manual#%E5%85%A5%E9%97%A8%E6%89%8B%E5%86%8C"},"Solidity\u5408\u7ea6\u5165\u95e8\u624b\u518c"),"\u3002"),(0,a.kt)("h3",{id:"\u8c03\u7528\u65b9\u6cd5"},"\u8c03\u7528\u65b9\u6cd5"),(0,a.kt)("p",null,"\u4ee5python\u4e3a\u4f8b\uff1a"),(0,a.kt)("h4",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,a.kt)("p",null,"\u4f7f\u7528\u4e0b\u5217\u547d\u4ee4\uff0c\u5b89\u88c5PlatON python library\uff0c\u5efa\u8bae Python \u7248\u672c3.7.5+:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pip install client-sdk-python\n")),(0,a.kt)("p",null,"\u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\uff0c\u90e8\u5206\u4f9d\u8d56\u5305\u4f1a\u9700\u8981c++14 \u7f16\u8bd1\uff0c\u8bf7\u5728\u770b\u5230\u76f8\u5173\u63d0\u793a\u540e\uff0c\u4e0b\u8f7d",(0,a.kt)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkId=691126"},"cppbuildtools"),"\uff0c\u4f7f\u7528\u9ed8\u8ba4\u503c\u5b89\u88c5\u540e\uff0c\u91cd\u65b0\u6267\u884cpip\u5b89\u88c5\u547d\u4ee4\u5373\u53ef\u3002"),(0,a.kt)("h4",{id:"\u5b9e\u4f8b\u5316\u5408\u7ea6"},"\u5b9e\u4f8b\u5316\u5408\u7ea6"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u4e3apython\u4ee3\u7801\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from client_sdk_python import Web3, HTTPProvider\n\nrpc, chain_id, hrp = \'http://127.0.0.1:6789\', 210425, \'lat\'\nw3 = Web3(HTTPProvider(rpc), chain_id=chain_id, hrp_type=hrp)\nabi = [\n  {\n    "inputs":[\n      {"internalType":"uint256", "name":"initialSupply", "type":"uint256"},\n      {"internalType":"string", "name":"tokenName", "type":"string"},\n      {"internalType":"string", "name":"tokenSymbol", "type":"string"}\n    ],\n    "stateMutability":"nonpayable",\n    "type":"constructor"\n  },\n  {\n    "inputs":[],\n    "name":"totalSupply",\n    "outputs":[{"internalType":"uint256", "name":"", "type":"uint256"}],\n    "stateMutability":"view",\n    "type":"function"\n  },\n  {\n    "inputs":[{"internalType":"address", "name":"", "type":"address"}],\n    "name":"balanceOf",\n    "outputs":[{"internalType":"uint256", "name":"", "type":"uint256"}],\n    "stateMutability":"view",\n    "type":"function"\n  },\n  {\n    "inputs":[\n      {"internalType":"address", "name":"_to", "type":"address"},\n      {"internalType":"uint256", "name":"_value", "type":"uint256"}\n    ],\n    "name":"transfer",\n    "outputs":[{"internalType":"bool", "name":"success", "type":"bool"}],\n    "stateMutability":"nonpayable",\n    "type":"function"\n  },\n  {\n    "anonymous":false,\n    "inputs":[\n      {"indexed":true, "internalType":"address", "name":"from", "type":"address"},\n      {"indexed":true, "internalType":"address", "name":"to", "type":"address"},\n      {"indexed":false, "internalType":"uint256", "name":"value", "type":"uint256"}\n    ],\n    "name":"Transfer",\n    "type":"event"\n  }\n]                               # \u5408\u7ea6abi\u5185\u5bb9\nprc20 = w3.eth.contract(address=\'contract address\', abi=abi)\n# \u67e5\u770b\u5408\u7ea6\u6240\u6709\u7684function \u548c event\nprint([func for func in prc20.functions])\nprint([event for event in prc20.events])\n')),(0,a.kt)("h4",{id:"\u67e5\u8be2\u5408\u7ea6\u4fe1\u606f"},"\u67e5\u8be2\u5408\u7ea6\u4fe1\u606f"),(0,a.kt)("p",null,"\u4ee5totalSupply\u3001balanceOf\u793a\u4f8b\uff0c\u5176\u4ed6\u67e5\u8be2\u65b9\u6cd5\u4e0e\u6b64\u7c7b\u4f3c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# \u67e5\u8be2\u4ee4\u724c\u7684\u603b\u53d1\u884c\u91cf\nprc20.functions.totalSupply().call()\n# \u67e5\u8be2\u8d26\u6237\u7684\u4ee4\u724c\u4f59\u989d\nprc20.functions.balanceOf('your address').call()\n")),(0,a.kt)("h4",{id:"\u53d1\u9001\u5408\u7ea6\u4ea4\u6613"},"\u53d1\u9001\u5408\u7ea6\u4ea4\u6613"),(0,a.kt)("p",null,"\u4ee5transfer\u793a\u4f8b\uff0c\u5176\u4ed6\u4ea4\u6613\u65b9\u6cd5\u4e0e\u6b64\u7c7b\u4f3c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# \u8f6c\u8d26\u4ee4\u724c\u5230\u6307\u5b9a\u8d26\u6237\ntx = {\n    'chainId': w3.chain_id,\n    'nonce': w3.eth.getTransactionCount('your address'),\n    'gas': 4012388,\n    'value': 0,\n    'gasPrice': 1000000000,\n}\ntxn = prc20.functions.transfer(to='to address', value=1 * 10 ** 18).buildTransaction(tx)\nsigned_txn = w3.eth.account.signTransaction(txn, private_key='your private key')\ntx_hash = w3.eth.sendRawTransaction(signed_txn.rawTransaction).hex()\nreceipt = w3.eth.waitForTransactionReceipt(tx_hash)\n")),(0,a.kt)("h4",{id:"\u83b7\u53d6\u5408\u7ea6\u4e8b\u4ef6"},"\u83b7\u53d6\u5408\u7ea6\u4e8b\u4ef6"),(0,a.kt)("p",null,"\u4ee5transfer\u4ea4\u6613\u4e8b\u4ef6\u793a\u4f8b\uff0c\u5176\u4ed6\u4e8b\u4ef6\u83b7\u53d6\u65b9\u6cd5\u4e0e\u6b64\u7c7b\u4f3c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"events = prc20.events.Transfer().processReceipt(receipt)\n")))}c.isMDXComponent=!0}}]);