(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(61)},33:function(e,t,a){},36:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(23),c=a.n(r),s=(a(33),a(16)),l=a.n(s),m=a(24),o=a(3),u=a(4),d=a(6),p=a(5),h=a(7),y=(a(36),function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"title"},i.a.createElement("h1",{className:"headeer"},"Welcome to weather forcasst. We apprecite your valuable time."))}}]),t}(i.a.Component)),v=a(12),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleSubmit",value:function(e){alert("You Submit your name: "+this.input.value),e.preventDefault()}},{key:"render",value:function(){return i.a.createElement("form",{className:"search_form",onSubmit:this.props.getWeather},i.a.createElement("div",null,"CITY : ",i.a.createElement("input",{className:"city",type:"text",name:"city",placeholder:"city......"})),i.a.createElement("div",null,"COUNTRY : ",i.a.createElement("input",{className:"country",type:"text",name:"country",placeholder:"country......"})),i.a.createElement("div",null,i.a.createElement("button",{className:"form_button"},"Get Weather")))}}]),t}(i.a.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"result"},i.a.createElement("div",{className:"result_text"},i.a.createElement("h1",null,this.props.city&&this.props.country&&i.a.createElement("p",null,this.props.city," , ",this.props.country)),this.props.temperature&&i.a.createElement("p",null,"Temperature: ",(this.props.temperature-273.15).toFixed(2)," \xb0C "),this.props.minimum&&i.a.createElement("p",null,"Minimum Temperature: ",(this.props.minimum-273.15).toFixed(2)," \xb0C "),this.props.maximum&&i.a.createElement("p",null,"Maximum Temperature: ",(this.props.maximum-273.15).toFixed(2)," \xb0C "),this.props.pressure&&i.a.createElement("p",null,"Pressure: ",this.props.pressure," hPA"),this.props.humidity&&i.a.createElement("p",null,"Humidity: ",this.props.humidity),this.props.icon&&i.a.createElement("p",null," ",this.props.icon),this.props.description&&i.a.createElement("p",null,"Description: ",this.props.description),this.props.error&&i.a.createElement("h1",null,this.props.error)))}}]),t}(i.a.Component),b=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).state={time:new Date},e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"currentTime",value:function(){this.setState({time:new Date})}},{key:"componentWillMount",value:function(){var e=this;setInterval(function(){return e.currentTime()},1e3)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Local Time"),i.a.createElement("h1",null,this.state.time.toLocaleDateString()),i.a.createElement("h1",null,this.state.time.toLocaleTimeString()))}}]),t}(i.a.Component),w="b7d967612159884789686c4f5c41c455",j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,pressure:void 0,minimum:void 0,maximum:void 0,icon:void 0,error:void 0},a.getWeather=function(){var e=Object(m.a)(l.a.mark(function e(t){var n,i,r,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements.city.value,i=t.target.elements.country.value,e.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(i,"&appid=").concat(w));case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,n&&i?a.setState({temperature:c.main.temp,city:c.name,country:c.sys.country,humidity:c.main.humidity,pressure:c.main.pressure,minimum:c.main.temp_min,maximum:c.main.temp_max,icon:c.weather[0].icon,description:c.weather[0].description,error:""}):a.setState({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,icon:void 0,pressure:void 0,minimum:void 0,maximum:void 0,error:"Please insert your country and city"});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement(y,null),i.a.createElement("div",{className:"time"},i.a.createElement(b,null)),i.a.createElement("div",{className:"weather"},i.a.createElement(E,{getWeather:this.getWeather}),i.a.createElement(f,{temperature:this.state.temperature,pressure:this.state.pressure,minimum:this.state.minimum,maximum:this.state.maximum,city:this.state.city,country:this.state.country,humidity:this.state.humidity,icon:this.state.icon,description:this.state.description,error:this.state.error})))}}]),t}(i.a.Component),O=a(13),x=a.n(O),N=a(25),g=a.n(N),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).fetchData=function(){var e=a.buildUrlApi();x.a.get(e).then(function(e){a.setState({data:e.data});for(var t=[],n=0;n<a.state.data.list.length;n+=1)t.push({days:a.state.data.list[n].dt,temps:Math.round(a.state.data.list[n].main.temp),minTemps:a.state.data.list[n].main.temp_min,maxTemps:a.state.data.list[n].main.temp_max,humidity:a.state.data.list[n].main.humidity,pressure:a.state.data.list[n].main.pressure,wind:a.state.data.list[n].wind.speed,weather:a.state.data.list[n].weather[0].description,icons:a.state.data.list[n].weather[0].icon});a.setState({newData:t})})},a.buildUrlApi=function(){return["https://api.openweathermap.org/data/2.5/forecast?q=",encodeURIComponent(a.state.location),"&APPID=b7d967612159884789686c4f5c41c455&units=metric"].join("")},a.changeLocation=function(e){e.preventDefault();var t=a.locationInput.value;a.setState({location:t},function(){a.fetchData()})},a.setIndex=function(e){a.setState({displayIndex:e})},a.state={data:{},location:"Miami",days:[],daysFull:[],temps:[],minTemps:[],maxTemps:[],humidity:[],pressure:[],wind:[],weather:[],icons:[],newData:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this,t=this.state,a=t.location,n=t.newData;return i.a.createElement("div",{className:"main-div"},i.a.createElement(y,null),i.a.createElement("form",{onSubmit:this.changeLocation},i.a.createElement("div",{className:"input1"},i.a.createElement("input",{className:"location-input",defaultValue:a,type:"text",ref:function(t){return e.locationInput=t}}))),i.a.createElement("div",{className:"location"},a),i.a.createElement("div",{className:"weather_data_days"},n.map(function(e){return i.a.createElement("div",{className:"days_data_container",key:e.days},i.a.createElement("div",{className:"days_data",style:{border:"1px solid black"}},i.a.createElement("div",{className:"days"},i.a.createElement(g.a,{unix:!0,format:"ddd"},e.days)),i.a.createElement("img",{width:"150",height:"150",src:"http://openweathermap.org/img/w/".concat(e.icons,".png")}),i.a.createElement("div",null,e.temps,"\xb0c"),i.a.createElement("div",null,"min-",e.minTemps),i.a.createElement("div",null,"max-",e.maxTemps)))})))}}]),t}(i.a.Component),T=a(10),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).fetchData=function(){var e=a.buildUrlApi();x.a.get(e).then(function(e){a.setState({data:e.data});for(var t=a.currentData(),n=["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"],i=n[new Date(t.dt_txt).getDay()],r=Math.round(t.main.temp),c=Math.round(t.main.temp_min),s=Math.round(t.main.temp_max),l=Math.round(t.main.humidity),m=Math.round(t.main.pressure),o=Math.round(t.wind.speed),u=t.weather[0].description,d=t.weather[0].icon,p=[],h=[],y=[],v=[],E=[],f=[],b=[],w=[],j=[],O=[],x=0;x<a.state.data.list.length;x+=1){var N=n[new Date(a.state.data.list[x].dt_txt).getDay()];p.push(a.state.data.list[x].dt_txt),h.push(N),y.push(Math.round(a.state.data.list[x].main.temp)),v.push(Math.round(a.state.data.list[x].main.temp_min)),E.push(Math.round(a.state.data.list[x].main.temp_max)),f.push(Math.round(a.state.data.list[x].main.humidity)),b.push(Math.round(a.state.data.list[x].main.pressure)),w.push(Math.round(a.state.data.list[x].wind.speed)),j.push(a.state.data.list[x].weather[0].description),O.push(a.state.data.list[x].weather[0].icon)}console.log(O),console.log(p),a.setState({days:["Now"].concat(Object(T.a)(p.slice(1))),daysFull:[i].concat(Object(T.a)(h.slice(1))),temps:[r].concat(Object(T.a)(y.slice(1))),minTemps:[c].concat(Object(T.a)(v.slice(1))),maxTemps:[s].concat(Object(T.a)(E.slice(1))),humidity:[l].concat(Object(T.a)(f.slice(1))),pressure:[m].concat(Object(T.a)(b.slice(1))),wind:[o].concat(Object(T.a)(w.slice(1))),weather:[u].concat(Object(T.a)(j.slice(1))),icons:[d].concat(Object(T.a)(O.slice(1)))})})},a.buildUrlApi=function(){return["https://api.openweathermap.org/data/2.5/forecast?q=",encodeURIComponent(a.state.location),"&APPID=b7d967612159884789686c4f5c41c455&units=metric"].join("")},a.currentData=function(){return a.state.data.list.find(function(e){return new Date(e.dt_txt)})},a.changeLocation=function(e){e.preventDefault();var t=a.locationInput.value;a.setState({location:t},function(){a.fetchData()})},a.setIndex=function(e){a.setState({displayIndex:e})},a.state={data:{},location:"Miami",days:[],daysFull:[],temps:[],minTemps:[],maxTemps:[],humidity:[],pressure:[],wind:[],weather:[],icons:[],displayIndex:0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this,t=this.state,a=t.location,n=t.days,r=t.daysFull,c=t.temps,s=t.maxTemps,l=t.minTemps,m=t.humidity,o=t.pressure,u=t.wind,d=t.weather,p=t.icons,h=t.displayIndex;return i.a.createElement("div",{className:"current_location"},i.a.createElement("form",{onSubmit:this.changeLocation},i.a.createElement("div",{className:"inline-input"},i.a.createElement("input",{className:"location-input",defaultValue:a,type:"text",ref:function(t){return e.locationInput=t}}))),i.a.createElement("hr",null),i.a.createElement("div",{className:"location"},a),i.a.createElement("div",{className:"main-display"},i.a.createElement("div",{className:"selection-panel"},i.a.createElement("div",{className:"selection-row"},n.map(function(t,a){return h===a?i.a.createElement("li",{className:"days_list"},i.a.createElement("button",{className:"selected",key:a+1,onClick:function(){return e.setIndex(a)}},t)):i.a.createElement("li",{className:"days_list"},i.a.createElement("button",{key:a+1,onClick:function(){return e.setIndex(a)}},t))}))),i.a.createElement("div",{className:"weather-information"},i.a.createElement("div",{className:"day"},r[h]),i.a.createElement("hr",null),i.a.createElement("div",{className:"temp-measurement"},i.a.createElement("div",null,i.a.createElement("img",{width:"150",height:"150",src:"http://openweathermap.org/img/w/"+"".concat(p[h])+".png",alt:"weater-icon"})),c[h],"\xb0C"),i.a.createElement("div",{className:"weather-description"},i.a.createElement("strong",null,"Description : "),d[h]),i.a.createElement("div",{className:"weather-description"},i.a.createElement("strong",null,"Humidity : "),m[h],"%"),i.a.createElement("div",{className:"weather-description"},i.a.createElement("strong",null,"Pressure : "),o[h]," hPa"),i.a.createElement("div",{className:"weather-description"},i.a.createElement("strong",null,"Wind-Speed : "),u[h]," m/s"),i.a.createElement("div",{className:"weather-description"},i.a.createElement("strong",null," Max.Temp. : "),s[h],"\xb0C"),i.a.createElement("div",{className:"weather-description"},i.a.createElement("strong",null,"Min.Temp. : "),l[h],"\xb0C"))),i.a.createElement("hr",null))}}]),t}(n.Component),S=a(64),_=a(63),k=a(65);function C(){return i.a.createElement("div",{className:"Home"},i.a.createElement(j,null))}function I(){return i.a.createElement("div",{className:"daily"},i.a.createElement("h2",null,i.a.createElement(D,null)))}function F(){return i.a.createElement("div",{className:"hourly"},i.a.createElement("h2",null,i.a.createElement(M,null)))}c.a.render(i.a.createElement(function(){return i.a.createElement(S.a,null,i.a.createElement("div",null,i.a.createElement("nav",null,i.a.createElement("div",{className:"navigation"},i.a.createElement("button",null,i.a.createElement(_.a,{className:"list",to:"/"},"Home")),i.a.createElement("button",null,i.a.createElement(_.a,{className:"list",to:"/Daily/"},"Daily Forecast")),i.a.createElement("button",null,i.a.createElement(_.a,{className:"list",to:"/Hourly/"},"Hourly Forecast")))),i.a.createElement(k.a,{exact:!0,path:"/",component:C}),i.a.createElement(k.a,{path:"/Daily",component:I}),i.a.createElement(k.a,{path:"/Hourly",component:F})))},null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.faf982fc.chunk.js.map