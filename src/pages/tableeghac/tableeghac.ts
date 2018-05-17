import { Component } from '@angular/core';
import { IonicPage,AlertController, NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
/**
 * Generated class for the TableeghacPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tableeghac',
  templateUrl: 'tableeghac.html',
})

export class TableeghacPage {

  tableeghacList :  AngularFireList<any>;
  constructor( private alertCtrl: AlertController,  public db: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
    this.tableeghacList = db.list('/tableeghac')}

    alert(message: string) {
      this.alertCtrl.create({
        title: 'Submitted!',
        subTitle: message,
        buttons: ['OK']
      }).present();
    }
    createTableeghac(platNum1,platNum2,platType1,description1){
      this.tableeghacList.push({
        platNum1 : platNum1,
        platNum2 : platNum2,
        platType1 : platType1,
          description1 : description1,
          //accDptCde : accDptCde,
  
          }).then(newTableeghac =>{
      this.navCtrl.setRoot("TetingpageComponent");
      let alert = this.alertCtrl.create({
        title: 'success!',
        subTitle: 'Your report was successfully submitted,  to track its status go to report status page',
        buttons: ['OK']
      });
      alert.present();
    
      },error=>{console.log(error);});
  }
  
  maplo()
{
  this.navCtrl.setRoot('GoogleMapComponent');
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad TableeghacPage');
  }

}
