import Vector3d from "./Vector3d";

export default class Vector4d extends Vector3d {
  w: number;
  constructor(x: number = 0, y: number = 0, z: number = 0, w: number = 0) {
    super(x, y, z);
    this.w = w;
  }
}
