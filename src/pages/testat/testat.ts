import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoadingController, ToastController} from "ionic-angular";

import {TestatService} from "../../services/testat-service";
import { NewsPage } from '../news/news';
/**
 * Generated class for the TestatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-testat',
  templateUrl: 'testat.html',
})
export class TestatPage {
  public testat: any;
  // number of adults
  public adults = 1;
  // date
  public date = new Date();

  public paymethods = 'creditcard';
  constructor(public testatService: TestatService, public loadingCtrl: LoadingController, public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams) {
    this.testat = testatService.getItem(1);
  }
  send() {
    // send booking info
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    // show message
    let toast = this.toastCtrl.create({
      showCloseButton: true,
      cssClass: 'profile-bg',
      message: 'Book Activity Success!',
      duration: 3000,
      position: 'bottom'
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
      toast.present();
      // back to home page
      this.navCtrl.setRoot(NewsPage);
    }, 3000)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TestatPage');
  }

}
