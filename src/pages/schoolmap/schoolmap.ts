import { Component , ViewChild,ElementRef } from '@angular/core';
import {IonicPage, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SchoolPage } from '../school/school';

declare var google;
@IonicPage()
@Component({
  selector: 'page-schoolmap',
  templateUrl: 'schoolmap.html'
})
export class SchoolmapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;


  constructor(public navCtrl: NavController,
    public http: Http) {


  }


  ionViewDidLoad(){
    this.displayGoogleMap();
this.getMarkers();
  }



  displayGoogleMap(){
    let latLng = new google.maps.LatLng(32.227437, 35.222397);
  let mapOptions = {
    center:latLng,
    zoom:12,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  }
  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
}


getMarkers(){
  this.http.get('assets/data/scho.json').map((res)=>res.json()).subscribe(data=>{
    this.addMarkersMap(data);

  });
}

addMarkersMap(markers){
for(let marker of markers){
      var loc = {lat: marker.latitude , lng: marker.longitude};
      console.log(loc);
      marker = new google.maps.Marker({
      position: loc,
      map: this.map,
      title:marker.name,
      label:marker.content

});

}
}
findSchool(){


  this.navCtrl.push(SchoolPage);
}
findSchoolat(Component){

  this.navCtrl.setRoot(Component);
}
}
