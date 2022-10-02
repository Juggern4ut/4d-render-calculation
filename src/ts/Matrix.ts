import Vector3d from "./Vector3d";
import Vector4d from "./Vector4d";

export class Matrix {
  entries: number[][] = [];

  constructor(entries?: number[][]) {
    if (entries) {
      this.entries = entries;
    }
  }

  /**
   * Will multiply the matrix with a given vector3d and return the result as a vector
   * @param v The vector to multiply by
   * @returns A new vector containing the result of the calculation
   */
  multVector3D(v: Vector3d): Vector3d {
    const x =
      v.x * this.entries[0][0] +
      v.y * this.entries[0][1] +
      v.z * this.entries[0][2];
    const y =
      v.x * this.entries[1][0] +
      v.y * this.entries[1][1] +
      v.z * this.entries[1][2];
    const z =
      v.x * this.entries[2][0] +
      v.y * this.entries[2][1] +
      v.z * this.entries[2][2];
    return new Vector3d(x, y, z);
  }

  /**
   * Will multiply the matrix with a given vector3d and return the result as a vector
   * @param v The vector to multiply by
   * @returns A new vector containing the result of the calculation
   */
  multVector4D(v: Vector4d): Vector4d {
    const x =
      v.x * this.entries[0][0] +
      v.y * this.entries[0][1] +
      v.z * this.entries[0][2] +
      v.w * this.entries[0][3];
    const y =
      v.x * this.entries[1][0] +
      v.y * this.entries[1][1] +
      v.z * this.entries[1][2] +
      v.w * this.entries[1][3];
    const z =
      v.x * this.entries[2][0] +
      v.y * this.entries[2][1] +
      v.z * this.entries[2][2] +
      v.w * this.entries[2][3];
    const w =
      v.x * this.entries[3][0] +
      v.y * this.entries[3][1] +
      v.z * this.entries[3][2] +
      v.w * this.entries[3][3];
      
    return new Vector4d(x, y, z, w);
  }
}
