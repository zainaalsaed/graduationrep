import { Component, OnInit } from '@angular/core';
// Timeline Model
import {App, LoadingController, NavParams, AlertController, ViewController } from 'ionic-angular';
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
// import { TimelineModel } from '../profile/timeline/timeline.model';
// Timeline Service
// import { TimelineService } from '../profile/timeline/timeline.service';
import { NotificationsPage } from '../notifications/notifications';
import { TableegePage } from '../tableege/tableege';
import { TableeghacPage } from '../tableeghac/tableeghac';

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

  arrData = [] 
  userID ;
  sts=true ;
  isDisabled: boolean = false ;
  userData : AngularFireObject<Person>
 item1 : Observable<Person>;
  itemRef : AngularFireObject<any>;

  person = {} as Person;

  constructor (private afDatabase: AngularFireDatabase,
  private afAuth: AngularFireAuth ,
  private alertCtrl: AlertController,
  public menuCtrl : MenuController,
  public navParams:NavParams,
   public app: App,
  public navCtrl: NavController,
  public toastCtrl: ToastController,
  public menu: MenuController , public popoverCtrl: PopoverController) 
   {
    this.menu.enable(true);
    console.log('Hello TetingpageComponent Component');
    // this.text = 'Hello World';
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
    
      presentNotificationot(myEventot) {
        console.log(myEventot);
        let popover = this.popoverCtrl.create(NotificationsPage);
        popover.present({
          ev: myEventot
        });
      }
      shpendingRep(){


      }
    
      shcompleteRep(){
    
        
      }
      shdeniedss(){


      }
      openreportingPage(){
        
        this.navCtrl.push(TableeghacPage);

      }
    
    }