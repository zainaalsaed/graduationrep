import { Component } from '@angular/core';
import { hebronModel } from '../models/hebron.model';
/** Import Service */
import { hebronService } from '../services/hebron.service';
import { NavController, IonicPage } from 'ionic-angular';

/**
 * Generated class for the HebronSchoolsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@IonicPage()
@Component({
  selector: 'hebron-schools',
  templateUrl: 'hebron-schools.html',
  providers: [hebronService]
})
export class HebronSchoolsComponent {

  
    allCategories: hebronModel[];
      constructor(public navCtrl: NavController, private categoryService: hebronService) {
        this.navCtrl = navCtrl;
      }
      ngOnInit() {
        /** 
         * Load all categories
         * Load all categories from the category service 
        */
        this.allCategories = this.categoryService.getAllCategories();
      }}
    