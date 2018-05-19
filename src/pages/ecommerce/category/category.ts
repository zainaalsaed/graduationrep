/** Represents a Component of category page. */

/** Imports Modules */
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contacts, Contact } from '@ionic-native/contacts';
import { ModalController, IonicPage } from 'ionic-angular';
import { LoaderService } from '../../../common/services/loader.service';
import { MahakemmapPage } from '../../mahakemmap/mahakemmap';
import { TickethistoryPage } from '../../tickethistory/tickethistory';

@IonicPage()
@Component({
  selector: 'category',
  templateUrl: 'category.html',
  providers: [LoaderService]
})
export class CategoryComponent implements OnInit {
  public allContacts: Contact[];
  constructor( public navCtrl: NavController ,private loaderService: LoaderService, public modalCtrl:
    ModalController, private contacts: Contacts) {
    // this.findContact('');
  }
  ngOnInit() { }
  showmahakem(){

    this.navCtrl.push(MahakemmapPage);
  }
  gotocalendar(Component){
this.navCtrl.setRoot(Component);
  }
  gotohist(){

    this.navCtrl.push(TickethistoryPage);
  }
  /**
   * Function 'findContact()'
   *  This funtion find all the contacts
   *  Initially find only two params name as -
   *  displayName - Contact name
   *  phoneNumbers - Contacts phone number
  */
  // public findContact(value: any) {
  //   // Loading start
  //   this.loaderService.presentLoading();
  //   let fn = value === undefined ? '' : value;
  //   this.contacts.find(['displayName', 'phoneNumbers'], {
  //     filter: fn,
  //     hasPhoneNumber: true
  //   }).then(data => {
  //     // After contact list loads successfully
  //     // Its loaded all the contact into the variable in 'allContacts'
  //     this.allContacts = data;
  //     // Loading off
  //     this.loaderService.hideLoading();
  //   });
  // }
  // /** 
  //   * This function works when user click on any contact item box
  //   * Its open a modal window of chat box
  // */
  // gotoChatBox() {
  //   let modal = this.modalCtrl.create('ChatBoxComponent');
  //   modal.present();
  // }
}