import { NgModule } from '@angular/core';
import { RamallahSchoolsComponent } from '../ramallah-schools/ramallah-schools';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
@NgModule({
	declarations: [RamallahSchoolsComponent],
	imports: [IonicPageModule.forChild(RamallahSchoolsComponent),
		TranslateModule],
	exports: [RamallahSchoolsComponent,TranslateModule]
})
export class RamallahSchoolsModule {}
