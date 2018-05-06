import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the GuestPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  //testinggg
  selector: 'page-guest',
  templateUrl: 'guest.html'
})
export class GuestPage {
  latRoot = 'LatPage'
  scoRoot = 'SchoolmapPage'
  eduRoot = 'EduPage'
 

  constructor(public navCtrl: NavController) {}

}
