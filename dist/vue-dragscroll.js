(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueDragScroll"] = factory();
	else
		root["VueDragScroll"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.dragscroll = undefined;\n\nvar _directive = __webpack_require__(1);\n\nvar _directive2 = _interopRequireDefault(_directive);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar VueDragscroll = {\n  install: function install(Vue, options) {\n    var major = Number(Vue.version.split('.')[0]);\n    var minor = Number(Vue.version.split('.')[1]);\n    if (major < 2 && minor < 1) {\n      throw new Error('v-dragscroll supports vue version 2.1 and above. You are using Vue@' + Vue.version + '. Please upgrade to the latest version of Vue.');\n    }\n    // registration\n    Vue.directive('dragscroll', _directive2.default);\n  }\n};\n\nif (typeof window !== 'undefined' && window.Vue) {\n  window.VueDragscroll = VueDragscroll;\n  window.Vue.use(VueDragscroll);\n}\n\nexports.dragscroll = _directive2.default;\nexports.default = VueDragscroll;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbWFpbi5qcz8xYzkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkaXJlY3RpdmUgZnJvbSAnLi9kaXJlY3RpdmUnXG5cbmNvbnN0IFZ1ZURyYWdzY3JvbGwgPSB7XG4gIGluc3RhbGwgKFZ1ZSwgb3B0aW9ucykge1xuICAgIGxldCBtYWpvciA9IE51bWJlcihWdWUudmVyc2lvbi5zcGxpdCgnLicpWzBdKVxuICAgIGxldCBtaW5vciA9IE51bWJlcihWdWUudmVyc2lvbi5zcGxpdCgnLicpWzFdKVxuICAgIGlmIChtYWpvciA8IDIgJiYgbWlub3IgPCAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHYtZHJhZ3Njcm9sbCBzdXBwb3J0cyB2dWUgdmVyc2lvbiAyLjEgYW5kIGFib3ZlLiBZb3UgYXJlIHVzaW5nIFZ1ZUAke1Z1ZS52ZXJzaW9ufS4gUGxlYXNlIHVwZ3JhZGUgdG8gdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIFZ1ZS5gKVxuICAgIH1cbiAgICAvLyByZWdpc3RyYXRpb25cbiAgICBWdWUuZGlyZWN0aXZlKCdkcmFnc2Nyb2xsJywgZGlyZWN0aXZlKVxuICB9XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XG4gIHdpbmRvdy5WdWVEcmFnc2Nyb2xsID0gVnVlRHJhZ3Njcm9sbFxuICB3aW5kb3cuVnVlLnVzZShWdWVEcmFnc2Nyb2xsKVxufVxuXG5leHBvcnQgeyBkaXJlY3RpdmUgYXMgZHJhZ3Njcm9sbCB9XG5leHBvcnQgZGVmYXVsdCBWdWVEcmFnc2Nyb2xsXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL21haW4uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _utils = __webpack_require__(2);\n\nvar _utils2 = _interopRequireDefault(_utils);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar POINTER_START_EVENTS = ['mousedown', 'touchstart'];\nvar POINTER_MOVE_EVENTS = ['mousemove', 'touchmove'];\nvar POINTER_END_EVENTS = ['mouseup', 'touchend'];\n\nvar init = function init(el, binding, vnode) {\n  // Default parameters\n  var target = el; // the element to apply the dragscroll on\n  var active = true; // enable/disable dragscroll\n\n  // config type: boolean\n  // Example: v-dragscroll=\"true\" or v-dragscroll=\"false\"\n  if (typeof binding.value === 'boolean') {\n    active = binding.value;\n  } else if (_typeof(binding.value) === 'object') {\n    // config type: object\n    // Example: v-dragscroll=\"{ active: true , target: \"child\" }\"\n\n    // parameter: target\n    if (typeof binding.value.target === 'string') {\n      target = el.querySelector(binding.value.target);\n      if (!target) {\n        console.error('There is no element with the current target value.');\n      }\n    } else if (typeof binding.value.target !== 'undefined') {\n      console.error('The parameter \"target\" should be be either \\'undefined\\' or \\'string\\'.');\n    }\n\n    // parameter: active\n    if (typeof binding.value.active === 'boolean') {\n      active = binding.value.active;\n    } else if (typeof binding.value.active !== 'undefined') {\n      console.error('The parameter \"active\" value should be either \\'undefined\\', \\'true\\' or \\'false\\'.');\n    }\n  } else if (typeof binding.value !== 'undefined') {\n    // Throw an error if invalid parameters\n    console.error('The passed value should be either \\'undefined\\', \\'true\\' or \\'false\\' or \\'object\\'.');\n  }\n  var reset = function reset() {\n    var lastClientX = void 0,\n        lastClientY = void 0,\n        pushed = void 0;\n    var isDragging = false;\n    var isClick = false; // workaround to handle click event from touch\n\n    target.md = function (e) {\n      e.preventDefault();\n      var isMouseEvent = e instanceof window.MouseEvent;\n      // The coordinates of the mouse pointer compared to the page when the mouse button is clicked on an element\n      var pageX = isMouseEvent ? e.pageX : e.touches[0].pageX;\n      var pageY = isMouseEvent ? e.pageY : e.touches[0].pageY;\n      var clickedElement = document.elementFromPoint(pageX - window.pageXOffset, pageY - window.pageYOffset);\n\n      var hasNoChildDrag = binding.arg === 'nochilddrag';\n      var hasFirstChildDrag = binding.arg === 'firstchilddrag';\n      var isEl = clickedElement === target;\n      var isFirstChild = clickedElement === target.firstChild;\n      var isDataDraggable = hasNoChildDrag ? typeof clickedElement.dataset.dragscroll !== 'undefined' : typeof clickedElement.dataset.noDragscroll === 'undefined';\n\n      if (!isEl && (!isDataDraggable || hasFirstChildDrag && !isFirstChild)) {\n        return;\n      }\n\n      pushed = 1;\n      // The coordinates of the mouse pointer compared to the viewport when the mouse button is clicked on an element\n      lastClientX = isMouseEvent ? e.clientX : e.touches[0].clientX;\n      lastClientY = isMouseEvent ? e.clientY : e.touches[0].clientY;\n      if (e.type === 'touchstart') {\n        isClick = true;\n      }\n    };\n\n    target.mu = function (e) {\n      pushed = 0;\n      if (isDragging) {\n        _utils2.default.emitEvent(vnode, 'dragscrollend');\n      }\n      isDragging = false;\n      if (e.type === 'touchend' && isClick === true) {\n        // this workaround enable click will using touch\n        e.target.click();\n        isClick = false;\n      } else {\n        e.target.focus();\n      }\n    };\n\n    target.mm = function (e) {\n      var isMouseEvent = e instanceof window.MouseEvent;\n      var newScrollX = void 0,\n          newScrollY = void 0;\n      var eventDetail = {};\n      if (pushed) {\n        // pushed\n        // Emit start event\n        if (!isDragging) {\n          _utils2.default.emitEvent(vnode, 'dragscrollstart');\n        }\n        isDragging = true;\n\n        // when we reach the end or the begining of X or Y\n        var isEndX = target.scrollLeft + target.clientWidth >= target.scrollWidth || target.scrollLeft === 0;\n        var isEndY = target.scrollTop + target.clientHeight >= target.scrollHeight || target.scrollTop === 0;\n\n        // get new scroll dimentions\n        newScrollX = -lastClientX + (lastClientX = isMouseEvent ? e.clientX : e.touches[0].clientX);\n        newScrollY = -lastClientY + (lastClientY = isMouseEvent ? e.clientY : e.touches[0].clientY);\n\n        if (binding.modifiers.pass) {\n          // compute and scroll\n          target.scrollLeft -= binding.modifiers.y ? -0 : newScrollX;\n          target.scrollTop -= binding.modifiers.x ? -0 : newScrollY;\n          if (target === document.body) {\n            target.scrollLeft -= binding.modifiers.y ? -0 : newScrollX;\n            target.scrollTop -= binding.modifiers.x ? -0 : newScrollY;\n          }\n\n          // if one side reach the end scroll window\n          if (isEndX || binding.modifiers.y) {\n            window.scrollBy(-newScrollX, 0);\n          }\n          if (isEndY || binding.modifiers.x) {\n            window.scrollBy(0, -newScrollY);\n          }\n        } else {\n          // disable one scroll direction in case x or y is specified\n          if (binding.modifiers.x) newScrollY = -0;\n          if (binding.modifiers.y) newScrollX = -0;\n\n          // compute and scroll\n          target.scrollLeft -= newScrollX;\n          target.scrollTop -= newScrollY;\n          if (target === document.body) {\n            target.scrollLeft -= newScrollX;\n            target.scrollTop -= newScrollY;\n          }\n        }\n\n        // // disable one scroll direction in case x or y is specified\n        // if (binding.modifiers.x) newScrollY = -0\n        // if (binding.modifiers.y) newScrollX = -0\n\n        // // compute and scroll\n        // el.scrollLeft -= newScrollX\n        // el.scrollTop -= newScrollY\n        // if (el === document.body) {\n        //   el.scrollLeft -= newScrollX\n        //   el.scrollTop -= newScrollY\n        // }\n\n        // // pass scroll when max reached\n        // if (binding.modifiers.pass) {\n        //   // if one side reach the end scroll window\n        //   if (isEndX) {\n        //     window.scrollBy(-newScrollX, 0)\n        //   }\n        //   if (isEndY) {\n        //     window.scrollBy(0, -newScrollY)\n        //   }\n        // }\n\n        // Emit events\n        eventDetail.deltaX = -newScrollX;\n        eventDetail.deltaY = -newScrollY;\n        _utils2.default.emitEvent(vnode, 'dragscrollmove', eventDetail);\n      }\n    };\n\n    _utils2.default.addEventListeners(target, POINTER_START_EVENTS, target.md);\n\n    _utils2.default.addEventListeners(window, POINTER_END_EVENTS, target.mu);\n\n    _utils2.default.addEventListeners(window, POINTER_MOVE_EVENTS, target.mm);\n  };\n  // if value is undefined or true we will init\n  if (active) {\n    if (document.readyState === 'complete') {\n      reset();\n    } else {\n      window.addEventListener('load', reset);\n    }\n  } else {\n    // if value is false means we disable\n    // window.removeEventListener('load', reset)\n    _utils2.default.removeEventListeners(target, POINTER_START_EVENTS, target.md);\n    _utils2.default.removeEventListeners(window, POINTER_END_EVENTS, target.mu);\n    _utils2.default.removeEventListeners(window, POINTER_MOVE_EVENTS, target.mm);\n  }\n};\n\nexports.default = {\n  bind: function bind(el, binding, vnode) {\n    init(el, binding, vnode);\n  },\n  update: function update(el, binding, vnode, oldVnode) {\n    // update the component only if the parameters change\n    if (JSON.stringify(binding.value) !== JSON.stringify(binding.oldValue)) {\n      init(el, binding, vnode);\n    }\n  },\n  unbind: function unbind(el, binding, vnode) {\n    var target = el;\n    _utils2.default.removeEventListeners(target, POINTER_START_EVENTS, target.md);\n    _utils2.default.removeEventListeners(window, POINTER_END_EVENTS, target.mu);\n    _utils2.default.removeEventListeners(window, POINTER_MOVE_EVENTS, target.mm);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZGlyZWN0aXZlLmpzP2M0NDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHUgZnJvbSAnLi91dGlscydcblxuY29uc3QgUE9JTlRFUl9TVEFSVF9FVkVOVFMgPSBbJ21vdXNlZG93bicsICd0b3VjaHN0YXJ0J11cbmNvbnN0IFBPSU5URVJfTU9WRV9FVkVOVFMgPSBbJ21vdXNlbW92ZScsICd0b3VjaG1vdmUnXVxuY29uc3QgUE9JTlRFUl9FTkRfRVZFTlRTID0gWydtb3VzZXVwJywgJ3RvdWNoZW5kJ11cblxubGV0IGluaXQgPSBmdW5jdGlvbiAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gIC8vIERlZmF1bHQgcGFyYW1ldGVyc1xuICBsZXQgdGFyZ2V0ID0gZWwgLy8gdGhlIGVsZW1lbnQgdG8gYXBwbHkgdGhlIGRyYWdzY3JvbGwgb25cbiAgbGV0IGFjdGl2ZSA9IHRydWUgLy8gZW5hYmxlL2Rpc2FibGUgZHJhZ3Njcm9sbFxuXG4gIC8vIGNvbmZpZyB0eXBlOiBib29sZWFuXG4gIC8vIEV4YW1wbGU6IHYtZHJhZ3Njcm9sbD1cInRydWVcIiBvciB2LWRyYWdzY3JvbGw9XCJmYWxzZVwiXG4gIGlmICh0eXBlb2YgYmluZGluZy52YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgYWN0aXZlID0gYmluZGluZy52YWx1ZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBiaW5kaW5nLnZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIC8vIGNvbmZpZyB0eXBlOiBvYmplY3RcbiAgICAvLyBFeGFtcGxlOiB2LWRyYWdzY3JvbGw9XCJ7IGFjdGl2ZTogdHJ1ZSAsIHRhcmdldDogXCJjaGlsZFwiIH1cIlxuXG4gICAgLy8gcGFyYW1ldGVyOiB0YXJnZXRcbiAgICBpZiAodHlwZW9mIGJpbmRpbmcudmFsdWUudGFyZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGFyZ2V0ID0gZWwucXVlcnlTZWxlY3RvcihiaW5kaW5nLnZhbHVlLnRhcmdldClcbiAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIGlzIG5vIGVsZW1lbnQgd2l0aCB0aGUgY3VycmVudCB0YXJnZXQgdmFsdWUuJylcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBiaW5kaW5nLnZhbHVlLnRhcmdldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBwYXJhbWV0ZXIgXCJ0YXJnZXRcIiBzaG91bGQgYmUgYmUgZWl0aGVyIFxcJ3VuZGVmaW5lZFxcJyBvciBcXCdzdHJpbmdcXCcuJylcbiAgICB9XG5cbiAgICAvLyBwYXJhbWV0ZXI6IGFjdGl2ZVxuICAgIGlmICh0eXBlb2YgYmluZGluZy52YWx1ZS5hY3RpdmUgPT09ICdib29sZWFuJykge1xuICAgICAgYWN0aXZlID0gYmluZGluZy52YWx1ZS5hY3RpdmVcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBiaW5kaW5nLnZhbHVlLmFjdGl2ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBwYXJhbWV0ZXIgXCJhY3RpdmVcIiB2YWx1ZSBzaG91bGQgYmUgZWl0aGVyIFxcJ3VuZGVmaW5lZFxcJywgXFwndHJ1ZVxcJyBvciBcXCdmYWxzZVxcJy4nKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgYmluZGluZy52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBUaHJvdyBhbiBlcnJvciBpZiBpbnZhbGlkIHBhcmFtZXRlcnNcbiAgICBjb25zb2xlLmVycm9yKCdUaGUgcGFzc2VkIHZhbHVlIHNob3VsZCBiZSBlaXRoZXIgXFwndW5kZWZpbmVkXFwnLCBcXCd0cnVlXFwnIG9yIFxcJ2ZhbHNlXFwnIG9yIFxcJ29iamVjdFxcJy4nKVxuICB9XG4gIHZhciByZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbGFzdENsaWVudFgsIGxhc3RDbGllbnRZLCBwdXNoZWRcbiAgICBsZXQgaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgbGV0IGlzQ2xpY2sgPSBmYWxzZSAvLyB3b3JrYXJvdW5kIHRvIGhhbmRsZSBjbGljayBldmVudCBmcm9tIHRvdWNoXG5cbiAgICB0YXJnZXQubWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBsZXQgaXNNb3VzZUV2ZW50ID0gZSBpbnN0YW5jZW9mIHdpbmRvdy5Nb3VzZUV2ZW50XG4gICAgICAvLyBUaGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1vdXNlIHBvaW50ZXIgY29tcGFyZWQgdG8gdGhlIHBhZ2Ugd2hlbiB0aGUgbW91c2UgYnV0dG9uIGlzIGNsaWNrZWQgb24gYW4gZWxlbWVudFxuICAgICAgbGV0IHBhZ2VYID0gaXNNb3VzZUV2ZW50ID8gZS5wYWdlWCA6IGUudG91Y2hlc1swXS5wYWdlWFxuICAgICAgbGV0IHBhZ2VZID0gaXNNb3VzZUV2ZW50ID8gZS5wYWdlWSA6IGUudG91Y2hlc1swXS5wYWdlWVxuICAgICAgbGV0IGNsaWNrZWRFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChwYWdlWCAtIHdpbmRvdy5wYWdlWE9mZnNldCwgcGFnZVkgLSB3aW5kb3cucGFnZVlPZmZzZXQpXG5cbiAgICAgIGxldCBoYXNOb0NoaWxkRHJhZyA9IGJpbmRpbmcuYXJnID09PSAnbm9jaGlsZGRyYWcnXG4gICAgICBsZXQgaGFzRmlyc3RDaGlsZERyYWcgPSBiaW5kaW5nLmFyZyA9PT0gJ2ZpcnN0Y2hpbGRkcmFnJ1xuICAgICAgbGV0IGlzRWwgPSBjbGlja2VkRWxlbWVudCA9PT0gdGFyZ2V0XG4gICAgICBsZXQgaXNGaXJzdENoaWxkID0gY2xpY2tlZEVsZW1lbnQgPT09IHRhcmdldC5maXJzdENoaWxkXG4gICAgICBsZXQgaXNEYXRhRHJhZ2dhYmxlID0gaGFzTm9DaGlsZERyYWcgPyB0eXBlb2YgY2xpY2tlZEVsZW1lbnQuZGF0YXNldC5kcmFnc2Nyb2xsICE9PSAndW5kZWZpbmVkJyA6IHR5cGVvZiBjbGlja2VkRWxlbWVudC5kYXRhc2V0Lm5vRHJhZ3Njcm9sbCA9PT0gJ3VuZGVmaW5lZCdcblxuICAgICAgaWYgKCFpc0VsICYmICghaXNEYXRhRHJhZ2dhYmxlIHx8IChoYXNGaXJzdENoaWxkRHJhZyAmJiAhaXNGaXJzdENoaWxkKSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHB1c2hlZCA9IDFcbiAgICAgIC8vIFRoZSBjb29yZGluYXRlcyBvZiB0aGUgbW91c2UgcG9pbnRlciBjb21wYXJlZCB0byB0aGUgdmlld3BvcnQgd2hlbiB0aGUgbW91c2UgYnV0dG9uIGlzIGNsaWNrZWQgb24gYW4gZWxlbWVudFxuICAgICAgbGFzdENsaWVudFggPSBpc01vdXNlRXZlbnQgPyBlLmNsaWVudFggOiBlLnRvdWNoZXNbMF0uY2xpZW50WFxuICAgICAgbGFzdENsaWVudFkgPSBpc01vdXNlRXZlbnQgPyBlLmNsaWVudFkgOiBlLnRvdWNoZXNbMF0uY2xpZW50WVxuICAgICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgIGlzQ2xpY2sgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGFyZ2V0Lm11ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHB1c2hlZCA9IDBcbiAgICAgIGlmIChpc0RyYWdnaW5nKSB7XG4gICAgICAgIHUuZW1pdEV2ZW50KHZub2RlLCAnZHJhZ3Njcm9sbGVuZCcpXG4gICAgICB9XG4gICAgICBpc0RyYWdnaW5nID0gZmFsc2VcbiAgICAgIGlmIChlLnR5cGUgPT09ICd0b3VjaGVuZCcgJiYgaXNDbGljayA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyB0aGlzIHdvcmthcm91bmQgZW5hYmxlIGNsaWNrIHdpbGwgdXNpbmcgdG91Y2hcbiAgICAgICAgZS50YXJnZXQuY2xpY2soKVxuICAgICAgICBpc0NsaWNrID0gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUudGFyZ2V0LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0YXJnZXQubW0gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgbGV0IGlzTW91c2VFdmVudCA9IGUgaW5zdGFuY2VvZiB3aW5kb3cuTW91c2VFdmVudFxuICAgICAgbGV0IG5ld1Njcm9sbFgsIG5ld1Njcm9sbFlcbiAgICAgIGxldCBldmVudERldGFpbCA9IHt9XG4gICAgICBpZiAocHVzaGVkKSB7XG4gICAgICAgIC8vIHB1c2hlZFxuICAgICAgICAvLyBFbWl0IHN0YXJ0IGV2ZW50XG4gICAgICAgIGlmICghaXNEcmFnZ2luZykge1xuICAgICAgICAgIHUuZW1pdEV2ZW50KHZub2RlLCAnZHJhZ3Njcm9sbHN0YXJ0JylcbiAgICAgICAgfVxuICAgICAgICBpc0RyYWdnaW5nID0gdHJ1ZVxuXG4gICAgICAgIC8vIHdoZW4gd2UgcmVhY2ggdGhlIGVuZCBvciB0aGUgYmVnaW5pbmcgb2YgWCBvciBZXG4gICAgICAgIGxldCBpc0VuZFggPSAoKHRhcmdldC5zY3JvbGxMZWZ0ICsgdGFyZ2V0LmNsaWVudFdpZHRoKSA+PSB0YXJnZXQuc2Nyb2xsV2lkdGgpIHx8IHRhcmdldC5zY3JvbGxMZWZ0ID09PSAwXG4gICAgICAgIGxldCBpc0VuZFkgPSAoKHRhcmdldC5zY3JvbGxUb3AgKyB0YXJnZXQuY2xpZW50SGVpZ2h0KSA+PSB0YXJnZXQuc2Nyb2xsSGVpZ2h0KSB8fCB0YXJnZXQuc2Nyb2xsVG9wID09PSAwXG5cbiAgICAgICAgLy8gZ2V0IG5ldyBzY3JvbGwgZGltZW50aW9uc1xuICAgICAgICBuZXdTY3JvbGxYID0gKC1sYXN0Q2xpZW50WCArIChsYXN0Q2xpZW50WCA9IGlzTW91c2VFdmVudCA/IGUuY2xpZW50WCA6IGUudG91Y2hlc1swXS5jbGllbnRYKSlcbiAgICAgICAgbmV3U2Nyb2xsWSA9ICgtbGFzdENsaWVudFkgKyAobGFzdENsaWVudFkgPSBpc01vdXNlRXZlbnQgPyBlLmNsaWVudFkgOiBlLnRvdWNoZXNbMF0uY2xpZW50WSkpXG5cbiAgICAgICAgaWYgKGJpbmRpbmcubW9kaWZpZXJzLnBhc3MpIHtcbiAgICAgICAgICAvLyBjb21wdXRlIGFuZCBzY3JvbGxcbiAgICAgICAgICB0YXJnZXQuc2Nyb2xsTGVmdCAtPSBiaW5kaW5nLm1vZGlmaWVycy55ID8gLTAgOiBuZXdTY3JvbGxYXG4gICAgICAgICAgdGFyZ2V0LnNjcm9sbFRvcCAtPSBiaW5kaW5nLm1vZGlmaWVycy54ID8gLTAgOiBuZXdTY3JvbGxZXG4gICAgICAgICAgaWYgKHRhcmdldCA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgdGFyZ2V0LnNjcm9sbExlZnQgLT0gYmluZGluZy5tb2RpZmllcnMueSA/IC0wIDogbmV3U2Nyb2xsWFxuICAgICAgICAgICAgdGFyZ2V0LnNjcm9sbFRvcCAtPSBiaW5kaW5nLm1vZGlmaWVycy54ID8gLTAgOiBuZXdTY3JvbGxZXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gaWYgb25lIHNpZGUgcmVhY2ggdGhlIGVuZCBzY3JvbGwgd2luZG93XG4gICAgICAgICAgaWYgKGlzRW5kWCB8fCBiaW5kaW5nLm1vZGlmaWVycy55KSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoLW5ld1Njcm9sbFgsIDApXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc0VuZFkgfHwgYmluZGluZy5tb2RpZmllcnMueCkge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbEJ5KDAsIC1uZXdTY3JvbGxZKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBkaXNhYmxlIG9uZSBzY3JvbGwgZGlyZWN0aW9uIGluIGNhc2UgeCBvciB5IGlzIHNwZWNpZmllZFxuICAgICAgICAgIGlmIChiaW5kaW5nLm1vZGlmaWVycy54KSBuZXdTY3JvbGxZID0gLTBcbiAgICAgICAgICBpZiAoYmluZGluZy5tb2RpZmllcnMueSkgbmV3U2Nyb2xsWCA9IC0wXG5cbiAgICAgICAgICAvLyBjb21wdXRlIGFuZCBzY3JvbGxcbiAgICAgICAgICB0YXJnZXQuc2Nyb2xsTGVmdCAtPSBuZXdTY3JvbGxYXG4gICAgICAgICAgdGFyZ2V0LnNjcm9sbFRvcCAtPSBuZXdTY3JvbGxZXG4gICAgICAgICAgaWYgKHRhcmdldCA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgdGFyZ2V0LnNjcm9sbExlZnQgLT0gbmV3U2Nyb2xsWFxuICAgICAgICAgICAgdGFyZ2V0LnNjcm9sbFRvcCAtPSBuZXdTY3JvbGxZXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gLy8gZGlzYWJsZSBvbmUgc2Nyb2xsIGRpcmVjdGlvbiBpbiBjYXNlIHggb3IgeSBpcyBzcGVjaWZpZWRcbiAgICAgICAgLy8gaWYgKGJpbmRpbmcubW9kaWZpZXJzLngpIG5ld1Njcm9sbFkgPSAtMFxuICAgICAgICAvLyBpZiAoYmluZGluZy5tb2RpZmllcnMueSkgbmV3U2Nyb2xsWCA9IC0wXG5cbiAgICAgICAgLy8gLy8gY29tcHV0ZSBhbmQgc2Nyb2xsXG4gICAgICAgIC8vIGVsLnNjcm9sbExlZnQgLT0gbmV3U2Nyb2xsWFxuICAgICAgICAvLyBlbC5zY3JvbGxUb3AgLT0gbmV3U2Nyb2xsWVxuICAgICAgICAvLyBpZiAoZWwgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgLy8gICBlbC5zY3JvbGxMZWZ0IC09IG5ld1Njcm9sbFhcbiAgICAgICAgLy8gICBlbC5zY3JvbGxUb3AgLT0gbmV3U2Nyb2xsWVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gLy8gcGFzcyBzY3JvbGwgd2hlbiBtYXggcmVhY2hlZFxuICAgICAgICAvLyBpZiAoYmluZGluZy5tb2RpZmllcnMucGFzcykge1xuICAgICAgICAvLyAgIC8vIGlmIG9uZSBzaWRlIHJlYWNoIHRoZSBlbmQgc2Nyb2xsIHdpbmRvd1xuICAgICAgICAvLyAgIGlmIChpc0VuZFgpIHtcbiAgICAgICAgLy8gICAgIHdpbmRvdy5zY3JvbGxCeSgtbmV3U2Nyb2xsWCwgMClcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vICAgaWYgKGlzRW5kWSkge1xuICAgICAgICAvLyAgICAgd2luZG93LnNjcm9sbEJ5KDAsIC1uZXdTY3JvbGxZKVxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIEVtaXQgZXZlbnRzXG4gICAgICAgIGV2ZW50RGV0YWlsLmRlbHRhWCA9IC1uZXdTY3JvbGxYXG4gICAgICAgIGV2ZW50RGV0YWlsLmRlbHRhWSA9IC1uZXdTY3JvbGxZXG4gICAgICAgIHUuZW1pdEV2ZW50KHZub2RlLCAnZHJhZ3Njcm9sbG1vdmUnLCBldmVudERldGFpbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1LmFkZEV2ZW50TGlzdGVuZXJzKHRhcmdldCwgUE9JTlRFUl9TVEFSVF9FVkVOVFMsIHRhcmdldC5tZClcblxuICAgIHUuYWRkRXZlbnRMaXN0ZW5lcnMod2luZG93LCBQT0lOVEVSX0VORF9FVkVOVFMsIHRhcmdldC5tdSlcblxuICAgIHUuYWRkRXZlbnRMaXN0ZW5lcnMod2luZG93LCBQT0lOVEVSX01PVkVfRVZFTlRTLCB0YXJnZXQubW0pXG4gIH1cbiAgLy8gaWYgdmFsdWUgaXMgdW5kZWZpbmVkIG9yIHRydWUgd2Ugd2lsbCBpbml0XG4gIGlmIChhY3RpdmUpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgcmVzZXQoKVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlc2V0KVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBpZiB2YWx1ZSBpcyBmYWxzZSBtZWFucyB3ZSBkaXNhYmxlXG4gICAgLy8gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZXNldClcbiAgICB1LnJlbW92ZUV2ZW50TGlzdGVuZXJzKHRhcmdldCwgUE9JTlRFUl9TVEFSVF9FVkVOVFMsIHRhcmdldC5tZClcbiAgICB1LnJlbW92ZUV2ZW50TGlzdGVuZXJzKHdpbmRvdywgUE9JTlRFUl9FTkRfRVZFTlRTLCB0YXJnZXQubXUpXG4gICAgdS5yZW1vdmVFdmVudExpc3RlbmVycyh3aW5kb3csIFBPSU5URVJfTU9WRV9FVkVOVFMsIHRhcmdldC5tbSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJpbmQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICBpbml0KGVsLCBiaW5kaW5nLCB2bm9kZSlcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiAoZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSkge1xuICAgIC8vIHVwZGF0ZSB0aGUgY29tcG9uZW50IG9ubHkgaWYgdGhlIHBhcmFtZXRlcnMgY2hhbmdlXG4gICAgaWYgKEpTT04uc3RyaW5naWZ5KGJpbmRpbmcudmFsdWUpICE9PSBKU09OLnN0cmluZ2lmeShiaW5kaW5nLm9sZFZhbHVlKSkge1xuICAgICAgaW5pdChlbCwgYmluZGluZywgdm5vZGUpXG4gICAgfVxuICB9LFxuICB1bmJpbmQ6IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICBsZXQgdGFyZ2V0ID0gZWxcbiAgICB1LnJlbW92ZUV2ZW50TGlzdGVuZXJzKHRhcmdldCwgUE9JTlRFUl9TVEFSVF9FVkVOVFMsIHRhcmdldC5tZClcbiAgICB1LnJlbW92ZUV2ZW50TGlzdGVuZXJzKHdpbmRvdywgUE9JTlRFUl9FTkRfRVZFTlRTLCB0YXJnZXQubXUpXG4gICAgdS5yZW1vdmVFdmVudExpc3RlbmVycyh3aW5kb3csIFBPSU5URVJfTU9WRV9FVkVOVFMsIHRhcmdldC5tbSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9kaXJlY3RpdmUuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  addEventListeners: function addEventListeners(el, events, handler) {\n    for (var i = 0, len = events.length; i < len; i++) {\n      el.addEventListener(events[i], handler);\n    }\n  },\n  removeEventListeners: function removeEventListeners(el, events, handler) {\n    for (var i = 0, len = events.length; i < len; i++) {\n      el.removeEventListener(events[i], handler);\n    }\n  },\n\n\n  emitEvent: function emitEvent(vnode, eventName, eventDetail) {\n    // If vnode is a Vue component instance, use $emit. Otherwise use a native HTML event.\n    if (vnode.componentInstance) {\n      vnode.componentInstance.$emit(eventName, eventDetail);\n    } else {\n      var event = void 0;\n      if (typeof window.CustomEvent === 'function') {\n        event = new window.CustomEvent(eventName, { detail: eventDetail });\n      } else {\n        // Deprecated fallback for IE\n        event = document.createEvent('CustomEvent');\n        event.initCustomEvent(eventName, true, true, eventDetail);\n      }\n      vnode.elm.dispatchEvent(event);\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbHMuanM/MmI0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGFkZEV2ZW50TGlzdGVuZXJzIChlbCwgZXZlbnRzLCBoYW5kbGVyKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2ZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudHNbaV0sIGhhbmRsZXIpXG4gICAgfVxuICB9LFxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzIChlbCwgZXZlbnRzLCBoYW5kbGVyKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2ZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHNbaV0sIGhhbmRsZXIpXG4gICAgfVxuICB9LFxuXG4gIGVtaXRFdmVudDogZnVuY3Rpb24gKHZub2RlLCBldmVudE5hbWUsIGV2ZW50RGV0YWlsKSB7XG4gICAgLy8gSWYgdm5vZGUgaXMgYSBWdWUgY29tcG9uZW50IGluc3RhbmNlLCB1c2UgJGVtaXQuIE90aGVyd2lzZSB1c2UgYSBuYXRpdmUgSFRNTCBldmVudC5cbiAgICBpZiAodm5vZGUuY29tcG9uZW50SW5zdGFuY2UpIHtcbiAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlLiRlbWl0KGV2ZW50TmFtZSwgZXZlbnREZXRhaWwpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBldmVudFxuICAgICAgaWYgKHR5cGVvZiAod2luZG93LkN1c3RvbUV2ZW50KSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBldmVudCA9IG5ldyB3aW5kb3cuQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7IGRldGFpbDogZXZlbnREZXRhaWwgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIERlcHJlY2F0ZWQgZmFsbGJhY2sgZm9yIElFXG4gICAgICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JylcbiAgICAgICAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSwgZXZlbnREZXRhaWwpXG4gICAgICB9XG4gICAgICB2bm9kZS5lbG0uZGlzcGF0Y2hFdmVudChldmVudClcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdXRpbHMuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);
});