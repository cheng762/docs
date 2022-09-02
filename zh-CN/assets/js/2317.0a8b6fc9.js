"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2317],{6747:(e,t,n)=>{n.d(t,{a:()=>d});var a=n(7294);function r(){return a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var o=n(830),l=["translations"];function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,r,o=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(a=n.next()).done)&&(o.push(a.value),!t||o.length!==t);l=!0);}catch(s){c=!0,r=s}finally{try{l||null==n.return||n.return()}finally{if(c)throw r}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m="Ctrl";var d=a.forwardRef((function(e,t){var n=e.translations,i=void 0===n?{}:n,d=u(e,l),h=i.buttonText,f=void 0===h?"Search":h,v=i.buttonAriaLabel,g=void 0===v?"Search":v,b=s((0,a.useState)(null),2),E=b[0],p=b[1];return(0,a.useEffect)((function(){"undefined"!=typeof navigator&&(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?p("\u2318"):p(m))}),[]),a.createElement("button",c({type:"button",className:"DocSearch DocSearch-Button","aria-label":g},d,{ref:t}),a.createElement("span",{className:"DocSearch-Button-Container"},a.createElement(o.W,null),a.createElement("span",{className:"DocSearch-Button-Placeholder"},f)),a.createElement("span",{className:"DocSearch-Button-Keys"},null!==E&&a.createElement(a.Fragment,null,a.createElement("kbd",{className:"DocSearch-Button-Key"},E===m?a.createElement(r,null):E),a.createElement("kbd",{className:"DocSearch-Button-Key"},"K"))))}))},830:(e,t,n)=>{n.d(t,{W:()=>r});var a=n(7294);function r(){return a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},7052:(e,t,n)=>{n.d(t,{D:()=>r});var a=n(7294);function r(e){var t=e.isOpen,n=e.onOpen,r=e.onClose,o=e.onInput,l=e.searchButtonRef;a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?r():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),l&&l.current===document.activeElement&&o&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&o(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,r,o,l])}},8617:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);const r="iconExternalLink_wgqa",o=e=>{let{width:t=13.5,height:n=13.5}=e;return a.createElement("svg",{width:t,height:n,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},3264:(e,t,n)=>{n(7294)},4478:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7462),r=n(7294);const o=e=>{let{width:t=30,height:n=30,className:o,...l}=e;return r.createElement("svg",(0,a.Z)({className:o,width:t,height:n,viewBox:"0 0 30 30","aria-hidden":"true"},l),r.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},4986:(e,t,n)=>{n.d(t,{Z:()=>ue});var a=n(7294),r=n(6010),o=n(5977),l=n(4973),c=n(9306);const s="skipToContent_OuoZ";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const u=function(){const e=(0,a.useRef)(null),{action:t}=(0,o.k6)();return(0,c.SL)((n=>{let{location:a}=n;e.current&&!a.hash&&"POP"!==t&&i(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:s,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},a.createElement(l.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m="announcementBar_axC9",d="announcementBarClose_A3A1",h="announcementBarContent_6uhP",f="announcementBarCloseable_y4cp";const v=function(){const{isClosed:e,close:t}=(0,c.nT)(),{announcementBar:n}=(0,c.LU)();if(!n)return null;const{content:o,backgroundColor:s,textColor:i,isCloseable:u}=n;return!o||u&&e?null:a.createElement("div",{className:m,style:{backgroundColor:s,color:i},role:"banner"},a.createElement("div",{className:(0,r.Z)(h,{[f]:u}),dangerouslySetInnerHTML:{__html:o}}),u?a.createElement("button",{type:"button",className:(0,r.Z)(d,"clean-btn"),onClick:t,"aria-label":(0,l.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)};var g=n(7462),b=n(6979),E=n(2263);const p={toggle:"toggle_iYfV"},k=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(p.toggle,p.dark),style:n},t)},y=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(p.toggle,p.light),style:n},t)},Z=(0,a.memo)((e=>{let{className:t,icons:n,checked:o,disabled:l,onChange:c}=e;const[s,i]=(0,a.useState)(o),[u,m]=(0,a.useState)(!1),d=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":u,"react-toggle--disabled":l})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:()=>{var e;return null==(e=d.current)?void 0:e.click()}},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:d,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:()=>i(!s),onFocus:()=>m(!0),onBlur:()=>m(!1)}))}));function w(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:r,lightIconStyle:o}}}=(0,c.LU)(),{isClient:l}=(0,E.Z)();return a.createElement(Z,(0,g.Z)({disabled:!l,icons:{checked:a.createElement(k,{icon:t,style:n}),unchecked:a.createElement(y,{icon:r,style:o})}},e))}var C=n(5350),N=n(7898);const _=e=>{const t=(0,o.TH)(),[n,r]=(0,a.useState)(e),l=(0,a.useRef)(!1),[s,i]=(0,a.useState)(0),u=(0,a.useCallback)((e=>{null!==e&&i(e.getBoundingClientRect().height)}),[]);return(0,N.Z)(((t,n)=>{let{scrollY:a}=t,{scrollY:o}=n;if(!e)return;if(a<s)return void r(!0);if(l.current)return l.current=!1,void r(!1);o&&0===a&&r(!0);const c=document.documentElement.scrollHeight-s,i=window.innerHeight;o&&a>=o?r(!1):a+i<c&&r(!0)}),[s,l]),(0,c.SL)((t=>{e&&!t.location.hash&&r(!0)})),(0,a.useEffect)((()=>{e&&t.hash&&(l.current=!0)}),[t.hash]),{navbarRef:u,isNavbarVisible:n}};var S=n(1839),L=n(3783),D=n(5525),I=n(532);function T(e){let{mobile:t}=e;return t?null:a.createElement(b.Z,null)}const M={default:()=>D.Z,localeDropdown:()=>I.Z,search:()=>T,docsVersion:()=>n(7250).Z,docsVersionDropdown:()=>n(9308).Z,doc:()=>n(6400).Z};function A(e){let{type:t,...n}=e;const r=function(e){void 0===e&&(e="default");const t=M[e];if(!t)throw new Error(`No NavbarItem component found for type "${e}".`);return t()}(t);return a.createElement(r,n)}var x=n(5537),O=n(4478);const B="displayOnlyInLargeViewport_cxYs",P="navbarHideable_RReh",R="navbarHidden_FBwS",U="right";const V=function(){const{navbar:{items:e,hideOnScroll:t,style:n},colorMode:{disableSwitch:o}}=(0,c.LU)(),[l,s]=(0,a.useState)(!1),{isDarkTheme:i,setLightTheme:u,setDarkTheme:m}=(0,C.Z)(),{navbarRef:d,isNavbarVisible:h}=_(t);(0,S.Z)(l);const f=(0,a.useCallback)((()=>{s(!0)}),[s]),v=(0,a.useCallback)((()=>{s(!1)}),[s]),E=(0,a.useCallback)((e=>e.target.checked?m():u()),[u,m]),p=(0,L.Z)();(0,a.useEffect)((()=>{p===L.D.desktop&&s(!1)}),[p]);const k=e.some((e=>"search"===e.type)),{leftItems:y,rightItems:Z}=function(e){return{leftItems:e.filter((e=>"left"===(e.position??U))),rightItems:e.filter((e=>"right"===(e.position??U)))}}(e);return a.createElement("nav",{ref:d,className:(0,r.Z)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===n,"navbar--primary":"primary"===n,"navbar-sidebar--show":l,[P]:t,[R]:t&&!h})},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},null!=e&&0!==e.length&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:f,onKeyDown:f},a.createElement(O.Z,null)),a.createElement(x.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),y.map(((e,t)=>a.createElement(A,(0,g.Z)({},e,{key:t}))))),a.createElement("div",{className:"navbar__items navbar__items--right"},Z.map(((e,t)=>a.createElement(A,(0,g.Z)({},e,{key:t})))),!o&&a.createElement(w,{className:B,checked:i,onChange:E}),!k&&a.createElement(b.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:v}),a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(x.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:v}),!o&&l&&a.createElement(w,{checked:i,onChange:E})),a.createElement("div",{className:"navbar-sidebar__items"},a.createElement("div",{className:"menu"},a.createElement("ul",{className:"menu__list"},e.map(((e,t)=>a.createElement(A,(0,g.Z)({mobile:!0},e,{onClick:v,key:t})))))))))};var $=n(546),W=n(412);const H=(0,c.WA)("theme"),j="light",K="dark",q=e=>e===K?K:j,z=e=>{(0,c.WA)("theme").set(q(e))},F=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:n}}=(0,c.LU)(),[r,o]=(0,a.useState)((e=>W.Z.canUseDOM?q(document.documentElement.getAttribute("data-theme")):q(e))(e)),l=(0,a.useCallback)((()=>{o(j),z(j)}),[]),s=(0,a.useCallback)((()=>{o(K),z(K)}),[]);return(0,a.useEffect)((()=>{document.documentElement.setAttribute("data-theme",q(r))}),[r]),(0,a.useEffect)((()=>{if(!t)try{const e=H.get();null!==e&&o(q(e))}catch(e){console.error(e)}}),[o]),(0,a.useEffect)((()=>{t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((e=>{let{matches:t}=e;o(t?K:j)}))}),[]),{isDarkTheme:r===K,setLightTheme:l,setDarkTheme:s}};var G=n(2924);const Y=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=F();return a.createElement(G.Z.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}},e.children)},X="docusaurus.tab.",J=()=>{const[e,t]=(0,a.useState)({}),n=(0,a.useCallback)(((e,t)=>{(0,c.WA)(`docusaurus.tab.${e}`).set(t)}),[]);return(0,a.useEffect)((()=>{try{const e={};(0,c._f)().forEach((t=>{if(t.startsWith(X)){const n=t.substring(X.length);e[n]=(0,c.WA)(t).get()}})),t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}},Q=(0,a.createContext)(void 0);const ee=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=J();return a.createElement(Q.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n}},e.children)};function te(e){let{children:t}=e;return a.createElement(Y,null,a.createElement(c.pl,null,a.createElement(ee,null,a.createElement(c.L5,null,t))))}var ne=n(9105),ae=n(4996);function re(e){let{locale:t,version:n,tag:r}=e;const o=t;return a.createElement(ne.Z,null,o&&a.createElement("meta",{name:"docsearch:language",content:o}),n&&a.createElement("meta",{name:"docsearch:version",content:n}),r&&a.createElement("meta",{name:"docsearch:docusaurus_tag",content:r}))}var oe=n(1217);function le(){const{i18n:{defaultLocale:e,locales:t}}=(0,E.Z)(),n=(0,c.l5)();return a.createElement(ne.Z,null,t.map((e=>a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),a.createElement("link",{rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function ce(e){let{permalink:t}=e;const{siteConfig:{url:n}}=(0,E.Z)(),r=function(){const{siteConfig:{url:e}}=(0,E.Z)(),{pathname:t}=(0,o.TH)();return e+(0,ae.Z)(t)}(),l=t?`${n}${t}`:r;return a.createElement(ne.Z,null,a.createElement("meta",{property:"og:url",content:l}),a.createElement("link",{rel:"canonical",href:l}))}function se(e){const{siteConfig:{favicon:t,themeConfig:{metadatas:n,image:r}},i18n:{currentLocale:o,localeConfigs:l}}=(0,E.Z)(),{title:s,description:i,image:u,keywords:m,searchMetadatas:d}=e,h=(0,ae.Z)(t),f=(0,c.pe)(s),v=o,b=l[o].direction;return a.createElement(a.Fragment,null,a.createElement(ne.Z,null,a.createElement("html",{lang:v,dir:b}),t&&a.createElement("link",{rel:"shortcut icon",href:h}),a.createElement("title",null,f),a.createElement("meta",{property:"og:title",content:f}),u||r&&a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),a.createElement(oe.Z,{description:i,keywords:m,image:u}),a.createElement(ce,null),a.createElement(le,null),a.createElement(re,(0,g.Z)({tag:c.HX,locale:o},d)),a.createElement(ne.Z,null,n.map(((e,t)=>a.createElement("meta",(0,g.Z)({key:`metadata_${t}`},e))))))}const ie=function(){(0,a.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const ue=function(e){const{children:t,noFooter:n,wrapperClassName:o,pageClassName:l}=e;return ie(),a.createElement(te,null,a.createElement(se,e),a.createElement(u,null),a.createElement(v,null),a.createElement(V,null),a.createElement("div",{className:(0,r.Z)(c.kM.wrapper.main,o,l)},t),!n&&a.createElement($.Z,null))}},5537:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),r=n(7294),o=n(6742),l=n(8465),c=n(4996),s=n(2263);const i=e=>{const{siteConfig:{title:t,themeConfig:{navbar:{title:n,logo:i={src:""}}}},isClient:u}=(0,s.Z)(),{imageClassName:m,titleClassName:d,...h}=e,f=(0,c.Z)(i.href||"/"),v={light:(0,c.Z)(i.src),dark:(0,c.Z)(i.srcDark||i.src)};return r.createElement(o.Z,(0,a.Z)({to:f},h,i.target&&{target:i.target}),i.src&&r.createElement(l.Z,{key:u,className:m,sources:v,alt:i.alt||n||t}),null!=n&&r.createElement("b",{className:d},n))}},5525:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7462),r=n(7294),o=n(6010),l=n(6742),c=n(4996),s=n(5977),i=n(9306),u=n(8617),m=n(3919);const d="dropdown__link--active";function h(e){let{activeBasePath:t,activeBaseRegex:n,to:o,href:s,label:i,activeClassName:h="navbar__link--active",prependBaseUrlToHref:f,...v}=e;const g=(0,c.Z)(o),b=(0,c.Z)(t),E=(0,c.Z)(s,{forcePrependBaseUrl:!0}),p=i&&s&&!(0,m.Z)(s),k=h===d;return r.createElement(l.Z,(0,a.Z)({},s?{href:f?E:s}:{isNavLink:!0,activeClassName:h,to:g,...t||n?{isActive:(e,t)=>n?new RegExp(n).test(t.pathname):t.pathname.startsWith(b)}:null},v),p?r.createElement("span",null,i,r.createElement(u.Z,k&&{width:12,height:12})):i)}function f(e){let{items:t,position:n,className:l,...c}=e;const s=(0,r.useRef)(null),i=(0,r.useRef)(null),[u,m]=(0,r.useState)(!1);(0,r.useEffect)((()=>{const e=e=>{s.current&&!s.current.contains(e.target)&&m(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[s]);const f=function(e,t){return void 0===t&&(t=!1),(0,o.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?r.createElement("div",{ref:s,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===n,"dropdown--right":"right"===n,"dropdown--show":u})},r.createElement(h,(0,a.Z)({className:f(l)},c,{onClick:c.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),m(!u))}}),c.children??c.label),r.createElement("ul",{ref:i,className:"dropdown__menu"},t.map(((e,n)=>{let{className:o,...l}=e;return r.createElement("li",{key:n},r.createElement(h,(0,a.Z)({onKeyDown:e=>{if(n===t.length-1&&"Tab"===e.key){e.preventDefault(),m(!1);const t=s.current.nextElementSibling;t&&t.focus()}},activeClassName:d,className:f(o,!0)},l)))})))):r.createElement(h,(0,a.Z)({className:f(l)},c))}function v(e){var t,n;let{items:l,className:c,position:u,...m}=e;const d=(0,r.useRef)(null),{pathname:f}=(0,s.TH)(),[v,g]=(0,r.useState)((()=>!(null!=l&&l.some((e=>(0,i.Mg)(e.to,f))))??!0)),b=function(e,t){return void 0===t&&(t=!1),(0,o.Z)("menu__link",{"menu__link--sublist":t},e)};if(!l)return r.createElement("li",{className:"menu__list-item"},r.createElement(h,(0,a.Z)({className:b(c)},m)));const E=null!=(t=d.current)&&t.scrollHeight?`${null==(n=d.current)?void 0:n.scrollHeight}px`:void 0;return r.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":v})},r.createElement(h,(0,a.Z)({role:"button",className:b(c,!0)},m,{onClick:e=>{e.preventDefault(),g((e=>!e))}}),m.children??m.label),r.createElement("ul",{className:"menu__list",ref:d,style:{height:v?void 0:E}},l.map(((e,t)=>{let{className:n,...o}=e;return r.createElement("li",{className:"menu__list-item",key:t},r.createElement(h,(0,a.Z)({activeClassName:"menu__link--active",className:b(n)},o,{onClick:m.onClick})))}))))}const g=function(e){let{mobile:t=!1,...n}=e;const a=t?v:f;return r.createElement(a,n)}},6400:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),r=n(7294),o=n(5525),l=n(907),c=n(6010),s=n(9306),i=n(8780);function u(e){let{docId:t,activeSidebarClassName:n,label:u,docsPluginId:m,...d}=e;const{activeVersion:h,activeDoc:f}=(0,l.Iw)(m),{preferredVersion:v}=(0,s.J)(m),g=(0,l.yW)(m),b=function(e,t){const n=[].concat(...e.map((e=>e.docs))),a=n.find((e=>e.id===t));if(!a){const a=n.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id "${t}" in version${e.length?"s":""} ${e.map((e=>e.name)).join(", ")}".\nAvailable doc ids are:\n- ${a}`)}return a}((0,i.uniq)([h,v,g].filter(Boolean)),t);return r.createElement(o.Z,(0,a.Z)({exact:!0},d,{className:(0,c.Z)(d.className,{[n]:f&&f.sidebar===b.sidebar}),label:u??b.id,to:b.path}))}},9308:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),r=n(7294),o=n(5525),l=n(907),c=n(9306);const s=e=>e.docs.find((t=>t.id===e.mainDocId));function i(e){let{mobile:t,docsPluginId:n,dropdownActiveClassDisabled:i,dropdownItemsBefore:u,dropdownItemsAfter:m,...d}=e;const h=(0,l.Iw)(n),f=(0,l.gB)(n),v=(0,l.yW)(n),{preferredVersion:g,savePreferredVersionName:b}=(0,c.J)(n);const E=function(){const e=f.map((e=>{const t=(null==h?void 0:h.alternateDocVersions[e.name])||s(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==h?void 0:h.activeVersion),onClick:()=>{b(e.name)}}})),t=[...u,...e,...m];if(!(t.length<=1))return t}(),p=h.activeVersion??g??v,k=t&&E?"Versions":p.label,y=t&&E?void 0:s(p).path;return r.createElement(o.Z,(0,a.Z)({},d,{mobile:t,label:k,to:y,items:E,isActive:i?()=>!1:void 0}))}},7250:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7462),r=n(7294),o=n(5525),l=n(907),c=n(9306);function s(e){let{label:t,to:n,docsPluginId:s,...i}=e;const u=(0,l.zu)(s),{preferredVersion:m}=(0,c.J)(s),d=(0,l.yW)(s),h=u??m??d,f=t??h.label,v=n??(e=>e.docs.find((t=>t.id===e.mainDocId)))(h).path;return r.createElement(o.Z,(0,a.Z)({},i,{label:f,to:v}))}},2924:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(7294).createContext(void 0)},8465:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),r=n(7294),o=n(6010),l=n(2263),c=n(5350);const s={themedImage:"themedImage_TMUO","themedImage--light":"themedImage--light_4Vu1","themedImage--dark":"themedImage--dark_uzRr"},i=e=>{const{isClient:t}=(0,l.Z)(),{isDarkTheme:n}=(0,c.Z)(),{sources:i,className:u,alt:m="",...d}=e,h=t?n?["dark"]:["light"]:["light","dark"];return r.createElement(r.Fragment,null,h.map((e=>r.createElement("img",(0,a.Z)({key:e,src:i[e],alt:m,className:(0,o.Z)(s.themedImage,s[`themedImage--${e}`],u)},d)))))}},1839:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=function(e){void 0===e&&(e=!0),(0,a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])}},7898:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(412);const o=()=>({scrollX:r.Z.canUseDOM?window.pageXOffset:0,scrollY:r.Z.canUseDOM?window.pageYOffset:0}),l=function(e,t){void 0===t&&(t=[]);const n=(0,a.useRef)(o()),r=()=>{const t=o();e&&e(t,n.current),n.current=t};(0,a.useEffect)((()=>{const e={passive:!0};return r(),window.addEventListener("scroll",r,e),()=>window.removeEventListener("scroll",r,e)}),t)}},5350:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(2924);const o=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},3783:(e,t,n)=>{n.d(t,{D:()=>o,Z:()=>l});var a=n(7294),r=n(412);const o={desktop:"desktop",mobile:"mobile"};const l=function(){const e=r.Z.canUseDOM;function t(){if(e)return window.innerWidth>996?o.desktop:o.mobile}const[n,l]=(0,a.useState)(t);return(0,a.useEffect)((()=>{if(e)return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n);function n(){l(t())}}),[]),n}},5613:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(907),r=n(9306),o=n(2263);function l(){const{locale:e,tags:t}=function(){const{i18n:e}=(0,o.Z)(),t=(0,a._r)(),n=(0,a.WS)(),l=(0,r.Oh)(),c=[r.HX,...Object.keys(t).map((function(e){var a;const o=(null==n||null==(a=n.activePlugin)?void 0:a.pluginId)===e?n.activeVersion:void 0,c=l[e],s=t[e].versions.find((e=>e.isLast)),i=o??c??s;return(0,r.os)(e,i.name)}))];return{locale:e.currentLocale,tags:c}}();return[`language:${e}`,t.map((e=>`docusaurus_tag:${e}`))]}},6397:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(5977),r=n(412),o=n(2263);const l=function(){const e=(0,a.k6)(),t=(0,a.TH)(),{siteConfig:{baseUrl:n}={}}=(0,o.Z)();return{searchValue:r.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:e=>`${n}search?q=${encodeURIComponent(e)}`}}}}]);