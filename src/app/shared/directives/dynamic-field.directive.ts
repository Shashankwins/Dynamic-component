import { ComponentRef, Directive, EventEmitter, HostListener, Input, Output, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DropDownComponent } from '../components/drop-down/drop-down.component';
import { InputFieldComponent } from '../components/input-field/input-field.component';
import { PasswordFieldComponent } from '../components/password-field/password-field.component';

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective {

  @Input() config : any;
  @Input() formGroup! : FormGroup;
  @Output() eventFromDirective = new EventEmitter<any>;

  constructor(private _view:ViewContainerRef){}

  ngOnInit(): void {
    if(!this.config){
      return
    }
    else if(this.config.type == 'text'){
      const control = this._view.createComponent(InputFieldComponent)
      control.setInput('config', this.config)
      control.setInput('formGroup', this.formGroup)
      control.instance.eventFromInputComp.subscribe((data) => {
        this.eventFromDirective.emit(data)
      });       
    }
    else if(this.config.type == 'password'){
      const control = this._view.createComponent(PasswordFieldComponent)
      control.setInput('config', this.config)
      control.setInput('formGroup', this.formGroup)
      control.instance.eventFromPasswordComp.subscribe((data) => {
        this.eventFromDirective.emit(data)
      });
    }
    else if(this.config.type == 'dropdown'){
      const control = this._view.createComponent(DropDownComponent)
      control.setInput('config', this.config)
      control.setInput('formGroup', this.formGroup)
      control.instance.eventFromDropdown.subscribe((data) => {
        this.eventFromDirective.emit(data)
      }); 
    }
  }
}
