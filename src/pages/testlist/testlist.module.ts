import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestlistPage } from './testlist';

@NgModule({
  declarations: [
    TestlistPage,
  ],
  imports: [
    IonicPageModule.forChild(TestlistPage),
  ],
})
export class TestlistPageModule {}
