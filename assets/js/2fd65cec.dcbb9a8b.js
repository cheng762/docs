"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3760],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(t),h=r,g=p["".concat(d,".").concat(h)]||p[h]||u[h]||i;return t?a.createElement(g,o(o({ref:n},l),{},{components:t})):a.createElement(g,o({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8126:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const i={id:"adapting_to_new_chainid",title:"Adapting to new chainid",sidebar_label:"Adapting to new chainid"},o=void 0,c={unversionedId:"adapting_to_new_chainid",id:"adapting_to_new_chainid",isDocsHomePage:!1,title:"Adapting to new chainid",description:"How new DApp can be adapted to PlatON's new ChainId",source:"@site/../docs/\u9002\u914d\u65b0\u94feID\u6559\u7a0b.md",sourceDirName:".",slug:"/adapting_to_new_chainid",permalink:"/docs/adapting_to_new_chainid",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/\u9002\u914d\u65b0\u94feID\u6559\u7a0b.md",version:"current",frontMatter:{id:"adapting_to_new_chainid",title:"Adapting to new chainid",sidebar_label:"Adapting to new chainid"}},d=[{value:"How new DApp can be adapted to PlatON&#39;s new ChainId",id:"how-new-dapp-can-be-adapted-to-platons-new-chainid",children:[{value:"PRC20 permit func",id:"prc20-permit-func",children:[]},{value:"Governance Token Voting Proxy",id:"governance-token-voting-proxy",children:[]}]}],s={toc:d},l="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(l,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-new-dapp-can-be-adapted-to-platons-new-chainid"},"How new DApp can be adapted to PlatON's new ChainId"),(0,r.kt)("p",null,"The PlatON mainnet proposal to support the new ChainId ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PlatONnetwork/PIPs/blob/master/PIPs/PIP-7.md"},"PIP-7"),"has been adopted and the first phase has been implemented in the mainnet, which means that the ChainId of the PlatON mainnet will be gradually switched from 100 to the new value 210425. In order to minimise the impact on applications during subsequent version upgrades, new applications should try to support the new ChainId from the beginning ChainId."),(0,r.kt)("p",null,"However, at this stage the ChainId returned to the contract by the PlatON EVM virtual machine is still 100 (after which it will return 210425), so in the process of developing the application if there is logic related to the ChainId special adaptations need to be made. The following examples will introduce the adaptations from two scenarios, the first is the PRC20 token permit method and the second governance token voting rights proxy."),(0,r.kt)("h3",{id:"prc20-permit-func"},"PRC20 permit func"),(0,r.kt)("p",null,"Usually Swap needs to use metamask's eth_signTypedData_v4 interface to sign the client first each time it removes liquidity (the signature contains the ChainId), and then use the signature as an argument to call the router contract's removeLiquidityWithPermit, which is used to do PRC20 contract's permit (allowing the contract to deduct the user's PRC20 assets)"),(0,r.kt)("p",null,"The adaptation code is shown below."),(0,r.kt)("p",null,"constructor() function adds DOMAIN_SEPARATOR_NEW, generating method containing the ChainId of 210425"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"......\nDOMAIN_SEPARATOR = keccak256(\n    abi.encode(\n        keccak256('EIP712Domain(string name,string version,uint256 ChainId,address verifyingContract)'),\n        keccak256(bytes(name)),\n        keccak256(bytes('1')),\n        ChainId,\n        address(this)\n    )\n);\nDOMAIN_SEPARATOR_NEW = keccak256(\n    abi.encode(\n        keccak256('EIP712Domain(string name,string version,uint256 ChainId,address verifyingContract)'),\n        keccak256(bytes(name)),\n        keccak256(bytes('1')),\n        210425,\n        address(this)\n    )\n);\n......\n")),(0,r.kt)("p",null,"permit function adds verification of two ChainId related signatures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"require(deadline >= block.timestamp, 'EXPIRED');\nbytes32 digest = keccak256(\n    abi.encodePacked(\n        '\\x19\\x01',\n        DOMAIN_SEPARATOR_NEW,\n        keccak256(abi.encode(PERMIT_TYPEHASH, owner, spender, value, nonces[owner], deadline))\n    )\n);\naddress recoveredAddress = ecrecover(digest, v, r, s);\nif (recoveredAddress == address(0) || recoveredAddress != owner) {\n    digest = keccak256(\n        abi.encodePacked(\n            '\\x19\\x01',\n            DOMAIN_SEPARATOR,\n            keccak256(abi.encode(PERMIT_TYPEHASH, owner, spender, value, nonces[owner], deadline))\n        )\n    );\n    recoveredAddress = ecrecover(digest, v, r, s);\n    require(recoveredAddress != address(0) && recoveredAddress == owner, 'INVALID_SIGNATURE');\n}\n\nnonces[owner] += 1;\n......\n")),(0,r.kt)("h3",{id:"governance-token-voting-proxy"},"Governance Token Voting Proxy"),(0,r.kt)("p",null,"Similar signature and verification logic is used when governing the token voting rights proxy. The code is modified as follows."),(0,r.kt)("p",null,"The delegateBySig function adds validation for the signatures associated with the two ChainId"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'constructor(address account, address minter_) public {\n        ......\n        DOMAIN_SEPARATOR = keccak256(abi.encode(DOMAIN_TYPEHASH, keccak256(bytes(name)), getChainId(), address(this)));\n        DOMAIN_SEPARATOR_NEW = keccak256(abi.encode(DOMAIN_TYPEHASH, keccak256(bytes(name)), 210425, address(this)));\n}\n    \n......\n\nfunction delegateBySig(address delegatee, uint nonce, uint expiry, uint8 v, bytes32 r, bytes32 s) public {\n    bytes32 structHash = keccak256(abi.encode(DELEGATION_TYPEHASH, delegatee, nonce, expiry));\n    bytes32 digest = keccak256(abi.encodePacked("\\x19\\x01", DOMAIN_SEPARATOR_NEW, structHash));\n    address signatory = ecrecover(digest, v, r, s);\n    if (signatory == address(0) || nonce != nonces[signatory]) {\n        digest = keccak256(abi.encodePacked("\\x19\\x01", DOMAIN_SEPARATOR, structHash));\n        signatory = ecrecover(digest, v, r, s);\n        require(signatory != address(0), "delegateBySig: invalid signature");\n        require(nonce == nonces[signatory], "delegateBySig: invalid nonce");\n    }\n    nonces[signatory] += 1;\n    require(now <= expiry, "delegateBySig: signature expired");\n    return _delegate(signatory, delegatee);\n}\n')))}p.isMDXComponent=!0}}]);