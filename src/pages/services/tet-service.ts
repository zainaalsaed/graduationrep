import {Injectable} from "@angular/core";
import {TETS} from "./mock-tet";

@Injectable()
export class TetService {
  private tets: any;

  constructor() {
    this.tets = TETS;
  }

  getAll() {
    return this.tets;
  }

  getItem(id) {
    for (var i = 0; i < this.tets.length; i++) {
      if (this.tets[i].id === parseInt(id)) {
        return this.tets[i];
      }
    }
    return null;
  }

  remove(item) {
    this.tets.splice(this.tets.indexOf(item), 1);
  }
}
