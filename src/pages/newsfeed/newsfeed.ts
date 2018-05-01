import { Component, OnInit } from '@angular/core';
// Timeline Model
import { PopoverController, NavController, ToastController, IonicPage, MenuController } from 'ionic-angular';

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
  allPosts: TimelineModel[]; // Define timeline model
  constructor( public navCtrl: NavController,
    public toastCtrl: ToastController,
    public menu: MenuController , private newsFeedService: TimelineService, public popoverCtrl: PopoverController) {}
  ngOnInit() {
    /** Loaded profile timeline data */
    this.allPosts = this.newsFeedService.getAllPosts();
  }
  /** Open status box */
  openStatusBox() {}



  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }
}
