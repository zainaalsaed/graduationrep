import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFree } from '@ionic-native/admob-free';
import {IonicStorageModule} from '@ionic/storage';
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
import { NablusDetailPage } from '../pages/nablus-detail/nablus-detail';
import { MaapsPage } from '../pages/maaps/maaps';
import { TestPage } from '../pages/test/test';
import { SearchtestPage } from '../pages/searchtest/searchtest';
import { TestlistPage } from '../pages/testlist/testlist';
import { TestatPage } from '../pages/testat/testat';
import { LogemployeePage } from '../pages/logemployee/logemployee';
import { LogschoolPage } from '../pages/logschool/logschool';
import { AdminpanelPage } from '../pages/adminpanel/adminpanel';
import { SigninPage } from '../pages/signin/signin';
import { RoomPage } from '../pages/room/room';
import { HomePage } from '../pages/home/home';
import { AddRoomPage } from '../pages/add-room/add-room';
import { MahakemmapPage } from '../pages/mahakemmap/mahakemmap';
import { TickethistoryPage } from '../pages/tickethistory/tickethistory';
// import { NewsFeedComponent } from '../pages/newsfeed/newsfeed';


const firebaseAuth = {
  apiKey: "AIzaSyDaMitUUxNTOo7uWpsRuhDtl4ox7cvR1FA",
  authDomain: "test-project-ca0ec.firebaseapp.com",
  databaseURL: "https://test-project-ca0ec.firebaseio.com",
  projectId: "test-project-ca0ec",
  storageBucket: "test-project-ca0ec.appspot.com",
  messagingSenderId: "778431294120"
  
} ;

@NgModule({
  declarations: [
    MyApp,
    GuestPage,
    AdminpanelPage,
    // EduPage,
    GusPage,
    TickethistoryPage,
    JerichoschoolsPage,
    BethlehemschoolsPage,
    NablusschoolsPage,
    TulkarmschoolsPage,
    QalqilyaschoolsPage,
    JeninschoolsPage,
    TruckPage,
    SigninPage,
    TestlistPage,
    PrivatePage,
    NablusDetailPage,
    TableeghacPage,
    TableegePage,
    TestatPage,
    AdminpanelPage,
    RamallahschoolsPage,
    HebronschoolsPage ,
    TestPage,
    RoomPage,
    HomePage,
   MahakemmapPage,
    AddRoomPage,
    SearchtestPage,
    // LogemployeePage,
    // SchoolPage,
    HebronschoolsPage ,
    MaapsPage,
    SchoolPage,
    NotificationsPage,
    ViolationsPage,
    LogemployeePage,
    LogschoolPage
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
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
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
    LogemployeePage,
    LogschoolPage,
    GuestPage,
    JerichoschoolsPage,
    BethlehemschoolsPage,
    NablusschoolsPage,
    TulkarmschoolsPage,
    SearchtestPage,
    QalqilyaschoolsPage,
    JeninschoolsPage,
    SigninPage,
    RamallahschoolsPage,
    PrivatePage,
    TableegePage,
    AdminpanelPage,
    TestatPage,
    RoomPage,
    AddRoomPage,
    HomePage,
    AdminpanelPage,
    TickethistoryPage,
    // EduPage,
    TruckPage,
    MaapsPage,
    TestPage,
  
    TestlistPage,
    NablusDetailPage,
    HebronschoolsPage ,
    SchoolPage,
    TableeghacPage,
    NotificationsPage,
    ViolationsPage,
    MahakemmapPage
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
