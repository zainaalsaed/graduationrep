import { Component } from '@angular/core';
import { IonicPage,PopoverController, NavController, NavParams } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
/**
 * Generated class for the LogschoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logschool',
  templateUrl: 'logschool.html',
})
export class LogschoolPage {

  constructor(public navCtrl: NavController,public popoverCtrl: PopoverController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogschoolPage');
  }

  presentNotificationsns(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }
}
