import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyProvider {
  items: any=[];
  constructor(public http: Http) {
    this.items = [
      {title: 'Nablus' , id:0},
      {title: 'Ramallah'},
      {title: 'Tulkarm'},
      {title: 'jenin'},
      {title: 'qalqilya'},
      {title: 'jerusalem'},
      {title: 'Hebron'},
      {title: 'Bethlehem'},
      {title: 'Jericho'}
  ]
  

}



filterItems(searchTerm){

  return this.items.filter((item) => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  });    

}

}
