import { Component , OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { nablusModel } from '../models/nablus.model';
/** Import Service */
import { nablusService } from '../services/nablus.service';

/**
 * Generated class for the NablusSchoolsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@IonicPage()
@Component({
  selector: 'nablus-schools',
  templateUrl: 'nablus-schools.html',
  providers: [nablusService]
})
export class NablusSchoolsComponent 
{
allCategories: nablusModel[];
  constructor(public navCtrl: NavController, private categoryService: nablusService) {
    this.navCtrl = navCtrl;
  }
  ngOnInit() {
    /** 
     * Load all categories
     * Load all categories from the category service 
    */
    this.allCategories = this.categoryService.getAllCategories();
  }}
