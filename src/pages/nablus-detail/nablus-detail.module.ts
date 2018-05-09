import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NablusDetailPage } from './nablus-detail';

@NgModule({
  declarations: [
    NablusDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(NablusDetailPage),
  ],
})
export class NablusDetailPageModule {}
