import { Matrix } from "./Matrix";
import Vector2d from "./Vector2d";

export default class Vector3d extends Vector2d {
  z: number;
  planeX: number = 0;
  planeY: number = 0;
  dist: number = 5;
  constructor(x: number = 0, y: number = 0, z: number = 0) {
    super(x, y);
    this.z = z;
    this.update2DCoordinates();
  }

  rotateX(angle: number) {
    const m = new Matrix([
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

  rotateY(angle: number) {
    const m = new Matrix([
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
  rotateZ(angle: number) {
    const m = new Matrix([
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
  draw(ctx: CanvasRenderingContext2D, color?: string) {
    ctx.fillStyle = color || "#fff";
    ctx.fillRect(this.planeX, this.planeY, 2, 2);
  }
}
