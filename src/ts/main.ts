import Vector3d from "./Vector3d";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const width = canvas.width;
const height = canvas.height;

const points: Vector3d[] = [];
points[0] = new Vector3d(-1, -1, -1);
points[1] = new Vector3d(1, -1, -1);
points[2] = new Vector3d(1, 1, -1);
points[3] = new Vector3d(-1, 1, -1);
points[4] = new Vector3d(-1, -1, 1);
points[5] = new Vector3d(1, -1, 1);
points[6] = new Vector3d(1, 1, 1);
points[7] = new Vector3d(-1, 1, 1);

const p1 = points[0];
const p2 = points[1];
const p3 = points[2];
const p4 = points[3];
const p5 = points[4];
const p6 = points[5];
const p7 = points[6];
const p8 = points[7];

const update = () => {
  ctx.clearRect(0, 0, width, height);

  connect(p1.planeX, p1.planeY, p2.planeX, p2.planeY, ctx);
  connect(p2.planeX, p2.planeY, p3.planeX, p3.planeY, ctx);
  connect(p3.planeX, p3.planeY, p4.planeX, p4.planeY, ctx);
  connect(p4.planeX, p4.planeY, p1.planeX, p1.planeY, ctx);

  connect(p5.planeX, p5.planeY, p6.planeX, p6.planeY, ctx);
  connect(p6.planeX, p6.planeY, p7.planeX, p7.planeY, ctx);
  connect(p7.planeX, p7.planeY, p8.planeX, p8.planeY, ctx);
  connect(p8.planeX, p8.planeY, p5.planeX, p5.planeY, ctx);

  connect(p1.planeX, p1.planeY, p5.planeX, p5.planeY, ctx);
  connect(p2.planeX, p2.planeY, p6.planeX, p6.planeY, ctx);
  connect(p3.planeX, p3.planeY, p7.planeX, p7.planeY, ctx);
  connect(p4.planeX, p4.planeY, p8.planeX, p8.planeY, ctx);

  points.forEach((p) => {
    p.rotateZ(0.1);
    p.rotateX(0.2);
    p.rotateY(0.3);
  });
};

const connect = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  ctx: CanvasRenderingContext2D
) => {
  ctx.strokeStyle = "#fff";
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
};

setInterval(() => {
  update();
}, 100);
