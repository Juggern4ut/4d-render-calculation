/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Vector2d.js":
/*!****************************!*\
  !*** ./src/js/Vector2d.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Vector2d {\n    constructor(x = 0, y = 0) {\n        this.x = x;\n        this.y = y;\n    }\n    draw(ctx) {\n        ctx.fillStyle = \"#fff\";\n        ctx.fillRect(this.x, this.y, 2, 2);\n    }\n}\nexports[\"default\"] = Vector2d;\n//# sourceMappingURL=Vector2d.js.map\n\n//# sourceURL=webpack://hypercube/./src/js/Vector2d.js?");

/***/ }),

/***/ "./src/js/Vector3d.js":
/*!****************************!*\
  !*** ./src/js/Vector3d.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Vector2d_1 = __importDefault(__webpack_require__(/*! ./Vector2d */ \"./src/js/Vector2d.js\"));\nclass Vector3d extends Vector2d_1.default {\n    constructor(x = 0, y = 0, z = 0) {\n        super(x, y);\n        this.planeX = 0;\n        this.planeY = 0;\n        this.z = z;\n        this.update2DCoordinates();\n    }\n    rotateX(angle) {\n        const matrix = [\n            [1, 0, 0],\n            [0, Math.cos(angle), -Math.sin(angle)],\n            [0, Math.sin(angle), Math.cos(angle)],\n        ];\n        let tmpx = this.x * matrix[0][0] + this.y * matrix[0][1] + this.z * matrix[0][2];\n        let tmpy = this.x * matrix[1][0] + this.y * matrix[1][1] + this.z * matrix[1][2];\n        let tmpz = this.x * matrix[2][0] + this.y * matrix[2][1] + this.z * matrix[2][2];\n        this.x = tmpx;\n        this.y = tmpy;\n        this.z = tmpz;\n        this.update2DCoordinates();\n    }\n    rotateY(angle) {\n        const matrix = [\n            [Math.cos(angle), 0, -Math.sin(angle)],\n            [0, 1, 0],\n            [Math.sin(angle), 0, Math.cos(angle)],\n        ];\n        let tmpx = this.x * matrix[0][0] + this.y * matrix[0][1] + this.z * matrix[0][2];\n        let tmpy = this.x * matrix[1][0] + this.y * matrix[1][1] + this.z * matrix[1][2];\n        let tmpz = this.x * matrix[2][0] + this.y * matrix[2][1] + this.z * matrix[2][2];\n        this.x = tmpx;\n        this.y = tmpy;\n        this.z = tmpz;\n        this.update2DCoordinates();\n    }\n    /**\n     * Will rotate the point around the z-axis\n     * @param angle The angle to rotate\n     */\n    rotateZ(angle) {\n        const matrix = [\n            [Math.cos(angle), -Math.sin(angle), 0],\n            [Math.sin(angle), Math.cos(angle), 0],\n            [0, 0, 1],\n        ];\n        let tmpx = this.x * matrix[0][0] + this.y * matrix[0][1] + this.z * matrix[0][2];\n        let tmpy = this.x * matrix[1][0] + this.y * matrix[1][1] + this.z * matrix[1][2];\n        let tmpz = this.x * matrix[2][0] + this.y * matrix[2][1] + this.z * matrix[2][2];\n        this.x = tmpx;\n        this.y = tmpy;\n        this.z = tmpz;\n        this.update2DCoordinates();\n    }\n    /**\n     * CAlculate the visual re\n     * @returns An object containing the x and y points mapped on a 2d plane\n     */\n    update2DCoordinates() {\n        const dist = 5;\n        const factor = 200;\n        //const w = 1;\n        const w = 1 / (dist - this.z);\n        this.planeX = this.x * factor * w + 250;\n        this.planeY = this.y * factor * w + 250;\n    }\n    /**\n     * Draws the Vector on a 2d Plane\n     * @param ctx The context to draw onto\n     * @param color The color the dot should have\n     */\n    draw(ctx, color) {\n        ctx.fillStyle = color || \"#fff\";\n        ctx.fillRect(this.planeX, this.planeY, 2, 2);\n    }\n}\nexports[\"default\"] = Vector3d;\n//# sourceMappingURL=Vector3d.js.map\n\n//# sourceURL=webpack://hypercube/./src/js/Vector3d.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Vector3d_1 = __importDefault(__webpack_require__(/*! ./Vector3d */ \"./src/js/Vector3d.js\"));\nconst canvas = document.getElementById(\"canvas\");\nconst ctx = canvas.getContext(\"2d\");\nconst width = canvas.width;\nconst height = canvas.height;\nconst points = [];\npoints[0] = new Vector3d_1.default(-1, -1, -1);\npoints[1] = new Vector3d_1.default(1, -1, -1);\npoints[2] = new Vector3d_1.default(1, 1, -1);\npoints[3] = new Vector3d_1.default(-1, 1, -1);\npoints[4] = new Vector3d_1.default(-1, -1, 1);\npoints[5] = new Vector3d_1.default(1, -1, 1);\npoints[6] = new Vector3d_1.default(1, 1, 1);\npoints[7] = new Vector3d_1.default(-1, 1, 1);\nconst p1 = points[0];\nconst p2 = points[1];\nconst p3 = points[2];\nconst p4 = points[3];\nconst p5 = points[4];\nconst p6 = points[5];\nconst p7 = points[6];\nconst p8 = points[7];\nconst update = () => {\n    ctx.clearRect(0, 0, width, height);\n    connect(p1.planeX, p1.planeY, p2.planeX, p2.planeY, ctx);\n    connect(p2.planeX, p2.planeY, p3.planeX, p3.planeY, ctx);\n    connect(p3.planeX, p3.planeY, p4.planeX, p4.planeY, ctx);\n    connect(p4.planeX, p4.planeY, p1.planeX, p1.planeY, ctx);\n    connect(p5.planeX, p5.planeY, p6.planeX, p6.planeY, ctx);\n    connect(p6.planeX, p6.planeY, p7.planeX, p7.planeY, ctx);\n    connect(p7.planeX, p7.planeY, p8.planeX, p8.planeY, ctx);\n    connect(p8.planeX, p8.planeY, p5.planeX, p5.planeY, ctx);\n    connect(p1.planeX, p1.planeY, p5.planeX, p5.planeY, ctx);\n    connect(p2.planeX, p2.planeY, p6.planeX, p6.planeY, ctx);\n    connect(p3.planeX, p3.planeY, p7.planeX, p7.planeY, ctx);\n    connect(p4.planeX, p4.planeY, p8.planeX, p8.planeY, ctx);\n    points.forEach((p) => {\n        p.rotateZ(0.1);\n        p.rotateX(0.2);\n        p.rotateY(0.3);\n    });\n};\nconst connect = (x1, y1, x2, y2, ctx) => {\n    ctx.strokeStyle = \"#fff\";\n    ctx.beginPath();\n    ctx.moveTo(x1, y1);\n    ctx.lineTo(x2, y2);\n    ctx.stroke();\n    ctx.closePath();\n};\nsetInterval(() => {\n    update();\n}, 100);\n//# sourceMappingURL=main.js.map\n\n//# sourceURL=webpack://hypercube/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;