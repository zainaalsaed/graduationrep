/** Represents a Component of landing page. */
import { Platform, IonicPage } from 'ionic-angular';

/** Imports Modules */
import { Component } from '@angular/core';
import { NavController,  MenuController, LoadingController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { SettingsService } from '../../settings/settings.service';
import { GuestPage } from '../../guest/guest';
import { AdminpanelPage } from '../../adminpanel/adminpanel';

@IonicPage()
@Component({
  selector: 'landing-page',
  templateUrl: 'landing-page.html',
  providers: [SettingsService]
})
export class LandingPageComponent {
  
  constructor( public translate:
    TranslateService, public navCtrl: NavController,
    private menu: MenuController , public loadingCtrl: LoadingController) {
    this.menu.enable(false); // Disable sidemenu
  }



 
  
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }
  
  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box"></div>
        </div>`,
      duration: 5000
    });
  
    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });
  
    loading.present();
  }
  
  presentLoadingText() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Loading Please Wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      this.navCtrl.setRoot(LandingPageComponent);
    }, 1000);
  
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }



  openPage(component) {
    console.log(component)
    this.navCtrl.setRoot(component);
  }
  public changeLanguage(language){
    this.translate.use(language);
  }
openGPage(){
  this.navCtrl.setRoot(GuestPage);
}
openadminPage(){
  this.navCtrl.setRoot(AdminpanelPage);
}
  
}
