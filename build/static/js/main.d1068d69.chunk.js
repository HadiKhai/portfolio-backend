(this.webpackJsonpmywebsite=this.webpackJsonpmywebsite||[]).push([[0],{36:function(e,t,a){},66:function(e,t,a){e.exports=a(94)},93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),o=a.n(r),i=a(13),l=a(17),d=a(54),s=a(122),u=a(126),m=a(35),p=a.n(m),f=Object(s.a)((function(e){return{main:{height:20,background:"#00A8E8",width:"100%",borderRadius:"8px 8px 0 0"},exit:{background:"#FFFFFF"},minimize:{background:"#003459"},maximize:{background:"#00171F"},buttons:{width:10,height:10,marginTop:5,marginRight:10,display:"inline-block",borderRadius:8}}})),y=function(){var e=f(),t=p()(e.buttons,e.exit),a=p()(e.buttons,e.minimize),n=p()(e.buttons,e.maximize);return c.a.createElement("div",{className:e.main},c.a.createElement("span",{className:t}),c.a.createElement("span",{className:a}),c.a.createElement("span",{className:n}))},h=a(59),E=a(58),O=a(128),b=a(124),g=a(127),v=(a(36),a(39)),N=a.n(v),D=N.a.create({baseURL:"http://localhost:3000",responseType:"json"}),C=N.a.create({baseURL:"http://localhost:3000",responseType:"blob",method:"GET"}),F=function(){return function(e,t){var a=t().directory.currentDirectory;-1!==a.indexOf("/")&&(a=a.replaceAll("/","%2F"));var n="".concat("root","%2F").concat(a),c="".concat("/directories","/").concat(n);D.get(c).then((function(t){e(w(t.data,a))}))}},w=function(e,t){return{type:"FETCH_DIRECTORY",payload:{content:e,directory:t}}},M=function(e){return function(t){t({type:"CHANGE_DIRECTORY",payload:{directory:e}}),t(F())}},k=[" cd:"," cd: Change directory to ROOT","cd .. : Move up one level from the current directory","cd [FOLDER]: Change directory to this folder"],_=Object(E.a)({overrides:{MuiInputBase:{input:{fontFamily:"Fira Code",color:"white",width:"100%"}}}}),R=Object(s.a)((function(e){return{directory:{color:"#00a8e8"},variable:{marginRight:0},cmd:{color:"white",height:20,flex:"1"},user:{flex:"0 1 auto",overflow:"hidden",marginRight:10},prompt:{alignItems:"flex-start",fontFamily:"Fira Code"}}})),T=function(e){var t=e.cmdProps,a=R(),r=Object(i.b)(),o=Object(n.useState)(t.cmd),l=Object(h.a)(o,2),d=l[0],s=l[1],u=t.args,m=t.dir,p=!t.status;return c.a.createElement(O.a,{display:"flex",flexdirection:"row",className:a.prompt},c.a.createElement(O.a,{className:a.user},c.a.createElement("span",null,"root@HadiKhai: "),c.a.createElement("span",{className:a.directory}," ~",m),c.a.createElement("span",{className:a.variable},"$ ")),c.a.createElement(O.a,{className:a.cmd},c.a.createElement(b.a,{theme:_},c.a.createElement(g.a,{fullWidth:!0,id:"cmd",spellCheck:"false",autoComplete:"off",value:p?"".concat(d," ").concat(u):d,onChange:function(e){s(e.target.value)},disabled:p,onKeyUp:function(e){if("Enter"===e.key){s("");var t=e.target.value,a=t.split(" "),n=a[0],c=t.slice(n.length+1);switch(r(function(e,t,a,n){return function(c,r){var o=r().directory.currentDirectory;c({type:"SEND_CMD",payload:{cmd:e,args:t,dir:o,status:a,show:n}})}}(a[0],c,!1,!0)),n){case"help":r((l=[" ls: List all files and folders in this directory",k," history: List all commands used","cat [FILE]: print the content of the file (only txt files)"," clear: Clear terminal from all commands","download [FILE]: download the file that you want"],function(e){e({type:"COMMAND_COMPLETED",payload:{cmd:"help",content:l}})}));break;case"ls":r((function(e,t){e({type:"COMMAND_COMPLETED",payload:{cmd:"ls",content:t().directory.content}})}));break;case"history":r((function(e,t){e({type:"COMMAND_COMPLETED",payload:{content:t().commands.map((function(e){return e.cmd})),cmd:"history"}})}));break;case"clear":r((function(e){e({type:"CLEAR_CMD"}),e({type:"COMMAND_COMPLETED",payload:{content:"",cmd:"clear"}})}));break;case"cd":r((i=c,function(e,t){var a=t().directory.content,n=t().directory.currentDirectory;if(".."===i){var c=n.lastIndexOf("/");if(-1===c)e(M(""));else{var r=n.slice(0,c);e(M(r))}}else{if(i.endsWith("txt")||!a.includes(i))return void e({type:"DIRECTORY_NOT_FOUND",payload:{cmd:"cd",content:"No such directory",dirOrFile:i,error:!0}});var o="".concat(n,"/").concat(i);e(M(o))}e({type:"COMMAND_COMPLETED",payload:{cmd:"cd"}})}));break;case"cat":r((o=c,function(e,t){var a=t().directory.content,n=t().directory.currentDirectory;if(a.includes(o)&&o.endsWith("txt")){-1!==n.indexOf("/")&&(n=n.replaceAll("/","%2F"));var c="".concat("root","%2F").concat(n,"%2F").concat(o);""===n&&(c="".concat("root","%2F").concat(o));var r="".concat("/directories","/").concat(c,"/read");D.get(r).then((function(t){e({type:"COMMAND_COMPLETED",payload:{cmd:"cat",content:t.data,error:!1}})}))}else e({type:"FILE_NOT_FOUND",payload:{cmd:"cat",content:"Is not a file",dirOrFile:o,error:!0}})}));break;case"download":r(function(e){return function(t,a){var n=a().directory.content,c=a().directory.currentDirectory;if(n.includes(e)&&(e.endsWith("pdf")||e.endsWith("txt")||e.endsWith("jpeg"))){-1!==c.indexOf("/")&&(c=c.replaceAll("/","%2F"));var r="".concat("root","%2F").concat(c,"%2F").concat(e);""===c&&(r="".concat("root","%2F").concat(e));var o="".concat("/directories","/").concat(r,"/download");C.get(o).then((function(a){var n=window.URL.createObjectURL(new Blob([a.data])),c=document.createElement("a");c.href=n,c.setAttribute("download",e),document.body.appendChild(c),c.click(),c.remove(),t({type:"COMMAND_COMPLETED",payload:{cmd:"download",content:a.data,error:!1}})}))}else t({type:"FILE_NOT_FOUND",payload:{cmd:"download",content:"Is not a file",dirOrFile:e,error:!0}})}}(c));break;case"":r((function(e){e({type:"COMMAND_EMPTY"})}));break;default:r(function(e){return function(t){t({type:"COMMAND_NOT_FOUND",payload:{content:"command not found",cmd:e}})}}(n))}}var o,i,l},height:20,className:a.textField,InputProps:{style:{height:20,padding:"0 0 0 0"},disableUnderline:!0}}))))},j=a(12),x=Object(s.a)((function(){return{prompt:{color:"white",alignItems:"flex-start"},response:{color:"white",fontFamily:"Fira Code"},file:{color:"white",marginRight:10},pdf:{color:"#67e8b2",marginRight:10},folder:{color:"#00A8E8",marginRight:10},photo:{color:"#e8e060",marginRight:10}}})),L=function(e){var t=e.responseProps,a=e.componentId,n=x(),r=t?t.cmd:"",o=t?t.content:[],i=!!t&&t.error,l=t?t.dirOrFile:"";return c.a.createElement(O.a,{display:"flex",flexdirection:"row",className:n.prompt},c.a.createElement(O.a,{className:n.cmd},c.a.createElement("span",null,function(){switch(r){case"help":var e=[];return o.forEach((function(t,n){"string"===typeof t&&e.push(c.a.createElement("li",{key:"".concat(a,"-").concat(n)},t)),"object"===typeof t&&(e.push(c.a.createElement("li",{key:"".concat(a,"-").concat(n)},t[0])),e.push(c.a.createElement("ul",{key:"".concat(a,"-").concat(n,"-ul")},Object(j.a)(t).splice(1).forEach((function(e,t){return c.a.createElement("li",{key:"".concat(a,"-").concat(n,"-").concat(t)},e)})))))})),c.a.createElement("ul",{key:a},e);case"ls":var t=[];return o.forEach((function(e,r){e.endsWith(".txt")?t.push(c.a.createElement("span",{key:"".concat(a,"-").concat(r),className:n.file},e)):e.endsWith(".pdf")?t.push(c.a.createElement("span",{key:"".concat(a,"-").concat(r),className:n.pdf},e)):e.endsWith(".jpeg")?t.push(c.a.createElement("span",{key:"".concat(a,"-").concat(r),className:n.photo},e)):t.push(c.a.createElement("span",{key:"".concat(a,"-").concat(r),className:n.folder},e))})),c.a.createElement("p",{key:a},t);case"history":for(var d=[],s=0;s<o.length;s++)d.push(c.a.createElement("span",{key:"".concat(a,"-").concat(s)},s+1," ",o[s]," ",c.a.createElement("br",null)));return c.a.createElement("p",{key:a},d);case"cd":case"download":return i?c.a.createElement("p",{key:a},r,": ",l,": ",o):c.a.createElement("div",{key:a});case"cat":if(i)return c.a.createElement("p",{key:a},r,": ",l,": ",o);var u=[];return o.forEach((function(e,t){u.push(c.a.createElement("span",{key:"".concat(a,"-").concat(t)},e," ",c.a.createElement("br",null)," "))})),c.a.createElement("p",{key:a},u);case"":return c.a.createElement("div",{key:a});default:return c.a.createElement("p",{key:a},r,": ",o)}}())))},A=Object(s.a)((function(e){return{main:{textAlign:"left",fontFamily:"Fira Code",overflow:"auto",width:"100%",padding:2,background:"#007EA7",color:"#00171F",borderRadius:"0 0 10px 10px",height:"80vh"},welcome:{padding:"0"},shell:{marginTop:10},directory:{color:"#00a8e8"},variable:{marginRight:10},cmd:{color:"white"},line:{width:"100%"}}})),I=function(){var e=A(),t=Object(i.c)((function(e){return e.commands})),a=Object(i.c)((function(e){return e.responses})),n=Object(i.c)((function(e){return e.directory.currentDirectory}));return c.a.createElement(u.a,{display:"flex",align:"center",flexdirection:"column",className:e.main},c.a.createElement(u.a,null,c.a.createElement("p",{className:e.welcome},"Hello World! Welcome to HadiKhai's CLI! To get started type 'help'")),c.a.createElement(u.a,{className:e.shell},function(){var e=[];return t.forEach((function(t,n){t.show&&e.push(c.a.createElement("div",{key:"LineAndResponse-".concat(n)},c.a.createElement(T,{cmdProps:t,key:"Line-".concat(n)}),c.a.createElement(L,{responseProps:a[n],key:"Response-".concat(n),componentId:"Response-".concat(n)})))})),c.a.createElement("div",null,e)}(),function(){var e={cmd:"",args:"",dir:n,status:!0,shown:!0};return c.a.createElement(T,{cmdProps:e,key:"LineInput"})}()))},P=Object(s.a)((function(){return{main:{marginBottom:50}}})),U=function(){var e=Object(i.b)();Object(n.useEffect)((function(){e(F())}));var t=P();return c.a.createElement(u.a,{display:"flex",align:"center",flexdirection:"column",className:t.main},c.a.createElement(y,null),c.a.createElement(I,null))},W=Object(s.a)((function(e){return{main:{color:"white",height:"100%",width:"100%"}}})),H=function(){var e=W();return c.a.createElement("div",{className:e.main},c.a.createElement("p",null," Made By HadiKhai"),c.a.createElement("p",null," With React.JS"))},S=Object(s.a)((function(e){return{main:{background:"#003459",height:"100%",width:"100%",fontFamily:"Fira Code",marginTop:"5vh"}}})),Y=function(){var e=S();return c.a.createElement(u.a,{container:"true",display:"flex",align:"center",flexdirection:"column",className:e.main},c.a.createElement(U,null),c.a.createElement(H,null))},z=a(27),B={currentDirectory:"",content:[]},K=Object(l.c)({commands:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_CMD":return[].concat(Object(j.a)(e),[t.payload]);case"CLEAR_CMD":return e.map((function(e){return Object(z.a)({},e,{show:!1})}));default:return e}},responses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COMMAND_COMPLETED":return[].concat(Object(j.a)(e),[{error:t.payload.error,cmd:t.payload.cmd,content:t.payload.content}]);case"COMMAND_FAILED":return[].concat(Object(j.a)(e),[{cmd:t.payload.cmd,error:t.payload.error}]);case"COMMAND_NOT_FOUND":return[].concat(Object(j.a)(e),[{cmd:t.payload.cmd,content:t.payload.content,error:!0}]);case"COMMAND_EMPTY":return[].concat(Object(j.a)(e),[{cmd:"",content:"",error:!0}]);case"DIRECTORY_NOT_FOUND":case"FILE_NOT_FOUND":return[].concat(Object(j.a)(e),[{cmd:t.payload.cmd,content:t.payload.content,dirOrFile:t.payload.dirOrFile,error:t.payload.error}]);default:return e}},directory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_DIRECTORY":return Object(z.a)({},e,{currentDirectory:t.payload.directory});case"FETCH_DIRECTORY":return Object(z.a)({},e,{content:t.payload.content});default:return e}}}),G=(a(93),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d),J=Object(l.e)(K,G(Object(l.a)(d.a)));o.a.render(c.a.createElement(i.a,{store:J},c.a.createElement(Y,null)),document.querySelector("#root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.d1068d69.chunk.js.map