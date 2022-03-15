"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1557],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),u=r,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6853:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={id:"PlatON_system_contract",title:"System contracts",sidebar_label:"System contracts"},l=void 0,c={unversionedId:"PlatON_system_contract",id:"PlatON_system_contract",isDocsHomePage:!1,title:"System contracts",description:"After the chain is started, some contracts have been built in the system. The addresses of these contracts have been fixed and the functions have been implemented. Some of the contracts are the realization of economic models, and various contract interfaces are provided to interact with the client.",source:"@site/../docs/PlatON\u7cfb\u7edf\u5408\u7ea6.md",sourceDirName:".",slug:"/PlatON_system_contract",permalink:"/docs/PlatON_system_contract",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/PlatON\u7cfb\u7edf\u5408\u7ea6.md",version:"current",frontMatter:{id:"PlatON_system_contract",title:"System contracts",sidebar_label:"System contracts"},sidebar:"docs",previous:{title:"Private Network",permalink:"/docs/Build_Private_Chain"},next:{title:"Getting started",permalink:"/docs/Solidity_Dev_Manual"}},p=[{value:"Staking contract",id:"staking-contract",children:[]},{value:"Governance contract",id:"governance-contract",children:[]},{value:"Slashing contract",id:"slashing-contract",children:[]},{value:"Lockup contract",id:"lockup-contract",children:[]},{value:"DelegationReward contract",id:"delegationreward-contract",children:[]}],d={toc:p};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After the chain is started, some contracts have been built in the system. The addresses of these contracts have been fixed and the functions have been implemented. Some of the contracts are the realization of economic models, and various contract interfaces are provided to interact with the client."),(0,o.kt)("h3",{id:"staking-contract"},"Staking contract"),(0,o.kt)("p",null,"contract address:",(0,o.kt)("strong",{parentName:"p"},"lat1zqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzsjx8h7")),(0,o.kt)("p",null,"PlatON's network based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"PoS")," mechanism relies on a set of verifiers to keep it running properly. Validators participate in consensus blocking among nodes and receive blocking and staking revenue. To become a verifier, one needs to staking at least 100,000 ",(0,o.kt)("inlineCode",{parentName:"p"},"LAT")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Staking contract")," and have a running node."),(0,o.kt)("p",null,"Delegates are those ",(0,o.kt)("inlineCode",{parentName:"p"},"LAT")," holders who cannot or do not want to become a verifier. They can delegate ",(0,o.kt)("inlineCode",{parentName:"p"},"LAT")," to the verifier and receive the proceeds. The ",(0,o.kt)("inlineCode",{parentName:"p"},"LAT")," delegated by the principal to the verifier is only transferred to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Staking contract"),", not transferring their own ",(0,o.kt)("inlineCode",{parentName:"p"},"LAT")," to the verifier, and the principal holds the ownership of the delegated ",(0,o.kt)("inlineCode",{parentName:"p"},"LAT")," from the beginning to the end. If it is already a validator, it will not be able to become a principal again."),(0,o.kt)("p",null,"The interaction between the validator and the delegator is mainly done through the ",(0,o.kt)("inlineCode",{parentName:"p"},"Staking contract"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"Staking contract")," has the following functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Staking nodes become validators"),(0,o.kt)("li",{parentName:"ul"},"Modify validator information"),(0,o.kt)("li",{parentName:"ul"},"Remove the pledge and exit the validator list"),(0,o.kt)("li",{parentName:"ul"},"Query verifier information and other operations"),(0,o.kt)("li",{parentName:"ul"},"Delegated validator"),(0,o.kt)("li",{parentName:"ul"},"Reduced holdings entrusted"),(0,o.kt)("li",{parentName:"ul"},"Query Staking information")),(0,o.kt)("h4",{id:"contract-interface"},"Contract interface"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create verification node"),(0,o.kt)("p",{parentName:"li"},"This interface is used to make a node an authentication node by staking ",(0,o.kt)("inlineCode",{parentName:"p"},"LAT")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Staking contract"),". Before staking, you need your own node to access the network and make sure that the node private key and bls private key are stored safely. When staking, you have to fill in the node information, the revenue account for receiving the block reward and the pledge reward, the reward share for the principal (the more the share, the more likely to attract more users to the principal), the amount of ",(0,o.kt)("inlineCode",{parentName:"p"},"LAT")," you want to pledge (there is a threshold of 100,000 ",(0,o.kt)("inlineCode",{parentName:"p"},"LAT")," for the pledge, if it is lower than that amount, the pledge will fail), and other information. If the pledge is successful, the pledge is transferred from the balance of the user account/locked contract account to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Staking contract")," and the node will participate in the election to become a block-out node in the next epoch. The total weight of the verifier is equal to the total amount of ",(0,o.kt)("inlineCode",{parentName:"p"},"LAT")," pledged by itself plus the total amount of ",(0,o.kt)("inlineCode",{parentName:"p"},"LAT")," delegated, and the higher the total weight the higher the probability of being elected as consensus."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#staking"}," create validation node"),". "))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Modify verification node information"),(0,o.kt)("p",{parentName:"li"},"This interface is mainly used to modify the validator's income account, delegated share ratio, node information, etc. The interval for each modification of the share ratio must be greater than 10 consensus periods, and the magnitude of each modification cannot be greater than 5%."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#updatestaking"}," Modify verification node information"),". ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Increase the node Staking amount"),(0,o.kt)("p",{parentName:"li"},"This interface is used to increase the node Staking amount and increase the node weight. The minimum amount of each increase is 10",(0,o.kt)("inlineCode",{parentName:"p"},"LAT"),". The validator\u2019s new weight will take effect in the next epoch."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#addstaking"}," Increase the node Staking amount"),". ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Release staking"),(0,o.kt)("p",{parentName:"li"},"This interface is mainly used to exit the verification node. The user cannot reduce the staking and can only exit the staking completely. When a staking is released, the staking is unlocked according to the following rules."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The release of staking is in the same epoch as the staking/addition, and the related staking will be returned to the user's staking account from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Staking contract")," in real time.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the release of the staking is not in the same epoch as the staking/addition, the staking will be locked for 168 cycles and then returned from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Staking Contract")," to the user's account at the time of the staking."))),(0,o.kt)("p",{parentName:"li"},"After initiating a release of staking, the node will not be selected as a validator to participate in consensus."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#unstaking"}," Release staking"),". "))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Query the validator list of the current epoch"),(0,o.kt)("p",{parentName:"li"},"This interface is used to query the validator information of the current epoch. At the end of each epoch, the list of validators for the next epoch will be updated based on the total weight of all candidate validators."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#getverifierlist"}," Query the validator list of the current epoch"),". "))),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Query the list of validators in the consensus round"),(0,o.kt)("p",{parentName:"li"},"This interface is used to query the list of verifiers that have been selected out of blocks for the current consensus cycle. Each consensus round is 430 blocks, and at 410 blocks will generate a list of verifiers from the verifier queue of the current Epoch that can participate in the next consensus round to get out the blocks."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#getvalidatorList"}," Query the list of validators in the consensus round"),". ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Query the list of candidate  information"),(0,o.kt)("p",{parentName:"li"},"This interface is used to query the list of all candidate verifier information. Any node that has successfully pledged is a candidate verifier."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#getcandidateList"}," Query the list of candidate  information"),". ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Query the validator entrusted by the delegator"),(0,o.kt)("p",{parentName:"li"},"This interface is used to query which validators have been delegated by the specified delegator."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#getrelatedListbydeladdr"}," Query the validator entrusted by the delegator"),". "))),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Query the staking information of a node"),(0,o.kt)("p",{parentName:"li"},"This interface is used to query the staking information of the node."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#getstakinginfo"}," Query the staking information of a node"),". ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"delegation"),(0,o.kt)("p",{parentName:"li"}," This interface is used to delegate or incrementally delegate a verifier node. Users who have already pledged a node will not be able to delegate it. The user can delegate ",(0,o.kt)("inlineCode",{parentName:"p"},"LAT")," to the verifier at any time with a minimum amount of 10 ",(0,o.kt)("inlineCode",{parentName:"p"},"LAT")," per delegation. After a successful delegation, the ",(0,o.kt)("inlineCode",{parentName:"p"},"LAT")," delegated by the delegator to the candidate verifier is transferred to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Staking contract"),". The new weight of the verifier will take effect in the next Epoch. When the verifier is selected to participate in the consensus, it will share the block-out and Staking rewards with the principal."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#delegate"}," delegation"),". "))),(0,o.kt)("ol",{start:11},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Decrease/revoke delegation"),(0,o.kt)("p",{parentName:"li"}," This interface is used to reduce or revoke the delegate operation. The principal can reduce or revoke the commission at any time, and the minimum amount of each reduced commission is 10",(0,o.kt)("inlineCode",{parentName:"p"},"LAT"),". After the operation is completed, ",(0,o.kt)("inlineCode",{parentName:"p"},"LAT")," will be returned to the principal's account from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Staking contract")," in real time, and if the remaining commission after the reduction is less than 10",(0,o.kt)("inlineCode",{parentName:"p"},"LAT"),", the commission of this principal will be revoked. The proceeds received by the validator in the current cycle will be distributed to the principal according to the amount of the mandate after the reduction."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#undelegate"}," Decrease/revoke delegation"),". "))),(0,o.kt)("ol",{start:12},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Query delegation"),(0,o.kt)("p",{parentName:"li"},"This interface is used to query the user's delegation information."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#getdelegateinfo"}," Query delegation"),". "))),(0,o.kt)("ol",{start:13},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Query average time of packed blocks"),(0,o.kt)("p",{parentName:"li"},"This interface is used to query the average time of packed blocks."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#getavgpacktime"}," Query average time of packed blocks"),". "))),(0,o.kt)("ol",{start:14},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Query the block reward of the epoch"),(0,o.kt)("p",{parentName:"li"},"This interface is used to query the block reward of the current epoch."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#getpackagerewards"}," Query the block reward of the epoc"),". "))),(0,o.kt)("ol",{start:15},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Query the staking reward of the epoch"),(0,o.kt)("p",{parentName:"li"},"This interface is used to query the staking reward of the current epoch."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#getstakingreward"}," Query the staking reward of the epoch"),". "))),(0,o.kt)("h3",{id:"governance-contract"},"Governance contract"),(0,o.kt)("p",null,"contract address:",(0,o.kt)("strong",{parentName:"p"},"lat1zqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq93t3hkm")),(0,o.kt)("p",null,"The on-chain governance method adopted by PlatON enables it to develop in accordance with the requirements of ",(0,o.kt)("inlineCode",{parentName:"p"},"LAT")," holders. The goal of governance is to ensure that majority ownership can always control the network. Any governance modification plan discussed in the community can be initiated by a validator on the chain and voted for a referendum."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Text proposal")," can be used to vote on content discussed in certain communities. The process includes the voting stage, where the vote is passed and the vote fails."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Version proposal")," can be used to upgrade the version of the chain. The process includes the voting stage, voting failure, pre-validation, validation, and cancellation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Cancel Proposal")," can be used to cancel previously initiated proposals. The process includes the voting stage, where the vote is passed and the vote fails."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Parameter proposal")," can be used to change some manageable parameters and optimize the ecology of the chain. The process includes the voting stage, where the vote is passed and the vote fails.")),(0,o.kt)("h4",{id:"contract-interface-1"},"Contract interface"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a text proposal"),(0,o.kt)("p",{parentName:"li"},"This interface is used to issue a text proposal. After the text proposal is issued, validators can vote for/against/abstain from the proposal. The voting deadline is about 2 weeks, and the proposal is passed when the voting rate is greater than 50% and the support rate among those who voted is greater than 66.7%."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#submitproposal"}," Create a text proposal"),". "))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create an version proposal"),(0,o.kt)("p",{parentName:"li"},"This interface is used to initiate an version proposal. Proposals can only be initiated by validators. After the proposal is passed, the on-chain version will be upgraded. The validator\u2019s vote is regarded as a support vote. After the voting deadline has passed, when the support rate is greater than 66.7%, the proposal enters the pre-validation stage and will come into effect in the next Epoch."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#submitproposal"}," Create an version proposal"),"."))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create an parameter proposal"),(0,o.kt)("p",{parentName:"li"},"This interface is used to initiate parameter proposals. The parameter proposal is used to change some manageable parameters on the chain. The validator can vote for/again/abstaining votes. The voting deadline is about 2 weeks. When the voter turnout rate is greater than 50% and the voter approval rate is greater than 66.7%, the proposal is passed."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#submitproposal"}," Create an parameter proposal"),"."))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create an cancellation proposal"),(0,o.kt)("p",{parentName:"li"},"This interface is used to initiate a cancellation proposal. Canceling a proposal can cancel the previously initiated text, parameters, and upgrade proposal. The voting deadline must be greater than the voting deadline of the cancelled proposal. After the voting deadline, when the voting rate is greater than 50"),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#submitproposal"}," Create an cancellation proposal"),"."))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Vote"),(0,o.kt)("p",{parentName:"li"},"This interface is used to vote on proposals in progress. Only yes votes can be voted for the version upgrade proposal, and the node needs to be upgraded to the new version before voting."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#vote"}," Vote"),". ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"DeclareVersion"),(0,o.kt)("p",{parentName:"li"},"This interface is used to initiate version declarations. When the PlatON network is upgraded to a new version through an upgrade proposal, all verification nodes that have not voted need to upgrade their nodes to the latest version simultaneously, and update their version status in the network through a version statement, otherwise they will not be selected for consensus."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#declareversion"}," Declare Version"),". "))),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Query proposal"),(0,o.kt)("p",{parentName:"li"},"This interface is used to query the specified proposal."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#getproposal"}," Query proposal"),". "))),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Query proposal status"),(0,o.kt)("p",{parentName:"li"},"This interface is used to query the current status of the proposal"),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#getTallyresult"}," Query proposal status"),". "))),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Query the list of proposals"),(0,o.kt)("p",{parentName:"li"},"This interface is used to query the list of proposals that are in voting and have ended."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#getProposalList"}," Query the list of proposals"),". ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Query chain version"),(0,o.kt)("p",{parentName:"li"},"This interface is used to query the current effective version of the chain."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#getactiveversion"}," Query chain version"),". ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Query governance parameter values"),(0,o.kt)("p",{parentName:"li"},"This interface is used to query the governance parameter value of the current block height"),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Python SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Python_SDK#query-the-governance-parameter-value-of-the-current-block-height"}," Query governance parameter values"),". ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Query the cumulative number of votes available for a proposal"),(0,o.kt)("p",{parentName:"li"},"This interface is used to query the cumulative number of votes available for a proposal."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Python SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Python_SDK#query-the-cumulative-number-of-votes-available-for-a-proposal"}," Query the cumulative number of votes available for a proposal"),". ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Query the list of governance parameters"),(0,o.kt)("p",{parentName:"li"},"This interface is used to query all management parameters of a certain module."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Python SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Python_SDK#query-the-list-of-proposals"}," Query the list of governance parameters"),". "))),(0,o.kt)("h3",{id:"slashing-contract"},"Slashing contract"),(0,o.kt)("p",null,"contract address:",(0,o.kt)("strong",{parentName:"p"},"lat1zqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqyva9ztf")),(0,o.kt)("p",null,"The slashing contract is mainly for system security to monitor the behavior of each node, Penalties will be imposed on violating nodes that violate system security, the contract has the following two major functions\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Slashing nodes that can't produce blocks"),(0,o.kt)("p",{parentName:"li"},"According to system rules, each consensus round will have a batch of nodes responsible for producing the blocks of that round, the number of blocks to be produced is fixed for each consensus round, each node is assigned a time window and the number of blocks that need to be produced, generate blocks in turn to complete the block production of the entire consensus round. When a node does not produce a block within the specified time window, will switch to the next node to continue producing blocks, this cycle continues until the number of blocks required to complete the consensus round. The entire consensus round is completed and a new batch of nodes starts the next consensus round. "),(0,o.kt)("p",{parentName:"li"},"If a node has not produced a block in the entire consensus round, then the zero block behavior of the node will be recorded. The Punish conditions are:start recording when the node generates zero blocks for the first time, count the production of blocks in each consensus round in the next period of time, if during this period the node participates in the consensus round again and produces a block, then the previous zero block records will be cleared and exempted from penalties, otherwise, the node will be punished when the statistical time is up, Impose a fine (amount of fine = current block reward*n) and state lock (automatically unlock after a period of lock and return to the normal state. During the lock-up period, the node has no rewards and cannot perform any actions, including modifying information, revoking staking, participating in block production, and accepting delegation).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Slashing double-production or double-signed nodes"),(0,o.kt)("p",{parentName:"li"},"Under normal circumstances, a node will only generate one block at the same block height or only sign one of the blocks for different blocks of the same block height, otherwise it is a violation of the rules and will be punished, when this happens to a node, the evidence of violation will be recorded locally by the received node, users can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"RPC")," to call the ",(0,o.kt)("inlineCode",{parentName:"p"},"platon_evidences")," interface to obtain evidence of violations, then send the evidence to the chain in the form of a transaction, the system will judge the evidence, if the evidence is true, the node will be punished."))),(0,o.kt)("h4",{id:"contract-interface-2"},"Contract interface"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Report double sign/double production"),(0,o.kt)("p",{parentName:"li"},"This interface is used to report the double-signature or double-production behavior of a node, the user sends the evidence to the penalty contract in the form of a transaction, After the system verifies that the evidence is true, the node will be fined and the staking will be forcibly released (disqualification of validators and alternative nodes), Part of the fine (default:50%) will be awarded to the reporter as a reward and transferred to the account immediately (transferred to the account that initiated the reporting transaction)."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#reportdoubleSign"}," Report double sign/double production"),". "))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check whether the evidence has been reported"),(0,o.kt)("p",{parentName:"li"},"This interface is used to check whether the evidence to be reported has been used before initiating a report (already reported), after the user obtains the evidence by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"RPC")," interface, he can first call the interface to check whether the evidence has been reported to avoid repeated reporting. Because the reporting interface requires a lot of cost, and regardless of whether the evidence has been reported (used) or not, the cost of the transaction will still be spent. So this interface can provide pre-check, all input parameters of this interface are parsed from the evidence list returned by the ",(0,o.kt)("inlineCode",{parentName:"p"},"RPC")," interface ",(0,o.kt)("inlineCode",{parentName:"p"},"platon_evidences"),"."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#checkduplicatesign"}," Check whether the evidence has been reported"),". "))),(0,o.kt)("h3",{id:"lockup-contract"},"Lockup contract"),(0,o.kt)("p",null,"contract address:",(0,o.kt)("strong",{parentName:"p"},"lat1zqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqp7pn3ep")),(0,o.kt)("p",null,"This contract can be used to lock the asset to restrict its circulation within a certain period of time, it can control the total asset circulation within a certain period of time or other lock-in requirements of external personnel, When the lock-up period of the asset ends, the asset will be automatically transferred to the receiving account (the receiving account after unlocking entered when the lock plan was initiated), after the locked asset is transferred to the lock-up contract, the ownership of the asset will belong to the unlocked receiving account, the asset cannot be used for trading during the lock-up period, although it belongs to the receiving account, the funds are stored in the lock-up contract and the account balance cannot be queried, the asset can only be obtained by querying the lock-up record in the lock-up contract. The contract will release the assets to the designated unlock recipient according to the release rules specified by the person who initiated the lock, the release rule can be customized to unlock all at a certain point in time and transfer to the recipient's account, it can also be defined as splitting an asset into N shares and releasing them in M phases, setting the release time of each phase to release one part until all the locked assets are released after the M period, and each time the asset is released, the asset arrives in time. The user account can be used freely."),(0,o.kt)("p",null,"Assets in the locked period cannot be transferred due to restrictions, in order to compensate users for the loss of asset liquidity and benefits, this asset can be used for staking nodes and delegation nodes to revitalize funds to obtain income and offset the value dilution caused by inflation. However, when the asset is used for staking or entrusted use, the asset will not be transferred to the recipient's account after the lock-up period has expired. Instead, the asset will be transferred to the recipient's account when the user releases the staking or the delegation, the release rules of the lockup contract will be handled differently according to the use of the asset. If the funds used for staking and delegation only use part of the assets in the locked position, then when the release period is reached, it will only be released from the funds that have never been misappropriated. If the released amount is not enough, it will not be released currently but wait for the user Only release when the misappropriated funds are cancelled."),(0,o.kt)("h4",{id:"contract-interface-3"},"Contract interface"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a lockup plan"),(0,o.kt)("p",{parentName:"li"},"This interface is used to create an asset lock, transfer the specified amount from the initiator's account to the lock-up contract, and transfer it to the specified recipient account when the specified time is reached."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#createrestrictingplan"}," Create a lockup plan"),". ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Query the lock-up plan"),(0,o.kt)("p",{parentName:"li"},"This interface is used to query the lock-up plan under the specified account, and the specified account is the recipient's account after unlocking."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#getrestrictinginfo"}," Query the lock-up plan"),". "))),(0,o.kt)("h3",{id:"delegationreward-contract"},"DelegationReward contract"),(0,o.kt)("p",null,"contract address:",(0,o.kt)("strong",{parentName:"p"},"lat1zqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqxlcypcy")),(0,o.kt)("p",null,"The contract is mainly used to deal with the business related to delegate income. When each user delegates a node, a delegation record will be generated, each delegation record will get dividends from the delegated node, the dividend amount is calculated from the node's income according to the dividend ratio set by the node to the delegator, the total dividends allocated will be divided equally according to the total delegations of the nodes, Each delegated unit will get a certain income, so the income that a single delegation can obtain is directly proportional to the delegated volume. "),(0,o.kt)("p",null,"In this process, at the end of each epoch, the system will automatically calculate the dividend rewards of each candidate node to all its delegators, all dividend rewards will be immediately transferred to this contract for temporary storage, that is, the income obtained by each principal is first stored in this contract, it is necessary to wait for the user to initiate a transaction for receiving revenue. At this time, the system will calculate how much delegation revenue this user has in this contract and immediately transfer it to the user's account."),(0,o.kt)("h4",{id:"contract-interface-4"},"Contract interface"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Receive delegated rewards"),(0,o.kt)("p",{parentName:"li"},"This interface is used to extract delegated rewards that the user has not yet claimed, when a single user entrusts multiple nodes to generate multiple delegations, the interface can only process the rewards for 20 delegations at a time, the rest must be re-initiated to receive the operation (the rules for receiving 20 delegated rewards are sorted according to the number of Epochs that have not been claimed for each delegation, the more the number of unclaimed cycles, the priority to receive the delegated awards), if the number of delegated rewards waiting to be collected is less than 20, then directly collect all of them."),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#withdrawdelegatereward"}," Receive delegated rewards"),". "))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Query delegation reward"),(0,o.kt)("p",{parentName:"li"},"This interface can be used to query all pending delegation income details of the interface initiator, you can also specify to query a certain delegation or multiple delegations, the return result will be a sorted list of income details, the sorting rule is to sort in reverse order according to the number of unclaimed Epochs for each delegation (the return data will not be sorted if there are less than 20 delegated rewards to be received)\u3002"),(0,o.kt)("p",{parentName:"li"},"Interface parameters reference Java SDK:",(0,o.kt)("a",{parentName:"p",href:"/docs/en/Java_SDK#getdelegatereward"}," Query delegation reward"),"."))))}h.isMDXComponent=!0}}]);