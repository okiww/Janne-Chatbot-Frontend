(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{66:function(t,e,n){"use strict";function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var a=function(){function AnimateHelper(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:610;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,AnimateHelper),this.duration=t}var t,e,n;return t=AnimateHelper,(e=[{key:"render",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.duration;this.animate({duration:t,timing:function(t){return Math.pow(t,2)},draw:function(t){e(t)}})}},{key:"animate",value:function(t){var e=t.timing,a=void 0===e?function(){}:e,n=t.draw,o=void 0===n?function(){}:n,i=t.duration,r=void 0===i?this.duration:i,s=performance.now();requestAnimationFrame(function animate(t){var e=(t-s)/r,n=a(e=1<e?1:e);o(n),e<1&&requestAnimationFrame(animate)})}}])&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),AnimateHelper}();e.a=a},68:function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r});var a=n(14),o=function(){return{type:a.c}},i=function(){return{type:a.a}},r=function(t){return{type:a.b,payload:{option:t}}}},69:function(t,e,n){},85:function(t,e,n){"use strict";n.r(e);var u=n(0),c=n.n(u),a=n(11),o=n(1),i=n.n(o),r=n(66),s=n(15);var l=n(10),f=n(68);n(69);function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=Object(u.lazy)(function(){return n.e(7).then(n.bind(null,87))}),h=Object(u.lazy)(function(){return n.e(3).then(n.bind(null,86))}),b=Object(u.lazy)(function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,84))}),d=Object(u.lazy)(function(){return n.e(4).then(n.bind(null,88))}),y=function(t){function ChatTemplate(t){var e,n,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,ChatTemplate),n=this,_defineProperty(_assertThisInitialized(_assertThisInitialized(e=!(a=_getPrototypeOf(ChatTemplate).call(this,t))||"object"!==_typeof(a)&&"function"!=typeof a?_assertThisInitialized(n):a)),"state",{enableClick:!1,showDialog:!1,style:{opacity:0,display:"none"},styleButton:{opacity:0,display:"none"}}),e.setShowNavbar=e.setShowNavbar.bind(_assertThisInitialized(_assertThisInitialized(e))),e.showChatDialog=e.showChatDialog.bind(_assertThisInitialized(_assertThisInitialized(e))),e.onMessage=e.onMessage.bind(_assertThisInitialized(_assertThisInitialized(e))),e.helper=new r.a,e}var e,n,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}(ChatTemplate,c.a.PureComponent),e=ChatTemplate,(n=[{key:"componentDidMount",value:function(){var t=this;this.setAnimationButton(),setTimeout(function(){t.showChatDialog(),t.setState({enableClick:!0})},3e3)}},{key:"onMessage",value:function(t){var e=this.props,n=e.sendChatMessage,a=e.hideOptionBar;n(t),a(),this.onGetResponse(t)}},{key:"onGetResponse",value:function(t){var e=this.props,n=e.setMessage,a=e.hideOptionBar,o=e.setDataOptionBar,i=e.showOptionBar;return a(),fetch("https://nicochatbot.herokuapp.com/post",{method:"post",body:JSON.stringify({message:t,type:"message"})}).then(function(t){return t.json()}).then(function(t){return t.data.map(function(t){var e=t.type;return"options"===e?(o(t.data.map(function(t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(t){_defineProperty(e,t,n[t])})}return e}({},t,{text:t.message})})),setTimeout(function(){i()},1e3),!1):"message"===e?{type:"bot",message:t.message}:"listing"===e?"string"==typeof t.data?{type:"bot",message:t.data}:{type:"suggestion",data:t.data.map(function(t){return{id:t.id,title:t.title,location:t.location.cityAndProvince,price:t.attributes.price,mortgage:t.mortgage,image:t.pictures,link:t.link,attribute:{bedroom:t.attributes.bedrooms?t.attributes.bedrooms:null,bathroom:t.attributes.bathrooms?t.attributes.bathrooms:null,land:t.attributes.landSize?t.attributes.landSize:null,building:t.attributes.buildingSize?t.attributes.buildingSize:null}}})}:{type:"bot",message:t.message}}).filter(function(t){return t})}).then(function(t){return n(t)})}},{key:"setShowNavbar",value:function(){(0,this.props.showNavbar)()}},{key:"setAnimation",value:function(t){var e=this,n=t.callback,a=void 0===n?function(){}:n,o=t.duration,i=void 0===o?610:o,r=t.interval;setTimeout(function(){e.helper.render(a,i)},void 0===r?610:r)}},{key:"setAnimationComponent",value:function(e){var n=this;this.setAnimation({callback:function(t){return n.animationComponent(e,t)},duration:e?611:166,interval:0})}},{key:"setAnimationButton",value:function(){var e=this;this.setAnimation({callback:function(t){return e.animationButton(t)},duration:166,interval:1500})}},{key:"showChatDialog",value:function(){var t=this,e=this.state.showDialog;this.setState({showDialog:!e},function(){t.setAnimationComponent(t.state.showDialog)})}},{key:"animationComponent",value:function(t,e){var n={opacity:t?e:1-e},a=5*e;n.transform=t?(n.display=.05<e?"block":"none","translateY(".concat(5-a,"%)")):(n.display=.95<e?"none":"block","translateY(".concat(a,"%)")),this.setState({style:n})}},{key:"animationButton",value:function(t){var e={opacity:t};this.setState({styleButton:e})}},{key:"render",value:function(){var t=this.props,e=t.show,n=t.suggestion,a=t.chat,o=this.state,i=o.style,r=o.styleButton,s=o.enableClick;return c.a.createElement("div",{className:"ui-chat"},c.a.createElement("div",{className:"ui-chat-template",style:i},c.a.createElement(u.Suspense,{fallback:null},c.a.createElement(h,{show:e}),c.a.createElement(d,{show:!e,onShowWelcome:this.setShowNavbar}),c.a.createElement(b,{chat:a,show:e,suggestion:n}),c.a.createElement(p,{disabled:!e,onMessage:this.onMessage}))),c.a.createElement("button",{style:r,className:"ui-chat-template__button",type:"submit",onClick:s?this.showChatDialog:null},c.a.createElement("img",{src:"./static/images/apps.png",alt:""})))}}])&&_defineProperties(e.prototype,n),a&&_defineProperties(e,a),ChatTemplate}();y.propTypes={chat:i.a.arrayOf(i.a.shape({})),sendChatMessage:i.a.func,show:i.a.bool,showNavbar:i.a.func,suggestion:i.a.shape({}),setMessage:i.a.func,setDataOptionBar:i.a.func,showOptionBar:i.a.func,hideOptionBar:i.a.func},y.defaultProps={chat:[],sendChatMessage:function(){},show:!1,showNavbar:function(){},suggestion:{show_options:!1,list:[]},setMessage:function(){},setDataOptionBar:function(){},showOptionBar:function(){},hideOptionBar:function(){}};e.default=Object(a.b)(function(t){return{show:t.StatusReducers.show_navbar,suggestion:t.OptionReducers,chat:t.ChatReducers.chat}},function(e){return{showNavbar:function(){return e({type:s.b})},sendChatMessage:function(t){return e(Object(l.c)(t))},setMessage:function(t){return e(Object(l.b)(t))},showOptionBar:function(){return e(Object(f.c)())},hideOptionBar:function(){return e(Object(f.a)())},setDataOptionBar:function(t){return e(Object(f.b)(t))}}})(y)}}]);