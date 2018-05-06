import { Component } from '@angular/core';
import { ViewController, IonicPage } from 'ionic-angular';

/**
 * Generated class for the TetingpageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@IonicPage()

@Component({
  selector: 'tetingpage',
  templateUrl: 'tetingpage.html'
})
export class TetingpageComponent {

  text: string;

  constructor(private viewCtrl: ViewController) {
    console.log('Hello TetingpageComponent Component');
    this.text = 'Hello World';
  }

}
