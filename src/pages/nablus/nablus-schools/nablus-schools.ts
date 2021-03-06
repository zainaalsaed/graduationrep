import { Component , OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { nablusModel } from '../models/nablus.model';
/** Import Service */
import { nablusService } from '../services/nablus.service';
import { NablusDetailPage } from '../../nablus-detail/nablus-detail';
import { TripService } from '../../services/trip-service';

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
 providers: [nablusService,TripService]
 
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
  }
  viewDetail(id) {
    this.navCtrl.push(NablusDetailPage, {id: id});
  }
}
