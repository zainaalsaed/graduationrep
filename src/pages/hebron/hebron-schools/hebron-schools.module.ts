import { NgModule } from '@angular/core';
import { HebronSchoolsComponent } from '../hebron-schools/hebron-schools';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
@NgModule({
	declarations: [HebronSchoolsComponent],
	imports: [IonicPageModule.forChild(HebronSchoolsComponent),
		TranslateModule],
	exports: [HebronSchoolsComponent]
})
export class HebronSchoolsModule {}
