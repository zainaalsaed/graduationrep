import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the ViewPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html'
})
export class ViewPage {

  reportRoot = 'ReportPage'
  chatRoot = 'ChatPage'
  lessonRoot = 'LessonPage'


  constructor(public navCtrl: NavController) {}

}
