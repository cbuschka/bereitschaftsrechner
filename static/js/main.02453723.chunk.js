(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=(n(17),n(2)),i=n.n(r),s=n(14),c=n.n(s),u=n(3),l=n(4),o=n(6),d=n(5),b=n(25),h=n(26);function j(e){return"number"!==typeof e||isNaN(e)?e:e>=0&&e<10?"0"+e:""+e}function g(e){return"object"===typeof e&&e.toISOString&&"number"===typeof e.getTime()&&!isNaN(e.getTime())}function O(e,t){if(g(e)&&t&&"string"===typeof t){var n=t.match(/(\d+):(\d+)/);if(n&&3===n.length)return new Date(e.getFullYear(),e.getMonth(),e.getDate(),parseInt(n[1]),parseInt(n[2]))}}function m(e){return g(e)}var v=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onChange=function(t){var n=e.props.onChange;n&&n(t.target.value,t)},e}return Object(l.a)(n,[{key:"render",value:function(){var e,t=this.props.id,n=this.props.value,r=void 0===n?"":n;return m(r)&&(r=j((e=r).getFullYear())+"-"+j(e.getMonth())+"-"+j(e.getDate())),Object(a.jsx)("input",{type:"date",className:"form-control",onChange:this.onChange,id:t,value:r})}}]),n}(i.a.Component);function p(e){if("number"===typeof e&&!isNaN(e)){var t=j(Math.floor(e/6e4%60)),n=j(Math.floor(e/36e5%24));return"".concat(n,":").concat(t)}}function x(e){if("string"===typeof e){var t=/(\d+):(\d+)/.exec(e);if(t&&3===t.length)return 1e3*parseInt(t[1])*60*60+1e3*parseInt(t[2])*60}}function f(e){if(g(e)){var t=new Date(e);return t.setMinutes(e.getMinutes()-e.getTimezoneOffset()),t.toJSON().slice(11,16)}}var N=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onChange=function(t){var n=e.props.onChange;n&&n(t.target.value,t)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.id,t=this.props.value,n=void 0===t?"":t;return m(n)&&(n=function(e){if(g(e)){var t=new Date(e);return t.setMinutes(e.getMinutes()-e.getTimezoneOffset()),t.toJSON().slice(11,16)}}(n)),Object(a.jsx)("input",{type:"time",className:"form-control",onChange:this.onChange,id:e,value:n})}}]),n}(i.a.Component),D=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.value,r=void 0===n?"":n;return Object(a.jsx)("output",{readOnly:!0,className:"form-control",id:t,children:r})}}]),n}(i.a.Component),z=n(7),E=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.value,r=void 0===n?"":n;return Object(a.jsx)("output",{readOnly:!0,className:"form-control",id:t,children:r})}}]),n}(i.a.Component);function B(e,t){return z.a.dispatch({type:"fieldChanged",data:{fieldName:e,value:t}})}var y=n(9);var C=new(function(){function e(){Object(u.a)(this,e)}return Object(l.a)(e,[{key:"berechneBuchung",value:function(e,t,n,a){void 0===a&&(a=0);var r,i,s=t-e,c=O(e,n),u=function(e){return new Date(e.getTime()+x("11:00"))}(t),l=(r=c)>(i=t)?r:i,o=new Date(l.getTime()+s),d=0;a>0&&(d=3e6);var b=new Date(u.getTime()+a+d),h=s+a,j=h+d,g=b-o,m={sperrzeitEnde:f(u),buchungBeginn:f(o),buchungEnde:f(b),buchungDauer:p(g),einsatzDauer:p(s),gesamtDauerNetto:p(h),gesamtDauerBrutto:p(j)};return console.log("%o",m),m}}]),e}()),A=new(function(){function e(){Object(u.a)(this,e),this.data={einsatzTag:"2020-11-01",einsatzBeginn:"01:45",einsatzEnde:"06:45",ueblicherArbeitsbeginn:"06:30",arbeitBeginn:"15:00",arbeitEnd:"17:00"}}return Object(l.a)(e,[{key:"onFieldChanged",value:function(e){var t=e.data,n=t.fieldName,a=t.value;this.data[n]=a}},{key:"appendDataTo",value:function(e){var t=function(e){if("string"===typeof e){var t=e.match(/(\d+)-(\d+)-(\d+)/);if(t&&4===t.length)return new Date(parseInt(t[1]),parseInt(t[2]),parseInt(t[3]))}}(this.data.einsatzTag),n=O(t,this.data.einsatzBeginn),a=O(t,this.data.einsatzEnde),r=this.data.ueblicherArbeitsbeginn,i=O(t,this.data.arbeitBeginn),s=O(t,this.data.arbeitEnde),c=0;if(i&&s&&(c=p(s-i)),n&&a&&r){var u=C.berechneBuchung(n,a,r,x(c)),l=u.sperrzeitEnde,o=u.buchungBeginn,d=u.buchungEnde,b=u.buchungDauer,h=u.einsatzDauer,j=u.gesamtDauerNetto,g=u.gesamtDauerBrutto;e.calculator=Object(y.a)(Object(y.a)({},this.data),{},{sperrzeitEnde:l,buchungBeginn:o,buchungEnde:d,buchungDauer:b,einsatzDauer:h,gesamtDauerBrutto:g,gesamtDauerNetto:j,arbeitDauer:c})}else e.calculator=Object(y.a)(Object(y.a)({},this.data),{},{sperrzeitEnde:"",buchungBeginn:"",buchungEnde:"",buchungDauer:"",einsatzDauer:"",gesamtDauerBrutto:"",gesamtDauerNetto:"",arbeitDauer:""})}}]),e}()),F=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onChange=function(e){var t=e.data.calculator,n=t.einsatzTag,r=t.einsatzBeginn,i=t.einsatzEnde,s=t.einsatzDauer,c=t.ueblicherArbeitsbeginn,u=t.arbeitBeginn,l=t.arbeitEnde,o=t.arbeitDauer,d=t.sperrzeitEnde,b=t.buchungBeginn,h=t.buchungEnde,j=t.buchungDauer,g=t.gesamtDauerBrutto,O=t.gesamtDauerNetto;a.setState({einsatzTag:n,einsatzBeginn:r,einsatzEnde:i,einsatzDauer:s,ueblicherArbeitsbeginn:c,arbeitBeginn:u,arbeitEnde:l,arbeitDauer:o,sperrzeitEnde:d,buchungBeginn:b,buchungEnde:h,buchungDauer:j,gesamtDauerBrutto:g,gesamtDauerNetto:O})},a.state={},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){z.a.addHandler(A),z.a.subscribe(this.onChange)}},{key:"componentWillUnmount",value:function(){z.a.unsubscribe(this.onChange),z.a.removeHandler(A)}},{key:"render",value:function(){var e=this.state,t=e.einsatzTag,n=e.einsatzBeginn,r=e.einsatzEnde,i=e.einsatzDauer,s=e.sperrzeitEnde,c=e.arbeitBeginn,u=e.arbeitEnde,l=e.arbeitDauer,o=e.ueblicherArbeitsbeginn,d=e.buchungBeginn,j=e.buchungEnde,g=e.buchungDauer,O=e.gesamtDauerNetto,m=e.gesamtDauerBrutto;return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(b.a,{tag:"section",children:[Object(a.jsx)("h1",{children:"Bereitschaftsrechner"}),Object(a.jsx)("p",{children:Object(a.jsx)("small",{children:"(Alle Angaben ohne Gew\xe4hr!)"})}),Object(a.jsxs)(h.a,{children:[Object(a.jsx)("h4",{children:"Einsatz"}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"form-group ",children:[Object(a.jsx)("label",{htmlFor:"einsatzTag",children:"Tag:"}),Object(a.jsx)(v,{id:"einsatzTag",value:t,onChange:this.onEinsatzTagChanged})]})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"form-group ",children:[Object(a.jsx)("label",{htmlFor:"einsatzBeginn",children:"Beginn:"}),Object(a.jsx)(N,{id:"einsatzBeginn",value:n,onChange:this.onEinsatzBeginnChanged})]})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"einsatzEnde",children:"Ende:"}),Object(a.jsx)(N,{id:"einsatzEnde",value:r,onChange:this.onEinsatzEndeChanged})]})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"einsatzDauer",children:"Dauer:"}),Object(a.jsx)(D,{id:"einsatzDauer",value:i})]})})]}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("output",{readOnly:!0,className:"text-danger",type:"text",id:"einsatzTagFehler"}),Object(a.jsx)("output",{readOnly:!0,className:"text-danger",type:"text",id:"einsatzBeginnFehler"}),Object(a.jsx)("output",{readOnly:!0,className:"text-danger",type:"text",id:"einsatzEndeFehler"}),Object(a.jsx)("output",{readOnly:!0,className:"text-danger",type:"text",id:"einsatzFehler"})]})}),Object(a.jsx)("hr",{}),Object(a.jsx)("h4",{children:"Arbeit (nach dem Einsatz)"}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-3",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"sperrzeitEnde",children:"Sperrzeit-Ende:"}),Object(a.jsx)(E,{id:"sperrzeitEnde",value:s})]})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"form-group ",children:[Object(a.jsx)("label",{htmlFor:"arbeitBeginn",children:"Beginn:"}),Object(a.jsx)(N,{id:"arbeitBeginn",value:c,onChange:this.onArbeitBeginnChanged})]})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"arbeitEnde",children:"Ende:"}),Object(a.jsx)(N,{id:"arbeitEnde",value:u,onChange:this.onArbeitEndeChanged})]})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"arbeitDauer",children:"Dauer:"}),Object(a.jsx)(D,{id:"arbeitDauer",value:l})]})})]}),Object(a.jsx)("hr",{}),Object(a.jsx)("h4",{children:"Verbuchung"}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-3",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"ueblicherArbeitsbeginn",children:"\xdcblicher Arbeitsbeginn:"}),Object(a.jsx)(N,{id:"ueblicherArbeitsbeginn",value:o,onChange:this.onUeblicherArbeitsbeginnChanged})]})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("output",{readOnly:!0,className:"text-danger",type:"text",id:"ueblicherArbeitsbeginnFehler"})})}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"buchungBeginn",children:"Buchung-Beginn:"}),Object(a.jsx)(E,{readOnly:!0,id:"buchungBeginn",value:d})]})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"buchungEnde",children:"Buchung-Ende:"}),Object(a.jsx)(E,{value:j,id:"buchungEnde"})]})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"buchungDauer",children:"Buchung-Dauer:"}),Object(a.jsx)(D,{value:g,id:"buchungDauer"})]})})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"gesamtDauerNetto",children:"Gesamt-Dauer (ohne Pausen):"}),Object(a.jsx)(D,{value:O,id:"gesamtDauerNetto"})]})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"gesamtDauerBrutto",children:"Gesamt-Dauer (inkl. Pausen):"}),Object(a.jsx)(D,{value:m,id:"gesamtDauerBrutto"})]})})]})]})]})})}},{key:"onEinsatzTagChanged",value:function(e){B("einsatzTag",e)}},{key:"onEinsatzBeginnChanged",value:function(e){B("einsatzBeginn",e)}},{key:"onEinsatzEndeChanged",value:function(e){B("einsatzEnde",e)}},{key:"onUeblicherArbeitsbeginnChanged",value:function(e){B("ueblicherArbeitsbeginn",e)}},{key:"onArbeitBeginnChanged",value:function(e){B("arbeitBeginn",e)}},{key:"onArbeitEndeChanged",value:function(e){B("arbeitEnde",e)}}]),n}(i.a.Component);c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.02453723.chunk.js.map