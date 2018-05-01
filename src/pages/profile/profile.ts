import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { PopoverController,NavController, ToastController, IonicPage, MenuController } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
=======
import { NavController, ToastController, IonicPage, MenuController } from 'ionic-angular';
>>>>>>> nada 1

@IonicPage()
@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfileComponent implements OnInit {
  segment: any;
  // Constructor
<<<<<<< HEAD
  constructor(
    public popoverCtrl: PopoverController,
    public navCtrl: NavController,
=======
  constructor(public navCtrl: NavController,
>>>>>>> nada 1
    public toastCtrl: ToastController,
    public menu: MenuController) {
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
<<<<<<< HEAD
  presentNotificationat(myEventat) {
    console.log(myEventat);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEventat
    });
  }
=======
>>>>>>> nada 1
}
