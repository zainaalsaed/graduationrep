import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GusPage } from './gus';

@NgModule({
  declarations: [
    GusPage,
  ],
  imports: [
    IonicPageModule.forChild(GusPage),
  ]
})
export class GusPageModule {}
