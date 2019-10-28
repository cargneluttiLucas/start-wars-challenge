import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TextfieldComponent } from './textfield/textfield.component';
import { FormModule } from './forms/forms.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    CardComponent,
    TextfieldComponent,
    ButtonComponent,
    LoadingComponent],
  exports: [
    CardComponent,
    TextfieldComponent,
    ReactiveFormsModule,
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormModule
  ]
})
export class SharedModule { }
