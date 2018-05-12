import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogemployeePage } from './logemployee';

@NgModule({
  declarations: [
    LogemployeePage,
  ],
  imports: [
    IonicPageModule.forChild(LogemployeePage),
  ],
})
export class LogemployeePageModule {}
