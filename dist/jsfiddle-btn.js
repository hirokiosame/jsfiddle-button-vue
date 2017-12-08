(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_jsfiddle_btn_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_27805aad_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_jsfiddle_btn_vue__ = __webpack_require__(6);
function injectStyle (ssrContext) {
  this["$s"] = __webpack_require__(2)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_jsfiddle_btn_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_27805aad_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_jsfiddle_btn_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"logo":"s7aBA085OoCcIl2oFn4cT_0","openButton":"_3xvAQ2NxXyk3c50Kv20BDW_0"};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsfiddlesvg_vue__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({

	name: 'JsfiddleButton',

	components: {
		JsfiddleSVG: __WEBPACK_IMPORTED_MODULE_0__jsfiddlesvg_vue__["a" /* default */],
	},

	props: {
		title: {
			type: String,
		},
		description: {
			type: String,
		},
		resources: {
			type: Array,
		},
		js: {
			type: String,
		},
		html: {
			type: String,
		},
		css: {
			type: String,
		},
		wrap: {
			type: String,
		},
	},

	data() {
		return {
			props: [
				'title',
				'description',
				'resources',
				'js',
				'html',
				'css',
				'wrap'
			],
		};
	},

	// computed: {
	// 	resourcesStr() {
	// 		return (this.resources instanceof Array) ? this.resources.join(',') : '';
	// 	},
	// },

	methods: {
		getProp(prop) {
			return this[prop];
		},
	},
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ec32ba9_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_jsfiddlesvg_vue__ = __webpack_require__(5);
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ec32ba9_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_jsfiddlesvg_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns:dc":"http://purl.org/dc/elements/1.1/","xmlns:cc":"http://creativecommons.org/ns#","xmlns:rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","xmlns:svg":"http://www.w3.org/2000/svg","xmlns":"http://www.w3.org/2000/svg","xmlns:sodipodi":"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd","xmlns:inkscape":"http://www.inkscape.org/namespaces/inkscape","version":"1.1","id":"Layer_1","x":"0px","y":"0px","width":"500px","height":"500px","viewBox":"0 0 500 500","enable-background":"new 0 0 500 500","xml:space":"preserve","inkscape:version":"0.47 r22583","sodipodi:docname":"logo-blue.svg","inkscape:export-filename":"/home/zalun/Clients/jsFiddle/logo/just-logo.png","inkscape:export-xdpi":"90","inkscape:export-ydpi":"90"}},[_c('metadata',{attrs:{"id":"metadata9"}},[_c('rdf:RDF',[_c('cc:Work',{attrs:{"rdf:about":""}},[_c('dc:format',[_vm._v("image/svg+xml")]),_c('dc:type',{attrs:{"rdf:resource":"http://purl.org/dc/dcmitype/StillImage"}}),_c('dc:title')],1)],1)],1),_c('defs',{attrs:{"id":"defs7"}},[_c('linearGradient',{attrs:{"id":"linearGradient3589"}},[_c('stop',{staticStyle:{"stop-color":"#4679a4","stop-opacity":"1"},attrs:{"offset":"0","id":"stop3591"}}),_c('stop',{staticStyle:{"stop-color":"#335777","stop-opacity":"1"},attrs:{"offset":"1","id":"stop3593"}})],1),_c('inkscape:perspective',{attrs:{"sodipodi:type":"inkscape:persp3d","inkscape:vp_x":"0 : 250 : 1","inkscape:vp_y":"0 : 1000 : 0","inkscape:vp_z":"500 : 250 : 1","inkscape:persp3d-origin":"250 : 166.66667 : 1","id":"perspective11"}}),_c('filter',{attrs:{"inkscape:collect":"always","id":"filter3684"}},[_c('feGaussianBlur',{attrs:{"inkscape:collect":"always","stdDeviation":"2.1875","id":"feGaussianBlur3686"}})],1)],1),_c('sodipodi:namedview',{attrs:{"pagecolor":"#ffffff","bordercolor":"#666666","borderopacity":"1","objecttolerance":"10","gridtolerance":"10","guidetolerance":"10","inkscape:pageopacity":"0","inkscape:pageshadow":"2","inkscape:window-width":"1918","inkscape:window-height":"1169","id":"namedview5","showgrid":"false","inkscape:zoom":"0.472","inkscape:cx":"218.1731","inkscape:cy":"250","inkscape:window-x":"0","inkscape:window-y":"0","inkscape:window-maximized":"0","inkscape:current-layer":"Layer_1"}}),_c('path',{staticStyle:{"fill":"#4679a4","fill-opacity":"1","opacity":"1","fill-rule":"evenodd"},attrs:{"id":"path3613","d":"M400.08,237.66c0.141-2.31,0.35-4.6,0.35-6.94  c0-63.91-52.609-115.72-117.51-115.72c-46.8,0-87.09,27-105.99,65.99c-9.17-7-20.65-11.21-33.14-11.21  c-29.94,0-54.21,23.9-54.21,53.38c0,5.54,0.85,10.89,2.45,15.91C68.69,252.74,53,277.74,53,306.42c0,42.88,34.97,77.66,78.36,78.32  l0.92,0.05l0.32,0.01l0.32-0.01h233.04c1.42,0.069,2.81,0.21,4.25,0.21c42.96,0,77.79-34.29,77.79-76.6  C448,276.51,428.21,249.2,400.08,237.66z M159.04,325.74c-7.89-7.141-12.8-15.801-14.77-26c-0.65-3.41-0.98-6.98-0.98-10.74  c-0.01-14.54,5.28-26.561,15.88-36.029c10.59-9.48,24.06-14.23,40.42-14.221c16.79,0,32.62,6.28,46.6,18.85  c3.49,3.131,6.86,6.66,10.11,10.57l17.979,21.141c3.111,4.26,6.451,7.939,9.9,11.039c9.23,8.291,19.25,12.44,27.711,12.44  c7.199,0,13.209-2.2,18.049-6.62c4.221-4.02,6.601-8.83,7.131-14.4l0.109-2.439c0-2.42-0.34-4.71-1.039-6.859  c-1.15-3.58-3.261-6.801-6.32-9.671c-4.78-4.56-10.801-6.81-18.1-6.81c-8.971,0-17.841,3.02-27.561,12.439l-15.92-18.72l-1.94-2.17  c13.921-13.64,27.82-18.76,46.53-18.76c16.58,0,30,4.71,40.27,14.111l0.23,0.189c10.439,9.38,15.67,21.51,15.67,36.391  c0,3.68-0.33,7.199-0.98,10.549c-1.959,10.07-6.879,18.65-14.74,25.76c-7.719,7.111-17.139,11.561-28.26,13.33  C321.311,339.7,317.41,340,313.32,340c-17.17-0.01-33.051-6.15-46.711-18.41c-3.689-3.32-7.219-7.08-10.569-11.3l-17.98-20.99  c-3.04-4.21-6.33-7.85-9.75-10.93c-9.21-8.271-19.36-12.41-28.06-12.41c-2.7,0-5.23,0.319-7.59,0.95  c-3.92,1.05-7.35,2.99-10.31,5.811c-3.62,3.449-5.89,7.42-6.79,11.909c-0.3,1.49-0.46,3.05-0.45,4.66c0,6.38,2.3,11.84,6.9,16.37  l0.35,0.33c4.94,4.52,11.01,6.77,18.21,6.77c9.05,0,17.96-3.039,27.66-12.539l15.84,18.489l1.75,2.11  c-14.46,13.8-28.21,19.02-46.2,19.01C183.05,339.83,169.53,335.13,159.04,325.74z","fill":"#010101","clip-rule":"evenodd","fill-rule":"evenodd"}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{attrs:{"method":"post","target":"_blank","action":"http://jsfiddle.net/api/post/library/pure/"}},[_vm._l((_vm.props),function(prop){return [(_vm.getProp(prop))?_c('input',{attrs:{"type":"hidden","name":prop},domProps:{"value":_vm.getProp(prop)}}):_vm._e()]}),_c('button',{class:_vm.$s.openButton},[_c('JsfiddleSVG',{class:_vm.$s.logo}),_vm._v("\n\t\tOpen in JSFiddle\n\t")],1)],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});