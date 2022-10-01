import Vector2d from "./Vector2d";

export default class Vector3d extends Vector2d {
  z: number;
  planeX: number = 0;
  planeY: number = 0;
  constructor(x: number = 0, y: number = 0, z: number = 0) {
    super(x, y);
    this.z = z;
    this.update2DCoordinates();
  }

  rotateX(angle: number) {
    const matrix = [
      [1, 0, 0],
      [0, Math.cos(angle), -Math.sin(angle)],
      [0, Math.sin(angle), Math.cos(angle)],
    ];

    let tmpx = this.x * matrix[0][0] + this.y * matrix[0][1] + this.z * matrix[0][2];
    let tmpy = this.x * matrix[1][0] + this.y * matrix[1][1] + this.z * matrix[1][2];
    let tmpz = this.x * matrix[2][0] + this.y * matrix[2][1] + this.z * matrix[2][2];
    this.x = tmpx;
    this.y = tmpy;
    this.z = tmpz;

    this.update2DCoordinates();
  }

  rotateY(angle: number) {
    const matrix = [
      [Math.cos(angle), 0, -Math.sin(angle)],
      [0, 1, 0],
      [Math.sin(angle), 0, Math.cos(angle)],
    ];

    let tmpx = this.x * matrix[0][0] + this.y * matrix[0][1] + this.z * matrix[0][2];
    let tmpy = this.x * matrix[1][0] + this.y * matrix[1][1] + this.z * matrix[1][2];
    let tmpz = this.x * matrix[2][0] + this.y * matrix[2][1] + this.z * matrix[2][2];
    this.x = tmpx;
    this.y = tmpy;
    this.z = tmpz;

    this.update2DCoordinates();
  }

  /**
   * Will rotate the point around the z-axis
   * @param angle The angle to rotate
   */
  rotateZ(angle: number) {
    const matrix = [
      [Math.cos(angle), -Math.sin(angle), 0],
      [Math.sin(angle), Math.cos(angle), 0],
      [0, 0, 1],
    ];

    let tmpx = this.x * matrix[0][0] + this.y * matrix[0][1] + this.z * matrix[0][2];
    let tmpy = this.x * matrix[1][0] + this.y * matrix[1][1] + this.z * matrix[1][2];
    let tmpz = this.x * matrix[2][0] + this.y * matrix[2][1] + this.z * matrix[2][2];
    this.x = tmpx;
    this.y = tmpy;
    this.z = tmpz;

    this.update2DCoordinates();
  }

  /**
   * CAlculate the visual re
   * @returns An object containing the x and y points mapped on a 2d plane
   */
  update2DCoordinates() {
    const dist = 5;
    const factor = 200;
    //const w = 1;
    const w = 1 / (dist - this.z);
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
