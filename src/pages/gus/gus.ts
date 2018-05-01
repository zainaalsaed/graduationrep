import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the GusPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gus',
  templateUrl: 'gus.html'
})
export class GusPage {

  latestNewsRoot = 'LatestNewsPage'
  educationRoot = 'EducationPage'
  searchSchoolRoot = 'SearchSchoolPage'


  constructor(public navCtrl: NavController) {}

}
