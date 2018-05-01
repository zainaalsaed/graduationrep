import { Component, OnInit } from '@angular/core';
// Timeline Model
<<<<<<< HEAD
import { PopoverController, NavController, ToastController, IonicPage, MenuController } from 'ionic-angular';
=======
import { NavController, ToastController, IonicPage, MenuController } from 'ionic-angular';
>>>>>>> nada 1

import { TimelineModel } from '../profile/timeline/timeline.model';
// Timeline Service
import { TimelineService } from '../profile/timeline/timeline.service';
<<<<<<< HEAD
import { NotificationsPage } from '../notifications/notifications';
=======
>>>>>>> nada 1

@IonicPage()
@Component({
  selector: 'newsfeed',
  templateUrl: 'newsfeed.html',
  providers: [TimelineService]
})
<<<<<<< HEAD

=======
//zaina
>>>>>>> nada 1
export class NewsFeedComponent implements OnInit {
  allPosts: TimelineModel[]; // Define timeline model
  constructor( public navCtrl: NavController,
    public toastCtrl: ToastController,
<<<<<<< HEAD
    public menu: MenuController , private newsFeedService: TimelineService, public popoverCtrl: PopoverController) {}
=======
    public menu: MenuController , private newsFeedService: TimelineService) {}
>>>>>>> nada 1
  ngOnInit() {
    /** Loaded profile timeline data */
    this.allPosts = this.newsFeedService.getAllPosts();
  }
  /** Open status box */
  openStatusBox() {}
<<<<<<< HEAD



  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }
=======
>>>>>>> nada 1
}
