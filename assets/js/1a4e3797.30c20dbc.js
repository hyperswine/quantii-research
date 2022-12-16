"use strict";(self.webpackChunkquantii_research=self.webpackChunkquantii_research||[]).push([[920],{8824:(e,t,n)=>{n.d(t,{c:()=>u});var r=n(7294),a=n(2263);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=n.select(t),l=n.pluralForms.indexOf(a);return r[Math.min(l,r.length-1)]}(n,t,e)}}},1473:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var r=n(7294),a=n(2263),l=n(5232),s=n(5742),c=n(9960),o=n(5999),u=n(8824),i=n(6550),m=n(412);const h=function(){const e=(0,i.k6)(),t=(0,i.TH)(),{siteConfig:{baseUrl:n}}=(0,a.Z)(),r=m.Z.canUseDOM?new URLSearchParams(t.search):null,l=(null==r?void 0:r.get("q"))||"",s=(null==r?void 0:r.get("ctx"))||"",c=(null==r?void 0:r.get("version"))||"",o=e=>{const n=new URLSearchParams(t.search);return e?n.set("q",e):n.delete("q"),n};return{searchValue:l,searchContext:s,searchVersion:c,updateSearchPath:t=>{const n=o(t);e.replace({search:n.toString()})},generateSearchPageLink:e=>{const t=o(e);return`${n}search?${t.toString()}`}}};var p=n(22),g=n(8202),d=n(2539),f=n(726),E=n(1073),y=n(311),S=n(3926),w=n(1029);const v="searchQueryInput_CFBF",b="searchResultItem_U687",I="searchResultItemPath_uIbk",P="searchResultItemSummary_oZHr";function F(){const{siteConfig:{baseUrl:e}}=(0,a.Z)(),{selectMessage:t}=(0,u.c)(),{searchValue:n,searchContext:l,searchVersion:c,updateSearchPath:i}=h(),[m,d]=(0,r.useState)(n),[f,E]=(0,r.useState)(),[S,w]=(0,r.useState)(),b=`${e}${c}`,I=(0,r.useMemo)((()=>m?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:m}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[m]);(0,r.useEffect)((()=>{i(m),f&&(m?f(m,(e=>{w(e)})):w(void 0))}),[m,f]);const P=(0,r.useCallback)((e=>{d(e.target.value)}),[]);return(0,r.useEffect)((()=>{n&&n!==m&&d(n)}),[n]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,p.w)(b,l);E((()=>(0,g.v)(e,t,100)))}()}),[l,b]),r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,I)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,I),r.createElement("input",{type:"search",name:"q",className:v,"aria-label":"Search",onChange:P,value:m,autoComplete:"off",autoFocus:!0}),!f&&m&&r.createElement("div",null,r.createElement(y.Z,null)),S&&(S.length>0?r.createElement("p",null,t(S.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:S.length}))):r.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,S&&S.map((e=>r.createElement(R,{key:e.document.i,searchResult:e}))))))}function R(e){let{searchResult:{document:t,type:n,page:a,tokens:l,metadata:s}}=e;const o=0===n,u=2===n,i=(o?t.b:a.b).slice(),m=u?t.s:t.t;o||i.push(a.t);let h="";if(w.vc&&l.length>0){const e=new URLSearchParams;for(const t of l)e.append("_highlight",t);h=`?${e.toString()}`}return r.createElement("article",{className:b},r.createElement("h2",null,r.createElement(c.Z,{to:t.u+h+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,d.C)(m,l):(0,f.o)(m,(0,E.m)(s,"t"),l,100)}})),i.length>0&&r.createElement("p",{className:I},(0,S.e)(i)),u&&r.createElement("p",{className:P,dangerouslySetInnerHTML:{__html:(0,f.o)(t.t,(0,E.m)(s,"t"),l,100)}}))}const _=function(){return r.createElement(l.Z,null,r.createElement(F,null))}}}]);