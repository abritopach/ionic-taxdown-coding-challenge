import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { DynamicFormComponent } from './../components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './../components/dynamic-form-question/dynamic-form-question.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, DynamicFormComponent, DynamicFormQuestionComponent],
  entryComponents: [DynamicFormComponent, DynamicFormQuestionComponent]
})
export class HomePageModule {}
