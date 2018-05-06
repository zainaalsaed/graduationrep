import { Component } from '@angular/core';
import { tulkarmModel } from '../models/tulkarm.model';
/** Import Service */
import { tulkarmService } from '../services/tulkarm.service';
import { NavController, IonicPage } from 'ionic-angular';
/**
 * Generated class for the JeninSchoolsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@IonicPage()

@Component({
  selector: 'tulkarm-schools',
  templateUrl: 'tulkarm-schools.html',
  providers: [tulkarmService]
})
export class TulkarmSchoolsComponent {

  allCategories: tulkarmModel[];
  constructor(public navCtrl: NavController, private categoryService: tulkarmService) {
    this.navCtrl = navCtrl;
  }
  ngOnInit() {
    
    this.allCategories = this.categoryService.getAllCategories();
  }}

