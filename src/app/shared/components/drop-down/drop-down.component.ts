import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
  @Input() config: any;
  @Input() formGroup!: FormGroup
  @Output() eventFromDropdown = new EventEmitter<any>();

  ngOnInit(): void {
    this.formGroup.addControl(this.config.formControlName, new FormControl(''))
    if (this.config.required == 'true') {
      this.formGroup.controls[this.config.formControlName].setValidators([Validators.required])
    }
  }

  selectedDropdown(event: any) {
    let value = event.value;
    this.eventFromDropdown.emit(value)
  }
}
