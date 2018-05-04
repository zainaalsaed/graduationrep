import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ViolationsPage } from '../../violations/violations';
import {OnInit } from '@angular/core';
import { PopoverController,ToastController,  MenuController } from 'ionic-angular';
import { NotificationsPage } from '../../notifications/notifications';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireObject }  from 'angularfire2/database';
import {  NavParams } from 'ionic-angular';
// import {Person} from '../../models/person';
import { User } from '../../../models/user';
import { Violations } from '../../../models/violations';

@IonicPage()
@Component({
  selector: 'aboutme',
  templateUrl: 'aboutme.html'
})
export class AboutmeComponent {
  eventData = []
 userData : AngularFireObject<User>
 uesrEventsData = []
 item1 : Observable<User>;
  itemRef : AngularFireObject<any>;
  // person = {} as Person;
  segment: any;
  // Constructor
  constructor(public navParams: NavParams,
    public popoverCtrl: PopoverController,
    private afAuth: AngularFireAuth ,
    private afDatabase: AngularFireDatabase,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public menu: MenuController) {

      this.afDatabase.list("/violations/").valueChanges().subscribe(
        _data => {
          this.eventData = _data ; 
          console.log(this.eventData) ;
        }
      );
    this.segment = "timeline"; // Default icon for segment
    this.menu.enable(true); 


    }

 ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');

    this.afAuth.authState.subscribe(data =>{
      if(data && data.email && data.uid){
       this.userData = this.afDatabase.object('user/'+ data.uid);
       this.item1 = this.userData.valueChanges();

       
       this.afDatabase.list('/user/'+ data.uid+'/violations/').valueChanges().subscribe(
        _data => {
          this.uesrEventsData = _data ; 
          console.log(this.uesrEventsData) ;
        }
      );
       }
      

      }
    );
    }
goToVioss(){

  this.navCtrl.push(ViolationsPage);
}
}
