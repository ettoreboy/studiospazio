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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var flkty;\nopen_text = false;\nopen_plan = false;\nvar clicks = 0;\nprevId = \"\";\ncurrentId = \"\";\n\nfunction updateText() {\n  flkty = Flickity.data(carousel);\n  prevId = currentId;\n  currentId = flkty.selectedElement.id;\n  if (flkty.selectedIndex >= 0 && prevId !== currentId) {\n    $(\"div.textgallery > *\").hide();\n    $(\"div.plans > *\").hide();\n    if (open_text) {\n      $('div.textgallery div#' + currentId).fadeIn()\n    }\n    if (open_plan) {\n      $('div.plans #' + currentId).fadeIn(1000);\n    }\n  }\n}\n\nfunction toggleText(element, show_text, show_plan) {\n  if (show_plan) {\n    $('div.textgallery div#' + element.id).hide()\n    $('div.plans #' + element.id).fadeIn(1000)\n  } else if (!show_plan) {\n    $('div.plans #' + element.id).fadeOut()\n  }\n  if (show_text) {\n    $('div.plans #' + element.id).hide()\n    $('div.textgallery div#' + element.id).fadeIn()\n  } else if (!show_text) {\n    $('div.textgallery div#' + element.id).fadeOut()\n  }\n}\n\n/** READY */\n$(document).ready(function () {\n  carousel = document.querySelector('.gallery');\n\n  $('.gallery').on('select.flickity', function (element) {\n    updateText();\n  });\n\n  $(\"#more-button\").on(\"click\", function (e) {\n\n    $(this).fadeOut(\"fast\").fadeIn(\"fast\");\n\n    flkty = Flickity.data(carousel);\n    clicks++;\n    if (clicks === 1) {\n      if (!open_text) {\n        open_plan = false;\n        open_text = true;\n      } else {\n        open_text = false;\n      }\n\n    } else if (clicks === 2) {\n      if (!open_plan) {\n        open_text = false;\n        open_plan = true;\n      } else {\n        open_plan = false;\n      }\n\n    } else if (clicks > 2) {\n      clicks = 0;\n      open_text = false;\n      open_plan = false;\n    }\n\n    toggleText(flkty.selectedElement, open_text, open_plan);\n  })\n    .on(\"dblclick\", function (e) {\n      e.preventDefault();  //cancel system double-click event\n    });\n\n  var isScrolling = false;\n  $('.gallery').on('scroll.flickity', function (event, progress) {\n    isScrolling = true;\n    //console.log( 'Flickity scrolled ' + progress * 100 + '%' )\n  })\n  $('.gallery').on('settle.flickity', function () {\n    isScrolling = false;\n    //console.log( 'Flickity settled at ' + flkty.selectedIndex )\n  })\n\n\n  $('.gallery').on('mousewheel', { mousewheel: { debounce: { preventDefault: true, leading: true, trailing: false, delay: 300 } } }, function (event) {\n    event.preventDefault();\n    flkty = Flickity.data(this);\n    //normalize for mac\n    var deltaY = event.deltaY\n    var deltaX = event.deltaX\n    var deltaFactor = event.deltaFactor\n\n    var directions = {\n      isUp: deltaY > 0,\n      isLeft: deltaX < 0,\n      isDown: deltaY < 0,\n      isRight: deltaX > 0\n    };\n    if (!isScrolling) {\n      if (directions.isLeft) {\n        flkty.previous();\n      } else if (directions.isRight) {\n        flkty.next();\n      }\n    }\n  });\n\n  //start lazyload\n  $(\".img-resp\").addClass(\"lazyload\");\n  $(document).on('lazybeforesizes', function (e) {\n    //use width of parent node instead of the image width itself\n    e.detail.width = $('.flickity-viewport').width();\n  });\n\n});\n\n$(window).on('load', function () {\n  var totalImg = $(\".gallery-cell\").length\n\n  jQuery('.gallery').flickity({\n    // options\n    freeScroll: true,\n    wrapAround: true,\n    prevNextButtons: true,\n    pageDots: false,\n    resize: true,\n    initialIndex: 0,\n    setGallerySize: false,\n    imagesLoaded: true,\n    selectedAttraction: 0.010,\n    friction: 0.40,\n    freeScrollFriction: 0.09\n  });\n\n  $(\".se-pre-con\").fadeOut(\"slow\");\n\n});\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

/******/ });