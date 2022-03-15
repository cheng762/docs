"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8673],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7989:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"Solidity_Dev_Manual",title:"Getting started",sidebar_label:"Getting started"},c=void 0,d={unversionedId:"Solidity_Dev_Manual",id:"Solidity_Dev_Manual",isDocsHomePage:!1,title:"Getting started",description:"Introduction",source:"@site/../docs/solidity\u5408\u7ea6\u5165\u95e8\u624b\u518c.md",sourceDirName:".",slug:"/Solidity_Dev_Manual",permalink:"/docs/Solidity_Dev_Manual",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/solidity\u5408\u7ea6\u5165\u95e8\u624b\u518c.md",version:"current",frontMatter:{id:"Solidity_Dev_Manual",title:"Getting started",sidebar_label:"Getting started"},sidebar:"docs",previous:{title:"System contracts",permalink:"/docs/PlatON_system_contract"},next:{title:"Migration tutorial",permalink:"/docs/Solidity_Contract_Migrate"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Platon-truffle Introduction",id:"platon-truffle-introduction",children:[]},{value:"Create HelloWorld Contract",id:"create-helloworld-contract",children:[]},{value:"Compile HelloWorld Contract",id:"compile-helloworld-contract",children:[]},{value:"Deploly HelloWorld Contract",id:"deploly-helloworld-contract",children:[]},{value:"Call HelloWorld Contract",id:"call-helloworld-contract",children:[]},{value:"Crowdfunding Contract",id:"crowdfunding-contract",children:[{value:"Introduction",id:"introduction-1",children:[]},{value:"Crowdfunding Process",id:"crowdfunding-process",children:[]},{value:"Crowdfunding Contract",id:"crowdfunding-contract-1",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"About Compile",id:"about-compile",children:[]}]}],p={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This tutorial is mainly to guide users to create a simple HelloWorld smart contract using solidity language on PlatON, compile, deploy, and call this contract through platon-truffle. If you want to use a richer API you can refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK"},"Java SDK")," and  ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/JS_SDK"},"JS SDK"),"."),(0,o.kt)("h3",{id:"platon-truffle-introduction"},"Platon-truffle Introduction"),(0,o.kt)("p",null,"Platon-truffle is a tool provided by PlatON that can compile, deploy, and invoke smart contracts locally. For specific installation and usage manuals, refer to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Platon-truffle develop tools ",(0,o.kt)("a",{parentName:"li",href:"https://platon-truffle.readthedocs.io/en/v1.1.1/getting-started/installation.html"},"specific installation")),(0,o.kt)("li",{parentName:"ul"},"Platon-truffle develop tools ",(0,o.kt)("a",{parentName:"li",href:"https://platon-truffle.readthedocs.io/en/v1.1.1/"},"usage manuals"))),(0,o.kt)("h3",{id:"create-helloworld-contract"},"Create HelloWorld Contract"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pragma solidity ^0.5.17;\n\ncontract HelloWorld {\n    \n    string name;\n    \n    function setName(string memory _name) public returns(string memory){\n        name = _name;\n        return name;\n    }\n    \n    function getName() public view returns(string memory){\n        return name;\n    }\n}\n")),(0,o.kt)("p",null,"Contract Files Description:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"pragma solidity ^0.5.17",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pragma solidity"),": solidity version description\n",(0,o.kt)("inlineCode",{parentName:"li"},"0.5.17"),"\uff1asolidity version\n",(0,o.kt)("inlineCode",{parentName:"li"},"^")," \uff1aIndicates upward compatibility, that is, it can be compiled with a compiler above 0.5.17"))),(0,o.kt)("li",{parentName:"ul"},"contract HelloWorld",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contract"),"\uff1acontract keyword\n",(0,o.kt)("inlineCode",{parentName:"li"},"HelloWorld"),"\uff1acontract name"))),(0,o.kt)("li",{parentName:"ul"},"string name",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),"\uff1acontract state variables\n",(0,o.kt)("inlineCode",{parentName:"li"},"string"),"\uff1athe type of contract state variables"))),(0,o.kt)("li",{parentName:"ul"},"function setName(string memory _name) public returns(string memory)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"function"),"\uff1afunction keyword\n",(0,o.kt)("inlineCode",{parentName:"li"},"setName"),"\uff1afunction name\n",(0,o.kt)("inlineCode",{parentName:"li"},"memory"),"\uff1adeclare the storage location of param name\uff08 function input parameters and output parameters  must be declared as memory when the parameters type is string\uff09\n",(0,o.kt)("inlineCode",{parentName:"li"},"_name"),"\uff1athe  local variables\n",(0,o.kt)("inlineCode",{parentName:"li"},"public"),"\uff1adeclare the visibility of the function\n",(0,o.kt)("inlineCode",{parentName:"li"},"name")," = _name\uff1aAssignment the local variable to state variable"))),(0,o.kt)("li",{parentName:"ul"},"function getName() public view returns(string memory)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"view"),": this keyword means the function cannot change the blockchain state, which mainly used for query")))),(0,o.kt)("h3",{id:"compile-helloworld-contract"},"Compile HelloWorld Contract"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step1."),"  Creat new directory for HelloWorld project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir HelloWorld && cd HelloWorld\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step2."),"  Init project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"platon-truffle init\n")),(0,o.kt)("p",null,"After the command is executed, project directory structure is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Contracts/"),": solidity contract directory")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Migrations/"),":  depoly file directory")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Test/"),": test script directory")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Truffle-config.js"),": platon-truffle config"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step3."),"  Move HelloWorld contract compiled in to HelloWorld/contracts/"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ls contracts/\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HelloWorld.sol")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step4."),"  Fix compile version same as the version setted  in truffle-config.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vim truffle-config.js\n")),(0,o.kt)("p",null,"Truffle-config.js content is  as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'compilers: {\n      solc: {\n            version: "^0.5.17",    // same as the version declared in HelloWorld.sol\n      }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step5."),"  Compile contract"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"platon-truffle compile\n")),(0,o.kt)("p",null,"After the command is executed, project directory structure is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Build/"),": solidity contract directory after compiled")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Build/contracts/HelloWorld.json"),":the compiled file corresponding with HelloWorld.sol"))),(0,o.kt)("h3",{id:"deploly-helloworld-contract"},"Deploly HelloWorld Contract"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step1.")," Create deploy script"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd migrations/ && touch 2_initial_helloworld.js\n")),(0,o.kt)("p",null,"Suggest replacing script  name  with contract name, for example the deploy script  of HelloWorld contract :2_initial_helloworld.js,content is as follows\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const helloWorld = artifacts.require("HelloWorld"); //artifacts.require specify deployment contract\n    module.exports = function(deployer) {\n       deployer.deploy(helloWorld); //Failed to deploy contract with parameters, please refer to FAQ\n};\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step2.")," Setting config  information for blockchain in truffle-config.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vim truffle-config.js\n")),(0,o.kt)("p",null,"Set blockchain network info"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'networks: {\n    development: {\n       host: "10.1.1.6",     // blockchain server address\n       port: 8806,            // server port\n       network_id: "*",       // Any network (default: none)\n       from: "lat1wxadw8yzr6qxdw5yl3f2surp6ue6f03e07kcqc", //the accout address of deploying contract\n       gas: 999999,\n       gasPrice: 50000000004,\n    },\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"step3."),"  Unlock wallet account"),(0,o.kt)("p",null,"Enter the platon-truffle console"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"platon-truffle console\n")),(0,o.kt)("p",null,"Import the private key (you can skip this step if you have already imported it)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'web3.platon.personal.importRawKey("Your wallet private key","Your wallet password");\n')),(0,o.kt)("p",null,"After importing successfully, you will see the address corresponding to the private key as follows\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"'lat1wxadw8yzr6qxdw5yl3f2surp6ue6f03e07kcqc'\n")),(0,o.kt)("p",null,"Unlock wallet account"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," web3.platon.personal.unlockAccount('Your wallet address','Your wallet password',999999);\n")),(0,o.kt)("p",null,"After unlocking successfully, you will see the following information\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ture\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step4."),"  Deploy contract"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"platon-truffle migrate\n")),(0,o.kt)("p",null,"After deploying successfully, you will see log info as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2_initial_helloworld.js\n======================\n\n   Deploying 'HelloWorld'\n   ----------------------\n   > transaction hash:    0x87cd48cc467f9bc943fd096c57c8a7e7b7fa941380538d9e59797800c6c4292c\n   > Blocks: 0            Seconds: 0\n   > contract address:    lat17rcz8c3uwaf3ktf0e0d8q0jw4k3dm8z22eer96\n   > block number:        282520\n   > block timestamp:     1585535169200\n   > account:             lat1wxadw8yzr6qxdw5yl3f2surp6ue6f03e07kcqc\n   > balance:             16447231233352977496646259638377769924557918764752765436645.336513079692286014\n   > gas used:            145569\n   > gas price:           50.000000004 gvon\n   > value sent:          0 LAT\n   > total cost:          0.000145569 LAT\n\n\n   > Saving migration to chain.\n   > Saving artifacts\n   -------------------------------------\n   > Total cost:          0.000145569 LAT\n\nSummary\n=======\n> Total deployments:   2\n> Final cost:          0.000259892 LAT\n")),(0,o.kt)("h3",{id:"call-helloworld-contract"},"Call HelloWorld Contract"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step1."),"  Enter the platon-truffle console"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"platon-truffle console\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can execute command in platon-truffle console")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step2."),"  Create contract object"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'var abi = [{"constant":false,"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"setName","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getName","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]; //you can refet to HelloWorld/build/contracts/HelloWorld.json\n\nvar contractAddr = \'lat17rcz8c3uwaf3ktf0e0d8q0jw4k3dm8z22eer96\';//contract address\nvar helloWorld = new web3.platon.Contract(abi,contractAddr);  \n')),(0,o.kt)("p",null,"Description\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"abi")," the interface provided by the contract to external calls, the abi  in the file compiled \uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"HelloWorld/build/contracts/HelloWorld.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contractAddr")," contract address"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"helloWorld"),"  contract object created")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step3."),"  Call contract"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"helloWorld.methods.setName(\"hello world\").send({from: 'lat1wxadw8yzr6qxdw5yl3f2surp6ue6f03e07kcqc'}).on('receipt', function(receipt) {console.log(receipt);}).on('error', console.error);\n\n")),(0,o.kt)("p",null,"Description\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"helloWorld")," the contract object created"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"methods"),"  specify the call method"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setName")," the function of the HelloWorld contract, which has a parameter as ",(0,o.kt)("inlineCode",{parentName:"li"},"hello world")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"from")," the address of caller"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"on")," listen to the result of the contract method executed. If failed, it will print the error info. If succeeds ,the console will print the receipt as belows:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{ \n  blockHash:'0x3ae287d1e745e30d0d6c95d5220cc7816cda955e7b2f013c6a531ed95028a794', //the hash of block the transaction located\n  blockNumber: 159726, \n  contractAddress: null,\n  cumulativeGasUsed: 44820,\n  from: 'lat1wxadw8yzr6qxdw5yl3f2surp6ue6f03e07kcqc', //the address of caller\n  gasUsed: 44820, //gas cost\n  logsBloom:\n   '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n  status: true,\n  to: 'lat17rcz8c3uwaf3ktf0e0d8q0jw4k3dm8z22eer96', //contract address\n  transactionHash:'0xb7a41f72d555d4a2d9f2954fbdc5bbbb4c5ce89c836f8704276419ed416b3866', \n  transactionIndex: 0,\n  events: {} \n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step4."),"  Query contract"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'helloWorld.methods.getName().call(null,function(error,result){console.log("name is:" + result);})  \n')),(0,o.kt)("p",null,"Description\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"helloWorld")," the contract object created"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"methods")," specify the call method"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getName")," the function of the HelloWorld contract, which has no  parameter"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"call")," specify query method"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"function")," callback result,we can use console.log to print info.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"crowdfunding-contract"},"Crowdfunding Contract"),(0,o.kt)("h3",{id:"introduction-1"},"Introduction"),(0,o.kt)("p",null,"In the following example, we will use smart contract for a crowdfunding campaign. The creator of the contract started crowdfunding, and initialized the number of tokens and the duration of the crowdfunding. If the crowdfunding is completed within a specified time, the crowdfunding will be successful. If the crowdfunding switch is turned off, a certain number of tokens based on a fixed exchange rate will be cast and credited to the name of the investor. Otherwise, the crowdfunding fails and the amount of the crowdfunding is returned to the investors."),(0,o.kt)("p",null,"There are two roles in the contract"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Crowdfunder"),(0,o.kt)("li",{parentName:"ul"},"Investor")),(0,o.kt)("h3",{id:"crowdfunding-process"},"Crowdfunding Process"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Creating a crowdfunding contract refers to the beneficiary."),(0,o.kt)("li",{parentName:"ol"},"Deployment crowdfunding contract initializes the number and duration of crowdfunding tokens."),(0,o.kt)("li",{parentName:"ol"},"Investors invest."),(0,o.kt)("li",{parentName:"ol"},"Determine if crowdfunding is over.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If the crowdfunding time is not up and the number of crowdfunding tokens has been completed, turn off the crowdfunding switch, investors will be allocated tokens in proportion. Crowdfunding success."),(0,o.kt)("li",{parentName:"ul"},"If the crowdfunding time is up and the amount of crowdfunding tokens has been completed, investors will be allocated tokens in proportion. Crowdfunding success."),(0,o.kt)("li",{parentName:"ul"},"If the crowdfunding time is up and the number of crowdfunding tokens is not completed, the investor tokens will be returned. Crowdfunding failure.")))),(0,o.kt)("h3",{id:"crowdfunding-contract-1"},"Crowdfunding Contract"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pragma solidity ^0.5.17;\n\ncontract CrowdFunding {\n    address payable public beneficiaryAddress = address(uint160(0)); //Beneficiary address, set as contract creator\n    uint256 public fundingGoal = 100 lat;  //Crowdfunding target, unit is lat\n    uint256 public amountRaised = 0; //The amount of money raised,the unit is von\n    uint256 public deadline; \n    uint256 public price;  //token price\n    bool public fundingGoalReached = false;  //Achieving crowdfunding goals flag\n    bool public crowdsaleClosed = false; //Crowdfunding closed\n\n    mapping(address => uint256) public balance; //Save the amount raised by the investor\n    \n    mapping(address => uint256) public tokenMap; //Save the number of tokens owned by the investor\n\n    //Record received LAT notifications\n    event GoalReached(address _beneficiaryAddress, uint _amountRaised);\n\n    //Transfer notice\n    event FundTransfer(address _backer, uint _amount, bool _isContribution);\n    \n    //Check if the address is empty\n    modifier validAddress(address _address) {\n        require(_address != address(uint160(0)));\n        _;\n    }\n\n    /**\n     * Initialization constructor\n     *\n     * @param _fundingGoalInlats: Total crowdfunding LAT coin\n     * @param _durationInMinutes: Crowdfunding deadline, unit is minute\n     */\n    constructor (\n        uint _fundingGoalInlats,\n        uint _durationInMinutes\n    )public {\n        beneficiaryAddress = msg.sender;\n        fundingGoal = _fundingGoalInlats * 1 lat;\n        deadline = now + _durationInMinutes * 1 minutes;\n        price = 500 finney; //buy 2 tokens with 1 LAT\n    }\n\n\n    /**\n     * fallback functioin\n     *\n     * you can send money directly to the contract\n     */\n    function () payable external {\n\n        //check whether to close crowdfunding\n        require(!crowdsaleClosed);\n        uint amount = msg.value;\n\n        //investor amount accumulated\n        balance[msg.sender] += amount;\n\n        //Total invest accumulated\n        amountRaised += amount;\n\n        //Transfer operation, how many tokens are transferred to the investor\n        tokenMap[msg.sender]  += amount / price;\n        \n        emit FundTransfer(msg.sender, amount, true);\n    }\n\n    /**\n     * Determine if the crowdfunding deadline has passed\n     */\n    modifier afterDeadline() { if (now >= deadline) _; }\n\n    /**\n     * Check if the crowdfunding goal has been reached\n     */\n    function checkGoalReached() public afterDeadline payable{\n        if (amountRaised >= fundingGoal){\n            //crowdfunding goal has been reached\n            fundingGoalReached = true;\n            emit GoalReached(beneficiaryAddress, amountRaised);\n        }\n\n        //Closing crowdfunding\n        crowdsaleClosed = true;\n    }\n\n\n    /**\n     * Recover funds\n     *\n     * Check if the target or time limit has been reached, and if so, send the full amount to the beneficiary.\n     * If the goal is not reached, each investor can return the amount they invested\n     */\n    function safeWithdrawal() public afterDeadline {\n\n        //If the crowdfunding goal is not reached\n        if (!fundingGoalReached) {\n            //Get the contracted caller's donated balance\n            uint amount = balance[msg.sender];\n\n            if (amount > 0) {\n                //Returns all balances of the contract initiator\n                msg.sender.transfer(amount);\n                emit FundTransfer(msg.sender, amount, false);\n                balance[msg.sender] = 0;\n            }\n        }\n\n        //f the crowdfunding goal is achieved and the contract caller is the beneficiary\n        if (fundingGoalReached && beneficiaryAddress == msg.sender) {\n\n            //Give all donations from the contract to the beneficiary\n            beneficiaryAddress.transfer(amountRaised);\n            \n            emit FundTransfer(beneficiaryAddress, amountRaised, false);\n        }\n    }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Compile Crowdfunding Contract")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step1.")," Create new directory for Crowdfunding project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir myCrowdFunding && cd myCrowdFunding\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The following commands are performed in the myCrowdFunding directory without special instructions.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step2.")," Init project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"platon-truffle init\n")),(0,o.kt)("p",null,"After the command is executed, project directory structure is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contracts/"),": solidity contract directory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"migrations/"),": depoly file directory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"test/"),": test script directory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"truffle-config.js"),": platon-truffle config")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step3.")," Move crowdfunding contract compiled in to ",(0,o.kt)("inlineCode",{parentName:"p"},"myCrowdFunding/contracts/")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ls myCrowdFunding/contracts/\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Files in the directory: ",(0,o.kt)("inlineCode",{parentName:"p"},"crowdFunding.sol"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step4.")," Fix compile version same as the version setted  in truffle-config.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vim truffle-config.js\n")),(0,o.kt)("p",null,"Truffle-config.js content is  as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'compilers: {\n     solc: {\n        version: "0.5.17",    //same as the version declared in CrowdFunding.sol\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step5.")," Compile contract"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"platon-truffle compile\n")),(0,o.kt)("p",null,"After the command is executed, project directory structure is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"build/"),": solidity contract directory after compiled"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"build/contracts/CrowdFunding.json"),": the compiled file corresponding with CrowdFunding.sol")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Deploly crowdfunding Contract")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step1.")," Create deploy script"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd migrations/ && touch 2_initial_CrowdFunding.js\n")),(0,o.kt)("p",null,"Deploy script 2_initial_crowdFunding.js,content is as follows\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const CrowdFunding = artifacts.require("CrowdFunding"); //deployment contract class name\nmodule.exports = function(deployer) {\n      deployer.deploy(CrowdFunding);\n};\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step2.")," Setting config  information for blockchain in truffle-config.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vim truffle-config.js\n")),(0,o.kt)("p",null,"Set blockchain network  info"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'networks: {\n    development: {\n       host: "10.1.1.6",     // blockchain server address\n       port: 8806,            // server port\n       network_id: "*",       // Any network (default: none)\n       from: "lat1wxadw8yzr6qxdw5yl3f2surp6ue6f03e07kcqc", //the accout address of deploying contract\n       gas: 999999,\n       gasPrice: 50000000004,\n    },\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step3.")," Deploy contract"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"platon-truffle migrate\n")),(0,o.kt)("p",null,"After deploying successfully, you will see log info as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Compiling your contracts...\n Everything is up to date, there is nothing to compile.\n 3_initial_CrowdFunding.js\n \n    Deploying 'CrowdFunding'\n     transaction hash:    0x3a6419cd4169d7cfb430a1fc5632239ac4a01845827f20df9b3229a334c5488b\n     Blocks: 0            Seconds: 0\n     contract address:    lat1qtgycm7jkrq8csa2rgef6enlru0u02g8u82kpt //contract address\n     block number:        280532\n     block timestamp:     1581751224032\n     account:             lat1wxadw8yzr6qxdw5yl3f2surp6ue6f03e07kcqc\n     balance:             90000000.806077629992489796\n     gas used:            379154\n     gas price:           50.000000004 gVON\n     value sent:          0 LAT\n     total cost:          0.018957700001516616 LAT\n \n     Saving migration to chain.\n     Saving artifacts\n     Total cost:     0.018957700001516616 LAT\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Crowdfounding Query\uff1a")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step1."),"  Enter the platon-truffle console"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"platon-truffle console\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can execute command in platon-truffle console")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step2."),"  Create contract object"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"var abi = [...]; //ABI of CrowdFunding contract,can get from build/contracts/CrowdFunding.json\nvar contractAddr = 'lat1qtgycm7jkrq8csa2rgef6enlru0u02g8u82kpt'; //CrowdFundsing contract address\nvar crowdFunding = new web3.platon.Contract(abi,contractAddr);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step3."),"  Query the amount raised"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'crowdFunding.methods.amountRaised().call(null,function(error,result){console.log("result:" + result);}); //query the amount raised\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step4."),"  Crowdfunder judge the success of crowdfunding"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"crowdFunding.methods.safeWithdrawal().send({from:'lat1wxadw8yzr6qxdw5yl3f2surp6ue6f03e07kcqc'}).on('data', function(event){ console.log(event);}).on('error', console.error); \n")),(0,o.kt)("p",null,"Call contract command description:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"crowdFunding")," is the contract object we built earlier"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"methods")," fixed syntax specifying that methods in the contract will be obtained"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"safeWithdrawal")," is a method in our crowdfunding contract to recover funds"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"from")," caller's wallet address"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"on")," listen for contract processing result events, and output error logs for failures")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"about-compile"},"About Compile"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"How many commands in platon-truffle\uff1f"),(0,o.kt)("p",{parentName:"li"},"Refer to  platon-truffle develop guide ",(0,o.kt)("a",{parentName:"p",href:"https://platon-truffle.readthedocs.io/en/v0.11.1/"},"Reference here"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Why contract syntax cannot be verified?"),(0,o.kt)("p",{parentName:"li"},"Solidity 0.4.x has a great different with 0.5.x, detail info refer to ",(0,o.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/develop/"},"Reference here"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Why truffle doesn't compile?"),(0,o.kt)("p",{parentName:"li"},"Confirm the contract version same as the version specified in the truffle-config.js.\nContract syntax be writed in a wrong way.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Why the contract can not be deployed by truffle migrate?"),(0,o.kt)("p",{parentName:"li"},"Confrim the blockchain network info be configured correctly.\nConfirm the account address be configured correctly.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deploying a contract with a parameter constructor using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"truffle migrate")," failed."),(0,o.kt)("p",{parentName:"li"},"For example, A.sol"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"Constructor(uint256 a, string memory b, string memory c) public {}\n")),(0,o.kt)("p",{parentName:"li"},"2_initial_A.js configured as follow\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"const A = artifacts.require(\"A\");  \nmodule.exports = function(deployer) {\n        deployer.deploy(A,100,'PLA','PLAT');//pass the corresponding construction parameters\n};\n")))))}u.isMDXComponent=!0}}]);