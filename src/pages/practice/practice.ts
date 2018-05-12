import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { PrivatePage } from '../private/private';
import { TruckPage } from '../truck/truck';

/**
 * Generated class for the PracticeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@IonicPage()
@Component({
  selector: 'practice',
  templateUrl: 'practice.html'
})
export class PracticeComponent {

 
  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello PracticeComponent Component');
    this.text = 'Hello World';
  }
  priVlc(){
    this.navCtrl.setRoot('PrivateeComponent');
  }
  truVlc()
  {
    this.navCtrl.push(TruckPage);
  }
}
