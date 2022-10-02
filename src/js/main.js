"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vector3d_1 = __importDefault(require("./Vector3d"));
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const points = [
    new Vector3d_1.default(-1, -1, -1),
    new Vector3d_1.default(1, -1, -1),
    new Vector3d_1.default(1, 1, -1),
    new Vector3d_1.default(-1, 1, -1),
    new Vector3d_1.default(-1, -1, 1),
    new Vector3d_1.default(1, -1, 1),
    new Vector3d_1.default(1, 1, 1),
    new Vector3d_1.default(-1, 1, 1),
];
const update = () => {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < 4; i++) {
        connect(points[i], points[(i + 1) % 4], ctx);
        connect(points[i + 4], points[((i + 1) % 4) + 4], ctx);
        connect(points[i], points[i + 4], ctx);
    }
    points.forEach((p) => {
        //p.rotateZ(0.1);
        p.rotateX(0.2);
        p.rotateY(0.3);
    });
};
window.addEventListener("keydown", e => {
    if (e.key === "i") {
        points.forEach(p => p.dist -= 0.1);
    }
    else if (e.key === "o") {
        points.forEach(p => p.dist += 0.1);
    }
});
const connect = (p1, p2, ctx) => {
    ctx.strokeStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(p1.planeX, p1.planeY);
    ctx.lineTo(p2.planeX, p2.planeY);
    ctx.stroke();
    ctx.closePath();
};
setInterval(() => {
    update();
}, 100);
//# sourceMappingURL=main.js.map