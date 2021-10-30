(this["webpackJsonpmy-trello-frontend"]=this["webpackJsonpmy-trello-frontend"]||[]).push([[0],{51:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(19),i=n.n(a),o=(n(51),n(11)),s=n(16),l=n(41),u=n(42),d=n(5),b={title:"",users:[],lists:[]};var p={boards:[]};var j=[{id:1,username:"string"}];var v=Object(s.combineReducers)({board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BOARD_BY_ID":return Object(d.a)(Object(d.a)({},e),{},{title:t.payload.title,users:t.payload.users,lists:t.payload.lists});case"EDIT_BOARD_TITLE":return Object(d.a)(Object(d.a)({},e),{},{title:t.payload.title});case"CREATE_NEW_LIST":case"EDIT_LIST_TITLE":case"CREATE_NEW_CARD":return Object(d.a)(Object(d.a)({},e),{},{lists:t.payload.lists});default:return Object(d.a)({},e)}},boards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_BOARDS":case"CREATE_NEW_BOARD":return Object(d.a)(Object(d.a)({},e),{},{boards:t.payload});default:return Object(d.a)({},e)}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER":return Object(d.a)(Object(d.a)({},e),t.payload);default:return e}}}),h=Object(s.createStore)(v,Object(u.composeWithDevTools)(Object(s.applyMiddleware)(l.a))),f=n(45),m=n(15),x=n(6),_=(n(55),n(43)),O=n(46),y=n(2),E=n.n(y),w=n(4),N=n(22),k=n(23),C=n(25),T=n(24),g=(n(57),n(58),n(1));function R(e){var t=e.title;return Object(g.jsx)("li",{className:"card",children:t})}var L=n(13),S=n.n(L),D=n(44);var A=n.n(D).a.create({baseURL:"https://trello-back.shpp.me/apanov/api/v1",headers:{"Content-Type":"application/json",Authorization:"Bearer 123"}});A.interceptors.request.use((function(e){return function(){var e,t=null===(e=document.querySelector(".loading__bar"))||void 0===e?void 0:e.firstElementChild;setTimeout((function(){null===t||void 0===t||t.classList.add("bar__20")}),100)}(),e}),(function(e){return S.a.fire({icon:"error",title:"Error",text:e}),Promise.reject(e)})),A.interceptors.response.use((function(e){return function(){var e,t=null===(e=document.querySelector(".loading__bar"))||void 0===e?void 0:e.firstElementChild;setTimeout((function(){null===t||void 0===t||t.classList.add("bar__100")}),100),setTimeout((function(){null===t||void 0===t||t.classList.add("bar__complete")}),300),setTimeout((function(){null===t||void 0===t||t.classList.remove("bar__100"),null===t||void 0===t||t.classList.remove("bar__20")}),500),setTimeout((function(){null===t||void 0===t||t.classList.remove("bar__complete")}),1e3)}(),e.data}));var q=A,I=function(e,t,n){return function(){var r=Object(w.a)(E.a.mark((function r(c){var a,i;return E.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a={title:t,position:n},r.next=4,q.post("/board/".concat(e,"/list"),a);case 4:return r.next=6,q.get("/board/".concat(e));case 6:return i=r.sent,r.next=9,c({type:"CREATE_NEW_LIST",payload:i});case 9:r.next=15;break;case 11:r.prev=11,r.t0=r.catch(0),S.a.fire({icon:"error",title:"Error",text:"Cant create new list in board with id:".concat(e)}),c({type:"ERROR_ACTION_TYPE"});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e){return r.apply(this,arguments)}}()},B=function(e,t,n,r){return function(){var c=Object(w.a)(E.a.mark((function c(a){var i,o;return E.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,i={title:n,position:r},c.next=4,q.put("/board/".concat(e,"/list/").concat(t),i);case 4:return c.next=6,q.get("/board/".concat(e));case 6:return o=c.sent,c.next=9,a({type:"EDIT_LIST_TITLE",payload:o});case 9:c.next=15;break;case 11:c.prev=11,c.t0=c.catch(0),S.a.fire({icon:"error",title:"Error",text:"Cant edit title on list with id:".concat(t," located in board with id:").concat(e)}),a({type:"ERROR in putting new board title for board with id:".concat(e)});case 15:case"end":return c.stop()}}),c,null,[[0,11]])})));return function(e){return c.apply(this,arguments)}}()},P=function(e,t,n,r){return function(){var c=Object(w.a)(E.a.mark((function c(a){var i,o;return E.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,i={title:t,list_id:n,position:r+1},c.next=4,q.post("/board/".concat(e,"/card"),i);case 4:return c.next=6,q.get("/board/".concat(e));case 6:return o=c.sent,c.next=9,a({type:"CREATE_NEW_CARD",payload:o});case 9:c.next=15;break;case 11:c.prev=11,c.t0=c.catch(0),S.a.fire({icon:"error",title:"Error",text:"Cant create new card on list with id:".concat(n," located in board with id:").concat(e)}),a({type:"ERROR_ACTION_TYPE"});case 15:case"end":return c.stop()}}),c,null,[[0,11]])})));return function(e){return c.apply(this,arguments)}}()};function W(e){if(null===e)return!1;var t=new RegExp("[\u0430-\u044f\u0410-\u042fa-zA-Z0-9. *_-]+"),n=e.match(t);return null!==n&&e===n[0]}function F(e){var t=e.title,n=e.cards,r=e.id,c=e.board_id,a=e.position,i=Object(o.c)();return Object(g.jsxs)("li",{className:"list__item",children:[Object(g.jsx)("h3",{id:"".concat(r),onKeyDown:function(){var e=Object(w.a)(E.a.mark((function e(t){var n,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Enter"===t.key&&(t.preventDefault(),n="".concat(r),(null===(c=document.getElementById(n))||void 0===c?void 0:c.textContent)&&W(null===c||void 0===c?void 0:c.textContent)&&(null===c||void 0===c||c.blur()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onBlur:Object(w.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t="".concat(r),!(null===(n=document.getElementById(t))||void 0===n?void 0:n.textContent)||!W(null===n||void 0===n?void 0:n.textContent)){e.next=5;break}return e.next=5,i(B(c,r,n.textContent,a));case 5:case"end":return e.stop()}}),e)}))),contentEditable:!0,suppressContentEditableWarning:!0,className:"list__title",children:t}),Object(g.jsxs)("ul",{className:"list__main",children:[Object.values(n).map((function(e){return Object(g.jsx)(R,{title:e.title},e.id)})),Object(g.jsxs)("li",{children:[Object(g.jsx)("button",{onClick:function(){var e=document.querySelector("#cc-".concat(r));null===e||void 0===e||e.classList.remove("cc-hidden")},className:"list__btn",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"}),Object(g.jsxs)("div",{id:"cc-".concat(r),className:"list__card-creator card-creator cc-hidden",children:[Object(g.jsx)("textarea",{className:"card-creator__textArea",name:"title",id:"title-".concat(r)}),Object(g.jsxs)("div",{className:"card-creator__btns",children:[Object(g.jsx)("button",{onClick:Object(w.a)(E.a.mark((function e(){var t,n,o,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.querySelector("#cc-".concat(r)),!W((n=document.querySelector("#title-".concat(r))).value)){e.next=11;break}return e.next=5,i(P(c,n.value,r,a));case 5:n.value="",null===(o=document.querySelector("#cc-tip"))||void 0===o||o.classList.add("cc-hidden"),null===t||void 0===t||t.classList.add("cc-hidden"),e.next=13;break;case 11:null===(s=document.querySelector("#cc-tip"))||void 0===s||s.classList.remove("cc-hidden");case 13:case"end":return e.stop()}}),e)}))),className:"list__btn card-creator__done",children:"\u0413\u043e\u0442\u043e\u0432\u043e"}),Object(g.jsx)("button",{onClick:function(){var e=document.querySelector("#cc-".concat(r));null===e||void 0===e||e.classList.add("cc-hidden"),document.querySelector("#title-".concat(r)).value="";var t=document.querySelector("#cc-tip");null===t||void 0===t||t.classList.add("cc-hidden")},className:"list__btn card-creator__cancel",children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})]}),Object(g.jsxs)("div",{id:"cc-tip",className:"cc__tip cc-hidden",children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c. ",Object(g.jsx)("br",{})," \u0412 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c:",Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"\u0446\u0438\u0444\u0440\u044b"}),Object(g.jsx)("li",{children:"\u0431\u0443\u043a\u0432\u044b(\u0430, \u0410)"}),Object(g.jsx)("li",{children:"\u043f\u0440\u043e\u0431\u0435\u043b\u044b"}),Object(g.jsx)("li",{children:"\u0442\u0438\u0440\u0435"}),Object(g.jsx)("li",{children:"\u0442\u043e\u0447\u043a\u0438"}),Object(g.jsx)("li",{children:"\u043d\u0438\u0436\u043d\u0438\u0435 \u043f\u043e\u0434\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u044f"})]})]})]})]})]})}n(88),n(89);function Y(){var e=document.querySelector(".modal");null===e||void 0===e||e.classList.add("hide")}function M(){var e=document.querySelector("#tip");null===e||void 0===e||e.classList.add("hidden")}function U(e){var t=e.numberOfLists,n=e.boardId,r=Object(o.c)();return Object(g.jsx)("div",{className:"modal list hide",children:Object(g.jsxs)("form",{className:"modal__form form",children:[Object(g.jsx)("label",{className:"form__label",htmlFor:"title",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430:"}),Object(g.jsx)("input",{id:"title",required:!0,className:"form__input",type:"text"}),Object(g.jsxs)("div",{className:"form__buttons",children:[Object(g.jsx)("button",{onClick:function(){var e=Object(w.a)(E.a.mark((function e(c){var a,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),!W((a=document.querySelector("#title")).value)){e.next=10;break}return e.next=5,r(I(n,a.value,t));case 5:M(),a.value="",Y(),e.next=12;break;case 10:null===(i=document.querySelector("#tip"))||void 0===i||i.classList.remove("hidden");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),className:"form__btn home__btn confirm",type:"button",children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"}),Object(g.jsx)("button",{onClick:function(e){e.preventDefault(),Y(),M(),document.querySelector("#title").value=""},className:"form__btn home__btn cancel",children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]}),Object(g.jsxs)("div",{id:"tip",className:"form__tip hidden",children:["\u0418\u043c\u044f \u0434\u043e\u0441\u043a\u0438 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c. ",Object(g.jsx)("br",{})," \u0412 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0438 \u0434\u043e\u0441\u043a\u0438 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c:",Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"\u0446\u0438\u0444\u0440\u044b"}),Object(g.jsx)("li",{children:"\u0431\u0443\u043a\u0432\u044b(\u0430, \u0410)"}),Object(g.jsx)("li",{children:"\u043f\u0440\u043e\u0431\u0435\u043b\u044b"}),Object(g.jsx)("li",{children:"\u0442\u0438\u0440\u0435"}),Object(g.jsx)("li",{children:"\u0442\u043e\u0447\u043a\u0438"}),Object(g.jsx)("li",{children:"\u043d\u0438\u0436\u043d\u0438\u0435 \u043f\u043e\u0434\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u044f"})]})]})]})})}var z=function(e){Object(C.a)(n,e);var t=Object(T.a)(n);function n(){return Object(N.a)(this,n),t.apply(this,arguments)}return Object(k.a)(n,[{key:"componentDidMount",value:function(){var e=Object(w.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match,n=this.props.getBoard,e.next=4,n(t.params.board_id);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.match,t=this.props.lists,n=this.props.title,r=this.props.editBoardTitle;return Object(g.jsxs)("div",{className:"board__wrapper",children:[Object(g.jsxs)("div",{className:"board__header",children:[Object(g.jsx)(m.b,{to:"/",className:"home-btn board__btn",children:"\u0414\u043e\u043c\u043e\u0439"}),Object(g.jsx)("h1",{onKeyDown:function(){var e=Object(w.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Enter"===t.key&&(t.preventDefault(),(null===(n=document.querySelector("h1"))||void 0===n?void 0:n.textContent)&&W(null===n||void 0===n?void 0:n.textContent)&&(null===n||void 0===n||n.blur()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onBlur:Object(w.a)(E.a.mark((function t(){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(null===(n=document.querySelector("h1"))||void 0===n?void 0:n.textContent)||!W(null===n||void 0===n?void 0:n.textContent)){t.next=4;break}return t.next=4,r(e.params.board_id,null===n||void 0===n?void 0:n.textContent);case 4:case"end":return t.stop()}}),t)}))),className:"board__title",contentEditable:!0,suppressContentEditableWarning:!0,children:n}),Object(g.jsx)("h3",{className:"board__id",children:e.params.board_id})]}),Object(g.jsxs)("div",{className:"board__content",children:[Object(g.jsxs)("ul",{className:"board__lists",children:[t.map((function(t){return Object(g.jsx)(F,{position:t.position,board_id:e.params.board_id,id:t.id,title:t.title,cards:t.cards},t.id)})),Object(g.jsx)("button",{onClick:function(){var e=document.querySelector(".modal");null===e||void 0===e||e.classList.remove("hide")},className:"board__btn",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a"})]}),Object(g.jsx)("div",{className:"modal__container",children:Object(g.jsx)(U,{boardId:e.params.board_id,numberOfLists:t.length})})]})]})}}]),n}(c.a.Component);var G=Object(x.f)(Object(o.b)((function(e){var t=e.board,n=t.lists,r=t.users;return{title:t.title.valueOf(),lists:Object.values(n),users:Object(O.a)(r)}}),{getBoard:function(e){return function(){var t=Object(w.a)(E.a.mark((function t(n){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q.get("/board/".concat(e));case 3:return r=t.sent,t.next=6,n({type:"GET_BOARD_BY_ID",payload:r});case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),S.a.fire({icon:"error",title:"Error",text:"Cant get board with id:".concat(e)}),n({type:"ERROR_ACTION_TYPE"});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},editBoardTitle:function(e,t){return function(){var n=Object(w.a)(E.a.mark((function n(r){var c,a;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c={title:t},n.next=4,q.put("/board/".concat(e),c);case 4:return n.next=6,q.get("/board/".concat(e));case 6:return a=n.sent,n.next=9,r({type:"EDIT_BOARD_TITLE",payload:a});case 9:n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),S.a.fire({icon:"error",title:"Error",text:"Cant change board title in board with id:".concat(e)}),r({type:"ERROR_ACTION_TYPE"});case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()}})(z)),J=(n(92),function(e){return function(){var t=Object(w.a)(E.a.mark((function t(n){var r,c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r={title:e},t.next=4,q.post("/board",r);case 4:if("Created"!==t.sent.result){t.next=11;break}return t.next=8,q.get("/board");case 8:return c=t.sent,t.next=11,n({type:"CREATE_NEW_BOARD",payload:c.boards});case 11:t.next=17;break;case 13:t.prev=13,t.t0=t.catch(0),S.a.fire({icon:"error",title:"Error",text:"Cant create new board. Try to reload page and try again."}),n({type:"ERROR_ACTION_TYPE"});case 17:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()});n(93);function K(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}function Z(e){var t=e.title,n=e.id;return Object(g.jsx)(m.b,{to:"/board/".concat(n),style:{background:K()},className:"home__board-column",children:Object(g.jsx)("div",{children:t})})}n(94);function H(){var e=document.querySelector(".modal");null===e||void 0===e||e.classList.toggle("hide")}function Q(e){var t=document.querySelector(".form__tip");e?null===t||void 0===t||t.classList.remove("hidden"):null===t||void 0===t||t.classList.add("hidden")}function V(){var e=Object(o.c)();return Object(g.jsx)("div",{className:"modal hide",children:Object(g.jsxs)("form",{className:"modal__form form",children:[Object(g.jsx)("label",{className:"form__label",htmlFor:"title",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043e\u0441\u043a\u0438:"}),Object(g.jsx)("input",{id:"title",required:!0,className:"form__input",type:"text"}),Object(g.jsxs)("div",{className:"form__buttons",children:[Object(g.jsx)("button",{onClick:Object(w.a)(E.a.mark((function t(){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!W((n=document.querySelector(".form__input")).value)){t.next=9;break}return t.next=4,e(J(n.value));case 4:H(),Q(!1),n.value="",t.next=10;break;case 9:Q(!0);case 10:case"end":return t.stop()}}),t)}))),className:"form__btn home__btn confirm",type:"button",children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"}),Object(g.jsx)("button",{onClick:function(e){e.preventDefault(),H(),Q(!1),document.querySelector(".form__input").value=""},className:"form__btn home__btn cancel",children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]}),Object(g.jsxs)("div",{id:"tip",className:"form__tip hidden",children:["\u0418\u043c\u044f \u0434\u043e\u0441\u043a\u0438 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c. ",Object(g.jsx)("br",{})," \u0412 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0438 \u0434\u043e\u0441\u043a\u0438 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c:",Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"\u0446\u0438\u0444\u0440\u044b"}),Object(g.jsx)("li",{children:"\u0431\u0443\u043a\u0432\u044b(\u0430, \u0410)"}),Object(g.jsx)("li",{children:"\u043f\u0440\u043e\u0431\u0435\u043b\u044b"}),Object(g.jsx)("li",{children:"\u0442\u0438\u0440\u0435"}),Object(g.jsx)("li",{children:"\u0442\u043e\u0447\u043a\u0438"}),Object(g.jsx)("li",{children:"\u043d\u0438\u0436\u043d\u0438\u0435 \u043f\u043e\u0434\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u044f"})]})]})]})})}function X(){var e=document.querySelector(".modal");null===e||void 0===e||e.classList.toggle("hide")}var $=function(e){Object(C.a)(n,e);var t=Object(T.a)(n);function n(){return Object(N.a)(this,n),t.apply(this,arguments)}return Object(k.a)(n,[{key:"componentDidMount",value:function(){var e=Object(w.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.getBoards,e.next=3,t();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.boards;return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h1",{className:"home__title",children:"\u041c\u043e\u0438 \u0434\u043e\u0441\u043a\u0438"}),Object(g.jsxs)("div",{className:"home__boards-row",children:[e.map((function(e){return Object(g.jsx)(Z,{id:e.id,title:e.title},e.id)})),Object(g.jsx)("div",{className:"home__board-column last-column",children:Object(g.jsx)("button",{onClick:X,className:"home__btn",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u043e\u0441\u043a\u0443"})})]}),Object(g.jsx)(V,{})]})}}]),n}(c.a.Component),ee=Object(o.b)((function(e){return Object(d.a)({},e.boards)}),{getBoards:function(){return function(){var e=Object(w.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.get("/board");case 3:return n=e.sent,e.next=6,t({type:"UPDATE_BOARDS",payload:n.boards});case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),S.a.fire({icon:"error",title:"Error",text:"Cant get boards list from server. Try to reload page."}),t({type:"ERROR_ACTION_TYPE"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}})($);var te=function(){var e=Object(r.useState)(0),t=Object(f.a)(e,2),n=t[0],c=t[1];return Object(g.jsx)(m.a,{basename:"https://zlyuka14.github.io/trello_clone/",children:Object(g.jsxs)("div",{children:[Object(g.jsx)(_.a,{className:"loading__bar",color:"blue",progress:n,onLoaderFinished:function(){return c(0)}}),Object(g.jsxs)(x.c,{children:[Object(g.jsx)(x.a,{exact:!0,path:"/",component:ee}),Object(g.jsx)(x.a,{path:"/board/:board_id",component:G})]})]})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,96)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(o.a,{store:h,children:Object(g.jsx)(te,{})})}),document.getElementById("root")),ne()}},[[95,1,2]]]);
//# sourceMappingURL=main.d3512e72.chunk.js.map