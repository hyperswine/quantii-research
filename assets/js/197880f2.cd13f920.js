"use strict";(self.webpackChunkquantii_research=self.webpackChunkquantii_research||[]).push([[974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:3},o="Enlightened Kernel Architecture: Utility, Security, and Performance",l={unversionedId:"base/kernels-and-utility",id:"base/kernels-and-utility",title:"Enlightened Kernel Architecture: Utility, Security, and Performance",description:"Kernels are a key part of a useful computing system. There have been many kernels implemented as a part of a greater system, e.g. an operating system. Such kernels include linux, bsd, nt, sun, dos kernel, etc. These kernels have been developed into their modern counterparts and widely used in GNU/Linux, Android (Google/Linux), Windows, MacOS, FreeBSD, and other smaller embedded systems. Some systems like the Pi may also have a small RTOS based on something like RODOS or ThreadX.",source:"@site/docs/base/kernels-and-utility.md",sourceDirName:"base",slug:"/base/kernels-and-utility",permalink:"/docs/base/kernels-and-utility",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"main",previous:{title:"Latency Sensitive Design",permalink:"/docs/base/latency-sensitive-design"}},s={},u=[{value:"Utility &amp; Security",id:"utility--security",level:2},{value:"Non Utility",id:"non-utility",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"enlightened-kernel-architecture-utility-security-and-performance"},"Enlightened Kernel Architecture: Utility, Security, and Performance"),(0,i.kt)("p",null,"Kernels are a key part of a useful computing system. There have been many kernels implemented as a part of a greater system, e.g. an operating system. Such kernels include linux, bsd, nt, sun, dos kernel, etc. These kernels have been developed into their modern counterparts and widely used in GNU/Linux, Android (Google/Linux), Windows, MacOS, FreeBSD, and other smaller embedded systems. Some systems like the Pi may also have a small RTOS based on something like RODOS or ThreadX."),(0,i.kt)("p",null,"Newer kernels of interest include a myriad of RTOS's, fushcia (google), sel4, kataos (google), custom console kernels."),(0,i.kt)("h2",{id:"utility--security"},"Utility & Security"),(0,i.kt)("p",null,"Kernels are built to be useful. Otherwise, you could just run apps directly on a system. It would prob be more problematic since you would have to use the direct abstractions. Or develop a library to communicate with the hardware directly. But how would you then ensure everything works properly and noone takes up too much time and compute? Well you could have a mediator program. But that mediator program could basically be then seen as a kernel. I believe modern kernels are more like mediators rather than abstractors."),(0,i.kt)("p",null,"In neutron, the kernel itself doesnt provide any abstractions. It's main job is to setup everything safely (its code is verified) and let others provide 99% of the functionality."),(0,i.kt)("h2",{id:"non-utility"},"Non Utility"),(0,i.kt)("p",null,"Some specific things I dont really like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"println")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"print")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"system.out.println"),". They assume things like ",(0,i.kt)("inlineCode",{parentName:"li"},"stdin"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"stdout"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"stderr")," which Im not fond of")))}d.isMDXComponent=!0}}]);