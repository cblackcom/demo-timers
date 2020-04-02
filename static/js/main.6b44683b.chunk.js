(this["webpackJsonpdemo-timers"]=this["webpackJsonpdemo-timers"]||[]).push([[0],{37:function(e,t,n){e.exports=n(60)},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),i=n.n(o),l=n(3),c=n(14),u=n(19),m=n(5),s=n(17),d=n(4),f=n.n(d),E=function(e){return Math.max.apply(Math,[0].concat(Object(s.a)(f.a.map(e.instances,"timer_id"))))+1},p={movement:{clientTick:null,mod:null,epochTime:null},instances:[],showOptionsOnId:{menu:null,readmeBox:null,catBox:null,videoBox:null}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TIMER_MOVEMENT_TICK":return Object(m.a)({},e,{movement:Object(m.a)({},e.movement,{clientTick:t.clientTick,mod:t.mod,epochTime:t.epochTime})});case"TIMER_CREATE":return Object(m.a)({},e,{instances:[].concat(Object(s.a)(e.instances),[{timer_id:E(e),start_time:e.movement.epochTime,duration_seconds:t.duration_seconds,title:t.title||"Timer",related_view:t.related_view}])});case"TIMER_SNOOZE":return Object(m.a)({},e,{instances:e.instances.map((function(e){return e.timer_id===t.timer_id?Object(m.a)({},e,{duration_seconds:e.duration_seconds+300}):e}))});case"TIMER_DELETE":return t.timer_id?Object(m.a)({},e,{instances:e.instances.filter((function(e){return e.timer_id!==t.timer_id}))}):t.related_view?Object(m.a)({},e,{instances:e.instances.filter((function(e){return e.related_view!==t.related_view}))}):e;case"TIMER_OPTIONS_SHOW":return Object(m.a)({},e,{showOptionsOnId:Object(u.a)({},t.timerContext.view,t.timer_id)});case"TIMER_OPTIONS_HIDE":return Object(m.a)({},e,{showOptionsOnId:f.a.mapValues(e.showOptionsOnId,(function(){return null}))});default:return e}},h=function(e){return function(t,n){return t=function(e,t){if("INSERT_RECORD"===t.type){var n=Object(m.a)({},e),a=f.a.get(e,t.path);if(!f.a.isArray(a))throw new Error("Couldn't find destination array");return f.a.set(n,t.path,[].concat(Object(s.a)(a),[t.record])),n}return e}(t=e(t,n),n)}}(Object(c.b)({timer:b})),v=Object(c.c)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),g=n(16),x=n(10),w=n(1),O=Object(a.createContext)({view:"modal",title:null,widgetDisplay:"regular"}),j=n(31),T=n(7);function _(e){var t=Math.abs(e),n=Math.floor(t/3600),a=Math.floor((t-3600*n)/60);t=t-3600*n-60*a;var r=e<0?"-":"";return r+=n<10?"0"+n:n,r+=":"+(a<10?"0"+a:a),r+=":"+((t=Math.round(100*t)/100)<10?"0"+t:t)}var y=function(e,t){return e.timeRemaining-t.timeRemaining},C=Object(j.a)((function(e){return e.timer.movement.epochTime}),(function(e){return e.timer.instances}),(function(e,t){return t.map((function(t){var n=e-t.start_time,a=t.start_time+t.duration_seconds-e,r=n/t.duration_seconds;return Object(m.a)({},t,{timeElapsed:n,timeRemaining:a,formattedTime:_(a),progress:r})})).sort(y)})),k=n(22),R=n(11);function I(){var e=Object(k.a)(["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(359deg);\n\t}\n"]);return I=function(){return e},e}var S={boringGrey:"#8d8d8d",success:"#5cb85c",danger:"#d9534f",primaryBlue:"#517ffc",notQuiteBlack:"#1a1a1a"},M=Object(R.b)(I()),B=w.a.div({fontSize:"16px",whiteSpace:"nowrap"}),D=r.a.memo((function(e){var t=Object(l.c)((function(e){return e.timer.movement.clientTick})),n=new Date(t);return r.a.createElement(B,null,n.toString())}));function N(){var e=Object(k.a)(["50% { fill: white; }"]);return N=function(){return e},e}var A=Math.PI,P=w.a.circle((function(e){return{strokeWidth:2,stroke:e.stroke||S.boringGrey,fill:"transparent"}})),z=w.a.path({strokeWidth:3,stroke:"white",fill:"transparent"}),L=z.withComponent("circle"),W=Object(R.b)(N()),H=w.a.path({fill:"transparent",animation:"".concat(W," 1s step-start infinite")}),U=r.a.memo((function(e){var t=e.R||13.5,n=2*(t+3),a=n,o=n/2,i=a/2,l=o,c=i-t,u=-1.4+o-1.85,m=13+i-6.62,s=Math.max(e.progress||0,0),d=null;if(s<1){var f=-.5*A-s*(2*A),E=Math.cos(f)*t+o,p=Math.sin(f)*t+i,b=s<=.5?0:1,h="M ".concat(l," ").concat(c," A ").concat(t," ").concat(t," 0 ").concat(b," 0 ").concat(E," ").concat(p);d=r.a.createElement(z,{d:h})}return r.a.createElement("svg",{width:n,height:a,viewBox:"0 0 ".concat(n," ").concat(a)},r.a.createElement(P,{cx:o,cy:i,r:t,stroke:e.trackColor}),d||r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{cx:o,cy:i,r:t}),r.a.createElement(H,{d:"M4.716-13.113v5.148a13.6,13.6,0,0,1-.1,1.643q-.1.814-.261,1.66H2.466Q2.3-5.508,2.2-6.322a13.6,13.6,0,0,1-.1-1.643v-5.148ZM1.8-1.413a1.494,1.494,0,0,1,.121-.6A1.524,1.524,0,0,1,2.254-2.5a1.589,1.589,0,0,1,.5-.329,1.6,1.6,0,0,1,.63-.122,1.581,1.581,0,0,1,.621.122,1.645,1.645,0,0,1,.5.329,1.49,1.49,0,0,1,.338.486,1.494,1.494,0,0,1,.122.6,1.526,1.526,0,0,1-.122.608,1.477,1.477,0,0,1-.338.491,1.58,1.58,0,0,1-.5.324,1.634,1.634,0,0,1-.621.117,1.658,1.658,0,0,1-.63-.117,1.527,1.527,0,0,1-.5-.324,1.511,1.511,0,0,1-.333-.491A1.526,1.526,0,0,1,1.8-1.413Z",transform:"translate(".concat(u," ").concat(m,")")})))})),V=w.a.div((function(e){return{backgroundColor:e.backgroundColor,color:"white",borderRadius:5,display:"flex",flexDirection:"row",justifyContent:"center",padding:"7px 15px",cursor:"pointer"}})),G=w.a.div((function(e){return{flex:"0 0 auto",overflow:"hidden",paddingRight:"7px",display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}})),Q=w.a.div((function(e){return{flex:"1 1 auto",overflow:e.jumbo?"visible":"hidden",paddingLeft:"7px",paddingTop:e.jumbo?0:"2.5px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",textAlign:"left"}})),X=w.a.div((function(e){return{display:e.jumbo?"none":"block",fontSize:"14px",whiteSpace:"nowrap",textOverflow:"ellipsis",width:"100%",overflow:"hidden"}})),Z=w.a.div((function(e){return{fontSize:e.jumbo?"22px":"12px"}})),q=r.a.memo((function(e){var t=Object(a.useContext)(O),n=e.instance,o="jumbo"===t.widgetDisplay,i=S.success,l="#479644";return n.timeRemaining<=0?(i=S.danger,l="white"):n.timeRemaining<60&&(i="#EB9D50",l="#C37427"),r.a.createElement(V,{backgroundColor:i,onClick:e.onClick},r.a.createElement(G,{jumbo:o},r.a.createElement(U,{R:e.indicatorR,trackColor:l,progress:n.progress})),r.a.createElement(Q,{jumbo:o},r.a.createElement(X,{jumbo:o},n.title),r.a.createElement(Z,{jumbo:o},n.formattedTime)))})),J=w.a.div({backgroundColor:"white",boxShadow:"0px 3px 6px rgba(0,0,0,.16)",borderRadius:"0 ".concat(5,"px ").concat(5,"px ").concat(5,"px")}),Y=Object(w.a)(J)({position:"absolute",zIndex:2,minWidth:"100%"}),F=n(6),K=w.a.button({display:"inline-block",cursor:"pointer",backgroundImage:"none",border:"1px solid transparent",whiteSpace:"nowrap",outline:"none"}),$=Object(w.a)(K)((function(e){return{padding:"6px 12px",fontSize:"14px",userSelect:"none",borderRadius:5,backgroundColor:S[e.backgroundColor]||S.boringGrey,color:"white","&:hover":{color:"#ddd"}}})),ee=r.a.memo((function(e){return r.a.createElement($,{backgroundColor:e.color,className:e.className,onClick:e.onClick},r.a.createElement(F.a,{icon:e.icon}),"\xa0\xa0",e.children||"Button!")})),te=Object(w.a)(Y)((function(e){return{display:"flex",flexDirection:"column",padding:"10px 13px 2px",marginLeft:"-13px",width:"100%",marginTop:"menu"===e.view?10:0}})),ne=Object(w.a)(ee)({marginBottom:"8px"}),ae=r.a.memo((function(e){var t=Object(a.useContext)(O),n=Object(l.b)(),o=e.instance.timer_id;return r.a.createElement(te,{view:t.view},r.a.createElement(ne,{color:"primaryBlue",icon:"bed",onClick:function(e){n({type:"TIMER_OPTIONS_HIDE"}),n({type:"TIMER_SNOOZE",timer_id:o})}},"+ 5 min"),r.a.createElement(ne,{color:"danger",icon:"trash-alt",onClick:function(e){n({type:"TIMER_OPTIONS_HIDE"}),n({type:"TIMER_DELETE",timer_id:o})}},"Delete"))})),re=w.a.div({position:"relative"}),oe=r.a.memo((function(e){var t=Object(a.useRef)(null),n=Object(a.useContext)(O),o=Object(l.c)((function(t){return function(e,t,n){return e.timer.showOptionsOnId[t]===n}(t,n.view,e.instance.timer_id)})),i=Object(l.b)(),c=e.instance;Object(a.useEffect)((function(){var e=function(e){t.current&&!t.current.contains(e.target)&&i({type:"TIMER_OPTIONS_HIDE"})};return o&&document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[o,i]);return r.a.createElement(re,{ref:t,className:e.className},r.a.createElement(q,{instance:c,onClick:function(e){e.stopPropagation(),i({type:"TIMER_OPTIONS_SHOW",timerContext:n,timer_id:o?null:c.timer_id})}}),o?r.a.createElement(ae,{instance:c}):null)})),ie=Object(w.a)(K)({backgroundColor:"transparent",color:"white",fontSize:24,display:"flex",justifyContent:"center",alignItems:"center",margin:"".concat(10,"px 0")}),le=r.a.memo((function(e){var t=Object(a.useContext)(O),n=Object(l.b)(),o=function(e){n({type:"TIMER_CREATE",duration_seconds:70,title:t.title,related_view:t.view})};return"menu"===t.view?r.a.createElement(ie,{onClick:o},r.a.createElement(F.a,{icon:"plus-circle"})):r.a.createElement(ee,{color:"primaryBlue",icon:"plus-circle",onClick:o},"Add Timer")})),ce=w.a.div({backgroundColor:S.notQuiteBlack,color:"white",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:10,position:"relative"}),ue=w.a.div({display:"flex",flexDirection:"row",flexWrap:"wrap",marginBottom:-10}),me=Object(w.a)(oe)({margin:"0 ".concat(10,"px ").concat(10,"px 0")}),se={view:"menu"},de=r.a.memo((function(e){var t=Object(l.c)(C);return r.a.createElement(ce,null,r.a.createElement(O.Provider,{value:se},r.a.createElement(ue,null,f.a.map(t,(function(e,t){return r.a.createElement(me,{key:t,instance:e})})),r.a.createElement(le,null))),r.a.createElement(D,null))})),fe=r.a.memo((function(e){var t=Object(a.useContext)(O),n=Object(l.c)((function(e){return function(e,t){return f.a.find(C(e),{related_view:t})}(e,t.view)}));return r.a.createElement("div",{className:e.className},n?r.a.createElement(oe,{instance:n}):r.a.createElement(le,null))})),Ee=w.a.div({borderWidth:5,borderStyle:"solid",borderColor:S.notQuiteBlack,borderRadius:5,padding:20,overflow:"hidden"}),pe=w.a.div({borderBottomWidth:2,borderBottomStyle:"solid",borderBottomColor:S.notQuiteBlack,marginBottom:10}),be=Object(w.a)(fe)({marginBottom:10}),he=Object(w.a)(Ee)({gridColumn:"1/3"}),ve=w.a.span({color:S.success}),ge=Object(w.a)(ve)({textDecoration:"none","&:hover":{textDecoration:"underline"}}).withComponent("a"),xe=r.a.memo((function(e){return r.a.createElement(ge,{href:"https://github.com/cblackcom/demo-timers/blob/master/src/"+e.file},e.children)})),we=Object(w.a)(ve)({fontFamily:"monospace",fontWeight:"bold"}),Oe=Object(w.a)(F.a)({"&:hover":{animation:"".concat(M," .5s linear infinite")}}),je=w.a.span({fontSize:"80%",color:"#555"}),Te=r.a.memo((function(e){return r.a.createElement(he,null,r.a.createElement(pe,null,"README box."),r.a.createElement("p",null,"Welcome to demo-timers.  This is a demo of some tricks and techniques I have picked up over the last couple of years in front-end."),r.a.createElement(be,null),r.a.createElement("p",null,"Links to example code highlights in\xa0",r.a.createElement(ve,null,"green")," below\u2014",r.a.createElement("br",null),"look for\xa0",r.a.createElement(we,null,"// NOTE ")," comments in the files for additional commentary."),r.a.createElement("ul",null,r.a.createElement("li",null,"React 16.8+\xa0",r.a.createElement("a",{href:"https://reactjs.org/docs/hooks-overview.html"},"Hooks")," and\xa0",r.a.createElement("a",{href:"https://reactjs.org/docs/react-api.html#reactmemo"},"Memoized Components"),r.a.createElement("ul",null,r.a.createElement("li",null,"for tidy, predictable code"),r.a.createElement("li",null,r.a.createElement(xe,{file:"HeaderClock.jsx"},"HeaderClock component")),r.a.createElement("li",null,r.a.createElement(xe,{file:"Header.jsx"},"Header component")),r.a.createElement("li",null,r.a.createElement(xe,{file:"boxes/CatBox.jsx"},"CatBox component")))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://reactjs.org/docs/context.html"},"Context")," +\xa0",r.a.createElement("a",{href:"https://reactjs.org/docs/hooks-reference.html#usecontext"},"useContext hook"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("i",null,'"...provides a way to pass data through the component tree without having to pass props down manually at every level..."')),r.a.createElement("li",null,r.a.createElement(xe,{file:"timer/TimerContext.js"},"Timer Context")),r.a.createElement("li",null,r.a.createElement(xe,{file:"Root.jsx"},"Root component")),r.a.createElement("li",null,r.a.createElement(xe,{file:"timer/AddTimerButton.jsx"},"AddTimerButton component")),r.a.createElement("li",null,r.a.createElement(xe,{file:"timer/ViewTimerContainer.jsx"},"ViewTimerContainer component")))),r.a.createElement("li",null,"Redux",r.a.createElement("ul",null,r.a.createElement("li",null,"a global database with auto UI binding... if you use it right"),r.a.createElement("li",null,r.a.createElement(xe,{file:"redux/timerReducer.js"},"Timer Reducer")," (standard stuff)"),r.a.createElement("li",null,r.a.createElement(xe,{file:"movement.js"},"movement.js")),r.a.createElement("li",null,r.a.createElement(xe,{file:"jeff/"},r.a.createElement(F.a,{icon:"cannabis"})," Alternative patterns for Jeff ",r.a.createElement(F.a,{icon:"cannabis"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/zalmoxisus/redux-devtools-extension"},"redux-devtools")," introspection tool\xa0",r.a.createElement(F.a,{icon:"thumbs-up"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://redux.js.org/recipes/computing-derived-data"},"Reselect \u2014 Memoized Selectors")," for derived data",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(xe,{file:"redux/timerSelectors.js"},"Timer Selectors")))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://emotion.sh"},"Emotion"),r.a.createElement("ul",null,r.a.createElement("li",null,"combines the styling into the component"),r.a.createElement("li",null,r.a.createElement(xe,{file:"boxes/Box.jsx"},"Box components")))),r.a.createElement("li",null,r.a.createElement(xe,{file:"misc/useDebouncedWindowSize.js"},"useDebouncedWindowSize custom hook")),r.a.createElement("li",null,r.a.createElement(xe,{file:"timer/TimerProgressIndicator.jsx"},"TimerProgressIndicator component"))),r.a.createElement("p",null,r.a.createElement(Oe,{icon:"head-side-cough"}),"\xa0\xa0",r.a.createElement(je,null,"Grant for this development time generously provided by the Coronavirus")))})),_e=w.a.img({width:"100%"}),ye=r.a.memo((function(e){return r.a.createElement(Ee,null,r.a.createElement(pe,null,"CAT BOX!"),r.a.createElement("p",null,"This cat (picture) wants to be timed.",r.a.createElement("br",null),"Give it a go!  It's so enjoyable!"),r.a.createElement(be,null),r.a.createElement(_e,{src:"//cataas.com/cat?v=".concat(Math.random())}))})),Ce=n(12),ke=n.n(Ce),Re=n(32),Ie=(n(62),{e1bEWoblGZA:"Unbox a box","0qBqvfH2YY4":"Unbox a car"}),Se=function(e){return 9*e/16},Me=w.a.div({marginBottom:10}),Be=w.a.div({width:"100%",overflow:"hidden",height:0,paddingTop:Se(100)+"%",position:"relative","> *":{position:"absolute",top:0,left:0}}),De=r.a.memo((function(e){var t=Object(a.useContext)(O),n=Object(a.useRef)(null),o=Object(a.useState)(f.a.keys(Ie)[0]),i=Object(T.a)(o,2),c=i[0],u=i[1],m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:250,t=Object(a.useState)([0,0]),n=Object(T.a)(t,2),r=n[0],o=n[1];return Object(a.useLayoutEffect)((function(){var t=f.a.debounce((function(e){o([ke()(window).width(),ke()(window).height()])}),e);return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[e]),r}(500),s=Object(a.useState)(100),d=Object(T.a)(s,2),E=d[0],p=d[1],b=Object(l.b)();Object(a.useLayoutEffect)((function(){console.debug("windowSize is:",m),p(ke()(n.current).innerWidth())}),[m,p,n]);var h=function(){b({type:"TIMER_DELETE",related_view:t.view})},v={width:E,height:Se(E)};return r.a.createElement(Ee,null,r.a.createElement(pe,null,"Unboxing Box."),r.a.createElement("p",null,"Yay baby got cool sunglasses \ud83d\udd76"),r.a.createElement(Me,null,"Video: \xa0\xa0",r.a.createElement("select",{value:c,onChange:function(e){u(e.currentTarget.value)}},f.a.map(Ie,(function(e,t){return r.a.createElement("option",{key:t,value:t},e)})))),r.a.createElement(be,null),r.a.createElement(Be,{ref:n},r.a.createElement(Re.a,{videoId:c,opts:v,onPlay:function(e){h();var n=Math.floor(e.target.getDuration()-e.target.getCurrentTime());b({type:"TIMER_CREATE",duration_seconds:n,title:t.title,related_view:t.view})},onPause:function(e){h()}})))})),Ne=w.a.div({display:"flex",flexDirection:"column"}),Ae=w.a.div({display:"grid",gridTemplateColumns:"1fr",padding:20,gap:20,"@media (min-width: 780px)":{gridTemplateColumns:"1fr 1fr"}}),Pe=r.a.memo((function(e){return r.a.createElement(Ne,null,r.a.createElement(O.Provider,{value:{view:"menu"}},r.a.createElement(de,null)),r.a.createElement(Ae,null,r.a.createElement(O.Provider,{value:{view:"catBox",title:"Cat Box",widgetDisplay:"jumbo"}},r.a.createElement(ye,null)),r.a.createElement(O.Provider,{value:{view:"videoBox",title:"Video Box",widgetDisplay:"jumbo"}},r.a.createElement(De,null)),r.a.createElement(O.Provider,{value:{view:"readmeBox",title:"README Box",widgetDisplay:"jumbo"}},r.a.createElement(Te,null))))})),ze=n(35),Le=n(36),We=new(function(){function e(){var t=this;Object(ze.a)(this,e),this.start=function(){if(!t.unsubscribe){t.unsubscribe=v.subscribe(t.handleStoreUpdate),t.handleStoreUpdate();var e=t.handleTick();console.debug("[TimerMovement] started at "+e)}},this.stop=function(){t.timeout&&clearTimeout(t.timeout),t.unsubscribe&&(t.unsubscribe(),console.debug("[TimerMovement] stopped"))},this.handleTick=function(){var e=Date.now(),n=e%1e3,a=e-n,r=Math.floor(e/1e3);return v.dispatch({type:"TIMER_MOVEMENT_TICK",clientTick:a,mod:n,epochTime:r}),t.timeout=setTimeout(t.handleTick,1e3-n+1),a},this.handleStoreUpdate=function(){}}return Object(Le.a)(e,[{key:"__construct",value:function(){this.timeout=null,this.unsubscribe=null,this.currentState=null}}]),e}());g.b.add(x.g,x.a,x.e,x.c,x.f,x.b,x.d),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:v},r.a.createElement(Pe,null))),document.getElementById("root")),We.start(),function(){v.dispatch({type:"TIMER_CREATE",title:"Timer Uno",duration_seconds:70});var e,t,n=v.getState();e="timer.instances",t={timer_id:E(n.timer),start_time:n.timer.movement.epochTime,duration_seconds:120,title:"Timer Dos"},v.dispatch(function(e,t){return{type:"INSERT_RECORD",path:e,record:t}}(e,t))}()}},[[37,1,2]]]);
//# sourceMappingURL=main.6b44683b.chunk.js.map