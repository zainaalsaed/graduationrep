import { Component } from '@angular/core';
import { jerichoModel } from '../models/jericho.model';
/** Import Service */
import { jerichoService } from '../services/jericho.service';
import { NavController, IonicPage } from 'ionic-angular';
/**
 * Generated class for the JeninSchoolsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@IonicPage()
/**
 * Generated class for the JerichoSchoolsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'jericho-schools',
  templateUrl: 'jericho-schools.html',
  providers: [jerichoService]
})
export class JerichoSchoolsComponent {

  allCategories: jerichoModel[];
  constructor(public navCtrl: NavController, private categoryService: jerichoService) {
    this.navCtrl = navCtrl;
  }
  ngOnInit() {
    /** 
     * Load all categories
     * Load all categories from the category service 
    */
    this.allCategories = this.categoryService.getAllCategories();
  }}
