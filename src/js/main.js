"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vector4d_1 = __importDefault(require("./Vector4d"));
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const checkboxRotateX = document.getElementById("rotateX");
const checkboxRotateY = document.getElementById("rotateY");
const checkboxRotateZ = document.getElementById("rotateZ");
const checkboxRotateW = document.getElementById("rotateW");
const width = canvas.width;
const height = canvas.height;
const points = [
    new Vector4d_1.default(-1, -1, -1, -1),
    new Vector4d_1.default(1, -1, -1, -1),
    new Vector4d_1.default(1, 1, -1, -1),
    new Vector4d_1.default(-1, 1, -1, -1),
    new Vector4d_1.default(-1, -1, 1, -1),
    new Vector4d_1.default(1, -1, 1, -1),
    new Vector4d_1.default(1, 1, 1, -1),
    new Vector4d_1.default(-1, 1, 1, -1),
    new Vector4d_1.default(-1, -1, -1, 1),
    new Vector4d_1.default(1, -1, -1, 1),
    new Vector4d_1.default(1, 1, -1, 1),
    new Vector4d_1.default(-1, 1, -1, 1),
    new Vector4d_1.default(-1, -1, 1, 1),
    new Vector4d_1.default(1, -1, 1, 1),
    new Vector4d_1.default(1, 1, 1, 1),
    new Vector4d_1.default(-1, 1, 1, 1),
];
const update = () => {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < 4; i++) {
        connect(points[i], points[(i + 1) % 4], ctx, "#00f");
        connect(points[i + 4], points[((i + 1) % 4) + 4], ctx, "#00f");
        connect(points[i], points[i + 4], ctx, "#00f");
        //connect(points[i], points[i + 8], ctx);
    }
    for (let i = 8; i < 11; i++) {
        connect(points[i], points[i + 1], ctx, "#f00");
        connect(points[i + 4], points[i + 5], ctx, "#f00");
        connect(points[i], points[i + 4], ctx, "#f00");
    }
    for (let i = 0; i < 8; i++) {
        connect(points[i], points[i + 8], ctx, "#0f0");
    }
    connect(points[11], points[15], ctx, "#f00");
    connect(points[11], points[8], ctx, "#f00");
    connect(points[15], points[12], ctx, "#f00");
    points.forEach((p) => {
        if (checkboxRotateX.checked) {
            p.rotateXW(0.1); //x
        }
        if (checkboxRotateY.checked) {
            p.rotateZW(0.1); //y
        }
        if (checkboxRotateZ.checked) {
            p.rotateXY(0.1); //z
        }
        if (checkboxRotateW.checked) {
            p.rotateXZ(0.1); //w
        }
    });
};
window.addEventListener("keydown", (e) => {
    if (e.key == "q") {
        points.forEach((p) => {
            p.rotateZW(0.1);
        });
    }
    if (e.key === "i") {
        points.forEach((p) => (p.dist -= 0.1));
    }
    else if (e.key === "o") {
        points.forEach((p) => (p.dist += 0.1));
    }
});
/**
 * Will connect two 3d Points with a line
 * @param p1 The first point
 * @param p2 The second point
 * @param ctx The cavas context to draw the connection on
 */
const connect = (p1, p2, ctx, color) => {
    ctx.strokeStyle = color || "#fff";
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