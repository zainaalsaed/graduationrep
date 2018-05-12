import { NgModule } from '@angular/core';
import { PracticeComponent } from '../practice/practice';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
@NgModule({
	declarations: [PracticeComponent],
	imports: [IonicPageModule.forChild(PracticeComponent),
		TranslateModule],
	exports: [PracticeComponent,TranslateModule]
})
export class PracticeModule {}
