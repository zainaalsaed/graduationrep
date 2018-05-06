import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { jeninModel } from '../models/jenin.model';
/** Import Service */
import { jeninService } from '../services/jenin.service';

/**
 * Generated class for the JeninSchoolsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@IonicPage()
@Component({
  selector: 'jenin-schools',
  templateUrl: 'jenin-schools.html',
  providers: [jeninService]
})
export class JeninSchoolsComponent {
  allCategories: jeninModel[];
    constructor(public navCtrl: NavController, private categoryService: jeninService) {
      this.navCtrl = navCtrl;
    }
    ngOnInit() {
      /** 
       * Load all categories
       * Load all categories from the category service 
      */
      this.allCategories = this.categoryService.getAllCategories();
    }}
  