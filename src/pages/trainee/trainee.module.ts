import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TraineePage } from './trainee';

@NgModule({
  declarations: [
    TraineePage,
  ],
  imports: [
    IonicPageModule.forChild(TraineePage),
  ],
})
export class TraineePageModule {}
