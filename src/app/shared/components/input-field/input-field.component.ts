import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {
  @Input() config: any;
  @Input() formGroup!: FormGroup;
  @Output() eventFromInputComp = new EventEmitter<any>();


  ngOnInit(): void {
    this.formGroup.addControl(this.config.formControlName, new FormControl(''))
    if (this.config.required === 'true') {
      this.formGroup.controls[this.config.formControlName].setValidators([Validators.required])
    }
  }

  sayHi() {
    let name = this.formGroup.controls[this.config.formControlName].value;
    this.eventFromInputComp.emit(name);
  }
}
