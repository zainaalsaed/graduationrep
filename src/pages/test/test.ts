import { Component } from '@angular/core';
import { IonicPage,  NavParams } from 'ionic-angular';
import {NavController, PopoverController} from "ionic-angular";
import {Storage} from '@ionic/storage';
import { SearchtestPage } from '../searchtest/searchtest';

import {NotificationsPage} from "../notifications/notifications";
import { TestlistPage } from '../testlist/testlist';
//import {SettingsPage} from "../settings/s/searchtestettings";
//import {TripsPage} from "../trips/trips";
//import {SearchLocationPage} from "../search-location/search-location";

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  public search = {
    name: "location",
    date: new Date().toISOString()
  }

  constructor(private storage: Storage, public nav: NavController, public popoverCtrl: PopoverController) {
  }

  ionViewWillEnter() {
    // this.search.pickup = "Rio de Janeiro, Brazil";
    // this.search.dropOff = "Same as pickup";
    this.storage.get('pickup').then((val) => {
      if (val === null) {
        this.search.name = "Nablus"
      } else {
        this.search.name = val;
      }
    }).catch((err) => {
      console.log(err)
    });
  }
  choosePlace(from) {
    this.nav.push(SearchtestPage, from);
  }
  doSearch() {
    this.nav.push(TestlistPage);
  }
  goToAccount() {
    this.nav.setRoot('SettingsComponent');
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }
}
