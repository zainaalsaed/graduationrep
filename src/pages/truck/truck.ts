import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EduPage } from '../edu/edu';
import { GuestPage } from '../guest/guest';
import { PrivatePage } from '../private/private';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the TruckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-truck',
  templateUrl: 'truck.html',
})
export class TruckPage {

  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TruckPage');
  }
  priVlc(){
    this.navCtrl.push(PrivatePage);
  }
  truVlc()
  {
    this.navCtrl.push(TruckPage);
  }
tru()
{
  let alert = this.alertCtrl.create({
    title: '! حاول مرة اخرى',
    subTitle: 'وحصلت علي علامه 24',
    buttons: ['ok']
  });
  alert.present();
}
}


