import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {NewsPage} from "../news/news";
import { MyProvider } from '../../providers/my/my';
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';
//import {RegisterPage} from "../register/register";
import { JeninschoolsPage } from "../jeninschools/jeninschools";
import { JerusalemschoolsPage } from "../jerusalemschools/jerusalemschools";
import { QalqilyaschoolsPage } from "../qalqilyaschools/qalqilyaschools";
import { TulkarmschoolsPage } from "../tulkarmschools/tulkarmschools";
import { RamallahschoolsPage } from "../ramallahschools/ramallahschools";
import { NablusschoolsPage } from '../nablusschools/nablusschools';
import { HebronschoolsPage } from "../hebronschools/hebronschools";
import { BethlehemschoolsPage } from "../bethlehemschools/bethlehemschools";
import { JerichoschoolsPage } from "../jerichoschools/jerichoschools";

/**
 * Generated class for the SchoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-school',
  templateUrl: 'school.html',
  providers: [MyProvider]
})
export class SchoolPage {
  //itemz: string;
  items: Array<{title: string}>;
  selectedItem: any;
  nav: any;
  searchTerm: string = '';
    searchControl: FormControl;
   
    searching: any = false;
 

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:MyProvider ) {
    this.searchControl = new FormControl();
    this.selectedItem = navParams.get('item');
    this.items = [
      {title: 'Nablus' },
      {title: 'Ramallah'},
      {title: 'Tulkarm'},
      {title: 'jenin'},
      {title: 'qalqilya'},
      {title: 'jerusalem'},
      {title: 'Hebron'},
      {title: 'Bethlehem'},
      {title: 'Jericho'}
  ]
  
  this.items.push({
    title: 'Item ' });
  }
  


  
  ionViewDidLoad() {
    this.setFilteredItems();
 
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {

        this.searching = false;
        this.setFilteredItems();

    });


}

onSearchInput(){
    this.searching = true;
}

setFilteredItems() {

    this.items = this.dataService.filterItems(this.searchTerm);

}
searchBoxValue="";

itemTapped1(event, item) {
  // That's right, we're pushing to ourselves!
  if (item.title==="Nablus")
  this.navCtrl.push(NablusschoolsPage, {
    item: item
  });
  if (item.title==="Ramallah")
  this.navCtrl.push(RamallahschoolsPage, {
    item: item
  });
  if (item.title==="Tulkarm")
  this.navCtrl.push(TulkarmschoolsPage, {
    item: item
  });
  if (item.title==="jenin")
  this.navCtrl.push(JeninschoolsPage, {
    item: item
  });
  if (item.title==="qalqilya")
  this.navCtrl.push(QalqilyaschoolsPage, {
    item: item
  });
  if (item.title==="jerusalem")
  this.navCtrl.push(JerusalemschoolsPage, {
    item: item
  });
  if (item.title==="Hebron")
  this.navCtrl.push(HebronschoolsPage, {
    item: item
  });
  if (item.title==="Bethlehem")
  this.navCtrl.push(BethlehemschoolsPage, {
    item: item
  });
  if (item.title==="Jericho")
  this.navCtrl.push(JerichoschoolsPage, {
    item: item
  });
}
}




