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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n//video connect\r\ntry {\r\n    var SERVICE_TYPE = void 0;\r\n    (function (SERVICE_TYPE) {\r\n        SERVICE_TYPE[SERVICE_TYPE[\"LINK\"] = 0] = \"LINK\";\r\n        SERVICE_TYPE[SERVICE_TYPE[\"CHECK\"] = 1] = \"CHECK\";\r\n    })(SERVICE_TYPE || (SERVICE_TYPE = {}));\r\n    var SERVICE_LIST_1 = {\r\n        //サービスのリスト　ここに文字列を追加すると登録できるサービスを増やせる\r\n        zoom: {\r\n            type: SERVICE_TYPE.LINK,\r\n        },\r\n        teams: {\r\n            type: SERVICE_TYPE.LINK,\r\n        },\r\n        duet: {\r\n            type: SERVICE_TYPE.CHECK,\r\n        },\r\n    };\r\n    //「Duetへアクセス」リンクを表題に追加する\r\n    var h4s = document.getElementsByTagName(\"h4\");\r\n    for (var i_1 = 0; i_1 < h4s.length; i_1++) {\r\n        var element = h4s[i_1];\r\n        if (element.innerText != \"時間割表 (表示する年度/学期を選択)\")\r\n            continue;\r\n        var duetLink = document.createElement(\"a\");\r\n        duetLink.setAttribute(\"target\", \"_blank\");\r\n        duetLink.setAttribute(\"href\", \"https://duet.doshisha.ac.jp/gakusei/html/fb/fb010/FB01001G.html\");\r\n        duetLink.appendChild(document.createTextNode(\"Duetへアクセス\"));\r\n        duetLink.style.marginLeft = \"10px\";\r\n        element.appendChild(duetLink);\r\n    }\r\n    //授業カレンダーに各サービスの登録ボタン/アクセスボタンを設置\r\n    var tds = document.querySelectorAll(\"table.schedule-table > tbody > tr > td\");\r\n    var i_2 = 0; //マスのインデックス\r\n    tds.forEach(function (td) {\r\n        if (td.getAttribute(\"valign\") != \"top\" && td.classList[0] != \"blank\")\r\n            return;\r\n        console.log(td);\r\n        //クラスIDを決定（システムから）\r\n        //別に変数iを使う方式に統一してもいいと思う\r\n        var classId = \"None\";\r\n        if (td.classList[0] == \"blank\") {\r\n            //履修登録の無いマスの場合\r\n            classId = i_2.toString();\r\n        }\r\n        else {\r\n            //履修登録がある場合\r\n            //td内のaタグのリンクから生成\r\n            classId = td.getElementsByTagName(\"a\")[0].href.split(\"/\")[5];\r\n        }\r\n        i_2++;\r\n        //localStorageからデータ取得\r\n        var classInfo = JSON.parse(localStorage.getItem(classId));\r\n        if (classInfo == null)\r\n            classInfo = {};\r\n        //データ形式の整合性を取る\r\n        Object.keys(SERVICE_LIST_1).forEach(function (service) {\r\n            if (classInfo[service] == undefined)\r\n                classInfo[service] = null;\r\n        });\r\n        console.log(classInfo);\r\n        //各サービスのボタンを追加する\r\n        Object.keys(classInfo).forEach(function (service) {\r\n            var link = classInfo[service];\r\n            //サービスへのリンクを追加\r\n            if (link == null) {\r\n                //未登録の場合\r\n                var button_1 = createButton(service + \"登録\", function () { }, \"lightgray\");\r\n                button_1.onclick = function () {\r\n                    var url = prompt(service + \"のURLを入力\");\r\n                    classInfo[service] = url;\r\n                    localStorage.setItem(classId, JSON.stringify(classInfo));\r\n                    button_1.remove();\r\n                    td.appendChild(createButton(service + \"アクセス\", function () { return openTab(classInfo[service]); }, \"lightgreen\"));\r\n                    return;\r\n                };\r\n                td.appendChild(button_1);\r\n            }\r\n            else {\r\n                //登録済みの場合\r\n                td.appendChild(createButton(service + \"アクセス\", function () { return openTab(classInfo[service]); }, \"lightgreen\"));\r\n            }\r\n        });\r\n    });\r\n}\r\ncatch (error) {\r\n    console.log(error);\r\n}\r\nfunction openTab(url) {\r\n    var link = document.createElement(\"a\");\r\n    link.setAttribute(\"target\", \"_blank\");\r\n    link.setAttribute(\"href\", url);\r\n    link.click();\r\n    return;\r\n}\r\nfunction createButton(text, callback, bgColor) {\r\n    var button = document.createElement(\"button\");\r\n    //button.type = \"button\";\r\n    button.innerText = text;\r\n    button.style.backgroundColor = bgColor;\r\n    button.onclick = function (e) {\r\n        e.stopPropagation();\r\n        e.preventDefault();\r\n        callback();\r\n    };\r\n    return button;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });