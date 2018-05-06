import { NgModule } from '@angular/core';
import { NablusSchoolsComponent } from '../nablus-schools/nablus-schools';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
@NgModule({
	declarations: [NablusSchoolsComponent],
	imports: [IonicPageModule.forChild(NablusSchoolsComponent),
		TranslateModule],
	exports: [NablusSchoolsComponent,TranslateModule]
})
export class NablusSchoolsModule {}
