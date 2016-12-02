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

	"use strict";
	__webpack_require__(1);
	var WeatherCitiesLoader_1 = __webpack_require__(5);
	var weatherCitiesLoader = new WeatherCitiesLoader_1.WeatherCitiesLoader();
	weatherCitiesLoader.loadCities();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "table {\r\n    text-align: center;\r\n    width: 100%;\r\n    margin-top: 20px;\r\n    border-collapse: collapse;\r\n    margin-bottom: 30px;\r\n}\r\n\r\ntd {\r\n    width:33%;\r\n    border: 1px solid black;\r\n    padding: 10px;\r\n}\r\n\r\n.position {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    color: red;\r\n}", ""]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Coordinate_1 = __webpack_require__(6);
	var MainWeather_1 = __webpack_require__(7);
	var Weather_1 = __webpack_require__(8);
	var Wind_1 = __webpack_require__(9);
	var Cloud_1 = __webpack_require__(10);
	var WeatherRowsPrinter_1 = __webpack_require__(11);
	var MapRender_1 = __webpack_require__(12);
	var WeatherCitiesLoader = (function () {
	    function WeatherCitiesLoader() {
	    }
	    WeatherCitiesLoader.prototype.loadCities = function () {
	        navigator.geolocation.getCurrentPosition(this.getWeatherCitiesList);
	    };
	    WeatherCitiesLoader.prototype.getWeatherCitiesList = function (pos) {
	        document.getElementsByClassName("latitude")[0].innerHTML = pos.coords.latitude.toString();
	        document.getElementsByClassName("longitude")[0].innerHTML = pos.coords.longitude.toString();
	        var mapRender = new MapRender_1.MapRender();
	        mapRender.showMap(pos);
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET', 'http://api.openweathermap.org/data/2.5/find?lat=' +
	            pos.coords.latitude + '&lon=' + pos.coords.longitude +
	            '&cnt=50&appid=5e704282bf38a873419932de2553f5bb', true);
	        xhr.send();
	        xhr.onreadystatechange = function () {
	            if (xhr.status === 200 && xhr.responseText) {
	                var response = xhr.responseText;
	                var data = response !== '' ? JSON.parse(xhr.responseText) : { list: [] };
	                var list = [];
	                for (var i = 0; i < data.list.length; i++) {
	                    var coordinate = new Coordinate_1.Coordinate(data.list[i].coord.lat, data.list[i].coord.lon);
	                    var mainParams = new MainWeather_1.MainWeather(data.list[i].main.temp, data.list[i].main.humidity, data.list[i].main.pressure);
	                    var wind = new Wind_1.Wind(data.list[i].wind.deg, data.list[i].wind.speed);
	                    var clouds = new Cloud_1.Cloud(data.list[i].clouds.all);
	                    var weather = new Weather_1.Weather(data.list[i].name, coordinate, mainParams, wind, clouds);
	                    list.push(weather);
	                }
	                var weatherRowsPrinter = new WeatherRowsPrinter_1.WeatherRowsPrinter();
	                weatherRowsPrinter.printWeatherTable(list);
	            }
	        };
	    };
	    return WeatherCitiesLoader;
	}());
	exports.WeatherCitiesLoader = WeatherCitiesLoader;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	var Coordinate = (function () {
	    function Coordinate(latitude, longitude) {
	        this.latitude = latitude;
	        this.longitude = longitude;
	    }
	    Coordinate.prototype.getLatitude = function () {
	        return this.latitude;
	    };
	    Coordinate.prototype.setLatitude = function (latitude) {
	        this.latitude = latitude;
	    };
	    Coordinate.prototype.getLongitude = function () {
	        return this.longitude;
	    };
	    Coordinate.prototype.setLongitude = function (longitude) {
	        this.longitude = longitude;
	    };
	    return Coordinate;
	}());
	exports.Coordinate = Coordinate;


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	var MainWeather = (function () {
	    function MainWeather(temperature, humidity, pressure) {
	        this.temperature = temperature;
	        this.humidity = humidity;
	        this.pressure = pressure;
	    }
	    MainWeather.prototype.getTemperature = function () {
	        return this.temperature;
	    };
	    MainWeather.prototype.setTemperature = function (temperature) {
	        this.temperature = temperature;
	    };
	    MainWeather.prototype.getHumidity = function () {
	        return this.humidity;
	    };
	    MainWeather.prototype.setHumidity = function (humidity) {
	        this.humidity = humidity;
	    };
	    MainWeather.prototype.getPressure = function () {
	        return this.pressure;
	    };
	    MainWeather.prototype.setPressure = function (pressure) {
	        this.pressure = pressure;
	    };
	    return MainWeather;
	}());
	exports.MainWeather = MainWeather;


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	var Weather = (function () {
	    function Weather(city, coordinate, mainParams, wind, cloud) {
	        this.city = city;
	        this.coordinate = coordinate;
	        this.mainParams = mainParams;
	        this.wind = wind;
	        this.cloud = cloud;
	    }
	    Weather.prototype.getCity = function () {
	        return this.city;
	    };
	    Weather.prototype.setCity = function (city) {
	        this.city = city;
	    };
	    Weather.prototype.getCoordinate = function () {
	        return this.coordinate;
	    };
	    Weather.prototype.setCoordinate = function (coordinate) {
	        this.coordinate = coordinate;
	    };
	    Weather.prototype.getMainParams = function () {
	        return this.mainParams;
	    };
	    Weather.prototype.setMainParams = function (mainParams) {
	        this.mainParams = mainParams;
	    };
	    Weather.prototype.getWind = function () {
	        return this.wind;
	    };
	    Weather.prototype.setWind = function (wind) {
	        this.wind = wind;
	    };
	    Weather.prototype.getCloud = function () {
	        return this.cloud;
	    };
	    Weather.prototype.setCloud = function (cloud) {
	        this.cloud = cloud;
	    };
	    return Weather;
	}());
	exports.Weather = Weather;


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	var Wind = (function () {
	    function Wind(degree, speed) {
	        this.degree = degree;
	        this.speed = speed;
	    }
	    Wind.prototype.getDegree = function () {
	        return this.degree;
	    };
	    Wind.prototype.setDegree = function (degree) {
	        this.degree = degree;
	    };
	    Wind.prototype.getSpeed = function () {
	        return this.speed;
	    };
	    Wind.prototype.setSpeed = function (speed) {
	        this.speed = speed;
	    };
	    return Wind;
	}());
	exports.Wind = Wind;


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	var Cloud = (function () {
	    function Cloud(all) {
	        this.all = all;
	    }
	    Cloud.prototype.getAll = function () {
	        return this.all;
	    };
	    Cloud.prototype.setAll = function (all) {
	        this.all = all;
	    };
	    return Cloud;
	}());
	exports.Cloud = Cloud;


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	var WeatherRowsPrinter = (function () {
	    function WeatherRowsPrinter() {
	    }
	    WeatherRowsPrinter.prototype.printWeatherTable = function (list) {
	        var tableRow = '';
	        for (var i = 0; i < list.length; i++) {
	            tableRow += '<tr><td>' + list[i].getCity() +
	                '</td><td>' + list[i].getCoordinate().getLatitude() +
	                '</td><td>' + list[i].getCoordinate().getLongitude() +
	                '</td><td>' + list[i].getMainParams().getTemperature() +
	                '</td><td>' + list[i].getMainParams().getHumidity() +
	                '</td><td>' + list[i].getMainParams().getPressure() +
	                '</td><td>' + list[i].getWind().getDegree() +
	                '</td><td>' + list[i].getWind().getSpeed() +
	                '</td><td>' + list[i].getCloud().getAll() +
	                '</td></tr>';
	        }
	        document.getElementsByClassName("weather-table-body")[0].innerHTML = tableRow;
	    };
	    return WeatherRowsPrinter;
	}());
	exports.WeatherRowsPrinter = WeatherRowsPrinter;


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	var MapRender = (function () {
	    function MapRender() {
	    }
	    MapRender.prototype.showMap = function (pos) {
	        var mapCanvas = document.getElementById("map");
	        var mapOptions = {
	            center: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
	            zoom: 5
	        };
	        var map = new google.maps.Map(mapCanvas, mapOptions);
	    };
	    return MapRender;
	}());
	exports.MapRender = MapRender;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map