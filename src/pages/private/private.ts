import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EduPage } from '../edu/edu';
import { GuestPage } from '../guest/guest';
import { TruckPage } from '../truck/truck';
/**
 * Generated class for the PrivatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-private',
  templateUrl: 'private.html',
})
export class PrivatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivatePage');
  }
  priVlc(){
    this.navCtrl.push(PrivatePage);
  }
  truVlc()
  {
    this.navCtrl.push(TruckPage);
  }

}
