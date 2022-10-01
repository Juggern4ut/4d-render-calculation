"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix = void 0;
class Matrix {
    constructor(w, h) {
        this.entries = [];
        for (let i = 0; i < w; i++) {
            for (let j = 0; j < h; j++) {
                this.entries[i][j] = 0;
            }
        }
    }
    mult(other) {
    }
}
exports.Matrix = Matrix;
//# sourceMappingURL=Matrix.js.map