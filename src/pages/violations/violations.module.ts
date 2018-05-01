import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViolationsPage } from './violations';

@NgModule({
  declarations: [
    ViolationsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViolationsPage),
  ],
})
export class ViolationsPageModule {}
