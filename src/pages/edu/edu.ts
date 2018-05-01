import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrivatePage } from '../private/private';
import { TruckPage } from '../truck/truck';
import { GuestPage } from '../guest/guest';
/**
 * Generated class for the EduPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//test

@IonicPage()
@Component({
  selector: 'page-edu',
  templateUrl: 'edu.html',
})
export class EduPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EduPage');
  }
  priVlc(){
    this.navCtrl.push(PrivatePage);
  }
  truVlc()
  {
    this.navCtrl.push(TruckPage);
  }
}
