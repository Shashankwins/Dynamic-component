import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConfigService } from './shared/services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dynamic-Fields';
  configs : any;
  signUpForm! : FormGroup
  test1 : any;

  constructor(private _config : ConfigService){
    this.signUpForm = new FormGroup({})
  }

  ngOnInit(): void {
    this._config.getConfigs().subscribe(data =>{
      this.configs = data;
    })    
  }

  signUp() {
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value)
    }else if(this.signUpForm.invalid){
      alert('Form is invalid')
    }
  }

  hello(event : any) { 
    console.log(event);
  }
}
