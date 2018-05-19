import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestatPage } from '../testat/testat';
import { TetService } from '../services/tet-service';
/**
 * Generated class for the TestlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-testlist',
  templateUrl: 'testlist.html',
  providers: [TetService]

})
export class TestlistPage {

  public tets: any;

  constructor(public nav: NavController, public tripService: TetService) {
    // set sample data
    this.tets = tripService.getAll();
  }

  // view trip detail
  viewDetail(id) {
    this.nav.push(TestatPage, {id: id});
  }
}


