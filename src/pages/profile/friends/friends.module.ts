import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { FriendsComponent } from './friends';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import {IonicPageModule} from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { ProfileComponent } from '../profile';

@NgModule({
  declarations: [
    FriendsComponent,
  ],
  imports: [
    // AngularFireModule.initializeApp(firebaseAuth),
    // AngularFireDatabaseModule,
    // AngularFireAuthModule,
    // ProfileComponent,
    IonicPageModule.forChild(ProfileComponent),
    TranslateModule
  ],
  exports: [
    FriendsComponent,
    TranslateModule
  ]
})
export class FriendsModule {}
