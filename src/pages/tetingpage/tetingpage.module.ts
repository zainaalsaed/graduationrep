import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { TetingpageComponent } from './tetingpage';
@NgModule({
	declarations: [
		TetingpageComponent,
	],
	imports: [
		IonicPageModule.forChild(TetingpageComponent),
    TranslateModule
	],
	exports: [
		TetingpageComponent,
		TranslateModule
	]
})
export class TetingpageModule {}
