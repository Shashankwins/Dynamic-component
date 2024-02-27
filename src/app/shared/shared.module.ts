import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { HttpClientModule } from '@angular/common/http';
import { PasswordFieldComponent } from './components/password-field/password-field.component';
import { PasswordModule } from 'primeng/password';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    InputFieldComponent,
    DropDownComponent,
    DynamicFieldDirective,
    PasswordFieldComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PasswordModule,
    BrowserAnimationsModule,
    ButtonModule
  ],

  exports: [
    InputFieldComponent,
    DropDownComponent,
    DynamicFieldDirective, CommonModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [InputFieldComponent]
})
export class SharedModule { }
