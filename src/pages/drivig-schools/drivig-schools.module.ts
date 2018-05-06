import { NgModule } from '@angular/core';
import { DrivigSchoolsComponent } from './drivig-schools';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
@NgModule({
	declarations: [DrivigSchoolsComponent],
	imports: [IonicPageModule.forChild(DrivigSchoolsComponent),
		TranslateModule],
	exports: [DrivigSchoolsComponent,TranslateModule]
})
export class DrivigSchoolsModule {}
