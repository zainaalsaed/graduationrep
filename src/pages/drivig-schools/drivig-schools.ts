import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { MyProvider } from '../../providers/my/my';
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';
@IonicPage()
/**
 * Generated class for the DrivigSchoolsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'drivig-schools',
  templateUrl: 'drivig-schools.html',
  providers: [MyProvider]
})
export class DrivigSchoolsComponent {

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
itemTapped1(event, item ) {
  // That's right, we're pushing to ourselves!
  if (item.title==="Nablus")
  this.navCtrl.setRoot('NablusSchoolsComponent', {
    item: item
  });



if (item.title==="Ramallah")
this.navCtrl.setRoot('RamallahSchoolsComponent', {
  item: item
});
if (item.title==="Hebron")
this.navCtrl.setRoot('HebronSchoolsComponent', {
  item: item
});
if (item.title==="jenin")
this.navCtrl.setRoot('JeninSchoolsComponent', {
  item: item
});
if (item.title==="Jericho")
this.navCtrl.setRoot('JerichoSchoolsComponent', {
  item: item
});
if (item.title==="Tulkarm")
this.navCtrl.setRoot('TulkarmSchoolsComponent', {
  item: item
});


}}
