(this["webpackJsonprandom-quote-generator"]=this["webpackJsonprandom-quote-generator"]||[]).push([[0],{28:function(e,t,r){},51:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(22),c=r.n(o),a=(r(28),r(7)),l=r(3),u=r(9),s=r(6),i=r.n(s),d=r(1);function j(e){return Object(d.jsx)("div",{className:"pb-2 border-b-2 border-white",children:Object(d.jsx)("h1",{className:"font-display text-white text-5xl md:text-7xl",children:e.text||Object(d.jsx)(i.a,{count:5,height:60})})})}function b(e){return Object(d.jsx)("div",{className:"pt-4",children:Object(d.jsx)("h1",{className:"font-display text-white text-2xl",children:e.author||Object(d.jsx)(i.a,{width:120})})})}function h(e){return Object(d.jsx)("div",{className:"",children:Object(d.jsx)("h1",{className:"font-display text-white text-1xl",children:e.genre||Object(d.jsx)(i.a,{width:60})})})}function f(e){return Object(d.jsxs)("div",{className:"h-auto w-5/6 m-auto",children:[Object(d.jsx)(j,{text:e.quoteText}),Object(d.jsx)(b,{author:e.quoteAuthor}),Object(d.jsx)(h,{genre:e.quoteGenre})]})}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createElement("defs",null,n.createElement("style",null,".cls-1{fill:#fff;}")),g=n.createElement("g",{id:"Layer_2","data-name":"Layer 2"},n.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},n.createElement("path",{className:"cls-1",d:"M0,49.14A49.23,49.23,0,0,0,48.93,98a49,49,0,1,0-.27-98A49.22,49.22,0,0,0,0,49.14Zm89,0A40,40,0,1,1,49.24,9,40.06,40.06,0,0,1,89,49.1Z"}),n.createElement("path",{className:"cls-1",d:"M48.89,56.41,30.52,37l-6.25,6.05C32.4,51.38,40.7,59.83,48.75,68Q61.46,55.56,74,43.27l-5.76-5.7Z"})));function p(e,t){var r=e.title,o=e.titleId,c=O(e,["title","titleId"]);return n.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 97.95 98.02",ref:t,"aria-labelledby":o},c),r?n.createElement("title",{id:o},r):null,m,g)}var q=n.forwardRef(p);r.p;function v(e){return Object(d.jsxs)("div",{className:"grid grid-rows-3 border-t-2 border-white lg:border-0",children:[Object(d.jsx)("div",{className:"grid grid-cols-2",children:Object(d.jsx)("div",{className:"border-r-4 border-black"})}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"w-1/6 mx-auto",children:Object(d.jsx)("button",{onClick:e.onClick,children:Object(d.jsx)(q,{className:"h-auto w-full"})})})})]})}var y=r(10);function w(e){return Object(d.jsx)(y.a.li,{style:Object(a.a)({},e.style),className:"absolute",children:Object(d.jsxs)("div",{className:"bg-".concat(e.color,"-500 h-screen w-screen grid grid-cols-1 lg:grid-cols-2 border-t-2 border-white"),children:[Object(d.jsx)(f,{quoteText:e.quoteText,quoteAuthor:e.quoteAuthor,quoteGenre:e.quoteGenre}),Object(d.jsx)(v,{onClick:function(){return e.onClick()}})]})})}function k(e){var t=Object(n.useState)(0),r=Object(u.a)(t,2),o=r[0],c=r[1],a=Object(n.useState)(!1),l=Object(u.a)(a,2),s=l[0],i=l[1],j=function(){s||(i(!0),setTimeout((function(){return i(!1)}),2500),e.onClick(),e.quotes.length>o&&c(e.quotes.length))},b=Object(y.b)(o,(function(e){return e}),{from:{transform:"translate3d(0,-100%,0)"},enter:{transform:"translate3d(0,0%,0)"},leave:{transform:"translate3d(0,100%,0)"}});return Object(d.jsx)("ul",{children:b.map((function(t){var r=t.item,n=t.props,o=t.key;return e.quotes[r]?Object(d.jsx)(w,{color:e.quotes[r].color,quoteText:e.quotes[r].quoteText,quoteAuthor:e.quotes[r].quoteAuthor,quoteGenre:e.quotes[r].quoteGenre,style:n,onClick:function(){return j()}},o):Object(d.jsx)(w,{color:"blue",quoteText:null,quoteAuthor:null,quoteGenre:null,style:null,onClick:function(){return j()}},o)}))})}var N=r(23),E=r.n(N);function A(){return E.a.get("https://quote-garden.herokuapp.com/api/v3/quotes/random").then((function(e){return e.data.data[0].quoteText.length>100&&(e.data=A()),e.data}))}function C(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),r=t[0],o=t[1],c=function(){var e=Object(l.a)(r),t={loading:!0,color:["gray","red","yellow","green","blue","indigo","purple","pink"][Math.floor(8*Math.random())],key:null,quoteText:null,quoteAuthor:null,quoteGenre:null},n=[].concat(Object(l.a)(e),[t]);o(n),A().then((function(r){t=Object(a.a)(Object(a.a)(Object(a.a)({},t),r.data[0]),{},{loading:!1,key:r.data[0]._id}),n=[].concat(Object(l.a)(e),[t]),o(n)}))};Object(n.useEffect)((function(){c()}),[]);return Object(d.jsx)(k,{quotes:r,onClick:function(){return c()}})}c.a.render(Object(d.jsx)(C,{}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.637c99e8.chunk.js.map