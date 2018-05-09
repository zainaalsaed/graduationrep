import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
// Models
import { FriendsModel } from './friends.model';
// Services
import { FriendsService } from './friends.service';
import {ViewController} from "ionic-angular";
// import { Component } from '@angular/core';
import {  NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireObject }  from 'angularfire2/database';
import { AngularFireDatabase} from 'angularfire2/database';
import { User } from '../../../models/user';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'friends',
  templateUrl: 'friends.html',
  // providers: [FriendsService]
})
export class FriendsComponent {
  // friends: FriendsModel[];
  // constructor(public navCtrl: NavController, private friendsService: FriendsService ) {}
  // ngOnInit() {
  //   //called after the constructor and called  after the first ngOnChanges()
  //   this.friends = this.friendsService.getAllFriends();
  // }
  eventatData = []
  userData : AngularFireObject<User> ;
  item : Observable<User>;
  itemRef : AngularFireObject<any>;
  tick = []
  constructor(
    public viewCtrl : ViewController,
    public navCtrl: NavController,
    private afAuth: AngularFireAuth ,
     private afDatabase: AngularFireDatabase,
     public navParams: NavParams) {this.afDatabase.list("/tickets/").valueChanges().subscribe(
      _data => {
        this.eventatData = _data ; 
        console.log(this.eventatData) ;});
      }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');

    this.afAuth.authState.subscribe(data =>{
      if(data && data.email && data.uid){
        this.userData = this.afDatabase.object('user/'+ data.uid);
        this.item = this.userData.valueChanges();
        this.afDatabase.list('/user/'+ data.uid+'/tickets/').valueChanges().subscribe(
          _data => {
            this.tick = _data ; 
            this.tick = this.tick.reverse();
            
          }
        );
        }
      }
      );
       }
}


