/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("console.log('Tu lo lograras Diegoo11');\nvar menu = document.querySelector('.bar');\n\nvar changeTaskState = function changeTaskState(event) {\n  menu.classList.toggle('viewbar');\n  var flecha = document.querySelector('.boton');\n  flecha.classList.toggle('contraboton');\n  var opcions = document.querySelector('.hidenopcions');\n  opcions.classList.toggle('opcions');\n};\n\nmenu.addEventListener('click', changeTaskState);\nvar treeline = document.querySelector('.treeline');\n\nvar openline = function openline() {\n  var box = document.querySelector('.box');\n  box.classList.remove('hidenbox');\n};\n\ntreeline.addEventListener('click', openline);\nwindow.addEventListener('click', function (e) {\n  if (e.srcElement.id != 'box' && e.srcElement.id != 'treeline') {\n    box.classList.add('hidenbox');\n  }\n});\nvar btnLeft = document.getElementById('left');\nvar btnRigth = document.getElementById('rigth');\nvar contador = [];\nvar porcentaje = 0;\nvar imgs = document.querySelectorAll('.img');\n\nbtnRigth.onclick = function () {\n  return more();\n};\n\nbtnLeft.onclick = function () {\n  return less();\n};\n\nfunction more() {\n  porcentaje = porcentaje + 100;\n}\n\nfunction less() {\n  porcentaje = porcentaje - 100;\n}\n\nfunction obsGalery() {\n  var timer = setInterval(function () {\n    if (porcentaje > 400) {\n      porcentaje = 0;\n    }\n\n    if (porcentaje < 0) {\n      porcentaje = 400;\n    }\n\n    imgs.forEach(function (img) {\n      img.setAttribute(\"style\", \"transform: translateX(-\".concat(porcentaje, \"%)\"));\n    });\n  }, 100);\n}\n\nobsGalery();\nconsole.log('claro que si');\n\nfunction moveGalery(num) {\n  var timer = setInterval(more, num);\n}\n\nmoveGalery(5000);\nvar btnsG = document.querySelectorAll('.photocircule');\n\nfunction obserber() {\n  var timer = setInterval(obs, 400);\n}\n\nfunction obs() {\n  if (porcentaje === 0) {\n    btnsId(1);\n  }\n\n  if (porcentaje === 100) {\n    btnsId(2);\n  }\n\n  if (porcentaje === 200) {\n    btnsId(3);\n  }\n\n  if (porcentaje === 300) {\n    btnsId(4);\n  }\n\n  if (porcentaje === 400) {\n    btnsId(5);\n  }\n}\n\nobserber();\n\nfunction btnsId(x) {\n  btnsG.forEach(function (btn) {\n    return btn.classList.remove('photomarcado');\n  });\n  var btnId = document.getElementById(\"btn\".concat(x));\n  btnId.classList.add('photomarcado');\n} ////////////////////////////////////////////////////////////////////////////////////////\n\n\nbtnsG.forEach(function (btn) {\n  btn.addEventListener('click', function (e) {\n    var numberId = e.srcElement.id;\n    var posicion = document.getElementById(numberId).getAttribute('data-number');\n    porcentaje = Number(\"\".concat(posicion, \"00\") - 100);\n  });\n});\n\n//# sourceURL=webpack://menu-responsibe/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;