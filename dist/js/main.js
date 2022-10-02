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

/***/ "./src/js/Matrix.js":
/*!**************************!*\
  !*** ./src/js/Matrix.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Matrix = void 0;\nconst Vector3d_1 = __importDefault(__webpack_require__(/*! ./Vector3d */ \"./src/js/Vector3d.js\"));\nclass Matrix {\n    constructor(entries) {\n        this.entries = [];\n        if (entries) {\n            this.entries = entries;\n        }\n    }\n    /**\n     * Will multiply the matrix with a given vector3d and return the result as a vector\n     * @param v The vector to multiply by\n     * @returns A new vector containing the result of the calculation\n     */\n    multVector3D(v) {\n        const x = v.x * this.entries[0][0] +\n            v.y * this.entries[0][1] +\n            v.z * this.entries[0][2];\n        const y = v.x * this.entries[1][0] +\n            v.y * this.entries[1][1] +\n            v.z * this.entries[1][2];\n        const z = v.x * this.entries[2][0] +\n            v.y * this.entries[2][1] +\n            v.z * this.entries[2][2];\n        return new Vector3d_1.default(x, y, z);\n    }\n}\nexports.Matrix = Matrix;\n//# sourceMappingURL=Matrix.js.map\n\n//# sourceURL=webpack://hypercube/./src/js/Matrix.js?");

/***/ }),

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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Matrix_1 = __webpack_require__(/*! ./Matrix */ \"./src/js/Matrix.js\");\nconst Vector2d_1 = __importDefault(__webpack_require__(/*! ./Vector2d */ \"./src/js/Vector2d.js\"));\nclass Vector3d extends Vector2d_1.default {\n    constructor(x = 0, y = 0, z = 0) {\n        super(x, y);\n        this.planeX = 0;\n        this.planeY = 0;\n        this.dist = 5;\n        this.z = z;\n        this.update2DCoordinates();\n    }\n    /**\n     * Will rotate the point around the x-axis\n     * @param angle The angle to rotate in radians\n     */\n    rotateX(angle) {\n        const m = new Matrix_1.Matrix([\n            [1, 0, 0],\n            [0, Math.cos(angle), -Math.sin(angle)],\n            [0, Math.sin(angle), Math.cos(angle)],\n        ]);\n        let calc = m.multVector3D(this);\n        this.x = calc.x;\n        this.y = calc.y;\n        this.z = calc.z;\n        this.update2DCoordinates();\n    }\n    /**\n     * Will rotate the point around the y-axis\n     * @param angle The angle to rotate in radians\n     */\n    rotateY(angle) {\n        const m = new Matrix_1.Matrix([\n            [Math.cos(angle), 0, -Math.sin(angle)],\n            [0, 1, 0],\n            [Math.sin(angle), 0, Math.cos(angle)],\n        ]);\n        let calc = m.multVector3D(this);\n        this.x = calc.x;\n        this.y = calc.y;\n        this.z = calc.z;\n        this.update2DCoordinates();\n    }\n    /**\n     * Will rotate the point around the z-axis\n     * @param angle The angle to rotate in radians\n     */\n    rotateZ(angle) {\n        const m = new Matrix_1.Matrix([\n            [Math.cos(angle), -Math.sin(angle), 0],\n            [Math.sin(angle), Math.cos(angle), 0],\n            [0, 0, 1],\n        ]);\n        const calc = m.multVector3D(this);\n        this.x = calc.x;\n        this.y = calc.y;\n        this.z = calc.z;\n        this.update2DCoordinates();\n    }\n    /**\n     * Calculate the visual position of the 3d Vector in a 2d Space\n     * @returns An object containing the x and y points mapped on a 2d plane\n     */\n    update2DCoordinates() {\n        const factor = 200;\n        //const w = 1;\n        const w = 1 / (this.dist - this.z);\n        this.planeX = this.x * factor * w + 250;\n        this.planeY = this.y * factor * w + 250;\n    }\n    /**\n     * Draws the Vector on a 2d Plane\n     * @param ctx The context to draw onto\n     * @param color The color the dot should have\n     */\n    draw(ctx, color) {\n        ctx.fillStyle = color || \"#fff\";\n        ctx.fillRect(this.planeX, this.planeY, 2, 2);\n    }\n}\nexports[\"default\"] = Vector3d;\n//# sourceMappingURL=Vector3d.js.map\n\n//# sourceURL=webpack://hypercube/./src/js/Vector3d.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Vector3d_1 = __importDefault(__webpack_require__(/*! ./Vector3d */ \"./src/js/Vector3d.js\"));\nconst canvas = document.getElementById(\"canvas\");\nconst ctx = canvas.getContext(\"2d\");\nconst width = canvas.width;\nconst height = canvas.height;\nconst points = [\n    new Vector3d_1.default(-1, -1, -1),\n    new Vector3d_1.default(1, -1, -1),\n    new Vector3d_1.default(1, 1, -1),\n    new Vector3d_1.default(-1, 1, -1),\n    new Vector3d_1.default(-1, -1, 1),\n    new Vector3d_1.default(1, -1, 1),\n    new Vector3d_1.default(1, 1, 1),\n    new Vector3d_1.default(-1, 1, 1),\n];\nconst update = () => {\n    ctx.clearRect(0, 0, width, height);\n    for (let i = 0; i < 4; i++) {\n        connect(points[i], points[(i + 1) % 4], ctx);\n        connect(points[i + 4], points[((i + 1) % 4) + 4], ctx);\n        connect(points[i], points[i + 4], ctx);\n    }\n    points.forEach((p) => {\n        //p.rotateZ(0.1);\n        p.rotateX(0.2);\n        p.rotateY(0.3);\n    });\n};\nwindow.addEventListener(\"keydown\", e => {\n    if (e.key === \"i\") {\n        points.forEach(p => p.dist -= 0.1);\n    }\n    else if (e.key === \"o\") {\n        points.forEach(p => p.dist += 0.1);\n    }\n});\n/**\n * Will connect two 3d Points with a line\n * @param p1 The first point\n * @param p2 The second point\n * @param ctx The cavas context to draw the connection on\n */\nconst connect = (p1, p2, ctx) => {\n    ctx.strokeStyle = \"#fff\";\n    ctx.beginPath();\n    ctx.moveTo(p1.planeX, p1.planeY);\n    ctx.lineTo(p2.planeX, p2.planeY);\n    ctx.stroke();\n    ctx.closePath();\n};\nsetInterval(() => {\n    update();\n}, 100);\n//# sourceMappingURL=main.js.map\n\n//# sourceURL=webpack://hypercube/./src/js/main.js?");

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