"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vector3d_1 = __importDefault(require("./Vector3d"));
class Vector4d extends Vector3d_1.default {
    constructor(x = 0, y = 0, z = 0, w = 0) {
        super(x, y, z);
        this.w = w;
    }
}
exports.default = Vector4d;
//# sourceMappingURL=Vector4d.js.map