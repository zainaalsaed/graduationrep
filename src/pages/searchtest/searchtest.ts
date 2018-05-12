import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Storage} from '@ionic/storage';


/**
 * Generated class for the SearchtestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-searchtest',
  templateUrl: 'searchtest.html',
})
export class SearchtestPage {

  public fromto: any;
  // places
  public places = {
    nearby: [
      {
        id: 1,
        name: "Nablus"
      },
      {
        id: 2,
        name: "Ramallah"
      },
      {
        id: 3,
        name: "Hebron"
      },
      {
        id: 4,
        name: "Tulkrem"
      },
      {
        id: 5,
        name: "Jaricho"
      },
      {
        id: 6,
        name: "Betlahem"
      },
      {
        id: 7,
        name: "Jenin"
      },
      {
        id: 8,
        name: " jerusalem"
      },
      {
        id: 9,
        name: " Qalqilia"
      }
     
    ],
    recent: [
      {
        id: 1,
        name: "Nablus"
      }
    ]
  };

  constructor(private storage: Storage, public nav: NavController, public navParams: NavParams) {
    this.fromto = this.navParams.data;
  }

  // search by item
  searchBy(item) {
    if (this.fromto === 'from') {
      this.storage.set('pickup', item.name);
    }

    if (this.fromto === 'to') {
      this.storage.set('dropOff', item.name);
    }
    // this.nav.push(SearchCarsPage);
    this.nav.pop();
  }
}
