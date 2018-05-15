import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TripService} from "../services/trip-service";
import { AlertController } from 'ionic-angular';
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

  constructor(public nav: NavController, public tripService: TripService,private alertCtrl: AlertController) {
    // set sample data
    this.trip = tripService.getItem(1);

  }
  checkoutet()
  {
    let alert = this.alertCtrl.create({
      title: 'لقد تم ارسال طلبك بنجاح !',
      subTitle: 'يرجى مراجعه المدرسه في اقرب وقت ممكن ',
      buttons: ['Dismiss']
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NablusDetailPage');
  }

}
