"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vector2d {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    draw(ctx) {
        ctx.fillStyle = "#fff";
        ctx.fillRect(this.x, this.y, 2, 2);
    }
}
exports.default = Vector2d;
//# sourceMappingURL=Vector2d.js.map