/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	var vertexShader = __webpack_require__(1);
	var fragmentShader = __webpack_require__(2)
	
	AFRAME.registerShader('gradient', {
	  schema: {
	    topColor: {type: 'vec3', default: '255 0 0', is: 'uniform'},
	    bottomColor: {type: 'vec3', default: '0 0 255', is: 'uniform'},
	    offset: {type: 'float', default: '400', is: 'uniform'},
	    exponent: {type: 'float', default: '0.6', is: 'uniform'}
	  },
	  vertexShader: vertexShader,
	  fragmentShader: fragmentShader
	});
	
	AFRAME.registerPrimitive('a-gradient-sky', {
	    defaultComponents: {
	      geometry: {
	        primitive: 'sphere',
	        radius: 5000,
	        segmentsWidth: 64,
	        segmentsHeight: 20
	      },
	      material: {
	        shader: 'gradient'
	      },
	      scale: '-1 1 1'
	    },
	
	    mappings: {
	      topColor: 'material.topColor',
	      bottomColor: 'material.bottomColor',
	      offset: 'material.offset',
	      exponent: 'material.exponent'
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = "varying vec3 vWorldPosition;\n\nvoid main() {\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\tvWorldPosition = worldPosition.xyz;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "uniform vec3 bottomColor;\nuniform vec3 topColor;\nuniform float offset;\nuniform float exponent;\nvarying vec3 vWorldPosition;\n\nvoid main() {\n    float h = normalize( vWorldPosition + offset ).y;\n    float rB = bottomColor.x/255.0;\n    float gB = bottomColor.y/255.0;\n    float bB = bottomColor.z/255.0;\n    vec3 bColor = vec3(rB,gB,bB);\n    float rT = topColor.x/255.0;\n    float gT = topColor.y/255.0;\n    float bT = topColor.z/255.0;\n    vec3 tColor = vec3(rT,gT,bT);\n    gl_FragColor = vec4( mix( bColor, tColor, max( pow( max( h, 0.0 ), exponent ), 0.0 ) ), 1.0 );\n}"

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjU3ZGFkZDdiMTNmZTBmZGEwMGYiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvc2hhZGVycy92ZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly8vLi9idWlsZC9zaGFkZXJzL2ZyYWdtZW50Lmdsc2wiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDckNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFlLGdEQUFnRDtBQUMvRCxtQkFBa0IsZ0RBQWdEO0FBQ2xFLGNBQWEsNkNBQTZDO0FBQzFELGdCQUFlO0FBQ2YsSUFBRztBQUNIO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7O0FDbkNELCtDQUE4QyxpQkFBaUIsNkRBQTZELHVDQUF1Qyw2RUFBNkUsR0FBRyxDOzs7Ozs7QUNBblAsNENBQTJDLHdCQUF3Qix1QkFBdUIseUJBQXlCLDhCQUE4QixpQkFBaUIsdURBQXVELHFDQUFxQyxxQ0FBcUMscUNBQXFDLG1DQUFtQyxrQ0FBa0Msa0NBQWtDLGtDQUFrQyxtQ0FBbUMsb0dBQW9HLEdBQUcsQyIsImZpbGUiOiJncmFkaWVudHNreS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDY1N2RhZGQ3YjEzZmUwZmRhMDBmIiwiXG52YXIgdmVydGV4U2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXJzL3ZlcnRleC5nbHNsJyk7XG52YXIgZnJhZ21lbnRTaGFkZXIgPSByZXF1aXJlKCcuL3NoYWRlcnMvZnJhZ21lbnQuZ2xzbCcpXG5cbkFGUkFNRS5yZWdpc3RlclNoYWRlcignZ3JhZGllbnQnLCB7XG4gIHNjaGVtYToge1xuICAgIHRvcENvbG9yOiB7dHlwZTogJ3ZlYzMnLCBkZWZhdWx0OiAnMjU1IDAgMCcsIGlzOiAndW5pZm9ybSd9LFxuICAgIGJvdHRvbUNvbG9yOiB7dHlwZTogJ3ZlYzMnLCBkZWZhdWx0OiAnMCAwIDI1NScsIGlzOiAndW5pZm9ybSd9LFxuICAgIG9mZnNldDoge3R5cGU6ICdmbG9hdCcsIGRlZmF1bHQ6ICc0MDAnLCBpczogJ3VuaWZvcm0nfSxcbiAgICBleHBvbmVudDoge3R5cGU6ICdmbG9hdCcsIGRlZmF1bHQ6ICcwLjYnLCBpczogJ3VuaWZvcm0nfVxuICB9LFxuICB2ZXJ0ZXhTaGFkZXI6IHZlcnRleFNoYWRlcixcbiAgZnJhZ21lbnRTaGFkZXI6IGZyYWdtZW50U2hhZGVyXG59KTtcblxuQUZSQU1FLnJlZ2lzdGVyUHJpbWl0aXZlKCdhLWdyYWRpZW50LXNreScsIHtcbiAgICBkZWZhdWx0Q29tcG9uZW50czoge1xuICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgcHJpbWl0aXZlOiAnc3BoZXJlJyxcbiAgICAgICAgcmFkaXVzOiA1MDAwLFxuICAgICAgICBzZWdtZW50c1dpZHRoOiA2NCxcbiAgICAgICAgc2VnbWVudHNIZWlnaHQ6IDIwXG4gICAgICB9LFxuICAgICAgbWF0ZXJpYWw6IHtcbiAgICAgICAgc2hhZGVyOiAnZ3JhZGllbnQnXG4gICAgICB9LFxuICAgICAgc2NhbGU6ICctMSAxIDEnXG4gICAgfSxcblxuICAgIG1hcHBpbmdzOiB7XG4gICAgICB0b3BDb2xvcjogJ21hdGVyaWFsLnRvcENvbG9yJyxcbiAgICAgIGJvdHRvbUNvbG9yOiAnbWF0ZXJpYWwuYm90dG9tQ29sb3InLFxuICAgICAgb2Zmc2V0OiAnbWF0ZXJpYWwub2Zmc2V0JyxcbiAgICAgIGV4cG9uZW50OiAnbWF0ZXJpYWwuZXhwb25lbnQnXG4gICAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9idWlsZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidmFyeWluZyB2ZWMzIHZXb3JsZFBvc2l0aW9uO1xcblxcbnZvaWQgbWFpbigpIHtcXG5cXHR2ZWM0IHdvcmxkUG9zaXRpb24gPSBtb2RlbE1hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcXG5cXHR2V29ybGRQb3NpdGlvbiA9IHdvcmxkUG9zaXRpb24ueHl6O1xcblxcdGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2J1aWxkL3NoYWRlcnMvdmVydGV4Lmdsc2xcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInVuaWZvcm0gdmVjMyBib3R0b21Db2xvcjtcXG51bmlmb3JtIHZlYzMgdG9wQ29sb3I7XFxudW5pZm9ybSBmbG9hdCBvZmZzZXQ7XFxudW5pZm9ybSBmbG9hdCBleHBvbmVudDtcXG52YXJ5aW5nIHZlYzMgdldvcmxkUG9zaXRpb247XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICBmbG9hdCBoID0gbm9ybWFsaXplKCB2V29ybGRQb3NpdGlvbiArIG9mZnNldCApLnk7XFxuICAgIGZsb2F0IHJCID0gYm90dG9tQ29sb3IueC8yNTUuMDtcXG4gICAgZmxvYXQgZ0IgPSBib3R0b21Db2xvci55LzI1NS4wO1xcbiAgICBmbG9hdCBiQiA9IGJvdHRvbUNvbG9yLnovMjU1LjA7XFxuICAgIHZlYzMgYkNvbG9yID0gdmVjMyhyQixnQixiQik7XFxuICAgIGZsb2F0IHJUID0gdG9wQ29sb3IueC8yNTUuMDtcXG4gICAgZmxvYXQgZ1QgPSB0b3BDb2xvci55LzI1NS4wO1xcbiAgICBmbG9hdCBiVCA9IHRvcENvbG9yLnovMjU1LjA7XFxuICAgIHZlYzMgdENvbG9yID0gdmVjMyhyVCxnVCxiVCk7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoIG1peCggYkNvbG9yLCB0Q29sb3IsIG1heCggcG93KCBtYXgoIGgsIDAuMCApLCBleHBvbmVudCApLCAwLjAgKSApLCAxLjAgKTtcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2J1aWxkL3NoYWRlcnMvZnJhZ21lbnQuZ2xzbFxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9