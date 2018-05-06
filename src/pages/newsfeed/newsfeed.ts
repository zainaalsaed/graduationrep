import { Component, OnInit } from '@angular/core';
// Timeline Model
import {App, LoadingController, NavParams, AlertController } from 'ionic-angular';
import {Person} from '../../models/person';
import { PopoverController, NavController, ToastController, IonicPage, MenuController } from 'ionic-angular';
import { DISABLED } from '@angular/forms/src/model';
import { LoginComponent } from '../../pages/authentication/login/login';
import { min } from 'moment';
import * as firebase from 'firebase';
import {AngularFireAuth} from "angularfire2/auth";
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireObject } from 'angularfire2/database';
import {LandingPageComponent} from '../../pages/authentication/landing-page/landing-page';
// import { DISABLED } from '@angular/forms/src/model';
import { Observable } from 'rxjs/Observable';
import {ProfileComponent} from '../../pages/profile/profile';
import { TimelineModel } from '../profile/timeline/timeline.model';
// Timeline Service
import { TimelineService } from '../profile/timeline/timeline.service';
import { NotificationsPage } from '../notifications/notifications';

@IonicPage()
@Component({
  selector: 'newsfeed',
  templateUrl: 'newsfeed.html',
  providers: [TimelineService]
})
export class NewsFeedComponent implements OnInit {


  arrData = [] 
  userID ;
  sts=true ;
  isDisabled: boolean = false ;
  userData : AngularFireObject<Person>
 item1 : Observable<Person>;
  itemRef : AngularFireObject<any>;

  person = {} as Person;
  allPosts: TimelineModel[]; // Define timeline model
  constructor( 
    private afDatabase: AngularFireDatabase,
    private afAuth: AngularFireAuth ,
    private alertCtrl: AlertController,
    public menuCtrl : MenuController,
    public navParams:NavParams,
     public app: App,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public menu: MenuController , private newsFeedService: TimelineService, public popoverCtrl: PopoverController) 
    
    {

      this.menu.enable(true); // Enable sidemenu


    }
  ngOnInit() {

// this.menu.enable(true);
    this.afDatabase.list("/tableegh/").valueChanges().subscribe(
      _data => {
        this.arrData = _data ; 
        console.log(this.arrData) ;
      }
    );
    /** Loaded profile timeline data */
    // this.allPosts = this.newsFeedService.getAllPosts();
  }
  /** Open status box */
  openStatusBox() {}

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data =>{
      if(data && data.email && data.uid){
        this.userData = this.afDatabase.object('people/'+ data.uid);
       this.item1 = this.userData.valueChanges();
       this.userID = data.uid ;
       }
     
      });

  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }
}
