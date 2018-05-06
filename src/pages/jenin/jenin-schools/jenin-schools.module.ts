import { NgModule } from '@angular/core';
import { JeninSchoolsComponent } from '../jenin-schools/jenin-schools';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
@NgModule({
	declarations: [JeninSchoolsComponent],
	imports: [IonicPageModule.forChild(JeninSchoolsComponent),
		TranslateModule],
	exports: [JeninSchoolsComponent,TranslateModule]
})
export class JeninSchoolsModule {}
