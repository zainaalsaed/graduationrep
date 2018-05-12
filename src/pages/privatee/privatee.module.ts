import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { PrivateeComponent } from '../privatee/privatee';
@NgModule({
	declarations: [PrivateeComponent],
	imports: [IonicPageModule.forChild(PrivateeComponent),
		TranslateModule],
	exports: [PrivateeComponent,TranslateModule]
})
export class PrivateeModule {}
