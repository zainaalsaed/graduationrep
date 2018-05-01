import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchSchoolPage } from './search-school';

@NgModule({
  declarations: [
    SearchSchoolPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchSchoolPage),
  ],
})
export class SearchSchoolPageModule {}
