import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TripService} from "../services/trip-service";
/**
 * Generated class for the NablusDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nablus-detail',
  templateUrl: 'nablus-detail.html',
  providers: [TripService]

})
export class NablusDetailPage {
  public trip: any;
  // number of adult
  public adults = 2;
  // number of children
  public children = 0;

  constructor(public nav: NavController, public tripService: TripService) {
    // set sample data
    this.trip = tripService.getItem(1);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NablusDetailPage');
  }

}
