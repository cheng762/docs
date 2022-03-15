"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9256],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,k=m["".concat(c,".").concat(d)]||m[d]||s[d]||l;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2592:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(7462),o=n(3366),l=(n(7294),n(3905)),r=["components"],i={id:"Install_PlatON",title:"Source Installation PlatON",sidebar_label:"Source Installation PlatON"},c=void 0,p={unversionedId:"Install_PlatON",id:"Install_PlatON",isDocsHomePage:!1,title:"Source Installation PlatON",description:"This document is intended for users with the ability to compile source code on the PlatON blockchain.",source:"@site/../docs/\u6e90\u7801\u5b89\u88c5PlatON.md",sourceDirName:".",slug:"/Install_PlatON",permalink:"/docs/en/Install_PlatON",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/\u6e90\u7801\u5b89\u88c5PlatON.md",version:"current",frontMatter:{id:"Install_PlatON",title:"Source Installation PlatON",sidebar_label:"Source Installation PlatON"}},u=[{value:"Windows source code compilation",id:"windows-source-code-compilation",children:[]},{value:"Ubuntu source code compilation",id:"ubuntu-source-code-compilation",children:[]}],s={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This document is intended for users with the ability to compile source code on the PlatON blockchain."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PlatON supports source code compilation and installation under Windows and Ubuntu. ")),(0,l.kt)("h2",{id:"windows-source-code-compilation"},"Windows source code compilation"),(0,l.kt)("p",null,"Windows compilation environment requirements :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"git: ",(0,l.kt)("inlineCode",{parentName:"li"},"2.19.1 and above")),(0,l.kt)("li",{parentName:"ul"},"Go language development kit: ",(0,l.kt)("inlineCode",{parentName:"li"},"go (1.16+)")),(0,l.kt)("li",{parentName:"ul"},"mingw: ",(0,l.kt)("inlineCode",{parentName:"li"},"mingw (V8.1.0)")),(0,l.kt)("li",{parentName:"ul"},"cmake: ",(0,l.kt)("inlineCode",{parentName:"li"},"3.0 +"))),(0,l.kt)("p",null,"You can install the above compilation environment yourself. Please make sure the above environment can run normally before compiling ",(0,l.kt)("inlineCode",{parentName:"p"},"PlatON")," source code."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You can also use ",(0,l.kt)("inlineCode",{parentName:"p"},"Chocolatey")," to install the compilation environment (if you do not already have ",(0,l.kt)("inlineCode",{parentName:"p"},"chocolatey"),", you can follow the instructions on ",(0,l.kt)("a",{parentName:"p",href:"https://chocolatey.org"},"https://chocolatey.org")," to install), start ",(0,l.kt)("inlineCode",{parentName:"p"},"PowerShell")," as an administrator, and then execute the following command:"),(0,l.kt)("p",{parentName:"blockquote"},"Install git:"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre"},"choco install git\n")),(0,l.kt)("p",{parentName:"blockquote"},"Install golang:"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre"},"choco install golang\n")),(0,l.kt)("p",{parentName:"blockquote"},"Install mingw:"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre"},"choco install mingw\n")),(0,l.kt)("p",{parentName:"blockquote"},"Install cmake:"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre"},"choco install cmake --installargs 'ADD_CMAKE_TO_PATH=System'\n")),(0,l.kt)("p",{parentName:"blockquote"},"Most softwares installed using the ",(0,l.kt)("inlineCode",{parentName:"p"},"chocolatey")," package manager have a default installation path, and some software may have various paths, depending on the publisher of the software. Installing these packages will modify the Path environment variable. The final installation path can be viewed in the PATH. Some machine environments may not find the installation path of these tools in the PATH, and you need to add it manually at this time. After installation, please make sure the installed Go version is 1.16 (or higher).")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: The following commands need to be run in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Git-bash")," environment. In any directory, right-click and select ",(0,l.kt)("inlineCode",{parentName:"p"},"Git Bash Here")," to bring up the ",(0,l.kt)("inlineCode",{parentName:"p"},"Git Bash")," running window.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get the source code")),(0,l.kt)("p",null,"Get the source code and put it in the GOPATH path, where ",(0,l.kt)("inlineCode",{parentName:"p"},"master")," is the branch name, then switch to the actual branch:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mkdir -p $GOPATH/src/github.com/PlatONnetwork\ncd $GOPATH/src/github.com/PlatONnetwork\ngit clone -b master https://github.com/PlatONnetwork/PlatON-Go.git --recursive\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add bls dependent library to environment variables")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'export PATH=$PATH:\"$GOPATH/src/github.com/PlatONnetwork/PlatON-Go/crypto/bls/bls_win/lib\"' >> ~/.bashrc\nsource ~/.bashrc\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Compile")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd $GOPATH/src/github.com/PlatONnetwork/PlatON-Go\ngo run build/ci.go install ./cmd/platon\ngo run build/ci.go install ./cmd/platonkey\n")),(0,l.kt)("p",null,"After compiling, ",(0,l.kt)("inlineCode",{parentName:"p"},"platon"),",",(0,l.kt)("inlineCode",{parentName:"p"}," platonkey")," executable files will be generated in the",(0,l.kt)("inlineCode",{parentName:"p"}," PlatON-Go/build/bin")," directory. Copy these executable files to your working directory and run."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Repeated compilation will overwrite the previously generated executable file.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: It is recommended that the windows version be used for development testing only, and that the ubuntu version be used for the official production environment.")),(0,l.kt)("h2",{id:"ubuntu-source-code-compilation"},"Ubuntu source code compilation"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step1.")," Ubuntu compilation environment requirements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"System version: ",(0,l.kt)("inlineCode",{parentName:"li"},"Ubuntu 18.04.1 and above")),(0,l.kt)("li",{parentName:"ul"},"git: ",(0,l.kt)("inlineCode",{parentName:"li"},"2.19.1 and above")),(0,l.kt)("li",{parentName:"ul"},"Compilers: ",(0,l.kt)("inlineCode",{parentName:"li"},"gcc (4.9.2+)"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"g ++ (5.0+)")),(0,l.kt)("li",{parentName:"ul"},"Go language development kit: ",(0,l.kt)("inlineCode",{parentName:"li"},"go (1.16+)")),(0,l.kt)("li",{parentName:"ul"},"cmake: ",(0,l.kt)("inlineCode",{parentName:"li"},"3.0 +"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step2.")," Get the PlatON source:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone -b master https://github.com/PlatONnetwork/PlatON-Go.git --recursive\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step3.")," Install dependency library:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update \nsudo apt install -y golang-go cmake llvm g++ libgmp-dev libssl-dev\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step4.")," compilation\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd PlatON-Go \nmake all\n")),(0,l.kt)("p",null,"After compiling, a series of executable files such as ",(0,l.kt)("inlineCode",{parentName:"p"},"platon, platonkey")," and so on will be generated in the ",(0,l.kt)("inlineCode",{parentName:"p"},"./build/bin")," directory. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"step5.")," Copy binary:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo cp -f ./build/bin/platon /usr/bin/ \nsudo cp -f ./build/bin/platonkey /usr/bin/\n")),(0,l.kt)("p",null,"To this step, congratulations, the source code compilation completed!"))}m.isMDXComponent=!0}}]);