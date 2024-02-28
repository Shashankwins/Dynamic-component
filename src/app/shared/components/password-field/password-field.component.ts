import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.css']
})
export class PasswordFieldComponent implements OnInit {
  @Input() config: any;
  @Input() formGroup!: FormGroup;
  @Output() eventFromPasswordComp = new EventEmitter<any>();

  ngOnInit(): void {
    this.formGroup.addControl(this.config.formControlName, new FormControl(''))
    if (this.config.required == 'true') {
      this.formGroup.controls[this.config.formControlName].setValidators([Validators.required])
    }
  }

  onFocus() {
    this.eventFromPasswordComp.emit('password nahi dikhega');
  }
}
