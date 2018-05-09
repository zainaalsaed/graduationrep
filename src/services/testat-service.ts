import {Injectable} from "@angular/core";
import {TESTATON} from "./mock-testat";

@Injectable()
export class TestatService {
  private testats: any;

  constructor() {
    this.testats = TESTATON;
  }

  getAll() {
    return this.testats;
  }

  getItem(id) {
    for (var i = 0; i < this.testats.length; i++) {
      if (this.testats[i].id === parseInt(id)) {
        return this.testats[i];
      }
    }
    return null;
  }

  remove(item) {
    this.testats.splice(this.testats.indexOf(item), 1);
  }
}
