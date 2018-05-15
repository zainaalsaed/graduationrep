import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { CategoryComponent } from './category';
import { Contacts } from '@ionic-native/contacts';
@NgModule({
  declarations: [
    CategoryComponent,
  ],
  imports: [
    IonicPageModule.forChild(CategoryComponent),
    TranslateModule
  ],
  exports: [
    CategoryComponent,
    TranslateModule
  ],
  providers: [
    Contacts
  ]
})
export class CategoryModule {}
