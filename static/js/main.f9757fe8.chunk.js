(this.webpackJsonphomework4=this.webpackJsonphomework4||[]).push([[0],[,,,,,function(t,e,a){t.exports={App:"App_App__MEuf7",mainContainer:"App_mainContainer__35y8N"}},function(t,e,a){t.exports={visitors:"Visitors_visitors__2HV3V",addVisitor:"Visitors_addVisitor__2mhqr"}},,,function(t,e,a){t.exports={myName:"MyName_myName__2gRnn"}},function(t,e,a){t.exports={myQualities:"MyQualities_myQualities__1_X_G"}},function(t,e,a){t.exports={myQuality:"MyQuality_myQuality___Az3a"}},function(t,e,a){t.exports={inputVisitorName:"InputVisitorName_inputVisitorName__3cd23"}},function(t,e,a){t.exports={addVisitor:"AddVisitor_addVisitor__1VACQ",hello:"AddVisitor_hello__TwkpF"}},function(t,e,a){t.exports={allVisitors:"AllVisitors_allVisitors__2uaMp"}},function(t,e,a){t.exports={counterVisitors:"CounterVisitors_counterVisitors__2gzEn"}},function(t,e,a){t.exports={displayVisitors:"DisplayVisitors_displayVisitors__1mkcF"}},function(t,e,a){t.exports={displayVisitor:"DisplayVisitor_displayVisitor__2O3Wc"}},function(t,e,a){t.exports={helloVisitor:"HelloVisitor_helloVisitor__3gKlc"}},,function(t,e,a){t.exports=a(26)},,,,,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(8),s=a.n(r),o=(a(25),a(1)),c=a(3),l=a(2),u=a(4),p=a(5),m=a.n(p),h=a(9),f=a.n(h),v=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).render=function(){return i.a.createElement("div",{className:f.a.myName},"\u0411\u0438\u0440\u044e\u043a\u043e\u0432 \u0421\u0430\u0432\u0435\u043b\u0438\u0439-\u0413\u0435\u043e\u0440\u0433\u0438\u0439 \u042e\u0440\u044c\u0435\u0432\u0438\u0447")},a}return Object(u.a)(e,t),e}(i.a.Component),b=a(10),d=a.n(b),y=a(11),V=a.n(y),O=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).render=function(){return i.a.createElement("div",{className:V.a.myQuality},a.props.quality.quality)},a}return Object(u.a)(e,t),e}(i.a.Component),j=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).state={qualities:[{quality:"\u041a\u0430\u043f\u0438\u0442\u0430\u043d"},{quality:"\u0414\u0436\u0435\u043a"},{quality:"\u0412\u043e\u0440\u043e\u0431\u0435\u0439"}]},a.render=function(){var t=a.state.qualities.map((function(t,e){return i.a.createElement(O,{quality:t,key:e})}));return i.a.createElement("div",{className:d.a.myQualities},t)},a}return Object(u.a)(e,t),e}(i.a.Component),_=a(19),g=a(6),w=a.n(g),E=a(12),A=a.n(E),N=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).switchInputStatus=function(){a.props.switchButtonState()},a.render=function(){return i.a.createElement("div",null,i.a.createElement("input",{type:"text",placeholder:"\u0418\u043c\u044f \u0441\u0432\u043e\u0451 \u0432\u0432\u0435\u0434\u0438",className:A.a.inputVisitorName,ref:a.props.nameVisitorRef,onInput:a.switchInputStatus,maxLength:"25"}))},a}return Object(u.a)(e,t),e}(i.a.Component),S=a(13),C=a.n(S),x=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).addVisitor=function(){a.props.changeDisableState(),a.props.changeVisitorsState()},a.render=function(){return i.a.createElement("div",null,i.a.createElement("button",{className:C.a.addVisitor,onClick:a.addVisitor,disabled:a.props.isDisable},"WAP"))},a}return Object(u.a)(e,t),e}(i.a.Component),D=a(14),k=a.n(D),R=a(15),q=a.n(R),Q=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).render=function(){return i.a.createElement("div",{className:q.a.counterVisitors},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0435\u0439: ",a.props.counterVisitors)},a}return Object(u.a)(e,t),e}(i.a.Component),B=a(16),I=a.n(B),M=a(17),W=a.n(M),H=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).render=function(){return i.a.createElement("div",{className:W.a.displayVisitor},a.props.visitor)},a}return Object(u.a)(e,t),e}(i.a.Component),z=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).render=function(){var t=a.props.visitors.map((function(t,e){return i.a.createElement(H,{visitor:t,key:e})}));return i.a.createElement("div",{className:I.a.displayVisitors},a.props.visitors.length?"\u041f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0438:":"\u041f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0438: \u043d\u0435\u0442\u0443"," ",t)},a}return Object(u.a)(e,t),e}(i.a.Component),F=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).render=function(){return i.a.createElement("div",{className:k.a.allVisitors},i.a.createElement(Q,{counterVisitors:a.props.visitors.length}),i.a.createElement(z,{visitors:a.props.visitors}))},a}return Object(u.a)(e,t),e}(i.a.Component),J=a(18),G=a.n(J),K=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).render=function(){return!!a.props.nameVisitor&&i.a.createElement("div",{className:G.a.helloVisitor},"Hello ",a.props.nameVisitor,"!")},a}return Object(u.a)(e,t),e}(i.a.Component),L=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).nameVisitorRef=i.a.createRef(),a.state={isDisable:!0,visitors:[]},a.changeVisitorsState=function(){var t=a.nameVisitorRef.current.value;a.nameVisitorRef.current.value="",a.setState({visitors:[].concat(Object(_.a)(a.state.visitors),[t])})},a.switchButtonState=function(){a.setState({isDisable:""===a.nameVisitorRef.current.value})},a.changeDisableState=function(){a.setState({isDisable:!0})},a.render=function(){return i.a.createElement("div",{className:w.a.visitors},i.a.createElement("div",{className:w.a.addVisitor},i.a.createElement(N,{nameVisitorRef:a.nameVisitorRef,isDisable:a.state.isDisable,switchButtonState:a.switchButtonState}),i.a.createElement(x,{nameVisitorRef:a.nameVisitorRef,isDisable:a.state.isDisable,switchButtonState:a.switchButtonState,changeDisableState:a.changeDisableState,nameVisitor:a.state.visitors[a.state.visitors.length-1]?a.state.visitors[a.state.visitors.length-1]:"",changeVisitorsState:a.changeVisitorsState})),i.a.createElement(K,{nameVisitor:a.state.visitors[a.state.visitors.length-1]?a.state.visitors[a.state.visitors.length-1]:""}),i.a.createElement(F,{visitors:a.state.visitors}))},a}return Object(u.a)(e,t),e}(i.a.Component),P=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(r)))).render=function(){return i.a.createElement("div",{className:m.a.App},i.a.createElement("meta",{name:"viewport",content:"width=device-width; initial-scale=0.85; maximum-scale=0.85; user-scalable=0;"}),i.a.createElement("div",{className:m.a.mainContainer},i.a.createElement(v,null),i.a.createElement(j,null),i.a.createElement(L,null)))},a}return Object(u.a)(e,t),e}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.f9757fe8.chunk.js.map