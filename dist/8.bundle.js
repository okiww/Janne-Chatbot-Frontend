(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{65:function(e,t,n){"use strict";function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var i=function(){function AnimateHelper(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:610;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AnimateHelper),this.duration=e}var e,t,n;return e=AnimateHelper,(t=[{key:"render",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.duration;this.animate({duration:e,timing:function(e){return Math.pow(e,2)},draw:function(e){t(e)}})}},{key:"animate",value:function(e){var t=e.timing,i=void 0===t?function(){}:t,n=e.draw,o=void 0===n?function(){}:n,a=e.duration,r=void 0===a?this.duration:a,s=performance.now();requestAnimationFrame(function animate(e){var t=(e-s)/r,n=i(t=1<t?1:t);o(n),t<1&&requestAnimationFrame(animate)})}}])&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),AnimateHelper}();t.a=i},68:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),s=n(65);n(68);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var a=function(e){function MessageTemplate(e){var t,n,i,o,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MessageTemplate),n=this,t=!(i=_getPrototypeOf(MessageTemplate).call(this,e))||"object"!==_typeof(i)&&"function"!=typeof i?_assertThisInitialized(n):i,o=_assertThisInitialized(_assertThisInitialized(t)),r={style:{opacity:0},styleImage:{opacity:0}},(a="state")in o?Object.defineProperty(o,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[a]=r,t.helper=new s.a,t}var t,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(MessageTemplate,o.a.PureComponent),t=MessageTemplate,(n=[{key:"componentDidMount",value:function(){this.setAnimationComponent(),this.setAnimationImage()}},{key:"setAnimation",value:function(e){var t=this,n=e.callback,i=void 0===n?function(){}:n,o=e.duration,a=void 0===o?610:o,r=e.interval;setTimeout(function(){t.helper.render(i,a)},void 0===r?610:r)}},{key:"setAnimationComponent",value:function(){var t=this;this.setAnimation({callback:function(e){return t.animationComponent(e)},duration:311,interval:500})}},{key:"setAnimationImage",value:function(){var t=this;this.setAnimation({callback:function(e){return t.animationImage(e)},duration:340,interval:1e3})}},{key:"animationComponent",value:function(e){var t={opacity:e};this.setState({style:t})}},{key:"animationImage",value:function(e){var t={opacity:e,transform:"translateY(".concat(5-5*e,"%)")};this.setState({styleImage:t})}},{key:"render",value:function(){var e=this.state,t=e.style,n=e.styleImage;return o.a.createElement("div",{className:"ui-message-template",style:t},o.a.createElement("div",{className:"ui-message-template__content"},o.a.createElement("h1",null,"NICO"),o.a.createElement("h3",null,"Your Personal Agent"),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),o.a.createElement("a",{href:"https://99.co/id"},"GET STARTED FREE")),o.a.createElement("img",{style:n,src:"./static/images/people.png",alt:""}))}}])&&_defineProperties(t.prototype,n),i&&_defineProperties(t,i),MessageTemplate}();t.default=a}}]);