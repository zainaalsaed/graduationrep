import { NgModule } from '@angular/core';
import { JerichoSchoolsComponent } from '../jericho-schools/jericho-schools';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
@NgModule({
	declarations: [JerichoSchoolsComponent],
	imports: [IonicPageModule.forChild(JerichoSchoolsComponent),
		TranslateModule],
	exports: [JerichoSchoolsComponent,TranslateModule]
})
export class JeninSchoolsModule {}
