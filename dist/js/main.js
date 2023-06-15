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

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Matrix = void 0;\r\nconst Vector3d_1 = __importDefault(__webpack_require__(/*! ./Vector3d */ \"./src/js/Vector3d.js\"));\r\nconst Vector4d_1 = __importDefault(__webpack_require__(/*! ./Vector4d */ \"./src/js/Vector4d.js\"));\r\nclass Matrix {\r\n    constructor(entries) {\r\n        this.entries = [];\r\n        if (entries) {\r\n            this.entries = entries;\r\n        }\r\n    }\r\n    /**\r\n     * Will multiply the matrix with a given vector3d and return the result as a vector\r\n     * @param v The vector to multiply by\r\n     * @returns A new vector containing the result of the calculation\r\n     */\r\n    multVector3D(v) {\r\n        const x = v.x * this.entries[0][0] +\r\n            v.y * this.entries[0][1] +\r\n            v.z * this.entries[0][2];\r\n        const y = v.x * this.entries[1][0] +\r\n            v.y * this.entries[1][1] +\r\n            v.z * this.entries[1][2];\r\n        const z = v.x * this.entries[2][0] +\r\n            v.y * this.entries[2][1] +\r\n            v.z * this.entries[2][2];\r\n        return new Vector3d_1.default(x, y, z);\r\n    }\r\n    /**\r\n     * Will multiply the matrix with a given vector3d and return the result as a vector\r\n     * @param v The vector to multiply by\r\n     * @returns A new vector containing the result of the calculation\r\n     */\r\n    multVector4D(v) {\r\n        const x = v.x * this.entries[0][0] +\r\n            v.y * this.entries[0][1] +\r\n            v.z * this.entries[0][2] +\r\n            v.w * this.entries[0][3];\r\n        const y = v.x * this.entries[1][0] +\r\n            v.y * this.entries[1][1] +\r\n            v.z * this.entries[1][2] +\r\n            v.w * this.entries[1][3];\r\n        const z = v.x * this.entries[2][0] +\r\n            v.y * this.entries[2][1] +\r\n            v.z * this.entries[2][2] +\r\n            v.w * this.entries[2][3];\r\n        const w = v.x * this.entries[3][0] +\r\n            v.y * this.entries[3][1] +\r\n            v.z * this.entries[3][2] +\r\n            v.w * this.entries[3][3];\r\n        return new Vector4d_1.default(x, y, z, w);\r\n    }\r\n}\r\nexports.Matrix = Matrix;\r\n//# sourceMappingURL=Matrix.js.map\n\n//# sourceURL=webpack://hypercube/./src/js/Matrix.js?");

/***/ }),

/***/ "./src/js/Vector2d.js":
/*!****************************!*\
  !*** ./src/js/Vector2d.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass Vector2d {\r\n    constructor(x = 0, y = 0) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    draw(ctx) {\r\n        ctx.fillStyle = \"#fff\";\r\n        ctx.fillRect(this.x, this.y, 2, 2);\r\n    }\r\n}\r\nexports[\"default\"] = Vector2d;\r\n//# sourceMappingURL=Vector2d.js.map\n\n//# sourceURL=webpack://hypercube/./src/js/Vector2d.js?");

/***/ }),

/***/ "./src/js/Vector3d.js":
/*!****************************!*\
  !*** ./src/js/Vector3d.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst Matrix_1 = __webpack_require__(/*! ./Matrix */ \"./src/js/Matrix.js\");\r\nconst Vector2d_1 = __importDefault(__webpack_require__(/*! ./Vector2d */ \"./src/js/Vector2d.js\"));\r\nclass Vector3d extends Vector2d_1.default {\r\n    constructor(x = 0, y = 0, z = 0) {\r\n        super(x, y);\r\n        this.planeX = 0;\r\n        this.planeY = 0;\r\n        this.dist = 5;\r\n        this.z = z;\r\n        this.update2DCoordinates();\r\n    }\r\n    /**\r\n     * Will rotate the point around the x-axis\r\n     * @param angle The angle to rotate in radians\r\n     */\r\n    rotateX(angle) {\r\n        const m = new Matrix_1.Matrix([\r\n            [1, 0, 0],\r\n            [0, Math.cos(angle), -Math.sin(angle)],\r\n            [0, Math.sin(angle), Math.cos(angle)],\r\n        ]);\r\n        let calc = m.multVector3D(this);\r\n        this.x = calc.x;\r\n        this.y = calc.y;\r\n        this.z = calc.z;\r\n        this.update2DCoordinates();\r\n    }\r\n    /**\r\n     * Will rotate the point around the y-axis\r\n     * @param angle The angle to rotate in radians\r\n     */\r\n    rotateY(angle) {\r\n        const m = new Matrix_1.Matrix([\r\n            [Math.cos(angle), 0, -Math.sin(angle)],\r\n            [0, 1, 0],\r\n            [Math.sin(angle), 0, Math.cos(angle)],\r\n        ]);\r\n        let calc = m.multVector3D(this);\r\n        this.x = calc.x;\r\n        this.y = calc.y;\r\n        this.z = calc.z;\r\n        this.update2DCoordinates();\r\n    }\r\n    /**\r\n     * Will rotate the point around the z-axis\r\n     * @param angle The angle to rotate in radians\r\n     */\r\n    rotateZ(angle) {\r\n        const m = new Matrix_1.Matrix([\r\n            [Math.cos(angle), -Math.sin(angle), 0],\r\n            [Math.sin(angle), Math.cos(angle), 0],\r\n            [0, 0, 1],\r\n        ]);\r\n        const calc = m.multVector3D(this);\r\n        this.x = calc.x;\r\n        this.y = calc.y;\r\n        this.z = calc.z;\r\n        this.update2DCoordinates();\r\n    }\r\n    /**\r\n     * Calculate the visual position of the 3d Vector in a 2d Space\r\n     * @returns An object containing the x and y points mapped on a 2d plane\r\n     */\r\n    update2DCoordinates() {\r\n        const factor = 200;\r\n        //const w = 1;\r\n        const w = 1 / (this.dist - this.z);\r\n        this.planeX = this.x * factor * w + 250;\r\n        this.planeY = this.y * factor * w + 250;\r\n    }\r\n    /**\r\n     * Draws the Vector on a 2d Plane\r\n     * @param ctx The context to draw onto\r\n     * @param color The color the dot should have\r\n     */\r\n    draw(ctx, color) {\r\n        ctx.fillStyle = color || \"#fff\";\r\n        ctx.fillRect(this.planeX, this.planeY, 2, 2);\r\n    }\r\n}\r\nexports[\"default\"] = Vector3d;\r\n//# sourceMappingURL=Vector3d.js.map\n\n//# sourceURL=webpack://hypercube/./src/js/Vector3d.js?");

/***/ }),

/***/ "./src/js/Vector4d.js":
/*!****************************!*\
  !*** ./src/js/Vector4d.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst Matrix_1 = __webpack_require__(/*! ./Matrix */ \"./src/js/Matrix.js\");\r\nconst Vector3d_1 = __importDefault(__webpack_require__(/*! ./Vector3d */ \"./src/js/Vector3d.js\"));\r\nclass Vector4d extends Vector3d_1.default {\r\n    constructor(x = 0, y = 0, z = 0, w = 0) {\r\n        super(x, y, z);\r\n        this.w = w;\r\n        this.dist = 4;\r\n        this.factor = 1000;\r\n    }\r\n    /**\r\n     * Will rotate the point around the z-axis\r\n     * @param angle The angle to rotate in radians\r\n     */\r\n    rotateXY(angle) {\r\n        const m = new Matrix_1.Matrix([\r\n            [Math.cos(angle), -Math.sin(angle), 0, 0],\r\n            [Math.sin(angle), Math.cos(angle), 0, 0],\r\n            [0, 0, 1, 0],\r\n            [0, 0, 0, 1],\r\n        ]);\r\n        const calc = m.multVector4D(this);\r\n        this.x = calc.x;\r\n        this.y = calc.y;\r\n        this.z = calc.z;\r\n        this.w = calc.w;\r\n        this.update2DCoordinates();\r\n    }\r\n    /**\r\n     * Will rotate the point around the x-axis\r\n     * @param angle The angle to rotate in radians\r\n     */\r\n    rotateXZ(angle) {\r\n        const m = new Matrix_1.Matrix([\r\n            [Math.cos(angle), 0, -Math.sin(angle), 0],\r\n            [0, 1, 0, 0],\r\n            [Math.sin(angle), 0, Math.cos(angle), 0],\r\n            [0, 0, 0, 1],\r\n        ]);\r\n        const calc = m.multVector4D(this);\r\n        this.x = calc.x;\r\n        this.y = calc.y;\r\n        this.z = calc.z;\r\n        this.w = calc.w;\r\n        this.update2DCoordinates();\r\n    }\r\n    /**\r\n     * Will rotate the point around the w-axis\r\n     * @param angle The angle to rotate in radians\r\n     */\r\n    rotateXW(angle) {\r\n        const m = new Matrix_1.Matrix([\r\n            [Math.cos(angle), 0, 0, -Math.sin(angle)],\r\n            [0, 1, 0, 0],\r\n            [0, 0, 1, 0],\r\n            [Math.sin(angle), 0, 0, Math.cos(angle)],\r\n        ]);\r\n        const calc = m.multVector4D(this);\r\n        this.x = calc.x;\r\n        this.y = calc.y;\r\n        this.z = calc.z;\r\n        this.w = calc.w;\r\n        this.update2DCoordinates();\r\n    }\r\n    /**\r\n     * Will rotate the point around the y-axis\r\n     * @param angle The angle to rotate in radians\r\n     */\r\n    rotateZW(angle) {\r\n        const m = new Matrix_1.Matrix([\r\n            [1, 0, 0, 0],\r\n            [0, 1, 0, 0],\r\n            [0, 0, Math.cos(angle), -Math.sin(angle)],\r\n            [0, 0, Math.sin(angle), Math.cos(angle)],\r\n        ]);\r\n        const calc = m.multVector4D(this);\r\n        this.x = calc.x;\r\n        this.y = calc.y;\r\n        this.z = calc.z;\r\n        this.w = calc.w;\r\n        this.update2DCoordinates();\r\n    }\r\n    /**\r\n     * Calculate the visual position of the 3d Vector in a 2d Space\r\n     * @returns An object containing the x and y points mapped on a 2d plane\r\n     */\r\n    update2DCoordinates() {\r\n        //const w = 1;\r\n        const w = 1 / (this.dist - this.w);\r\n        const projection3D = {\r\n            x: this.x * w,\r\n            y: this.y * w,\r\n            z: this.z * w,\r\n        };\r\n        const w2 = 1 / (this.dist - this.z);\r\n        this.planeX = projection3D.x * this.factor * w2 + 250;\r\n        this.planeY = projection3D.y * this.factor * w2 + 250;\r\n    }\r\n}\r\nexports[\"default\"] = Vector4d;\r\n//# sourceMappingURL=Vector4d.js.map\n\n//# sourceURL=webpack://hypercube/./src/js/Vector4d.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst Vector4d_1 = __importDefault(__webpack_require__(/*! ./Vector4d */ \"./src/js/Vector4d.js\"));\r\nconst canvas = document.getElementById(\"canvas\");\r\nconst ctx = canvas.getContext(\"2d\");\r\nconst checkboxRotateX = document.getElementById(\"rotateX\");\r\nconst checkboxRotateY = document.getElementById(\"rotateY\");\r\nconst checkboxRotateZ = document.getElementById(\"rotateZ\");\r\nconst checkboxRotateW = document.getElementById(\"rotateW\");\r\nconst width = canvas.width;\r\nconst height = canvas.height;\r\nconst points = [\r\n    new Vector4d_1.default(-1, -1, -1, -1),\r\n    new Vector4d_1.default(1, -1, -1, -1),\r\n    new Vector4d_1.default(1, 1, -1, -1),\r\n    new Vector4d_1.default(-1, 1, -1, -1),\r\n    new Vector4d_1.default(-1, -1, 1, -1),\r\n    new Vector4d_1.default(1, -1, 1, -1),\r\n    new Vector4d_1.default(1, 1, 1, -1),\r\n    new Vector4d_1.default(-1, 1, 1, -1),\r\n    new Vector4d_1.default(-1, -1, -1, 1),\r\n    new Vector4d_1.default(1, -1, -1, 1),\r\n    new Vector4d_1.default(1, 1, -1, 1),\r\n    new Vector4d_1.default(-1, 1, -1, 1),\r\n    new Vector4d_1.default(-1, -1, 1, 1),\r\n    new Vector4d_1.default(1, -1, 1, 1),\r\n    new Vector4d_1.default(1, 1, 1, 1),\r\n    new Vector4d_1.default(-1, 1, 1, 1),\r\n];\r\nconst update = () => {\r\n    ctx.clearRect(0, 0, width, height);\r\n    for (let i = 0; i < 4; i++) {\r\n        connect(points[i], points[(i + 1) % 4], ctx, \"#00f\");\r\n        connect(points[i + 4], points[((i + 1) % 4) + 4], ctx, \"#00f\");\r\n        connect(points[i], points[i + 4], ctx, \"#00f\");\r\n        //connect(points[i], points[i + 8], ctx);\r\n    }\r\n    for (let i = 8; i < 11; i++) {\r\n        connect(points[i], points[i + 1], ctx, \"#f00\");\r\n        connect(points[i + 4], points[i + 5], ctx, \"#f00\");\r\n        connect(points[i], points[i + 4], ctx, \"#f00\");\r\n    }\r\n    for (let i = 0; i < 8; i++) {\r\n        connect(points[i], points[i + 8], ctx, \"#0f0\");\r\n    }\r\n    connect(points[11], points[15], ctx, \"#f00\");\r\n    connect(points[11], points[8], ctx, \"#f00\");\r\n    connect(points[15], points[12], ctx, \"#f00\");\r\n    points.forEach((p) => {\r\n        if (checkboxRotateX.checked) {\r\n            p.rotateXW(0.1); //x\r\n        }\r\n        if (checkboxRotateY.checked) {\r\n            p.rotateZW(0.1); //y\r\n        }\r\n        if (checkboxRotateZ.checked) {\r\n            p.rotateXY(0.1); //z\r\n        }\r\n        if (checkboxRotateW.checked) {\r\n            p.rotateXZ(0.1); //w\r\n        }\r\n    });\r\n};\r\nwindow.addEventListener(\"keydown\", (e) => {\r\n    if (e.key == \"q\") {\r\n        points.forEach((p) => {\r\n            p.rotateZW(0.1);\r\n        });\r\n    }\r\n    if (e.key === \"i\") {\r\n        points.forEach((p) => (p.dist -= 0.1));\r\n    }\r\n    else if (e.key === \"o\") {\r\n        points.forEach((p) => (p.dist += 0.1));\r\n    }\r\n});\r\n/**\r\n * Will connect two 3d Points with a line\r\n * @param p1 The first point\r\n * @param p2 The second point\r\n * @param ctx The cavas context to draw the connection on\r\n */\r\nconst connect = (p1, p2, ctx, color) => {\r\n    ctx.strokeStyle = color || \"#fff\";\r\n    ctx.beginPath();\r\n    ctx.moveTo(p1.planeX, p1.planeY);\r\n    ctx.lineTo(p2.planeX, p2.planeY);\r\n    ctx.stroke();\r\n    ctx.closePath();\r\n};\r\nsetInterval(() => {\r\n    update();\r\n}, 100);\r\n//# sourceMappingURL=main.js.map\n\n//# sourceURL=webpack://hypercube/./src/js/main.js?");

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