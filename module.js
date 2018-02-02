/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(2);



/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__script_module_js__ = __webpack_require__(4);

const root = ( (root) => {
	if ( typeof root === 'object' && ( root.self === root || root.global === global ) && root ) {
		return root;
	}
} )(self || global || {});

const $ = ( ($) => {
	if ( typeof $ === 'function' ) {
		return $;
	} else {
		throw 'You must import jQuery';
	}
} )(root.jQuery);

$.fn[__WEBPACK_IMPORTED_MODULE_0__script_module_js__["c" /* ModuleName */]] = function() {
	let module;
	let args = Array.prototype.slice.call(arguments, 0);
	let method = args[0];
	let options = args.slice(1).length<=0?undefined:args.slice(1, args.length);;
	let isReturnMethod = this.length === 1 && typeof method === 'string' && __WEBPACK_IMPORTED_MODULE_0__script_module_js__["d" /* ModuleReturns */].indexOf(method) !== -1;
	let methodRunner = function( method, options, uesReturn ) {
		let $this = $(this);
		let module = $this.data( __WEBPACK_IMPORTED_MODULE_0__script_module_js__["c" /* ModuleName */] );
		if ( !!module ) {
			if ( typeof method == 'string' && !uesReturn ) {
				module[method].apply(module, options);
			} else if ( typeof method == 'string' && !!uesReturn ) {
				return module[method].apply(module, options);
			} else {
		        throw 'unsupported options!';
		    }
		} else {
			throw 'You must run first this plugin!';
		}
	};
	if ( isReturnMethod ) {
		return methodRunner.call( this, method, options, isReturnMethod );
	} else {
		return this.each(function(){
			let $this = $(this);
			let module = $this.data( __WEBPACK_IMPORTED_MODULE_0__script_module_js__["c" /* ModuleName */] );
			let opts = null;
			if ( !!module ) {
				methodRunner.call( this, method, options );
			} else {
				opts = $.extend( true, {}, __WEBPACK_IMPORTED_MODULE_0__script_module_js__["b" /* ModuleDefaults */], ( typeof method === 'object' && method ), ( typeof options === 'object' && options ) );
				module = new __WEBPACK_IMPORTED_MODULE_0__script_module_js__["a" /* Module */](this, opts);
				$this.data( __WEBPACK_IMPORTED_MODULE_0__script_module_js__["c" /* ModuleName */], module );
				module.init();
			}
		});
	}
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ModuleName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModuleDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ModuleReturns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Module; });
const ModuleName = 'frzTable';
const ModuleDefaults =  {
  
};
const ModuleReturns = [];

class Module {
	constructor ( ele, options ) {
		this.ele = ele;
		this.$ele = $(ele);
		this.option = options;   
	}


	init () {
			$('.box').on('click',function(){
    		$('td .box').removeClass('active');
    		$('td .box').removeClass('HLgray');
    		var t = $(this).index();
            $('.longbox').each(function(){
            $(this).children('.box:eq(' + t + ')').addClass('HLgray')});
            $(this).addClass('active');
            $(this).siblings().addClass('HLgray');
    		;})

           //-----------------------------------第二個
           $('.secBox').on('click',function(){
        	//--清除原本的特效
        	$('.arrive').find('.plane').removeClass('planeblock'); 
        	$('.sectd1').find('.plane').removeClass('planeblock'); 
    		$('td .secBox').removeClass('active');
    		$('.secgray').removeClass('active');
    		$('.setoffbox').removeClass('active');

    		//--hightlight特效
    		$(this).addClass('active');
    		var s = $(this).index();

            //--飛機 目的地
            $(this).addClass('active');
            $('.arrive').children('.secgray:eq(' + s + ') ').addClass('active'); 
            $('.arrive').children('.arrivebox:eq(' + s + ')').find('.plane').addClass('planeblock'); 
            //--飛機 出發地
            var sa =$(this).parents('.seclongbox').index()-1;
            console.log(sa); 
            $('.sectd1').children('.seclgray:eq(' +sa+ ')').addClass('active');
            $('.sectd1').children('.seclgray:eq(' +sa+ ')').find('.plane').addClass('planeblock');

    		;})
 







		var move = this.option.count.slide;
		var show =this.option.count.show;
        // console.log(this);
        // console.log(this.ele);
        // console.log(this.$ele);

        // console.log(show);
        // console.log(move);
       



        var slide=0;
	    var sliderWidth=90;
	    var slideCount=7;
        var slidershowWdith = 270;
        var width;
        var slidemove = slidershowWdith/show;

        // console.log(slidemove);

        var boxsize = slidershowWdith/show+'px';

        	if (window.matchMedia("(max-width: 376px)").matches){
            this.$ele.find('.box').css('min-width', boxsize);
            this.$ele.find('.gray').css('min-width', boxsize);
        	}
    //-----------------------
	    function goSlider(slide){

	      width=0-slidemove*slide+"px";
           $(".slideTd").css("left", width);
          if(slide<=slideCount-show){
	      $("#dotwrap1 .dot1").removeClass('active');
	      $("#dotwrap1 .dot1").eq(slide).addClass('active');}
	    }
        

           //slide<5
	  this.$ele.find('.goRight').on('click',function(){
	   	if (window.matchMedia("(max-width: 376px)").matches){
	   		if(slide+move<=slideCount-show){
	        slide=slide+move;
	        goSlider(slide);
	        console.log(slide);
	      }
          else{
            slide=slideCount-show;
            goSlider(slide);
           }
	  }
	    });
       
        this.$ele.find('.goLeft').on('click',function(){
	   	if (window.matchMedia("(max-width: 376px)").matches){
	   		if(slide-move>=0){
	        slide=slide-move;
	        goSlider(slide);
	      } else{
            slide=0;
            goSlider(slide);
	      }
	     }

	    });


 
/////////

       

        var secslide=0;
	    var secsliderWidth=110;
	    var secslideCount=5;
	    var secslidershowWdith = 220;
        var secwidth;
        var secslidemove = secslidershowWdith/show;

        var secboxsize = secslidershowWdith/show+'px';

        if (window.matchMedia("(max-width: 376px)").matches){
            this.$ele.find('.secgraybox').css('min-width', secboxsize);
        	}

        function secgoSlider(secslide){
          //滑動特效
	      secwidth=0-secslidemove*secslide+"px";
	      $(".secslideTd").css("left", secwidth);
	      //點點特效
	      if(slide<=slideCount-show){
	      $("#dotwrap2 .dot2").removeClass('active');
	      $("#dotwrap2 .dot2").eq(secslide).addClass('active');}
	    }


	  this.$ele.find('.secgoRight').on('click',function(){
	   	if (window.matchMedia("(max-width: 376px)").matches){
	   		if(secslide+move<=secslideCount-show){
	        secslide=secslide+move;
	        secgoSlider(secslide);
	      }}
	       else{
            secslide=secslide-show;
            goSlider(secslide);
           }
	    });
       
      this.$ele.find('.secgoLeft').on('click',function(){
	   	if (window.matchMedia("(max-width: 376px)").matches){
	   		if(secslide-move>=0){
	        secslide=secslide-move;
	        secgoSlider(secslide);
	      }else{
            slide=0;
            secgoSlider(secslide);
	      }

	  }
	    });


    	
			return this;
			}


			methods () {
			return this;
			}
        
            






}


/***/ })
/******/ ]);