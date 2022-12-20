"use strict";(self.webpackChunkquantii_research=self.webpackChunkquantii_research||[]).push([[492],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=i,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5907:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const o={date:"2022-12-18T10:00",name:"Jasen Qin",title:"Instruction Set Architecture from First Principles: Part 1",url:"https://github.com/hyperswine",email:"jasen.qin33@gmail.com"},a=void 0,s={permalink:"/blog/isa-pt1",source:"@site/blog/isa-pt1.md",title:"Instruction Set Architecture from First Principles: Part 1",description:'Instructions are imperative by default on atomic execution environments. This is probably because digital electronics are ubiquitous and hence most modern atomic instructions are built from discrete signals. If it was built from continuous signals, perhaps we could have something quite different, and not imperative. I think its still possible to have "declarative" instructions.',date:"2022-12-18T10:00:00.000Z",formattedDate:"December 18, 2022",tags:[],readingTime:.365,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-12-18T10:00",name:"Jasen Qin",title:"Instruction Set Architecture from First Principles: Part 1",url:"https://github.com/hyperswine",email:"jasen.qin33@gmail.com"},prevItem:{title:"Halting Problem",permalink:"/blog/halting-problem"},nextItem:{title:"Performance Considerations, Pt. 1",permalink:"/blog/performance-post"}},c={authorsImageUrls:[]},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Instructions are imperative by default on atomic execution environments. This is probably because digital electronics are ubiquitous and hence most modern atomic instructions are built from discrete signals. If it was built from continuous signals, perhaps we could have something quite different, and not imperative. I think its still possible to have "declarative" instructions.'),(0,i.kt)("hr",null),(0,i.kt)("h2",{style:{textAlign:"center"}},"Discuss"),(0,i.kt)("p",null,(0,i.kt)("giscus-widget",{repo:"hyperswine/projects",repoid:"R_kgDOIZg-sQ",category:"Announcements",categoryid:"DIC_kwDOIZg-sc4CSmin",mapping:"pathname",strict:"0",reactionsenabled:"1",emitmetadata:"0",inputposition:"top",theme:"preferred_color_scheme",lang:"en",loading:"lazy",crossorigin:"anonymous"},"\n")))}p.isMDXComponent=!0}}]);