"use strict";(self.webpackChunkquantii_research=self.webpackChunkquantii_research||[]).push([[492],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={date:new Date("2022-12-18T00:00:00.000Z"),name:"Jasen Qin",title:"Instruction Set Architecture from First Principles: Part 1",url:"https://github.com/hyperswine",email:"jasen.qin33@gmail.com"},o=void 0,s={permalink:"/blog/isa-pt1",source:"@site/blog/isa-pt1.md",title:"Instruction Set Architecture from First Principles: Part 1",description:'Instructions are imperative by default on atomic execution environments. This is probably because digital electronics are ubiquitous and hence most modern atomic instructions are built from discrete signals. If it was built from continuous signals, perhaps we could have something quite different, and not imperative. I think its still possible to have "declarative" instructions.',date:"2022-12-18T00:00:00.000Z",formattedDate:"December 18, 2022",tags:[],readingTime:.92,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-12-18T00:00:00.000Z",name:"Jasen Qin",title:"Instruction Set Architecture from First Principles: Part 1",url:"https://github.com/hyperswine",email:"jasen.qin33@gmail.com"},prevItem:{title:"Halting Problem",permalink:"/blog/halting-problem"},nextItem:{title:"Performance Considerations, Pt. 1",permalink:"/blog/performance-post"}},l={authorsImageUrls:[]},c=[{value:"ISA: Spectre",id:"isa-spectre",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Instructions are imperative by default on atomic execution environments. This is probably because digital electronics are ubiquitous and hence most modern atomic instructions are built from discrete signals. If it was built from continuous signals, perhaps we could have something quite different, and not imperative. I think its still possible to have "declarative" instructions.'),(0,i.kt)("h2",{id:"isa-spectre"},"ISA: Spectre"),(0,i.kt)("p",null,"The spectre ISA is designed for minimalist, functional computing. How do we verify that an ISA is enlightened? Well it should be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Well represented. That means probably turing complete or total turing complete"),(0,i.kt)("li",{parentName:"ul"},"Encourage directness and low overhead. A language that compiles to it would essentially look the same or similar to what one would expect"),(0,i.kt)("li",{parentName:"ul"},"Encourage expressiveness. No point in a language that that a billion instructions just to do something small. Should be proportional in a logical human centric manner")),(0,i.kt)("p",null,"Now we need to reduce our ISA to a quantisable form we can analyse naturally and rigorously. Probably denotational mathematics or type equations."),(0,i.kt)("hr",null),(0,i.kt)("h2",{style:{textAlign:"center"}},"Discuss"),(0,i.kt)("p",null,(0,i.kt)("giscus-widget",{repo:"hyperswine/projects",repoid:"R_kgDOIZg-sQ",category:"Announcements",categoryid:"DIC_kwDOIZg-sc4CSmin",mapping:"pathname",strict:"0",reactionsenabled:"1",emitmetadata:"0",inputposition:"top",theme:"preferred_color_scheme",lang:"en",loading:"lazy",crossorigin:"anonymous"},"\n")))}p.isMDXComponent=!0}}]);