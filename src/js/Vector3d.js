"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Matrix_1 = require("./Matrix");
const Vector2d_1 = __importDefault(require("./Vector2d"));
class Vector3d extends Vector2d_1.default {
    constructor(x = 0, y = 0, z = 0) {
        super(x, y);
        this.planeX = 0;
        this.planeY = 0;
        this.dist = 5;
        this.z = z;
        this.update2DCoordinates();
    }
    rotateX(angle) {
        const m = new Matrix_1.Matrix([
            [1, 0, 0],
            [0, Math.cos(angle), -Math.sin(angle)],
            [0, Math.sin(angle), Math.cos(angle)],
        ]);
        let calc = m.multVector3D(this);
        this.x = calc.x;
        this.y = calc.y;
        this.z = calc.z;
        this.update2DCoordinates();
    }
    rotateY(angle) {
        const m = new Matrix_1.Matrix([
            [Math.cos(angle), 0, -Math.sin(angle)],
            [0, 1, 0],
            [Math.sin(angle), 0, Math.cos(angle)],
        ]);
        let calc = m.multVector3D(this);
        this.x = calc.x;
        this.y = calc.y;
        this.z = calc.z;
        this.update2DCoordinates();
    }
    /**
     * Will rotate the point around the z-axis
     * @param angle The angle to rotate
     */
    rotateZ(angle) {
        const m = new Matrix_1.Matrix([
            [Math.cos(angle), -Math.sin(angle), 0],
            [Math.sin(angle), Math.cos(angle), 0],
            [0, 0, 1],
        ]);
        const calc = m.multVector3D(this);
        this.x = calc.x;
        this.y = calc.y;
        this.z = calc.z;
        this.update2DCoordinates();
    }
    /**
     * CAlculate the visual re
     * @returns An object containing the x and y points mapped on a 2d plane
     */
    update2DCoordinates() {
        const factor = 200;
        //const w = 1;
        const w = 1 / (this.dist - this.z);
        this.planeX = this.x * factor * w + 250;
        this.planeY = this.y * factor * w + 250;
    }
    /**
     * Draws the Vector on a 2d Plane
     * @param ctx The context to draw onto
     * @param color The color the dot should have
     */
    draw(ctx, color) {
        ctx.fillStyle = color || "#fff";
        ctx.fillRect(this.planeX, this.planeY, 2, 2);
    }
}
exports.default = Vector3d;
//# sourceMappingURL=Vector3d.js.map