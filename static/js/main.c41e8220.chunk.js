(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,function(e,t,c){e.exports={circle:"Circle_circle__2RISM",innerCircle:"Circle_innerCircle__23UsX",clicked:"Circle_clicked__23_NG"}},function(e,t,c){e.exports={modalWrapper:"Modal_modalWrapper__2VwaX",modalContent:"Modal_modalContent__2MmGa",active:"Modal_active__2Xef3"}},function(e,t,c){e.exports={addForm:"AddForm_addForm__wJmjc",input:"AddForm_input__2PZjd",btn:"AddForm_btn__3cB9a"}},,function(e,t,c){e.exports={home:"Home_home__HNQN8",btn:"Home_btn__2N8W9",box:"Home_box__2dHBG"}},,function(e,t,c){e.exports={box:"Item_box__1Mllt",flexBox:"Item_flexBox__3yqCx"}},function(e,t,c){e.exports={search:"Search_search__3UWJt",input:"Search_input__7Xxr6"}},,,function(e,t,c){e.exports={header:"Header_header__39UuF"}},,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(13),s=c.n(a),o=c(12),l=c(15),r=c(2),d=(c(20),c(14)),j=c.n(d),b=c(0),u=function(){return Object(b.jsxs)("div",{className:j.a.header,children:[Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Todo List"})}),Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Login"})})]})},x=(c(22),c(8)),h=c.n(x),m=c(4),p=c.n(m),O=function(e){var t=e.completed,c=e.index,i=e.onToggleCompleted,a=Object(n.useState)(t),s=Object(r.a)(a,2),o=s[0],l=s[1];return Object(b.jsx)("div",{className:p.a.circle,onClick:function(){l(!o),i(c)},children:Object(b.jsx)("div",{className:o?[p.a.innerCircle,p.a.clicked].join(" "):p.a.innerCircle})})},_=c(10),f=c.n(_),v=function(e){var t=e.title,c=e.desc,n=e.completed,i=e.onToggleCompleted,a=e.index;return Object(b.jsx)("div",{className:f.a.box,children:Object(b.jsxs)("div",{className:f.a.flexBox,children:[Object(b.jsx)(O,{index:a,onToggleCompleted:i,completed:n}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:n?Object(b.jsx)("del",{children:t}):t}),Object(b.jsx)("p",{children:n?Object(b.jsx)("del",{children:c}):c})]})]})})},g=c(11),C=c.n(g),N=function(e){var t=e.setSearch,c=e.search;return Object(b.jsxs)("div",{className:C.a.search,children:[Object(b.jsx)("input",{value:c,onChange:function(e){t(e.target.value)},className:C.a.input,type:"text"}),Object(b.jsx)("img",{width:20,height:20,src:"img/search.svg",alt:"search"})]})},w=c(5),S=c.n(w),k=function(e){var t=e.children,c=e.visible,n=e.setVisible;return Object(b.jsx)("div",{onClick:function(){n(!1)},className:c?[S.a.modalWrapper,S.a.active].join(" "):S.a.modalWrapper,children:Object(b.jsx)("div",{onClick:function(e){e.stopPropagation()},className:S.a.modalContent,children:t})})},M=c(6),q=c.n(M),F=function(e){var t=e.addNew,c=e.setModal,i=Object(n.useState)(),a=Object(r.a)(i,2),s=a[0],o=a[1],l=Object(n.useState)(),d=Object(r.a)(l,2),j=d[0],u=d[1];return Object(b.jsxs)("div",{className:q.a.addForm,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:"}),Object(b.jsx)("input",{value:s,onChange:function(e){o(e.target.value)},className:q.a.input,type:"text"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"}),Object(b.jsx)("input",{onChange:function(e){u(e.target.value)},value:j,className:q.a.input,type:"text"})]}),Object(b.jsx)("button",{onClick:function(){console.log(t),t(s,j),c(!1),o(""),u("")},className:q.a.btn,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"})]})},T=function(e){var t=e.addNew,c=e.onToggleCompleted,i=e.filterItems,a=e.setSearch,s=e.search,o=Object(n.useState)(!1),l=Object(r.a)(o,2),d=l[0],j=l[1];return Object(b.jsxs)("div",{className:h.a.home,children:[Object(b.jsx)(k,{visible:d,setVisible:j,children:Object(b.jsx)(F,{setModal:j,addNew:t})}),Object(b.jsxs)("div",{className:h.a.box,children:[Object(b.jsx)("button",{onClick:function(){j(!0)},className:h.a.btn,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443"}),Object(b.jsx)(N,{search:s,setSearch:a})]}),Object(b.jsx)("h1",{children:s?"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: ".concat(s):"\u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"}),i().map((function(e,t){return Object(b.jsx)(v,{title:e.title,desc:e.desc,completed:e.completed,onToggleCompleted:c,index:t},t)}))]})},B=function(){var e=Object(n.useState)([{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",desc:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",completed:!1},{title:"qq2",desc:"ww2",completed:!0},{title:"qq3",desc:"ww3",completed:!1},{title:"qq4",desc:"ww4",completed:!1}]),t=Object(r.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(""),s=Object(r.a)(a,2),d=s[0],j=s[1];return Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)(u,{}),Object(b.jsx)(T,{search:d,setSearch:j,filterItems:function(){return c.filter((function(e){return e.title.toUpperCase().includes(d.toUpperCase())}))},addNew:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];i([].concat(Object(l.a)(c),[{title:e,desc:t,completed:n}]))},onToggleCompleted:function(e){i((function(t){return t.map((function(t,c){return e===c?Object(o.a)(Object(o.a)({},t),{},{completed:!t.completed}):t}))}))}})]})};s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.c41e8220.chunk.js.map