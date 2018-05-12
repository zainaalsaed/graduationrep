import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestatPage } from '../testat/testat';
import { TripService } from '../services/trip-service';
/**
 * Generated class for the TestlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-testlist',
  templateUrl: 'testlist.html',
  providers: [TripService]

})
export class TestlistPage {

  public trips: any;

  constructor(public nav: NavController, public tripService: TripService) {
    // set sample data
    this.trips = tripService.getAll();
  }

  // view trip detail
  viewDetail(id) {
    this.nav.push(TestatPage, {id: id});
  }
}


