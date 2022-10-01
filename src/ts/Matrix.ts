export class Matrix {
  entries: number[][] = [];
  constructor(w: number, h: number) {
    for (let i = 0; i < w; i++) {
      for (let j = 0; j < h; j++) {
        this.entries[i][j] = 0;
      }
    }
  }

  mult(other:Matrix){
    
  }
}
