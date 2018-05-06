import { NgModule } from '@angular/core';
import { TulkarmSchoolsComponent } from '../tulkarm-schools/tulkarm-schools';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
@NgModule({
	declarations: [TulkarmSchoolsComponent],
	imports: [IonicPageModule.forChild(TulkarmSchoolsComponent),
		TranslateModule],
	exports: [TulkarmSchoolsComponent]
})
export class TulkarmSchoolsModule {}
