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

eval("console.log('Tu lo lograras Diegoo11')\n\nconst menu = document.querySelector('.bar')\n\nconst changeTaskState = event => {\n    menu.classList.toggle('viewbar');\n    let flecha = document.querySelector('.boton')\n    flecha.classList.toggle('contraboton')\n    let opcions = document.querySelector('.hidenopcions')\n    opcions.classList.toggle('opcions')\n    \n};\n\nmenu.addEventListener('click', changeTaskState)\n\nlet treeline = document.querySelector('.treeline')\n\nconst openline = ()=>{\n    let box = document.querySelector('.box')\n    box.classList.remove('hidenbox')\n}\n\ntreeline.addEventListener('click', openline)\n\nwindow.addEventListener('click', (e)=>{\n    if(e.srcElement.id != 'box'&& e.srcElement.id != 'treeline'){\n        box.classList.add('hidenbox')\n    }\n})\n\n\nconst btnLeft = document.getElementById('left')\nconst btnRigth = document.getElementById('rigth')\nlet contador = []\nlet porcentaje = 0\nconst imgs = document.querySelectorAll('.img')\nbtnRigth.onclick = ()=>more()\nbtnLeft.onclick = ()=>less()\nfunction more(){\n    porcentaje = porcentaje + 100\n}\n\nfunction less(){\n    porcentaje = porcentaje -100\n}\n\nfunction obsGalery(){\n    let timer = setInterval(()=>{\n        if(porcentaje>400){\n            porcentaje = 0\n        }\n        if(porcentaje<0){\n            porcentaje = 400\n        }\n        imgs.forEach(img => {img.setAttribute(\"style\",`transform: translateX(-${porcentaje}%)`)})\n    },100)\n}\nobsGalery()\nconsole.log('claro que si')\n\nfunction moveGalery (num){\n    let timer = setInterval(more, num)\n}\n\nmoveGalery(5000)\n\nlet btnsG = document.querySelectorAll('.photocircule')\n\nfunction obserber(){\n    let timer =setInterval(obs,400)\n}\nfunction obs(){\n    if(porcentaje === 0){btnsId(1)}\n    if(porcentaje === 100){btnsId(2)}\n    if(porcentaje === 200){btnsId(3)}\n    if(porcentaje === 300){btnsId(4)}\n    if(porcentaje === 400){btnsId(5)}\n}\n\nobserber()\n\nfunction btnsId (x){\n    btnsG.forEach(btn=> btn.classList.remove('photomarcado'))\n    let btnId = document.getElementById(`btn${x}`)\n    btnId.classList.add('photomarcado')\n}\n////////////////////////////////////////////////////////////////////////////////////////\nbtnsG.forEach(btn=>{\n    btn.addEventListener('click',(e)=>{\n        let numberId = e.srcElement.id\n        let posicion = document.getElementById(numberId).getAttribute('data-number')\n        porcentaje = Number(`${posicion}00` -100)\n    })\n})\n\n\n\n//# sourceURL=webpack://menu-responsibe/./src/index.js?");

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