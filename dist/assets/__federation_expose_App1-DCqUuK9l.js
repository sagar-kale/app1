import{importShared as p}from"./__federation_fn_import-CGFwJ5Jv.js";import{r as x}from"./__federation_shared_react-CsUMYuEf.js";var l={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=x,f=Symbol.for("react.element"),h=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,_=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function d(s,t,o){var r,n={},c=null,i=null;o!==void 0&&(c=""+o),t.key!==void 0&&(c=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)u.call(t,r)&&!v.hasOwnProperty(r)&&(n[r]=t[r]);if(s&&s.defaultProps)for(r in t=s.defaultProps,t)n[r]===void 0&&(n[r]=t[r]);return{$$typeof:f,type:s,key:c,ref:i,props:n,_owner:_.current}}a.Fragment=h;a.jsx=d;a.jsxs=d;l.exports=a;var e=l.exports;const j="/assets/react-CHdo91hT.svg",g="/vite.svg",{useState:R}=await p("react");function E(){const[s,t]=R(0);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("a",{href:"https://vite.dev",target:"_blank",children:e.jsx("img",{src:g,className:"logo",alt:"Vite logo"})}),e.jsx("a",{href:"https://react.dev",target:"_blank",children:e.jsx("img",{src:j,className:"logo react",alt:"React logo"})})]}),e.jsx("h1",{children:"Vite + React"}),e.jsxs("div",{className:"card",children:[e.jsxs("button",{onClick:()=>t(o=>o+1),children:["count is ",s]}),e.jsxs("p",{children:["Edit ",e.jsx("code",{children:"src/App.tsx"})," and save to test HMR"]})]}),e.jsx("p",{className:"read-the-docs",children:"Click on the Vite and React logos to learn more"})]})}export{E as default,e as j};
