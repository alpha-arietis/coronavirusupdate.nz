(this.webpackJsonpcvunz=this.webpackJsonpcvunz||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/radar-512.cb0b2bd2.png"},function(e,t,a){e.exports=a.p+"static/media/information.a2f2b966.png"},,function(e,t,a){e.exports=a.p+"static/media/alphaarietis.c86f306e.png"},function(e,t,a){e.exports=a(57)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),o=a.n(l),c=(a(26),a(27),a(2)),i=a(3),s=a(5),m=a(4),u=(a(28),a(17)),d=a.n(u),f=a(18),E=a.n(f),h=function(e){return r.a.createElement("div",{className:"Navbar"},r.a.createElement("aside",{style:{display:"flex"}},r.a.createElement("img",{src:d.a,className:"Logo",alt:""}),r.a.createElement("a",{href:"/",style:{textDecoration:"none",color:"white"}},r.a.createElement("h2",{style:{marginLeft:"20px"}},"Coronavirus Update NZ"))),r.a.createElement("h4",null,e.date),r.a.createElement("img",{src:E.a,alt:"",className:"Icon",onClick:e.toggleModal}))},p=a(6),v=(a(29),function(){return r.a.createElement("div",{className:"Hero"},r.a.createElement("h1",{className:"Title"},"New Zealand"))}),g=(a(30),a(31),function(e){return r.a.createElement("button",{className:"Button",type:"button",onClick:e.buttonClicked},e.buttonTitle)}),b=function(){return r.a.createElement("div",{className:"Map"},r.a.createElement(g,{buttonTitle:"STATISTICS",buttonClicked:function(){window.open("https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-situation/covid-19-current-cases")}}),r.a.createElement(g,{buttonTitle:"GOVT INFO",buttonClicked:function(){window.open("https://uniteforrecovery.govt.nz/")}}))},y=(a(32),a(33),function(){return r.a.createElement("div",{className:"Loader"})}),k=(a(34),function(e){return r.a.createElement("div",{className:"Element"},r.a.createElement("h4",null,e.title),r.a.createElement("span",{role:"img","aria-label":"",style:{fontSize:"70px"}},e.emoji),r.a.createElement("h3",null,e.number))}),w=function(e){var t;return t=e.error?r.a.createElement("h3",{className:"Error"},e.error):r.a.createElement("div",null,r.a.createElement(k,{title:"NEW CASES",number:e.new,emoji:"\ud83e\udd27"}),r.a.createElement(k,{title:"TOTAL CASES",number:e.confirmed,emoji:"\ud83d\ude37"}),r.a.createElement(k,{title:"RECOVERED",number:e.recovered,emoji:"\ud83d\ude0a"})),r.a.createElement("div",{className:"Numbers"},e.loading?r.a.createElement(y,null):t)},N=(a(35),function(e){return r.a.createElement("div",{className:"Summary"},r.a.createElement(w,{loading:e.isLoading,new:e.newCases,confirmed:e.confirmedCases,recovered:e.recoveredCases,error:e.isError}),r.a.createElement(b,null))}),C=(a(36),a(19)),S=a.n(C),M=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={confirmed:0,new:0,recovered:0,loading:!1,error:null},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0,error:null}),S.a.get("https://api.covid19api.com/summary").then((function(t){e.setState({loading:!1}),e.setState((function(e){return Object(p.a)(Object(p.a)({},e),{},{new:t.data.Countries[120].NewConfirmed,confirmed:t.data.Countries[120].TotalConfirmed,recovered:t.data.Countries[120].TotalRecovered})}))})).catch((function(t){e.setState({loading:!1,error:r.a.createElement("div",null,r.a.createElement("h4",null,"Sorry, something went wrong!"),r.a.createElement("h4",null," Please try again later."))})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"OutputCard"},r.a.createElement(v,null),r.a.createElement(N,{isLoading:this.state.loading,newCases:this.state.new,confirmedCases:this.state.confirmed,recoveredCases:this.state.recovered,isError:this.state.error}))}}]),a}(n.Component),x=(a(54),a(55),a(56),function(e){return e.show?r.a.createElement("div",{className:"Backdrop",onClick:e.clickBackdrop}):null}),O=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(x,{show:e.showModal,clickBackdrop:e.clicked}),r.a.createElement("div",{className:"Modal"},e.children))},T=a(20),j=a.n(T),L=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={today:"",modal:!1},e.modalHandler=function(){e.setState((function(e){return{modal:!e.modal}}))},e.linkToStatistics=function(){},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=new Date,t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()];this.setState({today:"".concat(t,", ").concat(e.getDate()," ").concat(a)})}},{key:"render",value:function(){var e=r.a.createElement(n.Fragment,null,r.a.createElement("div",{style:{borderBottom:"3px solid #eee"}},r.a.createElement("img",{src:j.a,alt:"",style:{height:"60px"}}),r.a.createElement("h3",{style:{marginBottom:"30px"}},"Created by Alpha Arietis")),r.a.createElement("div",{className:"InfoModal",style:{marginTop:"15px"}},r.a.createElement("a",{href:"https://alphaarietis.nz/",target:"blank",onClick:this.modalHandler,className:"ModalLink"},r.a.createElement("h3",null,"Let's work together")),r.a.createElement("span",{role:"img","aria-label":"",style:{fontSize:"35px",marginLeft:"15px"}},"\ud83d\udc4b")),r.a.createElement("div",{className:"InfoModal"},r.a.createElement("a",{href:"mailto:alpha.arietis.team@gmail.com?subject=Hey, I would like to share my thoughts about Coronavirus Update NZ",onClick:this.modalHandler,className:"ModalLink"},r.a.createElement("h3",null,"Send your feedback")),r.a.createElement("span",{role:"img","aria-label":"",style:{fontSize:"35px",marginLeft:"15px"}},"\ud83d\udcac")),r.a.createElement("div",{className:"InfoModal"},r.a.createElement("a",{href:"https://github.com/alpha-arietis/cvunz",onClick:this.modalHandler,className:"ModalLink",target:"blank"},r.a.createElement("h3",null,"View GitHub source")),r.a.createElement("span",{role:"img","aria-label":"",style:{fontSize:"35px",marginLeft:"15px"}},"\ud83d\udcbb")));return r.a.createElement("div",{className:"Layout"},this.state.modal?r.a.createElement(O,{clicked:this.modalHandler,showModal:this.state.modal},e):null,r.a.createElement(h,{date:this.state.today,toggleModal:this.modalHandler}),r.a.createElement(M,null))}}]),a}(n.Component),A=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(L,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.85550302.chunk.js.map