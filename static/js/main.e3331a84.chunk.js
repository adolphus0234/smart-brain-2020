(this["webpackJsonpsmart-brain-2020"]=this["webpackJsonpsmart-brain-2020"]||[]).push([[0],{22:function(e,t,a){},30:function(e,t,a){},301:function(e,t,a){},302:function(e,t,a){},304:function(e,t,a){"use strict";a.r(t);var n,i=a(0),r=a.n(i),o=a(41),l=a.n(o),c=a(10),m=a(11),s=a(13),u=a(12),d=(a(81),function(e){var t=e.onRouteChange;return!0===e.isSignedIn?r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return t("signout")},className:"link dim black underline pa3 pointer nav"},"Sign Out")):r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return t("signin")},className:"link dim black underline pointer nav"},"Sign In"),r.a.createElement("p",{onClick:function(){return t("register")},className:"link dim black underline pointer nav"},"Register"))}),p=(a(82),function(e){var t=e.onRouteChange,a=e.route;return"home3"===a?r.a.createElement("div",null,r.a.createElement("nav",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("p",{onClick:function(){return t("home")},className:"F3 link dim black underline pa2 pointer"},"FACE Detect"),r.a.createElement("p",{className:"F2 pa2 ma2 white"},"[FOOD Detect]"),r.a.createElement("p",{onClick:function(){return t("home2")},className:"F3 link dim black underline pa2 pointer"},"COLOR Detect"))):"home2"===a?r.a.createElement("div",null,r.a.createElement("nav",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("p",{onClick:function(){return t("home")},className:"F3 link dim black underline pa2 pointer"},"FACE Detect"),r.a.createElement("p",{className:"F2 pa2 ma2 white"},"[COLOR Detect]"),r.a.createElement("p",{onClick:function(){return t("home3")},className:"F3 link dim black underline pa2 pointer"},"FOOD Detect"))):r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("nav",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("p",{onClick:function(){return t("home2")},className:"F3 link dim black underline pa2 pointer"},"COLOR Detect"),r.a.createElement("p",{className:"F2 pa2 ma2 white"},"[FACE Detect]"),r.a.createElement("p",{onClick:function(){return t("home3")},className:"F3 link dim black underline pa2 pointer"},"FOOD Detect"))))}),h=a(73),g=a.n(h),b=(a(83),a(74)),f=a.n(b),E=function(){return r.a.createElement("div",{className:"logo-margin mt0"},r.a.createElement(g.a,{className:"Tilt br2 shadow-2",options:{max:55}},r.a.createElement("div",{className:"Tilt-inner"},r.a.createElement("img",{style:{paddingTop:"3px"},alt:"logo",src:f.a}))))},v=(a(84),function(e){var t=e.name,a=e.entries;return r.a.createElement("div",null,r.a.createElement("div",{className:"white name"},"".concat(t,", your current number of entries is:")),r.a.createElement("div",{className:"white entries"},a))}),y=function(e){var t=e.name,a=e.entries,n=e.route,i=e.onRouteChange;return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(v,{name:t,entries:a}),r.a.createElement(p,{route:n,onRouteChange:i}))},N=(a(30),function(e){var t=e.onInputChange,a=e.onPictureSubmitColor;return r.a.createElement("div",null,r.a.createElement("p",{className:"F3 pl1 pr1"},"This Magic Brain will also detect and display colors from your pictures. Give it a try!"),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"form center padding br3 shadow-5 mt3 mb3"},r.a.createElement("input",{className:"E4 pa2 w-70 center",placeholder:"Enter Image URL",type:"text",onChange:t}),r.a.createElement("button",{className:"w-30 grow E4 link pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),C=function(e){var t=e.onInputChange,a=e.onPictureSubmitFood;return r.a.createElement("div",null,r.a.createElement("p",{className:"F3 pl1 pr1"},"This Magic Brain will list ingredients from pictures of food. Give it a try!"),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"form center padding br3 shadow-5 mt3 mb3"},r.a.createElement("input",{className:"E4 pa2 w-70 center",placeholder:"Enter Image URL",type:"text",onChange:t}),r.a.createElement("button",{className:"w-30 grow E4 link pv2 dib white bg-light-purple",onClick:a},"Detect"))))},x=function(e){var t=e.onInputChange,a=e.onPictureSubmit;return r.a.createElement("div",null,r.a.createElement("p",{className:"F3 pl1 pr1"},"This Magic Brain will detect faces in your pictures. Give it a try!"),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"form center padding br3 shadow-5 mt3 mb3"},r.a.createElement("input",{className:"E4 pa2 w-70 center",placeholder:"Enter Image URL",type:"text",onChange:t,id:"form-input"}),r.a.createElement("button",{className:"w-30 grow E4 link pv2 dib white bg-light-purple",onClick:a},"Detect"))))},k=(a(22),function(e){var t=e.clarifaiFace,a=function(){var e=document.getElementById("inputimage"),a=Number(e.width),n=Number(e.height);return{bottomRow:n-t.bottom_row*n,leftCol:t.left_col*a,rightCol:a-t.right_col*a,topRow:t.top_row*n}};return r.a.createElement("div",null,r.a.createElement("div",{className:"bounding-box",style:{top:Number("".concat(a().topRow)),right:Number("".concat(a().rightCol)),bottom:Number("".concat(a().bottomRow)),left:Number("".concat(a().leftCol))}}))}),w=function(e){var t=e.box,a=Object.entries(t).map((function(e,a){return r.a.createElement(k,{key:a,clarifaiFace:t[a][1].region_info.bounding_box})}));return r.a.createElement("div",null,a)},I=function(e){var t=e.imageUrl,a=e.box,n=e.faceFetch,i=e.timeout,o=e.invalidUrl,l=e.apiModelFail;return!0===o?r.a.createElement("div",null,r.a.createElement("div",{className:"center ma"},r.a.createElement("div",{className:"absolute mt2"},r.a.createElement("p",{className:"font-size"},"Enter Valid URL."),r.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto",style:{marginBottom:"15px"}})))):!0===l?r.a.createElement("div",null,r.a.createElement("div",{className:"center ma"},r.a.createElement("div",{className:"absolute mt2"},r.a.createElement("p",{className:"font-size"},"This image does not contain a face."),r.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto",style:{marginBottom:"15px"}})))):!0===n&&!1===i?r.a.createElement("div",null,r.a.createElement("div",{className:"center ma"},r.a.createElement("div",{className:"absolute mt2"},r.a.createElement("p",{className:"font-size"},"Please wait..."),r.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto",style:{marginBottom:"15px"}})))):!0===n&&!0===i?r.a.createElement("div",null,r.a.createElement("div",{className:"center ma"},r.a.createElement("div",{className:"absolute mt2"},r.a.createElement("p",{className:"font-size"},"Server is not responding. Please try again."),r.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto",style:{marginBottom:"15px"}})))):r.a.createElement("div",null,r.a.createElement("div",{className:"center ma"},r.a.createElement("div",{className:"absolute mt2"},r.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto",style:{marginBottom:"15px"}}),r.a.createElement("div",null,r.a.createElement(w,{box:a})))))},S=function(e){var t=e.onInputChange,a=e.onPictureSubmit,n=e.box,i=e.invalidUrl,o=e.imageUrl,l=e.faceFetch,c=e.timeout,m=e.apiModelFail;return r.a.createElement("div",null,r.a.createElement(x,{onInputChange:t,onPictureSubmit:a}),r.a.createElement(I,{box:n,invalidUrl:i,imageUrl:o,faceFetch:l,timeout:c,apiModelFail:m}),r.a.createElement("div",{className:"ma5"}))},U=function(e){var t=e.imageUrl;return r.a.createElement("div",null,r.a.createElement("div",{className:"center ma"},r.a.createElement("div",{className:"absolute mt2"},r.a.createElement("div",{id:"color-list",className:"f3 pa2"}),r.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto",style:{marginBottom:"15px"}}))))},j=function(e){var t=e.imageUrl;return r.a.createElement("div",null,r.a.createElement("div",{className:"center ma"},r.a.createElement("div",{className:"absolute mt2"},r.a.createElement("div",{id:"color-list",className:"f3 pa2"}),r.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto",style:{marginBottom:"15px"}}))))},F=(a(85),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).convertToRGB=function(e){3===e.length&&(e=e.replace(/.{1,1}/g,"$&$&"));var t=e.match(/.{1,2}/g);return["rgb(".concat(parseInt(t[0],16),",")," ".concat(parseInt(t[1],16),",")," ".concat(parseInt(t[2],16),")")]},e}return Object(m.a)(a,[{key:"render",value:function(e){return r.a.createElement("div",{className:"F4 bg-white-20 br4 shadow-5 list-colors",style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",{id:"hex-code",className:"ma3"},"hex: #".concat(this.props.hexValue.slice(1))),r.a.createElement("div",{id:"rgb-code",className:"ma3 w-40"},this.convertToRGB("".concat(this.props.hexValue.slice(1)))),r.a.createElement("div",{id:"color-bar",className:"ma3 w-20 br3 shadow-5 grow",style:{background:"".concat(this.props.hexValue),color:"".concat(this.props.hexValue)}},"."),r.a.createElement("div",null))}}]),a}(r.a.Component)),O=function(e){return r.a.createElement("div",{className:"bg-black-0",style:{overflow:"scroll",border:"2px solid black",borderRadius:"6px",height:"290px",marginLeft:"5%",marginRight:"5%"}},e.children)},T=function(e){var t=e.colors,a=e.colorFetch,n=e.timeout,i=e.invalidUrl,o=t.map((function(e,a){return r.a.createElement(F,{key:a,hexValue:t[a].raw_hex})}));return!0===i?r.a.createElement("p",{className:"font-size"},"Enter valid URL."):!0===a&&!1===n?r.a.createElement("p",{className:"font-size"},"Please wait..."):!0===a&&!0===n?r.a.createElement("p",{className:"font-size"},"Server is not responding. Please try again."):"false"===a?r.a.createElement("div",null,r.a.createElement("p",{className:"f3"},"Colors: ".concat(t.length)),r.a.createElement(O,null,o)):r.a.createElement("div",null)},R=(a(86),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).round=function(e,t){return Number(Math.round(e+"e"+t)+"e-"+t)},e}return Object(m.a)(a,[{key:"render",value:function(e){return r.a.createElement("div",{className:"F4 bg-white-20 br4 shadow-5 list-ingredients",style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",{className:"w-20 ingredient-name"},"".concat(this.props.foodItem)),r.a.createElement("div",{className:"w-20 probability"},"Probability:"),r.a.createElement("div",{className:"w-20 prob"},"Prob:"),r.a.createElement("div",{className:"F3 w-20 percentage"},"".concat(this.round("".concat(100*this.props.probability),1),"%")))}}]),a}(r.a.Component)),B=function(e){return r.a.createElement("div",{className:"bg-black-0",style:{overflow:"scroll",border:"2px solid black",borderRadius:"6px",height:"270px",marginLeft:"5%",marginRight:"5%"}},e.children)},P=function(e){var t=e.ingredients,a=e.foodFetch,n=e.timeout,i=e.invalidUrl,o=t.map((function(e,a){return r.a.createElement(R,{key:a,foodItem:t[a].name,probability:t[a].value})}));return!0===i?r.a.createElement("p",{className:"font-size"},"Enter valid URL."):!0===a&&!1===n?r.a.createElement("p",{className:"font-size"},"Please wait..."):!0===a&&!0===n?r.a.createElement("p",{className:"font-size"},"Server is not responding. Please try again."):"false"===a?r.a.createElement("div",null,r.a.createElement("p",{className:"f3"},"Ingredients: ".concat(t.length)),r.a.createElement(B,null,o)):r.a.createElement("div",null)},V=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.submitFunction=function(){var e=document.getElementById("password"),t=document.getElementById("error-message");return t.innerText="Signing In...",fetch("https://shielded-tundra-50055.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){if(!e.id)return t.innerText="Error Signing In...";n.props.loadUser(e),n.props.onRouteChange("home")})),e.value=""},n.onSubmitSignIn=function(){n.submitFunction()},n.onSubmitSignInKeyPress=function(e){13===e.keyCode&&n.submitFunction()},n.keyPressEnter=function(){document.getElementById("password").addEventListener("keypress",n.onSubmitSignInKeyPress)},n.state={signInEmail:"",signInPassword:""},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return r.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-60-m  mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 b--black input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 b--black input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange,onKeyPress:this.keyPressEnter}))),r.a.createElement("div",{className:""},r.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),r.a.createElement("div",{className:"lh-copy mt3"},r.a.createElement("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer"},"Register")),r.a.createElement("div",{className:"f4",id:"error-message"}))))}}]),a}(r.a.Component),M=["aol.com","att.net","comcast.net","facebook.com","gmail.com","gmx.com","googlemail.com","google.com","hotmail.com","hotmail.co.uk","mac.com","me.com","mail.com","msn.com","live.com","sbcglobal.net","verizon.net","yahoo.com","yahoo.co.uk","email.com","fastmail.fm","games.com","gmx.net","hush.com","hushmail.com","icloud.com","iname.com","inbox.com","lavabit.com","love.com","outlook.com","pobox.com","protonmail.ch","protonmail.com","tutanota.de","tutanota.com","tutamail.com","tuta.io","keemail.me","rocketmail.com","safe-mail.net","wow.com","ygm.com","ymail.com","zoho.com","yandex.com","bellsouth.net","charter.net","cox.net","earthlink.net","juno.com","btinternet.com","virginmedia.com","blueyonder.co.uk","freeserve.co.uk","live.co.uk","ntlworld.com","o2.co.uk","orange.net","sky.com","talktalk.co.uk","tiscali.co.uk","virgin.net","wanadoo.co.uk","bt.com","sina.com","sina.cn","qq.com","naver.com","hanmail.net","daum.net","nate.com","yahoo.co.jp","yahoo.co.kr","yahoo.co.id","yahoo.co.in","yahoo.com.sg","yahoo.com.ph","163.com","yeah.net","126.com","21cn.com","aliyun.com","foxmail.com","hotmail.fr","live.fr","laposte.net","yahoo.fr","wanadoo.fr","orange.fr","gmx.fr","sfr.fr","neuf.fr","free.fr","gmx.de","hotmail.de","live.de","online.de","t-online.de","web.de","yahoo.de","libero.it","virgilio.it","hotmail.it","aol.it","tiscali.it","alice.it","live.it","yahoo.it","email.it","tin.it","poste.it","teletu.it","mail.ru","rambler.ru","yandex.ru","ya.ru","list.ru","hotmail.be","live.be","skynet.be","voo.be","tvcablenet.be","telenet.be","hotmail.com.ar","live.com.ar","yahoo.com.ar","fibertel.com.ar","speedy.com.ar","arnet.com.ar","yahoo.com.mx","live.com.mx","hotmail.es","hotmail.com.mx","prodigy.net.mx","yahoo.ca","hotmail.ca","bell.net","shaw.ca","sympatico.ca","rogers.com","yahoo.com.br","hotmail.com.br","outlook.com.br","uol.com.br","bol.com.br","terra.com.br","ig.com.br","itelefonica.com.br","r7.com","zipmail.com.br","globo.com","globomail.com","oi.com.br"],H=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onNameChange=function(e){n.setState({name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onSubmitSignIn=function(){var e=n.state,t=e.name,a=e.email,i=e.password,r=M.map((function(e){var t=a.includes(e);return t}));return t&&a&&i?i.length<5?document.getElementById("error-message").innerText="Password must be greater than 5 characters":a.includes("@")&&r.includes(!0)?void fetch("https://shielded-tundra-50055.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,email:a,password:i})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))})):document.getElementById("error-message").innerText="Please enter valid email":document.getElementById("error-message").innerText="Please fill in all fields"},n.state={name:"",email:"",password:""},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-60-m  mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Name"),r.a.createElement("input",{className:"pa2 b--black input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Email"),r.a.createElement("input",{className:"b pa2 b--black input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email",id:"email",onChange:this.onEmailChange})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 b--black input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),r.a.createElement("div",{className:""},r.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"}))),r.a.createElement("div",{className:"f6 bold tc",id:"error-message",style:{width:"96%",marginLeft:"2%",marginRight:"2%",paddingTop:"20px"}})))}}]),a}(r.a.Component),Y=a(75),Q=a.n(Y),z=function(){return document.getElementById("inputimage").scrollIntoView()},K=(a(301),{particles:{number:{value:50,density:{enable:!0,value_area:400}}}}),D={input:"",imageUrl:"",imageUrl2:"",imageUrl3:"",box:{},route:"signin",isSignedIn:!1,colors:[],ingredients:[],faceFetch:!1,colorFetch:!1,foodFetch:!1,timeout:!1,invalidUrl:!1,apiModelFail:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},X=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.onRouteChange=function(t){"signout"===t||"register"===t||"signin"===t?e.setState(D):e.setState({isSignedIn:!0,box:{},invalidUrl:!1,input:""}),e.setState({route:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.setTimeoutState=function(){e.setState({timeout:!0}),z()},e.apiTimeout=function(){n=setTimeout(e.setTimeoutState,8e3)},e.apiClearTimeout=function(){clearTimeout(n)},e.calculateFaceLocation=function(t){var a=t.outputs[0].data.regions;return void 0===a&&e.setState({apiModelFail:!0}),Object.entries(a)},e.displayBox=function(t){e.setState({box:t})},e.onPictureSubmit=function(){e.setState({imageUrl:e.state.input,faceFetch:!0,timeout:!1}),e.apiTimeout(),z(),fetch("https://shielded-tundra-50055.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){if(t){if(e.apiClearTimeout(),z(),e.setState({faceFetch:!1}),"Unable to access API"===t)return e.setState({invalidUrl:!0,faceFetch:!1});e.setState({invalidUrl:!1}),fetch("https://shielded-tundra-50055.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))}))}e.displayBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onPictureSubmitColor=function(){e.setState({imageUrl2:e.state.input,colorFetch:!0,timeout:!1}),e.apiTimeout(),z(),fetch("https://shielded-tundra-50055.herokuapp.com/imageurlcolor",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){if(t){"Unable to access API"===t?e.setState({invalidUrl:!0,colorFetch:!1}):e.setState({invalidUrl:!1}),e.apiClearTimeout(),z();var a=t.outputs[0].data.colors;e.setState({colors:a,colorFetch:"false"}),fetch("https://shielded-tundra-50055.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))}))}})).catch((function(e){return console.log(e)}))},e.onPictureSubmitFood=function(){e.setState({imageUrl3:e.state.input,foodFetch:!0,timeout:!1}),e.apiTimeout(),z(),fetch("https://shielded-tundra-50055.herokuapp.com/imageurlfood",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){if(t){"Unable to access API"===t?e.setState({invalidUrl:!0,foodFetch:!1}):e.setState({invalidUrl:!1}),e.apiClearTimeout(),z();var a=t.outputs[0].data.concepts;e.setState({ingredients:a,foodFetch:"false"}),fetch("https://shielded-tundra-50055.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))}))}})).catch((function(e){return console.log(e)}))},e.state=D,e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.route,n=e.box,i=e.user,o=e.faceFetch,l=e.timeout,c=e.invalidUrl,m=e.apiModelFail,s=e.imageUrl,u=e.colors,p=e.colorFetch,h=e.imageUrl2,g=e.ingredients,b=e.foodFetch,f=e.imageUrl3;return r.a.createElement("div",{className:"App"},r.a.createElement(Q.a,{className:"particles",params:K}),r.a.createElement(d,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===a?r.a.createElement("div",null,r.a.createElement(y,{name:i.name,entries:i.entries,route:a,onRouteChange:this.onRouteChange}),r.a.createElement(S,{onInputChange:this.onInputChange,onPictureSubmit:this.onPictureSubmit,box:n,invalidUrl:c,imageUrl:s,faceFetch:o,timeout:l,apiModelFail:m})):"home2"===a?r.a.createElement("div",null,r.a.createElement(y,{name:i.name,entries:i.entries,route:a,onRouteChange:this.onRouteChange}),r.a.createElement(N,{onInputChange:this.onInputChange,onPictureSubmitColor:this.onPictureSubmitColor}),r.a.createElement(T,{colors:u,colorFetch:p,timeout:l,invalidUrl:c}),r.a.createElement(U,{imageUrl:h})):"home3"===a?r.a.createElement("div",null,r.a.createElement(y,{name:i.name,entries:i.entries,route:a,onRouteChange:this.onRouteChange}),r.a.createElement(C,{onInputChange:this.onInputChange,onPictureSubmitFood:this.onPictureSubmitFood}),r.a.createElement(P,{ingredients:g,foodFetch:b,timeout:l,invalidUrl:c}),r.a.createElement(j,{imageUrl:f})):"signin"===a||"signout"===a?r.a.createElement(V,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):r.a.createElement(H,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(i.Component);a(302),a(303);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root"))},74:function(e,t){e.exports="data:image/png;base64,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"},76:function(e,t,a){e.exports=a(304)},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.e3331a84.chunk.js.map