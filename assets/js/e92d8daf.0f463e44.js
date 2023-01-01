"use strict";(self.webpackChunkquantii_research=self.webpackChunkquantii_research||[]).push([[492],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={date:new Date("2022-12-18T00:00:00.000Z"),name:"Jasen Qin",title:"Instruction Set Architecture from First Principles: Part 1",url:"https://github.com/hyperswine",email:"jasen.qin33@gmail.com"},o=void 0,l={permalink:"/blog/isa-pt1",source:"@site/blog/isa-pt1.md",title:"Instruction Set Architecture from First Principles: Part 1",description:'Instructions are imperative by default on atomic execution environments. This is probably because digital electronics are ubiquitous and hence most modern atomic instructions are built from discrete signals. If it was built from continuous signals, perhaps we could have something quite different, and not imperative. I think its still possible to have "declarative" instructions.',date:"2022-12-18T00:00:00.000Z",formattedDate:"December 18, 2022",tags:[],readingTime:1.905,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-12-18T00:00:00.000Z",name:"Jasen Qin",title:"Instruction Set Architecture from First Principles: Part 1",url:"https://github.com/hyperswine",email:"jasen.qin33@gmail.com"},nextItem:{title:"Performance Considerations, Pt. 1",permalink:"/blog/performance-post"}},s={authorsImageUrls:[]},c=[{value:"ISA: Spectre",id:"isa-spectre",level:2},{value:"Vectorisation",id:"vectorisation",level:2},{value:"Halting Problem",id:"halting-problem",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Instructions are imperative by default on atomic execution environments. This is probably because digital electronics are ubiquitous and hence most modern atomic instructions are built from discrete signals. If it was built from continuous signals, perhaps we could have something quite different, and not imperative. I think its still possible to have "declarative" instructions.'),(0,i.kt)("h2",{id:"isa-spectre"},"ISA: Spectre"),(0,i.kt)("p",null,"The spectre ISA is designed for minimalist, functional computing. How do we verify that an ISA is enlightened? Well it should be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Well represented. That means probably turing complete or total turing complete"),(0,i.kt)("li",{parentName:"ul"},"Encourage directness and low overhead. A language that compiles to it would essentially look the same or similar to what one would expect"),(0,i.kt)("li",{parentName:"ul"},"Encourage expressiveness. No point in a language that that a billion instructions just to do something small. Should be proportional in a logical human centric manner")),(0,i.kt)("h2",{id:"vectorisation"},"Vectorisation"),(0,i.kt)("p",null,"Array programming is possibly one of the most effective methods of programming. Most non trivial programs can be represented as a sequence of steps that operate on an initially set up set of data."),(0,i.kt)("p",null,"Treating arrays as first class citizens seems to allow the conciseness that is APL. Lisp and haskell also benefit. If 70% of all code is in for loops, we should be able to convert them to ",(0,i.kt)("inlineCode",{parentName:"p"},"for_each")," iterators and unordered ",(0,i.kt)("inlineCode",{parentName:"p"},"map"),"s. With const eval and eager execution we could make a bunch of simplifications at compile time which would allow the resulting code to be more readily vectorised into ",(0,i.kt)("inlineCode",{parentName:"p"},"vadd"),' type instructions. Inlining too. As long as theres no "fixed" operations like ',(0,i.kt)("inlineCode",{parentName:"p"},"sleep()")," that places a certain restraint during execution to not allow simple vector ops."),(0,i.kt)("h2",{id:"halting-problem"},"Halting Problem"),(0,i.kt)("p",null,"The halting problem is quite simple yet complex. It can be applied to many situations. Many types of programs can be reduced to a formulation of the halting problem, and it is useful in ensuruing a program doesn't just hang there doing nothing."),(0,i.kt)("p",null,'Of interest are total functional programming languages. These langs are "provably terminating", i.e. you can guarentee statically that they will eventually halt.'),(0,i.kt)("p",null,"What if, an ISA itself could implement a total functional language that bypasses the halting problem? Or perhaps a compiler?"),(0,i.kt)("hr",null),(0,i.kt)("h2",{style:{textAlign:"center"}},"Discuss"),(0,i.kt)("p",null,(0,i.kt)("giscus-widget",{repo:"hyperswine/projects",repoid:"R_kgDOIZg-sQ",category:"Announcements",categoryid:"DIC_kwDOIZg-sc4CSmin",mapping:"pathname",strict:"0",reactionsenabled:"1",emitmetadata:"0",inputposition:"top",theme:"preferred_color_scheme",lang:"en",loading:"lazy",crossorigin:"anonymous"},"\n")))}u.isMDXComponent=!0}}]);