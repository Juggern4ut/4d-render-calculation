"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Matrix_1 = require("./Matrix");
const Vector3d_1 = __importDefault(require("./Vector3d"));
class Vector4d extends Vector3d_1.default {
    constructor(x = 0, y = 0, z = 0, w = 0) {
        super(x, y, z);
        this.w = w;
        this.dist = 4;
        this.factor = 1000;
    }
    /**
     * Will rotate the point around the z-axis
     * @param angle The angle to rotate in radians
     */
    rotateXY(angle) {
        const m = new Matrix_1.Matrix([
            [Math.cos(angle), -Math.sin(angle), 0, 0],
            [Math.sin(angle), Math.cos(angle), 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1],
        ]);
        const calc = m.multVector4D(this);
        this.x = calc.x;
        this.y = calc.y;
        this.z = calc.z;
        this.w = calc.w;
        this.update2DCoordinates();
    }
    /**
     * Will rotate the point around the x-axis
     * @param angle The angle to rotate in radians
     */
    rotateXZ(angle) {
        const m = new Matrix_1.Matrix([
            [Math.cos(angle), 0, -Math.sin(angle), 0],
            [0, 1, 0, 0],
            [Math.sin(angle), 0, Math.cos(angle), 0],
            [0, 0, 0, 1],
        ]);
        const calc = m.multVector4D(this);
        this.x = calc.x;
        this.y = calc.y;
        this.z = calc.z;
        this.w = calc.w;
        this.update2DCoordinates();
    }
    /**
     * Will rotate the point around the w-axis
     * @param angle The angle to rotate in radians
     */
    rotateXW(angle) {
        const m = new Matrix_1.Matrix([
            [Math.cos(angle), 0, 0, -Math.sin(angle)],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [Math.sin(angle), 0, 0, Math.cos(angle)],
        ]);
        const calc = m.multVector4D(this);
        this.x = calc.x;
        this.y = calc.y;
        this.z = calc.z;
        this.w = calc.w;
        this.update2DCoordinates();
    }
    rotateZW(angle) {
        const m = new Matrix_1.Matrix([
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, Math.cos(angle), -Math.sin(angle)],
            [0, 0, Math.sin(angle), Math.cos(angle)],
        ]);
        const calc = m.multVector4D(this);
        this.x = calc.x;
        this.y = calc.y;
        this.z = calc.z;
        this.w = calc.w;
        this.update2DCoordinates();
    }
    /**
     * Calculate the visual position of the 3d Vector in a 2d Space
     * @returns An object containing the x and y points mapped on a 2d plane
     */
    update2DCoordinates() {
        //const w = 1;
        const w = 1 / (this.dist - this.w);
        const projection3D = {
            x: this.x * w,
            y: this.y * w,
            z: this.z * w,
        };
        const w2 = 1 / (this.dist - this.z);
        this.planeX = projection3D.x * this.factor * w2 + 250;
        this.planeY = projection3D.y * this.factor * w2 + 250;
    }
}
exports.default = Vector4d;
//# sourceMappingURL=Vector4d.js.map