(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{26:function(e,n,t){},27:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var a=t(0),i=(t(20),t(2)),r=t.n(i),s=t(17),c=t.n(s),u=t(3),l=t(4),o=t(6),b=t(5),h=t(30),d=t(31);function j(e){return"number"!==typeof e||isNaN(e)?e:e>=0&&e<10?"0"+e:""+e}function g(e){return"object"===typeof e&&e.toISOString&&"number"===typeof e.getTime()&&!isNaN(e.getTime())}function O(e){if(g(e)){var n=new Date(e);return n.setMinutes(e.getMinutes()-e.getTimezoneOffset()),n.toJSON().slice(0,10)}}function v(e,n){if(g(e)&&n&&"string"===typeof n){var t=n.match(/(\d+):(\d+)/);if(t&&3===t.length)return new Date(e.getFullYear(),e.getMonth(),e.getDate(),parseInt(t[1]),parseInt(t[2]))}}function m(e){return g(e)}var f=t(8),p=t.n(f),x=t(29),C=function(e){Object(o.a)(t,e);var n=Object(b.a)(t);function t(){var e;Object(u.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=n.call.apply(n,[this].concat(i))).onChange=function(n){var t=e.props.onChange;t&&t(n.target.value,n)},e}return Object(l.a)(t,[{key:"render",value:function(){var e,n=this.props,t=n.id,i=n.className,r=void 0===i?"":i,s=this.props.value,c=void 0===s?"":s;return m(c)&&(c=j((e=c).getFullYear())+"-"+j(e.getMonth())+"-"+j(e.getDate())),Object(a.jsx)(x.a,{placeholder:"YYYY-MM-DD",className:p()(r),onChange:this.onChange,id:t,value:c})}}]),t}(r.a.Component);function z(e){if("number"===typeof e&&!isNaN(e)){var n=j(Math.floor(e/6e4%60)),t=j(Math.floor(e/36e5%24));return"".concat(t,":").concat(n)}}function N(e){if("string"===typeof e){var n=/(\d+):(\d+)/.exec(e);if(n&&3===n.length)return 1e3*parseInt(n[1])*60*60+1e3*parseInt(n[2])*60}}function D(e){if(g(e)){var n=new Date(e);return n.setMinutes(e.getMinutes()-e.getTimezoneOffset()),n.toJSON().slice(11,16)}}var E=function(e){Object(o.a)(t,e);var n=Object(b.a)(t);function t(){var e;Object(u.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=n.call.apply(n,[this].concat(i))).onChange=function(n){var t=e.props.onChange;t&&t(n.target.value,n)},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props,n=e.id,t=e.className,i=void 0===t?"":t,r=this.props.value,s=void 0===r?"":r;return m(s)&&(s=function(e){if(g(e)){var n=new Date(e);return n.setMinutes(e.getMinutes()-e.getTimezoneOffset()),n.toJSON().slice(11,16)}}(s)),Object(a.jsx)(x.a,{placeholder:"HH:MM",className:p()(i),onChange:this.onChange,id:n,value:s})}}]),t}(r.a.Component),y=function(e){Object(o.a)(t,e);var n=Object(b.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props,n=e.id,t=e.value,i=void 0===t?"":t;return Object(a.jsx)("output",{readOnly:!0,className:"form-control",id:n,children:i})}}]),t}(r.a.Component),B=t(9),A=function(e){Object(o.a)(t,e);var n=Object(b.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props,n=e.id,t=e.value,i=void 0===t?"":t;return Object(a.jsx)("output",{readOnly:!0,className:"form-control",id:n,children:i})}}]),t}(r.a.Component);function M(e,n){return B.a.dispatch({type:"fieldChanged",data:{fieldName:e,value:n}})}var w=t(13);var k=new(function(){function e(){Object(u.a)(this,e)}return Object(l.a)(e,[{key:"berechneBuchung",value:function(e,n,t,a){void 0===a&&(a=0);var i,r,s=n-e,c=v(e,t),u=function(e){return new Date(e.getTime()+N("11:00"))}(n),l=(i=c)>(r=n)?i:r,o=new Date(l.getTime()+s),b=0;b=3e6;var h=new Date(u.getTime()+a+b),d=s+a,j=d+b,g=h-o;return{sperrzeitEnde:D(u),buchungBeginn:D(o),buchungEnde:D(h),buchungDauer:z(g),einsatzDauer:z(s),gesamtDauerNetto:z(d),gesamtDauerBrutto:z(j),pauseDauer:z(b)}}}]),e}()),T=new(function(){function e(){Object(u.a)(this,e),this.data={einsatzTag:O(new Date),einsatzBeginn:"00:15",einsatzEnde:"02:15",ueblicherArbeitsbeginn:"07:30",arbeitBeginn:"15:05",arbeitEnde:"16:05"}}return Object(l.a)(e,[{key:"onFieldChanged",value:function(e){var n=e.data,t=n.fieldName,a=n.value;this.data[t]=a}},{key:"appendDataTo",value:function(e){var n=[],t=[],a=function(e){if("string"===typeof e){var n=e.match(/(\d+)-(\d+)-(\d+)/);if(n&&4===n.length)return new Date(parseInt(n[1]),parseInt(n[2]),parseInt(n[3]))}}(this.data.einsatzTag),i=v(a,this.data.einsatzBeginn),r=v(a,this.data.einsatzEnde),s=this.data.ueblicherArbeitsbeginn,c=v(a,this.data.arbeitBeginn),u=v(a,this.data.arbeitEnde),l=0;if(c&&u&&(l=z(u-c)),a||n.push({type:"danger",text:"Einsatz-Tag erforderlich."}),a&&!i&&n.push({type:"danger",text:"Einsatz-Beginn erforderlich."}),a&&!r&&n.push({type:"danger",text:"Einsatz-Ende erforderlich."}),s||t.push({type:"danger",text:"\xdcblicher-Arbeitsbeginn erforderlich."}),i&&r&&s){var o=k.berechneBuchung(i,r,s,N(l)),b=o.sperrzeitEnde,h=o.buchungBeginn,d=o.buchungEnde,j=o.buchungDauer,g=o.einsatzDauer,O=o.gesamtDauerNetto,m=o.gesamtDauerBrutto;e.calculator=Object(w.a)(Object(w.a)({},this.data),{},{sperrzeitEnde:b,buchungBeginn:h,buchungEnde:d,buchungDauer:j,einsatzDauer:g,einsatzMessages:n,gesamtDauerBrutto:m,gesamtDauerNetto:O,arbeitDauer:l,ueblicherArbeitsbeginnMessages:t})}else e.calculator=Object(w.a)(Object(w.a)({},this.data),{},{sperrzeitEnde:"",buchungBeginn:"",buchungEnde:"",buchungDauer:"",einsatzDauer:"",gesamtDauerBrutto:"",gesamtDauerNetto:"",arbeitDauer:"",einsatzMessages:n,ueblicherArbeitsbeginnMessages:t})}}]),e}()),F=function(e){Object(o.a)(t,e);var n=Object(b.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.items,n=void 0===e?[]:e;return 0===n.length?null:Object(a.jsx)("div",{className:"row",children:n.map((function(e,n){return Object(a.jsx)(t.Item,{type:e.type,text:e.text},n)}))})}}]),t}(r.a.Component),I=function(e){Object(o.a)(t,e);var n=Object(b.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props,n=e.type,t=void 0===n?"info":n,i=e.text,r=void 0===i?"":i;return Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("div",{className:"text-"+t,children:r})})}}]),t}(r.a.Component);F.Item=I;t(26),t(27);var S=function(){return Object(a.jsx)("div",{className:"GithubIcon",children:Object(a.jsx)("svg",{viewBox:"0 0 284 277",children:Object(a.jsx)("g",{children:Object(a.jsx)("path",{d:"M141.888675,0.0234927555 C63.5359948,0.0234927555 0,63.5477395 0,141.912168 C0,204.6023 40.6554239,257.788232 97.0321356,276.549924 C104.12328,277.86336 106.726656,273.471926 106.726656,269.724287 C106.726656,266.340838 106.595077,255.16371 106.533987,243.307542 C67.0604204,251.890693 58.7310279,226.56652 58.7310279,226.56652 C52.2766299,210.166193 42.9768456,205.805304 42.9768456,205.805304 C30.1032937,196.998939 43.9472374,197.17986 43.9472374,197.17986 C58.1953153,198.180797 65.6976425,211.801527 65.6976425,211.801527 C78.35268,233.493192 98.8906827,227.222064 106.987463,223.596605 C108.260955,214.426049 111.938106,208.166669 115.995895,204.623447 C84.4804813,201.035582 51.3508808,188.869264 51.3508808,134.501475 C51.3508808,119.01045 56.8936274,106.353063 65.9701981,96.4165325 C64.4969882,92.842765 59.6403297,78.411417 67.3447241,58.8673023 C67.3447241,58.8673023 79.2596322,55.0538738 106.374213,73.4114319 C117.692318,70.2676443 129.83044,68.6910512 141.888675,68.63701 C153.94691,68.6910512 166.09443,70.2676443 177.433682,73.4114319 C204.515368,55.0538738 216.413829,58.8673023 216.413829,58.8673023 C224.13702,78.411417 219.278012,92.842765 217.804802,96.4165325 C226.902519,106.353063 232.407672,119.01045 232.407672,134.501475 C232.407672,188.998493 199.214632,200.997988 167.619331,204.510665 C172.708602,208.913848 177.243363,217.54869 177.243363,230.786433 C177.243363,249.771339 177.078889,265.050898 177.078889,269.724287 C177.078889,273.500121 179.632923,277.92445 186.825101,276.531127 C243.171268,257.748288 283.775,204.581154 283.775,141.912168 C283.775,63.5477395 220.248404,0.0234927555 141.888675,0.0234927555"})})})})},Y=function(e){Object(o.a)(t,e);var n=Object(b.a)(t);function t(e){var a;return Object(u.a)(this,t),(a=n.call(this,e)).onChange=function(e){var n=e.data.calculator,t=n.einsatzTag,i=n.einsatzBeginn,r=n.einsatzEnde,s=n.einsatzDauer,c=n.einsatzMessages,u=n.ueblicherArbeitsbeginn,l=n.ueblicherArbeitsbeginnMessages,o=n.arbeitBeginn,b=n.arbeitEnde,h=n.arbeitDauer,d=n.sperrzeitEnde,j=n.buchungBeginn,g=n.buchungEnde,O=n.buchungDauer,v=n.gesamtDauerBrutto,m=n.gesamtDauerNetto;a.setState({einsatzTag:t,einsatzBeginn:i,einsatzEnde:r,einsatzDauer:s,ueblicherArbeitsbeginn:u,ueblicherArbeitsbeginnMessages:l,einsatzMessages:c,arbeitBeginn:o,arbeitEnde:b,arbeitDauer:h,sperrzeitEnde:d,buchungBeginn:j,buchungEnde:g,buchungDauer:O,gesamtDauerBrutto:v,gesamtDauerNetto:m})},a.state={},a}return Object(l.a)(t,[{key:"componentDidMount",value:function(){B.a.addHandler(T),B.a.subscribe(this.onChange)}},{key:"componentWillUnmount",value:function(){B.a.unsubscribe(this.onChange),B.a.removeHandler(T)}},{key:"render",value:function(){var e=this.state,n=e.einsatzTag,t=e.einsatzBeginn,i=e.einsatzEnde,r=e.einsatzDauer,s=e.einsatzMessages,c=e.sperrzeitEnde,u=e.arbeitBeginn,l=e.arbeitEnde,o=e.arbeitDauer,b=e.ueblicherArbeitsbeginn,j=e.ueblicherArbeitsbeginnMessages,g=e.buchungBeginn,O=e.buchungEnde,v=e.buchungDauer;return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(h.a,{tag:"section",children:[Object(a.jsx)("h1",{children:"Bereitschaftsrechner"}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col col-6 offset-6",children:Object(a.jsxs)("div",{className:"float-right",children:[Object(a.jsxs)("small",{children:["(Version: ","fe61197",")"]}),Object(a.jsxs)("a",{href:"https://cbuschka.github.io/bereitschaftsrechner/",target:"_blank",rel:"noopener noreferrer",children:[" ",Object(a.jsx)(S,{})]})]})})}),Object(a.jsxs)(d.a,{children:[Object(a.jsx)("h4",{children:"Einsatz"}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col col-4",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"einsatzTag",children:"Tag:"}),Object(a.jsx)(C,{id:"einsatzTag",value:n,onChange:this.onEinsatzTagChanged})]})})}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"einsatzBeginn",children:"Beginn:"}),Object(a.jsx)(E,{id:"einsatzBeginn",value:t,onChange:this.onEinsatzBeginnChanged})]})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"einsatzEnde",children:"Ende:"}),Object(a.jsx)(E,{id:"einsatzEnde",value:i,onChange:this.onEinsatzEndeChanged})]})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"einsatzDauer",children:"Dauer:"}),Object(a.jsx)(y,{id:"einsatzDauer",value:r})]})})]}),Object(a.jsx)(F,{items:s}),Object(a.jsx)("hr",{}),Object(a.jsx)("h4",{children:"Arbeit (nach dem Einsatz)"}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-4",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"sperrzeitEnde",children:"Sperrzeit-Ende:"}),Object(a.jsx)(A,{id:"sperrzeitEnde",value:c})]})})}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"form-group ",children:[Object(a.jsx)("label",{htmlFor:"arbeitBeginn",children:"Beginn:"}),Object(a.jsx)(E,{id:"arbeitBeginn",value:u,onChange:this.onArbeitBeginnChanged})]})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"arbeitEnde",children:"Ende:"}),Object(a.jsx)(E,{id:"arbeitEnde",value:l,onChange:this.onArbeitEndeChanged})]})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"arbeitDauer",children:"Dauer:"}),Object(a.jsx)(y,{id:"arbeitDauer",value:o})]})})]}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-4",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"ueblicherArbeitsbeginn",children:"\xdcblicher Arbeitsbeginn:"}),Object(a.jsx)(E,{id:"ueblicherArbeitsbeginn",value:b,onChange:this.onUeblicherArbeitsbeginnChanged})]})})}),Object(a.jsx)(F,{items:j}),Object(a.jsx)("hr",{}),Object(a.jsx)("h4",{children:"Verbuchung"}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"buchungBeginn",children:"Beginn:"}),Object(a.jsx)(A,{readOnly:!0,id:"buchungBeginn",value:g})]})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"buchungEnde",children:"Ende:"}),Object(a.jsx)(A,{value:O,id:"buchungEnde"})]})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"buchungDauer",children:"Dauer:"}),Object(a.jsx)(y,{value:v,id:"buchungDauer"})]})})]}),Object(a.jsx)("p",{children:Object(a.jsx)("small",{children:"(Alle Angaben ohne Gew\xe4hr!)"})})]})]})})}},{key:"onEinsatzTagChanged",value:function(e){M("einsatzTag",e)}},{key:"onEinsatzBeginnChanged",value:function(e){M("einsatzBeginn",e)}},{key:"onEinsatzEndeChanged",value:function(e){M("einsatzEnde",e)}},{key:"onUeblicherArbeitsbeginnChanged",value:function(e){M("ueblicherArbeitsbeginn",e)}},{key:"onArbeitBeginnChanged",value:function(e){M("arbeitBeginn",e)}},{key:"onArbeitEndeChanged",value:function(e){M("arbeitEnde",e)}}]),t}(r.a.Component);c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(Y,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.fa36bb24.chunk.js.map