(this.webpackJsonpignat_1=this.webpackJsonpignat_1||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports={wrapper:"Header_wrapper__1Y3fe",navWrapper:"Header_navWrapper__3EI_v",link:"Header_link__1oUIl",active:"Header_active__1dmn0",icon:"Header_icon__1VZxc"}},,function(e,t,a){e.exports={wrapper:"Message_wrapper__2wTya",message:"Message_message__8WR15",angle:"Message_angle__1T-oN",name:"Message_name__Tzmp0",text:"Message_text__2fXBO",time:"Message_time__HOFTG",avatar:"Message_avatar__3FT3j"}},,function(e,t,a){e.exports={wrapper:"Error404_wrapper__2bStn",error:"Error404_error__1HY3F",home:"Error404_home__23PS2",text:"Error404_text__V2Qls"}},,,function(e,t,a){e.exports={addButton:"Greeting_addButton__hZEEl",errorText:"Greeting_errorText__1pVNf",wrapper:"Greeting_wrapper__3Dbfg"}},function(e,t,a){e.exports={input:"SuperInputText_input__1P_Mf",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S",superInput:"SuperInputText_superInput__3XH9u"}},,function(e,t,a){e.exports={affair_wrapper:"Affairs_affair_wrapper__105Ac",affair_title:"Affairs_affair_title__Y-ixc"}},function(e,t,a){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,t,a){e.exports={label:"SuperCheckbox_label__kF06l",spanClassName:"SuperCheckbox_spanClassName__1K9ch",checkbox:"SuperCheckbox_checkbox__Imn1x"}},,,,function(e,t,a){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},function(e,t,a){e.exports={select:"SuperSelect_select__3fEsa",options:"SuperSelect_options__zxiMg"}},function(e,t,a){e.exports={radio:"SuperRadio_radio__3l3uR",label:"SuperRadio_label__2lqMv"}},,,,function(e,t,a){e.exports={App:"App_App__1Sc4o"}},,,function(e,t,a){e.exports={editSpan:"SuperEditableSpan_editSpan__1jHpy"}},function(e,t,a){e.exports={wrapper:"HW8_wrapper__2NCm0"}},,,,,function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(29),s=a.n(c),i=(a(39),a(30)),o=a.n(i),l=a(9),j=a(2),u=a(12),d=a.n(u),b=a.p+"static/media/404.9494ad47.png",p=a(0);var O=function(){return Object(p.jsxs)("div",{className:d.a.wrapper,children:[Object(p.jsxs)("div",{className:d.a.error,children:[Object(p.jsx)("span",{children:"4"}),Object(p.jsx)("img",{className:d.a.image,src:b,alt:"404",width:"200px"}),Object(p.jsx)("span",{children:"4"})]}),Object(p.jsxs)("p",{className:d.a.text,children:["The page you are looking ",Object(p.jsx)("span",{children:"NOT FOUND!"})," So sad..."]}),Object(p.jsx)(l.b,{to:"/",className:d.a.home,children:"Return Home"})]})},x=a(10),h=a.n(x);function m(e){return Object(p.jsxs)("div",{className:h.a.wrapper,children:[Object(p.jsx)("div",{className:h.a.avatar,children:Object(p.jsx)("img",{src:e.avatar,alt:"avatar"})}),Object(p.jsx)("div",{className:h.a.angle}),Object(p.jsxs)("div",{className:h.a.message,children:[Object(p.jsx)("div",{className:h.a.name,children:e.name}),Object(p.jsx)("div",{className:h.a.text,children:e.message}),Object(p.jsx)("div",{className:h.a.time,children:e.time})]})]})}var f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Some Name",v="Some Text",g="22:00";var C=function(){return Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)("hr",{}),Object(p.jsx)("p",{children:"Homeworks 1"}),Object(p.jsx)(m,{avatar:f,name:_,message:v,time:g})]})},N=a(3),k=a(18),S=a.n(k),w=a(4),y=a(6),T=a(19),H=a.n(T),E=function(e){var t=e.red,a=e.className,n=Object(y.a)(e,["red","className"]),r="".concat(t?"".concat(H.a.red," ").concat(H.a.default):H.a.default," ").concat(a);return Object(p.jsx)("button",Object(w.a)({className:r},n))};var I=function(e){var t={color:function(){switch(e.affair.priority){case"high":return"#ff0000";case"middle":return"#ffa200";case"low":return"#00ff40"}}(),margin:"5px"};return Object(p.jsxs)("div",{className:S.a.affair_wrapper,children:[Object(p.jsx)("div",{className:S.a.affair_title,children:e.affair.name}),Object(p.jsxs)("div",{className:S.a.affair_priority,style:t,children:["[",e.affair.priority,"]"]}),Object(p.jsx)(E,{red:!0,onClick:function(){return e.deleteAffairCallback(e.affair._id)},children:"x"})]})};var A=function(e){var t=e.data.map((function(t){return Object(p.jsx)(I,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),a={margin:"10px 0",width:"64px"};return Object(p.jsxs)("div",{children:[t,Object(p.jsx)(E,{style:a,onClick:function(){e.setFilter("all")},children:"All"}),Object(p.jsx)(E,{style:a,onClick:function(){e.setFilter("high")},children:"High"}),Object(p.jsx)(E,{style:a,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(p.jsx)(E,{style:a,onClick:function(){e.setFilter("low")},children:"Low"})]})},F=[{_id:1,name:"React",priority:"high"},{_id:2,name:"Anime",priority:"low"},{_id:3,name:"Games",priority:"low"},{_id:4,name:"Work",priority:"high"},{_id:5,name:"HTML & CSS",priority:"middle"}];var B=function(){var e=Object(n.useState)(F),t=Object(N.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("all"),s=Object(N.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,i);return Object(p.jsxs)("div",{children:[Object(p.jsx)("hr",{}),Object(p.jsx)("p",{children:"Homeworks 2"}),Object(p.jsx)(A,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),Object(p.jsx)("hr",{})]})},M=a(11),R=a(15),W=a.n(R),P=a(16),U=a.n(P),J=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(y.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(U.a.error," ").concat(i||""),j="".concat(U.a.input," ").concat(c?U.a.errorInput:U.a.superInput," ").concat(s);return Object(p.jsxs)("div",{children:[Object(p.jsx)("input",Object(w.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),r&&"Enter"===e.key&&r()},className:j,placeholder:"Type some text"},o)),c&&Object(p.jsx)("div",{className:l,children:c})]})},L=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,r=e.error,c=e.totalUsers,s=r?W.a.error:W.a.done;return Object(p.jsxs)("div",{className:W.a.wrapper,children:[Object(p.jsx)(J,{value:t,onChange:a,className:s,onKeyPress:function(e){"Enter"===e.key&&n()},error:r}),Object(p.jsx)(E,{disabled:!t,className:W.a.addButton,onClick:n,children:"Add"}),Object(p.jsx)("span",{children:c})]})},D=a(48),G=function(e){var t=e.users,a=e.addUserCallback,r=Object(n.useState)(""),c=Object(N.a)(r,2),s=c[0],i=c[1],o=Object(n.useState)(""),l=Object(N.a)(o,2),j=l[0],u=l[1],d=t.length;return Object(p.jsx)(L,{name:s,setNameCallback:function(e){i(e.currentTarget.value),u("")},addUser:function(){var e=s.trim();""!==e?(alert("Hello ".concat(e,"!")),a(Object(D.a)(),e),i(""),u("")):u("Name is require!")},error:j,totalUsers:d})};var K=function(){var e=Object(n.useState)([]),t=Object(N.a)(e,2),a=t[0],r=t[1];return console.log(a),Object(p.jsxs)("div",{children:["Homeworks 3",Object(p.jsx)(G,{users:a,addUserCallback:function(e,t){r([].concat(Object(M.a)(a),[{_id:e,name:t}]))}}),Object(p.jsx)("hr",{})]})},X=a(24),q=a.n(X),z=a(20),Y=a.n(z),Z=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),c=Object(y.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Y.a.checkbox," ").concat(n||"");return Object(p.jsxs)("label",{className:Y.a.label,children:[Object(p.jsx)("input",Object(w.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:s},c)),r&&Object(p.jsx)("span",{className:Y.a.spanClassName,children:r})]})};var V=function(){var e=Object(n.useState)(""),t=Object(N.a)(e,2),a=t[0],r=t[1],c=a?"":"Text is required!",s=function(){c?alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(n.useState)(!1),o=Object(N.a)(i,2),l=o[0],j=o[1];return Object(p.jsxs)("div",{children:["Homeworks 4",Object(p.jsxs)("div",{className:q.a.column,children:[Object(p.jsx)(J,{value:a,onChangeText:r,onEnter:s,error:c}),Object(p.jsx)(J,{className:q.a.blue}),Object(p.jsx)(E,{children:"Default"}),Object(p.jsx)(E,{red:!0,onClick:s,children:"Delete "}),Object(p.jsx)(E,{disabled:!0,children:"Disabled"}),Object(p.jsx)(Z,{checked:l,onChangeChecked:j,children:"Some text "}),Object(p.jsx)(Z,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(p.jsx)("hr",{})]})},Q=a(33),$=a.n(Q),ee=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,r=e.spanProps,c=Object(y.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(n.useState)(!1),i=Object(N.a)(s,2),o=i[0],l=i[1],j=r||{},u=j.children,d=j.onDoubleClick,b=j.className,O=Object(y.a)(j,["children","onDoubleClick","className"]),x="".concat($.a.editSpan," ").concat(b);return Object(p.jsx)(p.Fragment,{children:o?Object(p.jsx)(J,Object(w.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),a&&a()}},c)):Object(p.jsx)("span",Object(w.a)(Object(w.a)({onDoubleClick:function(e){l(!0),d&&d(e)},className:x},O),{},{children:u||c.value}))})};function te(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function ae(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}te("test",{x:"A",y:1});ae("test",{x:"",y:0});var ne=function(){var e=Object(n.useState)(""),t=Object(N.a)(e,2),a=t[0],r=t[1];return Object(p.jsxs)("div",{children:["Homeworks 6",Object(p.jsx)("div",{children:Object(p.jsx)(ee,{value:a,onChangeText:r,spanProps:{children:a?void 0:"Enter text..."}})}),Object(p.jsx)(E,{onClick:function(){te("editable-span-value",a)},children:"save"}),Object(p.jsx)(E,{onClick:function(){var e=ae("editable-span-value",a);r(e)},children:"restore"}),Object(p.jsx)("hr",{})]})};var re=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(C,{}),Object(p.jsx)(B,{}),Object(p.jsx)(K,{}),Object(p.jsx)(V,{}),Object(p.jsx)(ne,{})]})},ce=a(25),se=a.n(ce),ie=function(e){var t=e.options,a=e.onChange,n=e.onChangeOption,r=Object(y.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return Object(p.jsx)("option",{value:e,className:se.a.options,children:e},t)})):[];return Object(p.jsx)("select",Object(w.a)(Object(w.a)({className:se.a.select,onChange:function(e){a&&a(e),n&&n(e.currentTarget.value)}},r),{},{children:c}))},oe=a(26),le=a.n(oe),je=function(e){e.type;var t=e.name,a=e.options,n=e.value,r=e.onChange,c=e.onChangeOption,s=Object(y.a)(e,["type","name","options","value","onChange","onChangeOption"]),i=function(e){r&&r(e),c&&c(e.currentTarget.value)},o=a?a.map((function(e,a){return Object(p.jsxs)("label",{className:le.a.label,children:[Object(p.jsx)("input",Object(w.a)({className:le.a.radio,type:"radio",name:t,checked:e===n,value:e,onChange:i},s)),e]},t+"-"+a)})):[];return Object(p.jsx)(p.Fragment,{children:o})},ue=["x","y","z"];var de=function(){var e=Object(n.useState)(ue[1]),t=Object(N.a)(e,2),a=t[0],r=t[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("hr",{}),"Homeworks 7",Object(p.jsx)("div",{children:Object(p.jsx)(ie,{options:ue,value:a,onChangeOption:r})}),Object(p.jsx)("div",{children:Object(p.jsx)(je,{name:"radio",options:ue,value:a,onChangeOption:r})}),Object(p.jsx)("hr",{})]})},be=function(e,t){switch(t.type){case"SORT":if("up"===t.payload)return Object(M.a)(e).sort((function(e,t){var a=e.name.toLocaleLowerCase(),n=t.name.toLocaleLowerCase();return a<n?-1:a>n?1:0}));if("down"===t.payload){var a=Object(M.a)(e);return a.sort((function(e,t){var a=e.name.toLocaleLowerCase(),n=t.name.toLocaleLowerCase();return a>n?-1:a<n?1:0})),a}return Object(M.a)(e);case"CHECK":return Object(M.a)(e).filter((function(e){return e.age>t.payload}));default:return e}},pe=function(e){return{type:"SORT",payload:e}},Oe=a(34),xe=a.n(Oe),he=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var me=function(){var e=Object(n.useState)(he),t=Object(N.a)(e,2),a=t[0],r=t[1],c=a.map((function(e){return Object(p.jsxs)("div",{className:xe.a.wrapper,children:[Object(p.jsx)("div",{children:e.name}),Object(p.jsx)("div",{children:e.age})]},e._id)}));return Object(p.jsxs)("div",{children:["Homeworks 8",c,Object(p.jsx)(E,{onClick:function(){return r(be(he,pe("up")))},children:"Sort up"}),Object(p.jsx)(E,{onClick:function(){return r(be(he,pe("down")))},children:"Sort down"}),Object(p.jsx)(E,{onClick:function(){return r(be(he,{type:"CHECK",payload:18}))},red:!0,children:"Check 18"}),Object(p.jsx)("hr",{})]})};function fe(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(de,{}),Object(p.jsx)(me,{})]})}function _e(){return Object(p.jsx)("div",{children:"JuniorPlus"})}var ve="/pre-junior",ge="/junior",Ce="/junior+";var Ne=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(j.d,{children:[Object(p.jsx)(j.b,{path:"/",exact:!0,render:function(){return Object(p.jsx)(j.a,{to:ve})}}),Object(p.jsx)(j.b,{path:ve,render:function(){return Object(p.jsx)(re,{})}}),Object(p.jsx)(j.b,{path:ge,render:function(){return Object(p.jsx)(fe,{})}}),Object(p.jsx)(j.b,{path:Ce,render:function(){return Object(p.jsx)(_e,{})}}),Object(p.jsx)(j.b,{render:function(){return Object(p.jsx)(O,{})}})]})})},ke=a(8),Se=a.n(ke),we=a.p+"static/media/arrow.240338df.png";var ye=function(){return Object(p.jsx)("div",{className:Se.a.wrapper,children:Object(p.jsxs)("div",{className:Se.a.navWrapper,children:[Object(p.jsx)(l.b,{activeClassName:Se.a.active,className:Se.a.link,to:ve,children:"PRE-JUNIOR"}),Object(p.jsx)(l.b,{activeClassName:Se.a.active,className:Se.a.link,to:ge,children:"JUNIOR"}),Object(p.jsx)(l.b,{activeClassName:Se.a.active,className:Se.a.link,to:Ce,children:"JUNIOR+"}),Object(p.jsx)("img",{src:we,className:Se.a.icon,width:"30px",alt:"NavBar"})]})})};var Te=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(l.a,{children:[Object(p.jsx)(ye,{}),Object(p.jsx)(Ne,{})]})})};var He=function(){return Object(p.jsxs)("div",{className:o.a.App,children:[Object(p.jsx)("div",{children:"React homeworks:"}),Object(p.jsx)(Te,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(He,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[46,1,2]]]);
//# sourceMappingURL=main.246512c2.chunk.js.map