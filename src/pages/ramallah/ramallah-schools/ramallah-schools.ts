import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ramallahModel } from '../models/ramallah.model';
/** Import Service */
import { ramallahService } from '../services/ramallah.service';
/**
 * Generated class for the RamallahSchoolsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ramallah-schools',
  templateUrl: 'ramallah-schools.html',
  providers: [ramallahService]
})
export class RamallahSchoolsComponent {

  allCategories: ramallahModel[];
  constructor(public navCtrl: NavController, private categoryService: ramallahService) {
    this.navCtrl = navCtrl;
  }
  ngOnInit() {
    /** 
     * Load all categories
     * Load all categories from the category service 
    */
    this.allCategories = this.categoryService.getAllCategories();
  }}

