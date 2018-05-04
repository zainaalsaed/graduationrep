import { Component, OnInit } from '@angular/core';
import { PopoverController,NavController, ToastController, IonicPage, MenuController } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireObject }  from 'angularfire2/database';
import {  NavParams } from 'ionic-angular';
// import {Person} from '../../models/person';
import { User } from '../../models/user';
import { Violations } from '../../models/violations';
import { Event } from '../../models/eventDet';



@IonicPage()
@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfileComponent implements OnInit {
  eventData = []
 userData : AngularFireObject<User>
 uesrEventsData = []
 item1 : Observable<User>;
  itemRef : AngularFireObject<any>;
  // person = {} as Person;
  segment: any;
  // Constructor
  constructor(
    public navParams: NavParams,
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
    this.menu.enable(true); // Enable sidemenu
  }

  // Toast
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Welcome to your profile.',
      duration: 3000
    });
    toast.present();
  }

  ngOnInit() {
    //called after the constructor and called  after the first ngOnChanges() 
    //  Called toast
    this.presentToast();
  }

  // Goto Search Component
  gotoSearch() {
    this.navCtrl.push('SearchComponent');
  }
  presentNotificationat(myEventat) {
    console.log(myEventat);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEventat
    });
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
      //  unRegister(item1 :Event , x:number){

      //   this.afAuth.authState.subscribe(data =>{
      //     if(data && data.email && data.uid){
      //      this.afDatabase.list('/user/'+ data.uid).valueChanges().subscribe(
      //       _data => {
      //         this.uesrEventsData = _data ; 
      //         console.log(this.uesrEventsData) ;
      //       }
      //     );
    
      //     this.afDatabase.object('user/'+ data.uid).remove()
      //     //this.afDatabase.object('user/'+ auth.uid+'/following/').set(this.uesrFollowing.length - 1)
      //     // this.afDatabase.object('event/'+ x +'/regNames/'+ data.uid).remove()
      //   //  this.afDatabase.object('event/'+ x +'/regnumber/').set(item1.regnumber - 1)
      //      }
      //     });
    
      //     // this.navCtrl.push(HomePage);
    
    
      // }
      
      }
  