(this.webpackJsonpignat_1=this.webpackJsonpignat_1||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={wrapper:"Header_wrapper__1Y3fe",navWrapper:"Header_navWrapper__3EI_v",link:"Header_link__1oUIl",active:"Header_active__1dmn0",icon:"Header_icon__1VZxc"}},,function(e,t,n){e.exports={wrapper:"Message_wrapper__2wTya",message:"Message_message__8WR15",angle:"Message_angle__1T-oN",name:"Message_name__Tzmp0",text:"Message_text__2fXBO",time:"Message_time__HOFTG",avatar:"Message_avatar__3FT3j"}},,,function(e,t,n){e.exports={wrapper:"Error404_wrapper__2bStn",error:"Error404_error__1HY3F",home:"Error404_home__23PS2",text:"Error404_text__V2Qls"}},,,,function(e,t,n){e.exports={addButton:"Greeting_addButton__hZEEl",errorText:"Greeting_errorText__1pVNf",wrapper:"Greeting_wrapper__3Dbfg"}},function(e,t,n){e.exports={input:"SuperInputText_input__1P_Mf",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S",superInput:"SuperInputText_superInput__3XH9u"}},,,function(e,t,n){e.exports={affair_wrapper:"Affairs_affair_wrapper__105Ac",affair_title:"Affairs_affair_title__Y-ixc"}},function(e,t,n){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,t,n){e.exports={label:"SuperCheckbox_label__kF06l",spanClassName:"SuperCheckbox_spanClassName__1K9ch",checkbox:"SuperCheckbox_checkbox__Imn1x"}},,,,function(e,t,n){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},function(e,t,n){e.exports={select:"SuperSelect_select__3fEsa",options:"SuperSelect_options__zxiMg"}},function(e,t,n){e.exports={radio:"SuperRadio_radio__3l3uR",label:"SuperRadio_label__2lqMv"}},function(e,t,n){e.exports={showDate:"Clock_showDate__2qRGk",timeWrapper:"Clock_timeWrapper__29Z1Z"}},function(e,t,n){e.exports={wrapper:"HW10_wrapper__11Ivh",preloader:"HW10_preloader__1oZpk"}},,,,function(e,t,n){e.exports={App:"App_App__1Sc4o"}},,function(e,t,n){e.exports={editSpan:"SuperEditableSpan_editSpan__1jHpy"}},function(e,t,n){e.exports={wrapper:"HW8_wrapper__2NCm0"}},,,,,,function(e,t,n){},,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(19),s=n.n(c),i=(n(44),n(35)),o=n.n(i),l=n(9),j=n(3),u=n(13),d=n.n(u),b=n.p+"static/media/404.9494ad47.png",p=n(0);var O=function(){return Object(p.jsxs)("div",{className:d.a.wrapper,children:[Object(p.jsxs)("div",{className:d.a.error,children:[Object(p.jsx)("span",{children:"4"}),Object(p.jsx)("img",{className:d.a.image,src:b,alt:"404",width:"200px"}),Object(p.jsx)("span",{children:"4"})]}),Object(p.jsxs)("p",{className:d.a.text,children:["The page you are looking ",Object(p.jsx)("span",{children:"NOT FOUND!"})," So sad..."]}),Object(p.jsx)(l.b,{to:"/",className:d.a.home,children:"Return Home"})]})},x=n(10),h=n.n(x);function v(e){return Object(p.jsxs)("div",{className:h.a.wrapper,children:[Object(p.jsx)("div",{className:h.a.avatar,children:Object(p.jsx)("img",{src:e.avatar,alt:"avatar"})}),Object(p.jsx)("div",{className:h.a.angle}),Object(p.jsxs)("div",{className:h.a.message,children:[Object(p.jsx)("div",{className:h.a.name,children:e.name}),Object(p.jsx)("div",{className:h.a.text,children:e.message}),Object(p.jsx)("div",{className:h.a.time,children:e.time})]})]})}var m="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Some Name",_="Some Text",g="22:00";var N=function(){return Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)("hr",{}),Object(p.jsx)("p",{children:"Homeworks 1"}),Object(p.jsx)(v,{avatar:m,name:f,message:_,time:g})]})},C=n(2),k=n(21),w=n.n(k),S=n(4),y=n(6),H=n(22),T=n.n(H),E=function(e){var t=e.red,n=e.className,a=Object(y.a)(e,["red","className"]),r="".concat(t?"".concat(T.a.red," ").concat(T.a.default):T.a.default," ").concat(n);return Object(p.jsx)("button",Object(S.a)({className:r},a))};var I=function(e){var t={color:function(){switch(e.affair.priority){case"high":return"#ff0000";case"middle":return"#ffa200";case"low":return"#00ff40"}}(),margin:"5px"};return Object(p.jsxs)("div",{className:w.a.affair_wrapper,children:[Object(p.jsx)("div",{className:w.a.affair_title,children:e.affair.name}),Object(p.jsxs)("div",{className:w.a.affair_priority,style:t,children:["[",e.affair.priority,"]"]}),Object(p.jsx)(E,{red:!0,onClick:function(){return e.deleteAffairCallback(e.affair._id)},children:"x"})]})};var M=function(e){var t=e.data.map((function(t){return Object(p.jsx)(I,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n={margin:"10px 0",width:"64px"};return Object(p.jsxs)("div",{children:[t,Object(p.jsx)(E,{style:n,onClick:function(){e.setFilter("all")},children:"All"}),Object(p.jsx)(E,{style:n,onClick:function(){e.setFilter("high")},children:"High"}),Object(p.jsx)(E,{style:n,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(p.jsx)(E,{style:n,onClick:function(){e.setFilter("low")},children:"Low"})]})},A=[{_id:1,name:"React",priority:"high"},{_id:2,name:"Anime",priority:"low"},{_id:3,name:"Games",priority:"low"},{_id:4,name:"Work",priority:"high"},{_id:5,name:"HTML & CSS",priority:"middle"}];var W=function(){var e=Object(a.useState)(A),t=Object(C.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(C.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(p.jsxs)("div",{children:[Object(p.jsx)("hr",{}),Object(p.jsx)("p",{children:"Homeworks 2"}),Object(p.jsx)(M,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(p.jsx)("hr",{})]})},D=n(12),F=n(17),L=n.n(F),R=n(18),B=n.n(R),P=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(y.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(B.a.error," ").concat(i||""),j="".concat(B.a.input," ").concat(c?B.a.errorInput:B.a.superInput," ").concat(s);return Object(p.jsxs)("div",{children:[Object(p.jsx)("input",Object(S.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:j,placeholder:"Type some text"},o)),c&&Object(p.jsx)("div",{className:l,children:c})]})},U=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=r?L.a.error:L.a.done;return Object(p.jsxs)("div",{className:L.a.wrapper,children:[Object(p.jsx)(P,{value:t,onChange:n,className:s,onKeyPress:function(e){"Enter"===e.key&&a()},error:r}),Object(p.jsx)(E,{disabled:!t,className:L.a.addButton,onClick:a,children:"Add"}),Object(p.jsx)("span",{children:c})]})},J=n(54),G=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(C.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),l=Object(C.a)(o,2),j=l[0],u=l[1],d=t.length;return Object(p.jsx)(U,{name:s,setNameCallback:function(e){i(e.currentTarget.value),u("")},addUser:function(){var e=s.trim();""!==e?(alert("Hello ".concat(e,"!")),n(Object(J.a)(),e),i(""),u("")):u("Name is require!")},error:j,totalUsers:d})};var K=function(){var e=Object(a.useState)([]),t=Object(C.a)(e,2),n=t[0],r=t[1];return console.log(n),Object(p.jsxs)("div",{children:["Homeworks 3",Object(p.jsx)(G,{users:n,addUserCallback:function(e,t){r([].concat(Object(D.a)(n),[{_id:e,name:t}]))}}),Object(p.jsx)("hr",{})]})},Z=n(27),q=n.n(Z),X=n(23),Y=n.n(X),z=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(y.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Y.a.checkbox," ").concat(a||"");return Object(p.jsxs)("label",{className:Y.a.label,children:[Object(p.jsx)("input",Object(S.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),r&&Object(p.jsx)("span",{className:Y.a.spanClassName,children:r})]})};var V=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],r=t[1],c=n?"":"Text is required!",s=function(){c?alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(C.a)(i,2),l=o[0],j=o[1];return Object(p.jsxs)("div",{children:["Homeworks 4",Object(p.jsxs)("div",{className:q.a.column,children:[Object(p.jsx)(P,{value:n,onChangeText:r,onEnter:s,error:c}),Object(p.jsx)(P,{className:q.a.blue}),Object(p.jsx)(E,{children:"Default"}),Object(p.jsx)(E,{red:!0,onClick:s,children:"Delete "}),Object(p.jsx)(E,{disabled:!0,children:"Disabled"}),Object(p.jsx)(z,{checked:l,onChangeChecked:j,children:"Some text "}),Object(p.jsx)(z,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(p.jsx)("hr",{})]})},Q=n(37),$=n.n(Q),ee=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(y.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(C.a)(s,2),o=i[0],l=i[1],j=r||{},u=j.children,d=j.onDoubleClick,b=j.className,O=Object(y.a)(j,["children","onDoubleClick","className"]),x="".concat($.a.editSpan," ").concat(b);return Object(p.jsx)(p.Fragment,{children:o?Object(p.jsx)(P,Object(S.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},c)):Object(p.jsx)("span",Object(S.a)(Object(S.a)({onDoubleClick:function(e){l(!0),d&&d(e)},className:x},O),{},{children:u||c.value}))})};function te(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ne(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}te("test",{x:"A",y:1});ne("test",{x:"",y:0});var ae=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],r=t[1];return Object(p.jsxs)("div",{children:["Homeworks 6",Object(p.jsx)("div",{children:Object(p.jsx)(ee,{value:n,onChangeText:r,spanProps:{children:n?void 0:"Enter text..."}})}),Object(p.jsx)(E,{onClick:function(){te("editable-span-value",n)},children:"save"}),Object(p.jsx)(E,{onClick:function(){var e=ne("editable-span-value",n);r(e)},children:"restore"}),Object(p.jsx)("hr",{})]})};var re=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(N,{}),Object(p.jsx)(W,{}),Object(p.jsx)(K,{}),Object(p.jsx)(V,{}),Object(p.jsx)(ae,{})]})},ce=n(28),se=n.n(ce),ie=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,r=Object(y.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return Object(p.jsx)("option",{value:e,className:se.a.options,children:e},t)})):[];return Object(p.jsx)("select",Object(S.a)(Object(S.a)({className:se.a.select,onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},r),{},{children:c}))},oe=n(29),le=n.n(oe),je=function(e){e.type;var t=e.name,n=e.options,a=e.value,r=e.onChange,c=e.onChangeOption,s=Object(y.a)(e,["type","name","options","value","onChange","onChangeOption"]),i=function(e){r&&r(e),c&&c(e.currentTarget.value)},o=n?n.map((function(e,n){return Object(p.jsxs)("label",{className:le.a.label,children:[Object(p.jsx)("input",Object(S.a)({className:le.a.radio,type:"radio",name:t,checked:e===a,value:e,onChange:i},s)),e]},t+"-"+n)})):[];return Object(p.jsx)(p.Fragment,{children:o})},ue=["x","y","z"];var de=function(){var e=Object(a.useState)(ue[1]),t=Object(C.a)(e,2),n=t[0],r=t[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("hr",{}),"Homeworks 7",Object(p.jsx)("div",{children:Object(p.jsx)(ie,{options:ue,value:n,onChangeOption:r})}),Object(p.jsx)("div",{children:Object(p.jsx)(je,{name:"radio",options:ue,value:n,onChangeOption:r})}),Object(p.jsx)("hr",{})]})},be=function(e,t){switch(t.type){case"SORT":if("up"===t.payload)return Object(D.a)(e).sort((function(e,t){var n=e.name.toLocaleLowerCase(),a=t.name.toLocaleLowerCase();return n<a?-1:n>a?1:0}));if("down"===t.payload){var n=Object(D.a)(e);return n.sort((function(e,t){var n=e.name.toLocaleLowerCase(),a=t.name.toLocaleLowerCase();return n>a?-1:n<a?1:0})),n}return Object(D.a)(e);case"CHECK":return e.filter((function(e){return e.age>=t.payload}));default:return e}},pe=function(e){return{type:"SORT",payload:e}},Oe=n(38),xe=n.n(Oe),he=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ve=function(){var e=Object(a.useState)(he),t=Object(C.a)(e,2),n=t[0],r=t[1],c=n.map((function(e){return Object(p.jsxs)("div",{className:xe.a.wrapper,children:[Object(p.jsx)("div",{children:e.name}),Object(p.jsx)("div",{children:e.age})]},e._id)}));return Object(p.jsxs)("div",{children:["Homeworks 8",c,Object(p.jsx)(E,{onClick:function(){return r(be(he,pe("up")))},children:"Sort up"}),Object(p.jsx)(E,{onClick:function(){return r(be(he,pe("down")))},children:"Sort down"}),Object(p.jsx)(E,{onClick:function(){return r(be(he,{type:"CHECK",payload:18}))},red:!0,children:"Check 18"}),Object(p.jsx)("hr",{})]})},me=n(30),fe=n.n(me);var _e=function(){var e=Object(a.useState)(0),t=Object(C.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),s=Object(C.a)(c,2),i=s[0],o=s[1],l=Object(a.useState)(!1),j=Object(C.a)(l,2),u=j[0],d=j[1],b=function(){clearTimeout(n)},O=Number(null===i||void 0===i?void 0:i.getHours())>10?null===i||void 0===i?void 0:i.getHours():"0"+(null===i||void 0===i?void 0:i.getHours()),x=Number(null===i||void 0===i?void 0:i.getMinutes())>10?null===i||void 0===i?void 0:i.getMinutes():"0"+(null===i||void 0===i?void 0:i.getMinutes()),h=Number(null===i||void 0===i?void 0:i.getSeconds())>10?null===i||void 0===i?void 0:i.getSeconds():"0"+(null===i||void 0===i?void 0:i.getSeconds()),v=Number(null===i||void 0===i?void 0:i.getDate())>10?null===i||void 0===i?void 0:i.getDate():"0"+(null===i||void 0===i?void 0:i.getDate()),m=Number(null===i||void 0===i?void 0:i.getMonth())>10?null===i||void 0===i?void 0:i.getMonth():"0"+(null===i||void 0===i?void 0:i.getMonth()),f=null===i||void 0===i?void 0:i.getFullYear(),_=i&&"".concat(O,":").concat(x,":").concat(h)||Object(p.jsx)("br",{}),g="".concat(v,".").concat(m,".").concat(f)||Object(p.jsx)("br",{});return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:fe.a.timeWrapper,onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:_}),u?Object(p.jsx)("div",{className:fe.a.showDate,children:g}):Object(p.jsx)("br",{}),Object(p.jsx)(E,{onClick:function(){b();var e=+setInterval((function(){o(new Date)}),1e3);r(e)},children:"start"}),Object(p.jsx)(E,{onClick:b,children:"stop"})]})};var ge=function(){return Object(p.jsxs)("div",{children:["Homeworks 9",Object(p.jsx)(_e,{}),Object(p.jsx)("hr",{})]})},Ne=n(16),Ce={isLoading:!1},ke=function(e){return{type:"SET-LOADING",status:e}},we=n(31),Se=n.n(we);var ye=function(){var e=Object(Ne.c)((function(e){return e.loading.isLoading})),t=Object(Ne.b)();return Object(p.jsxs)("div",{children:["Homeworks 10",e?Object(p.jsx)("div",{className:Se.a.preloader}):Object(p.jsx)("div",{className:Se.a.wrapper,children:Object(p.jsx)(E,{onClick:function(){t(ke(!0)),setTimeout((function(){t(ke(!1))}),5e3),console.log("loading...")},children:"set loading..."})}),Object(p.jsx)("hr",{})]})};function He(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(de,{}),Object(p.jsx)(ve,{}),Object(p.jsx)(ge,{}),Object(p.jsx)(ye,{})]})}function Te(){return Object(p.jsx)("div",{children:"JuniorPlus"})}var Ee="/pre-junior",Ie="/junior",Me="/junior+";var Ae=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(j.d,{children:[Object(p.jsx)(j.b,{path:"/",exact:!0,render:function(){return Object(p.jsx)(j.a,{to:Ee})}}),Object(p.jsx)(j.b,{path:Ee,render:function(){return Object(p.jsx)(re,{})}}),Object(p.jsx)(j.b,{path:Ie,render:function(){return Object(p.jsx)(He,{})}}),Object(p.jsx)(j.b,{path:Me,render:function(){return Object(p.jsx)(Te,{})}}),Object(p.jsx)(j.b,{render:function(){return Object(p.jsx)(O,{})}})]})})},We=n(8),De=n.n(We),Fe=n.p+"static/media/arrow.240338df.png";var Le=function(){return Object(p.jsx)("div",{className:De.a.wrapper,children:Object(p.jsxs)("div",{className:De.a.navWrapper,children:[Object(p.jsx)(l.b,{activeClassName:De.a.active,className:De.a.link,to:Ee,children:"PRE-JUNIOR"}),Object(p.jsx)(l.b,{activeClassName:De.a.active,className:De.a.link,to:Ie,children:"JUNIOR"}),Object(p.jsx)(l.b,{activeClassName:De.a.active,className:De.a.link,to:Me,children:"JUNIOR+"}),Object(p.jsx)("img",{src:Fe,className:De.a.icon,width:"30px",alt:"NavBar"})]})})};var Re=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(l.a,{children:[Object(p.jsx)(Le,{}),Object(p.jsx)(Ae,{})]})})};var Be=function(){return Object(p.jsxs)("div",{className:o.a.App,children:[Object(p.jsx)("div",{children:"React homeworks:"}),Object(p.jsx)(Re,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Pe=n(32),Ue=Object(Pe.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-LOADING":return Object(S.a)(Object(S.a)({},e),{},{isLoading:t.status});default:return e}}}),Je=Object(Pe.b)(Ue),Ge=Je;window.store=Je,s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(Ne.a,{store:Ge,children:Object(p.jsx)(Be,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[52,1,2]]]);
//# sourceMappingURL=main.d26eea21.chunk.js.map