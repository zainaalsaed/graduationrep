import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ViolationsPage } from '../../violations/violations';

@IonicPage()
@Component({
  selector: 'aboutme',
  templateUrl: 'aboutme.html'
})
export class AboutmeComponent {
  constructor(public navCtrl: NavController) {}


goToVioss(){

  this.navCtrl.push(ViolationsPage);
}
}
