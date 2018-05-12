import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { EducationComponent } from '../education.1/education';
@NgModule({
	declarations: [EducationComponent],
	imports: [IonicPageModule.forChild(EducationComponent),
		TranslateModule],
	exports: [EducationComponent,TranslateModule]
})
export class EducationModule {}
