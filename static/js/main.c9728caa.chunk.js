(this.webpackJsonpignat_1=this.webpackJsonpignat_1||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports={wrapper:"Header_wrapper__1Y3fe",navWrapper:"Header_navWrapper__3EI_v",link:"Header_link__1oUIl",active:"Header_active__1dmn0",icon:"Header_icon__1VZxc"}},,function(e,t,a){e.exports={wrapper:"Message_wrapper__2wTya",message:"Message_message__8WR15",angle:"Message_angle__1T-oN",name:"Message_name__Tzmp0",text:"Message_text__2fXBO",time:"Message_time__HOFTG",avatar:"Message_avatar__3FT3j"}},function(e,t,a){e.exports={wrapper:"Error404_wrapper__2bStn",error:"Error404_error__1HY3F",home:"Error404_home__23PS2",text:"Error404_text__V2Qls"}},,,function(e,t,a){e.exports={addButton:"Greeting_addButton__hZEEl",errorText:"Greeting_errorText__1pVNf",wrapper:"Greeting_wrapper__3Dbfg"}},function(e,t,a){e.exports={input:"SuperInputText_input__1P_Mf",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S",superInput:"SuperInputText_superInput__3XH9u"}},,function(e,t,a){e.exports={affair_wrapper:"Affairs_affair_wrapper__105Ac",affair_title:"Affairs_affair_title__Y-ixc"}},function(e,t,a){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,t,a){e.exports={label:"SuperCheckbox_label__kF06l",spanClassName:"SuperCheckbox_spanClassName__1K9ch",checkbox:"SuperCheckbox_checkbox__Imn1x"}},,,,function(e,t,a){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},,,,function(e,t,a){e.exports={App:"App_App__1Sc4o"}},,,function(e,t,a){e.exports={editSpan:"SuperEditableSpan_editSpan__1jHpy"}},,,,,,function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(26),s=a.n(c),i=(a(36),a(27)),o=a.n(i),l=a(9),j=a(2),u=a(11),d=a.n(u),b=a.p+"static/media/404.9494ad47.png",p=a(0);var O=function(){return Object(p.jsxs)("div",{className:d.a.wrapper,children:[Object(p.jsxs)("div",{className:d.a.error,children:[Object(p.jsx)("span",{children:"4"}),Object(p.jsx)("img",{className:d.a.image,src:b,alt:"404",width:"200px"}),Object(p.jsx)("span",{children:"4"})]}),Object(p.jsxs)("p",{className:d.a.text,children:["The page you are looking ",Object(p.jsx)("span",{children:"NOT FOUND!"})," So sad..."]}),Object(p.jsx)(l.b,{to:"/",className:d.a.home,children:"Return Home"})]})},x=a(10),h=a.n(x);function m(e){return Object(p.jsxs)("div",{className:h.a.wrapper,children:[Object(p.jsx)("div",{className:h.a.avatar,children:Object(p.jsx)("img",{src:e.avatar,alt:"avatar"})}),Object(p.jsx)("div",{className:h.a.angle}),Object(p.jsxs)("div",{className:h.a.message,children:[Object(p.jsx)("div",{className:h.a.name,children:e.name}),Object(p.jsx)("div",{className:h.a.text,children:e.message}),Object(p.jsx)("div",{className:h.a.time,children:e.time})]})]})}var f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Some Name",v="Some Text",g="22:00";var N=function(){return Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)("hr",{}),Object(p.jsx)("p",{children:"Homeworks 1"}),Object(p.jsx)(m,{avatar:f,name:_,message:v,time:g})]})},C=a(3),k=a(17),S=a.n(k),w=a(6),y=a(5),T=a(18),H=a.n(T),E=function(e){var t=e.red,a=e.className,n=Object(y.a)(e,["red","className"]),r="".concat(t?"".concat(H.a.red," ").concat(H.a.default):H.a.default," ").concat(a);return Object(p.jsx)("button",Object(w.a)({className:r},n))};var I=function(e){var t={color:function(){switch(e.affair.priority){case"high":return"#ff0000";case"middle":return"#ffa200";case"low":return"#00ff40"}}(),margin:"5px"};return Object(p.jsxs)("div",{className:S.a.affair_wrapper,children:[Object(p.jsx)("div",{className:S.a.affair_title,children:e.affair.name}),Object(p.jsxs)("div",{className:S.a.affair_priority,style:t,children:["[",e.affair.priority,"]"]}),Object(p.jsx)(E,{red:!0,onClick:function(){return e.deleteAffairCallback(e.affair._id)},children:"x"})]})};var A=function(e){var t=e.data.map((function(t){return Object(p.jsx)(I,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),a={margin:"10px 0",width:"64px"};return Object(p.jsxs)("div",{children:[t,Object(p.jsx)(E,{style:a,onClick:function(){e.setFilter("all")},children:"All"}),Object(p.jsx)(E,{style:a,onClick:function(){e.setFilter("high")},children:"High"}),Object(p.jsx)(E,{style:a,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(p.jsx)(E,{style:a,onClick:function(){e.setFilter("low")},children:"Low"})]})},F=[{_id:1,name:"React",priority:"high"},{_id:2,name:"Anime",priority:"low"},{_id:3,name:"Games",priority:"low"},{_id:4,name:"Work",priority:"high"},{_id:5,name:"HTML & CSS",priority:"middle"}];var B=function(){var e=Object(n.useState)(F),t=Object(C.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("all"),s=Object(C.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,i);return Object(p.jsxs)("div",{children:[Object(p.jsx)("hr",{}),Object(p.jsx)("p",{children:"Homeworks 2"}),Object(p.jsx)(A,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),Object(p.jsx)("hr",{})]})},M=a(31),P=a(14),U=a.n(P),W=a(15),J=a.n(W),R=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(y.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(J.a.error," ").concat(i||""),j="".concat(J.a.input," ").concat(c?J.a.errorInput:J.a.superInput," ").concat(s);return Object(p.jsxs)("div",{children:[Object(p.jsx)("input",Object(w.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),r&&"Enter"===e.key&&r()},className:j,placeholder:"Type some text"},o)),c&&Object(p.jsx)("div",{className:l,children:c})]})},D=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,r=e.error,c=e.totalUsers,s=r?U.a.error:U.a.done;return Object(p.jsxs)("div",{className:U.a.wrapper,children:[Object(p.jsx)(R,{value:t,onChange:a,className:s,onKeyPress:function(e){"Enter"===e.key&&n()},error:r}),Object(p.jsx)(E,{disabled:!t,className:U.a.addButton,onClick:n,children:"Add"}),Object(p.jsx)("span",{children:c})]})},G=a(45),K=function(e){var t=e.users,a=e.addUserCallback,r=Object(n.useState)(""),c=Object(C.a)(r,2),s=c[0],i=c[1],o=Object(n.useState)(""),l=Object(C.a)(o,2),j=l[0],u=l[1],d=t.length;return Object(p.jsx)(D,{name:s,setNameCallback:function(e){i(e.currentTarget.value),u("")},addUser:function(){var e=s.trim();""!==e?(alert("Hello ".concat(e,"!")),a(Object(G.a)(),e),i(""),u("")):u("Name is require!")},error:j,totalUsers:d})};var X=function(){var e=Object(n.useState)([]),t=Object(C.a)(e,2),a=t[0],r=t[1];return console.log(a),Object(p.jsxs)("div",{children:["Homeworks 3",Object(p.jsx)(K,{users:a,addUserCallback:function(e,t){r([].concat(Object(M.a)(a),[{_id:e,name:t}]))}}),Object(p.jsx)("hr",{})]})},Y=a(23),Z=a.n(Y),q=a(19),z=a.n(q),V=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),c=Object(y.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(z.a.checkbox," ").concat(n||"");return Object(p.jsxs)("label",{className:z.a.label,children:[Object(p.jsx)("input",Object(w.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:s},c)),r&&Object(p.jsx)("span",{className:z.a.spanClassName,children:r})]})};var L=function(){var e=Object(n.useState)(""),t=Object(C.a)(e,2),a=t[0],r=t[1],c=a?"":"Text is required!",s=function(){c?alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(n.useState)(!1),o=Object(C.a)(i,2),l=o[0],j=o[1];return Object(p.jsxs)("div",{children:["Homeworks 4",Object(p.jsxs)("div",{className:Z.a.column,children:[Object(p.jsx)(R,{value:a,onChangeText:r,onEnter:s,error:c}),Object(p.jsx)(R,{className:Z.a.blue}),Object(p.jsx)(E,{children:"Default"}),Object(p.jsx)(E,{red:!0,onClick:s,children:"Delete "}),Object(p.jsx)(E,{disabled:!0,children:"Disabled"}),Object(p.jsx)(V,{checked:l,onChangeChecked:j,children:"Some text "}),Object(p.jsx)(V,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(p.jsx)("hr",{})]})},Q=a(30),$=a.n(Q),ee=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,r=e.spanProps,c=Object(y.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(n.useState)(!1),i=Object(C.a)(s,2),o=i[0],l=i[1],j=r||{},u=j.children,d=j.onDoubleClick,b=j.className,O=Object(y.a)(j,["children","onDoubleClick","className"]),x="".concat($.a.editSpan," ").concat(b);return Object(p.jsx)(p.Fragment,{children:o?Object(p.jsx)(R,Object(w.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),a&&a()}},c)):Object(p.jsx)("span",Object(w.a)(Object(w.a)({onDoubleClick:function(e){l(!0),d&&d(e)},className:x},O),{},{children:u||c.value}))})};function te(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function ae(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}te("test",{x:"A",y:1});ae("test",{x:"",y:0});var ne=function(){var e=Object(n.useState)(""),t=Object(C.a)(e,2),a=t[0],r=t[1];return Object(p.jsxs)("div",{children:["Homeworks 6",Object(p.jsx)("div",{children:Object(p.jsx)(ee,{value:a,onChangeText:r,spanProps:{children:a?void 0:"Enter text..."}})}),Object(p.jsx)(E,{onClick:function(){te("editable-span-value",a)},children:"save"}),Object(p.jsx)(E,{onClick:function(){var e=ae("editable-span-value",a);r(e)},children:"restore"}),Object(p.jsx)("hr",{})]})};var re=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(N,{}),Object(p.jsx)(B,{}),Object(p.jsx)(X,{}),Object(p.jsx)(L,{}),Object(p.jsx)(ne,{})]})},ce=function(e){var t=e.options,a=e.onChange,n=e.onChangeOption,r=Object(y.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return Object(p.jsx)("option",{children:e},t)})):[];return Object(p.jsx)("select",Object(w.a)(Object(w.a)({onChange:function(e){a&&a(e),n&&n(e.currentTarget.value)}},r),{},{children:c}))},se=function(e){e.type;var t=e.name,a=e.options,n=e.value,r=e.onChange,c=e.onChangeOption,s=(Object(y.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){r&&r(e),c&&c(e.currentTarget.value)}),i=a?a.map((function(e,a){return Object(p.jsxs)("label",{children:[Object(p.jsx)("input",{type:"radio",name:e,checked:e===n,value:e,onChange:s}),e]},t+"-"+a)})):[];return Object(p.jsx)(p.Fragment,{children:i})},ie=["x","y","z"];var oe=function(){var e=Object(n.useState)(ie[1]),t=Object(C.a)(e,2),a=t[0],r=t[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("hr",{}),"Homeworks 7",Object(p.jsx)("div",{children:Object(p.jsx)(ce,{options:ie,value:a,onChangeOption:r})}),Object(p.jsx)("div",{children:Object(p.jsx)(se,{name:"radio",options:ie,value:a,onChangeOption:r})}),Object(p.jsx)("hr",{}),Object(p.jsx)("hr",{})]})};function le(){return Object(p.jsx)("div",{children:Object(p.jsx)(oe,{})})}function je(){return Object(p.jsx)("div",{children:"JuniorPlus"})}var ue="/pre-junior",de="/junior",be="/junior+";var pe=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(j.d,{children:[Object(p.jsx)(j.b,{path:"/",exact:!0,render:function(){return Object(p.jsx)(j.a,{to:ue})}}),Object(p.jsx)(j.b,{path:ue,render:function(){return Object(p.jsx)(re,{})}}),Object(p.jsx)(j.b,{path:de,render:function(){return Object(p.jsx)(le,{})}}),Object(p.jsx)(j.b,{path:be,render:function(){return Object(p.jsx)(je,{})}}),Object(p.jsx)(j.b,{render:function(){return Object(p.jsx)(O,{})}})]})})},Oe=a(8),xe=a.n(Oe),he=a.p+"static/media/arrow.240338df.png";var me=function(){return Object(p.jsx)("div",{className:xe.a.wrapper,children:Object(p.jsxs)("div",{className:xe.a.navWrapper,children:[Object(p.jsx)(l.b,{activeClassName:xe.a.active,className:xe.a.link,to:ue,children:"PRE-JUNIOR"}),Object(p.jsx)(l.b,{activeClassName:xe.a.active,className:xe.a.link,to:de,children:"JUNIOR"}),Object(p.jsx)(l.b,{activeClassName:xe.a.active,className:xe.a.link,to:be,children:"JUNIOR+"}),Object(p.jsx)("img",{src:he,className:xe.a.icon,width:"30px",alt:"NavBar"})]})})};var fe=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(l.a,{children:[Object(p.jsx)(me,{}),Object(p.jsx)(pe,{})]})})};var _e=function(){return Object(p.jsxs)("div",{className:o.a.App,children:[Object(p.jsx)("div",{children:"React homeworks:"}),Object(p.jsx)(fe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(_e,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[43,1,2]]]);
//# sourceMappingURL=main.c9728caa.chunk.js.map