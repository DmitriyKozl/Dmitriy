(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+Uqk":function(e,t,a){"use strict";a("BSZ+")},"3tPr":function(e,t,a){"use strict";a("W6HL")},"BSZ+":function(e,t,a){},W6HL:function(e,t,a){},We5X:function(e,t,a){},XYve:function(e,t,a){"use strict";a.r(t);var s={name:"ContactMap",data:function(){return{}}},i=(a("r0Eh"),a("KHd+")),n=Object(i.a)(s,(function(){var e=this.$createElement;return(this._self._c||e)("section",{staticClass:"map_content"})}),[],!1,null,"08467bda",null).exports,l={name:"ContactForm",data:function(){return{mailFormIsActive:!1,name:"",surname:"",child:"",email:{value:"",valid:!0},phone:{value:"",valid:!0},message:{text:"",maxlength:255},submitted:!1,selected:"Question",selectedText:"",options:[{text:"Een doodnormale vraag",value:"Question"},{text:"Wachtlijst",value:"Wachtlijst"},{text:"Mailing lijst",value:"Mailing"}]}},methods:{activate:function(){this.mailFormIsActive=!0},onchange:function(e){for(var t=0;t<this.options.length;t++)if(this.options[t].value===e)return this.options[t].input}}},o=(a("+Uqk"),{name:"Contact",components:{ContactForm:Object(i.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"form"},[a("h1",[e._v("Contacteer ons")]),a("div",{staticClass:"form-content"},[a("div",{staticClass:"form-content-name"},[a("label",{staticClass:"label",attrs:{for:"name"}},[e._v("Naam")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name",id:"name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("div",{staticClass:"form-content-surname"},[a("label",{staticClass:"label",attrs:{for:"surname"}},[e._v("Voornaam")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.surname,expression:"surname"}],attrs:{type:"text",name:"name",id:"surname",required:""},domProps:{value:e.surname},on:{input:function(t){t.target.composing||(e.surname=t.target.value)}}})])]),a("div",{staticClass:"form-email"},[a("label",{staticClass:"label",attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email.value,expression:"email.value"}],attrs:{type:"email",name:"email",id:"email",required:""},domProps:{value:e.email.value},on:{input:function(t){t.target.composing||e.$set(e.email,"value",t.target.value)}}})]),a("div",{staticClass:"selectContainer"},[a("label",{staticClass:"selectContainer-select",attrs:{for:"subject"}},[e._v("Onderwerp")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"selectContainer-control",attrs:{id:"subject",name:"subject",required:""},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selected=t.target.multiple?a:a[0]},function(t){return e.onchange(e.selected)}]}},e._l(e.options,(function(t){return a("option",{key:t.value,domProps:{value:t.value}},[e._v("\n        "+e._s(t.text)+"\n      ")])})),0)]),"Question"===e.selected?a("div",{staticClass:"form-mailing"},[a("label",{staticClass:"label",attrs:{for:"question-textarea"}},[e._v("Bericht")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message.text,expression:"message.text"}],staticClass:"message",attrs:{name:"textarea",id:"question-textarea",required:""},domProps:{value:e.message.text},on:{input:function(t){t.target.composing||e.$set(e.message,"text",t.target.value)}}})]):e._e(),"Wachtlijst"===e.selected?a("div",{staticClass:"form-text"},[a("div",{staticClass:"form-phone"},[a("label",{staticClass:"label",attrs:{for:"phone"}},[e._v("Telefoon nummer")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone.value,expression:"phone.value"}],attrs:{name:"phone",id:"phone",required:""},domProps:{value:e.phone.value},on:{input:function(t){t.target.composing||e.$set(e.phone,"value",t.target.value)}}})]),a("div",{staticClass:"form-child"},[a("label",{staticClass:"label",attrs:{for:"child"}},[e._v("Naam en voornaam kind")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.child,expression:"child"}],attrs:{type:"text",name:"childName",id:"child",required:""},domProps:{value:e.child},on:{input:function(t){t.target.composing||(e.child=t.target.value)}}})])]):e._e(),"Mailing"===e.selected?a("div",{staticClass:"form-text"},[a("label",{staticClass:"label",attrs:{for:"mailing-textarea"}},[e._v("Mailing")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message.text,expression:"message.text"}],staticClass:"message",attrs:{name:"textarea",id:"mailing-textarea",required:""},domProps:{value:e.message.text},on:{input:function(t){t.target.composing||e.$set(e.message,"text",t.target.value)}}})]):e._e(),e._m(0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"button"},[t("button",{attrs:{type:"submit"}},[this._v("submit")])])}],!1,null,"50d5a3ee",null).exports,ContactMap:n},methods:{activate:function(){this.mailFormIsActive=!0}}}),r=(a("3tPr"),Object(i.a)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Layout",[s("div",{staticClass:"contact"},[s("div",{staticClass:"contact-img"},[s("img",{attrs:{src:a("hYak"),alt:""}})]),s("ContactForm")],1),s("footer",[s("div",{staticClass:"custom-shape-divider-top-1614761612"},[s("svg",{attrs:{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"}},[s("path",{staticClass:"shape-fill",attrs:{d:"M1200 0L0 0 598.97 114.72 1200 0z"}})])]),s("div",{staticClass:"footerContent"},[s("div",{staticClass:"footerText"},[s("h2",[e._v("Of kom eens langs!")])]),s("ContactMap"),s("div",{staticClass:"contactInfo"},[s("div",{staticClass:"left"},[s("h4",[e._v("vzw Woudloper")]),s("ul",[s("li",[e._v("0472/204899")]),s("li",[e._v("Houte 27, 9860 Balegem")]),s("li",[e._v("info@woudloper.be")])])]),s("div",{staticClass:"right"},[s("h4",[e._v("Scoutsgroep Woudloper")]),s("ul",[s("li",[e._v("0479/795956")]),s("li",[e._v("Gijzelstraat 12, 9031 Drongen")]),s("li",[e._v("eenheidsleiding@woudloper.be")])])])])],1)])])}),[],!1,null,"f326f084",null));t.default=r.exports},hYak:function(e,t,a){e.exports=a.p+"assets/img/tent.f801aa7d.jpg"},r0Eh:function(e,t,a){"use strict";a("We5X")}}]);