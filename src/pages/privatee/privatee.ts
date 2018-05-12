import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';
/**
 * Generated class for the PrivateeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'privatee',
  templateUrl: 'privatee.html'
})
export class PrivateeComponent {

  text: string;

  constructor(private alertCtrl: AlertController) {
    console.log('Hello PrivateeComponent Component');
    this.text = 'Hello World';
  }
  ala()
{
  let alert = this.alertCtrl.create({
    title: '!تهانيا لقد نجحت',
    subTitle: 'وحصلت علي علامه 28',
    buttons: ['ok']
  });
  alert.present();
}

}
