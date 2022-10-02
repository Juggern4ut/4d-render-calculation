import Vector3d from "./Vector3d";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const width = canvas.width;
const height = canvas.height;

const points: Vector3d[] = [
  new Vector3d(-1, -1, -1),
  new Vector3d(1, -1, -1),
  new Vector3d(1, 1, -1),
  new Vector3d(-1, 1, -1),
  new Vector3d(-1, -1, 1),
  new Vector3d(1, -1, 1),
  new Vector3d(1, 1, 1),
  new Vector3d(-1, 1, 1),
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
  if(e.key === "i"){
    points.forEach(p => p.dist -= 0.1);
  }else if(e.key === "o"){
    points.forEach(p => p.dist += 0.1);
  }
})

/**
 * Will connect two 3d Points with a line
 * @param p1 The first point
 * @param p2 The second point
 * @param ctx The cavas context to draw the connection on
 */
const connect = (p1: Vector3d, p2: Vector3d, ctx: CanvasRenderingContext2D) => {
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
