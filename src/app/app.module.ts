import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFree } from '@ionic-native/admob-free';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate/ng2-translate';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { MyApp } from './app.component';
import { AdmobFreeProvider } from '../providers/admob-free/admob-free';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {IonicPageModule} from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import * as firebase from 'firebase';
import 'firebase/firestore';
//import { GuestPage } from '../pages/guest/guest';
import { QalqilyaschoolsPage } from '../pages/qalqilyaschools/qalqilyaschools';
import { JeninschoolsPage } from '../pages/jeninschools/jeninschools';
import { RamallahschoolsPage } from '../pages/ramallahschools/ramallahschools';
import { TulkarmschoolsPage } from '../pages/tulkarmschools/tulkarmschools';
import { NablusschoolsPage } from '../pages/nablusschools/nablusschools';
import { BethlehemschoolsPage } from '../pages/bethlehemschools/bethlehemschools';
import { JerichoschoolsPage } from '../pages/jerichoschools/jerichoschools';
import { SchoolPage } from '../pages/school/school';
import { HebronschoolsPage } from '../pages/hebronschools/hebronschools';
import { GuestPage } from '../pages/guest/guest';
// import { EduPage } from '../pages/edu/edu';
import { TruckPage } from '../pages/truck/truck';
import { PrivatePage } from '../pages/private/private';
import { TableegePage } from '../pages/tableege/tableege';
import { TableeghacPage } from '../pages/tableeghac/tableeghac';
import { GusPage } from '../pages/gus/gus';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ViolationsPage } from '../pages/violations/violations';
// import { NewsFeedComponent } from '../pages/newsfeed/newsfeed';


const firebaseAuth = {
  apiKey: "AIzaSyDaMitUUxNTOo7uWpsRuhDtl4ox7cvR1FA",
  authDomain: "test-project-ca0ec.firebaseapp.com",
  databaseURL: "https://test-project-ca0ec.firebaseio.com",
  projectId: "test-project-ca0ec",
  storageBucket: "",
  messagingSenderId: "778431294120"
  
};

@NgModule({
  declarations: [
    MyApp,
    GuestPage,
    // EduPage,
    GusPage,
    JerichoschoolsPage,
    BethlehemschoolsPage,
    NablusschoolsPage,
    TulkarmschoolsPage,
    QalqilyaschoolsPage,
    JeninschoolsPage,
    TruckPage,
    PrivatePage,
    TableeghacPage,
    TableegePage,
    RamallahschoolsPage,
    HebronschoolsPage ,
    // SchoolPage,
    HebronschoolsPage ,
    SchoolPage,
    NotificationsPage,
    ViolationsPage
  ],
  imports: [
    // SchoolPage,
    IonicModule.forRoot(MyApp, {
      menuType: 'overlay',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
    }),
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
      deps: [Http]
    }),
    IonicImageViewerModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GuestPage,
    JerichoschoolsPage,
    BethlehemschoolsPage,
    NablusschoolsPage,
    TulkarmschoolsPage,
    QalqilyaschoolsPage,
    JeninschoolsPage,
    RamallahschoolsPage,
    PrivatePage,
    TableegePage,
    // EduPage,
    TruckPage,
    HebronschoolsPage ,
    SchoolPage,
    NotificationsPage,
    ViolationsPage,
    // NewsFeedComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AdMobFree,
    Geolocation,
    BarcodeScanner,
    AdmobFreeProvider
  ]
})
export class AppModule { }
