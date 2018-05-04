/** Represents a Component of registration page. */

/** Imports Modules */
//import { Component } from '@angular/core';
import { User } from '../../../models/user';

import {  MenuController } from 'ionic-angular';
import { Component ,ViewChild  } from '@angular/core';
import {IonicPage, NavController, NavParams,AlertController, ToastController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
//import {HomePage} from "../home/home";
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseError } from '@firebase/util';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';
import { auth } from 'firebase';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { ScanPage } from "../scan/scan";
//import { ScanRegisterPage } from "../scan-register/scan-register";
import { Output } from '@angular/core';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { LoginComponent } from '../login/login';
import { NewsFeedComponent } from '../../newsfeed/newsfeed';
@IonicPage()
@Component({
  selector: 'registration',
  templateUrl: 'registration.html'
})
export class RegistrationComponent {
  datay={ };
  encodemyDatay:string;
encodedDatay:{};
user = {} as User;
  options:BarcodeScannerOptions ;

  
  @ViewChild('signupSlider') signupSlider: any;
 
  slideOneForm: FormGroup;
  slideTwoForm: FormGroup;

  submitAttempt: boolean = false;
 userList :  AngularFireList<any>;
  // @ViewChild('username') user;
  // @ViewChild('password') password;
  

  public date: string = new Date().toISOString();
  
  constructor(
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    public nav: NavController,
    private alertCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams,
    private fire: AngularFireAuth,
    public formBuilder: FormBuilder,
    public scCtrl: AlertController,
    public barcodeScanner:BarcodeScanner,
     public db: AngularFireDatabase,
     public tstCtrl: ToastController,
     private menu: MenuController) {
    //this.navCtrl = navCtrl;
    
    this.menu.enable(false); 
    this.userList = db.list('/user')
    // Disable sidemenu
  }
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

//   createUser(name,identifierNum,mail,pas,status,drivl,component){
//     this.userList.push({
//         name : this.user.name,
//         identifierNum : identifierNum,
//         mail : mail,
//         pas : pas,
//         status: status,
//         drivl : this.datay
//               }).then(newPerson =>{
//     this.navCtrl.push(component);
//     },error=>{console.log(error);});
// }

async newUser(user: User, component) {
  try{
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.mail, user.pas);
    console.log(result);
    this.afAuth.authState.subscribe(auth =>{
      this.afDatabase.object('user/'+ auth.uid).set(this.user)
      .then(() => this.nav.setRoot(component))
      
      this.alert('Registered!');
      this.navCtrl.setRoot(component);
    })
  }
    catch(e){
      console.error(e);
    }
  // console.log('Would register user with ', this.user.value, this.password.value);

  // console.log('Would register user with ', this.user.value, this.password.value);
}


    
    // this.fire.auth.createUserWithEmailAndPassword(this.user.value , this.password.value)
    // .then(data => {
    //   console.log('got data ', data);
    //  this.alert('Registered!');
    //  this.nav.setRoot(NewsFeedComponent);

    
    
  
    
   

  



  // register and go to home page
  //register() {
    //this.nav.setRoot(HomePage);
  //}

  // go to login page
  login() {
    this.nav.setRoot(LoginComponent);
  }
  

  getStatus(status){


  }

 /* scnBr()
  
  {

this.nav.push(ScanRegisterPage);

  }*/
  
  /* {
    let scn = this.scCtrl.create({
      title: 'Scan your Barcode',
      message: "Scan your driving lisence Barcode to sign up.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: dataz => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: dataz => {
            console.log('Send clicked');
            let tst = this.tstCtrl.create({
              message: 'Email was sent successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            tst.present();
          }
        }
      ]
    });
    scn.present();
  }*/

  scany(){

    this.options = { prompt: "Please scan your code"  }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
      // Success! Barcode data is here
      console.log(barcodeData);
      this.datay = barcodeData;


     }, (err) => {
         // An error occurred
         console.log(err);
     });

  }


  encodeDatay(){
this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE,this.encodemyDatay).then((res)=>{
console.log(res)
this.encodedDatay = res;
}, (err) => {
  // An error occurred
  console.log(err);
})
  }
  skipping() {
    this.navCtrl.setRoot('LandingPageComponent');
  }
}





  
  /**
   * Submit function of registration form
   * This function will take user to profile page
  */
  /*RegistrationForm() {
    this.navCtrl.setRoot('ProfileComponent');
  }*/
  
  /**
   * Skip function
   * This function will take user to landing page
  */
  


