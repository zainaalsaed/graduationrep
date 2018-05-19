import { Component, ViewChild,ElementRef } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';
import { PrivatePage } from '../private/private';
import { TruckPage } from '../truck/truck';
import { GuestPage } from '../guest/guest';
/**
 * Generated class for the EduPage page.
 *ss
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var google;


@IonicPage()
@Component({
  selector: 'page-edu',
  templateUrl: 'edu.html',
})
export class EduPage {

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
  this.http.get('assets/data/acc.json').map((res)=>res.json()).subscribe(data=>{
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

}
