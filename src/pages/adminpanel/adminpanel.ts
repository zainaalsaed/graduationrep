// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform, IonicPage } from 'ionic-angular';

/** Imports Modules */
import { Component } from '@angular/core';
import { NavController,  MenuController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { SettingsService } from '../settings/settings.service';
import { LogschoolPage } from '../logschool/logschool';
import { LogemployeePage } from '../logemployee/logemployee';

/**
 * Generated class for the AdminpanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminpanel',
  templateUrl: 'adminpanel.html',
})
export class AdminpanelPage {
  
  constructor( public translate:
    TranslateService, public navCtrl: NavController,
    private menu: MenuController) {
    this.menu.enable(false); // Disable sidemenu
  }

  openPage(component) {
    console.log(component)
    this.navCtrl.setRoot(component);
  }
  public changeLanguage(language){
    this.translate.use(language);
  }
openschPage(){
  this.navCtrl.setRoot(LogschoolPage);
}
openempPage(){
  this.navCtrl.setRoot(LogemployeePage);
}
  
}
