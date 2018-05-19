import { Component } from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MaapsPage } from '../maaps/maaps';
import { TestPage } from '../test/test';
import { SigninPage } from '../signin/signin';

/**
 * Generated class for the EducationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@IonicPage()
@Component({
  
  selector: 'education',
  templateUrl: 'education.html'
})
export class EducationComponent {

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {}
  gotoTargetComponent(value) {
    if (value === 'Profile') { // When value is Profile
      this.navCtrl.setRoot('ProfileComponent');
    } else if (value === 'Calendar') { // When value is Calendar
      this.navCtrl.setRoot('FullCalendarComponent');
    } else if (value === 'Map') { // When value is Map
      this.navCtrl.setRoot('GoogleMapComponent');
    } else if (value === 'Chart') { // When value is Chart
      let alert = this.alertCtrl.create({
        title: 'تهانيا لقد نجحت',
        subTitle: '10% of battery remaining',
        buttons: ['ok']
      });
      alert.present();
    } else if (value === 'practice') { // When value is Ecommerce
      this.navCtrl.setRoot('PracticeComponent');
    } else if (value === 'NewsFeed') { // When value is News Feed
      this.navCtrl.setRoot('NewsFeedComponent');
    } else if (value === 'Chat') { // When value is Chat
      this.navCtrl.setRoot('ChatComponent');
    } else if (value === 'LatestNews') { // When value is Latest News
      this.navCtrl.setRoot('LatestNewsComponent');
    } else if (value === 'AboutUs') { // When value is About Us
      this.navCtrl.setRoot('AboutUsComponent');
    } else if (value === 'ContactUs') { // When value is Contact Us
      this.navCtrl.setRoot('ContactUsComponent');

    }
    
  }
  
  search(){
    this.navCtrl.push(MaapsPage)
  }
  practic(){
    this.navCtrl.push(SigninPage)
  }
  testt()
  {
    this.navCtrl.push(TestPage)
  }

}
