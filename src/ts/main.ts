import Vector3d from "./Vector3d";
import Vector4d from "./Vector4d";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const width = canvas.width;
const height = canvas.height;

const points: Vector4d[] = [
  new Vector4d(-1, -1, -1, -1),
  new Vector4d(1, -1, -1, -1),
  new Vector4d(1, 1, -1, -1),
  new Vector4d(-1, 1, -1, -1),
  new Vector4d(-1, -1, 1, -1),
  new Vector4d(1, -1, 1, -1),
  new Vector4d(1, 1, 1, -1),
  new Vector4d(-1, 1, 1, -1),
  new Vector4d(-1, -1, -1, 1),
  new Vector4d(1, -1, -1, 1),
  new Vector4d(1, 1, -1, 1),
  new Vector4d(-1, 1, -1, 1),
  new Vector4d(-1, -1, 1, 1),
  new Vector4d(1, -1, 1, 1),
  new Vector4d(1, 1, 1, 1),
  new Vector4d(-1, 1, 1, 1),
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
    //p.rotateXW(0.1);
    p.rotateXZ(0.1);
    p.rotateZW(0.1);
  });
};

window.addEventListener("keydown", (e) => {
  if (e.key === "i") {
    points.forEach((p) => (p.dist -= 0.1));
  } else if (e.key === "o") {
    points.forEach((p) => (p.dist += 0.1));
  }
});

/**
 * Will connect two 3d Points with a line
 * @param p1 The first point
 * @param p2 The second point
 * @param ctx The cavas context to draw the connection on
 */
const connect = (
  p1: Vector3d,
  p2: Vector3d,
  ctx: CanvasRenderingContext2D,
  color?: string
) => {
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
