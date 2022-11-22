import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../Services/login.service';
import { LoginResponse } from '../ResponseTypings/login-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: HTMLElement | null | undefined;
  attributeValue: any = [];
  newAttribute: any;


  constructor(private formBuilder : FormBuilder,
    private loginService : LoginService) { 
  }

  onShowandHidePasswordClicked() {
    const showPassword = document.getElementById('hidePassword');
    const password = document.getElementById('LoginPassword');
    this.attributeValue = showPassword?.getAttribute('class')?.split(' ');
    let indexOf = this.attributeValue?.indexOf('fa-eye-slash');
    if (indexOf == '-1') {
      indexOf = this.attributeValue?.indexOf('fa-eye');
      let openEye = 'fa-eye-slash';
      this.attributeValue[indexOf] = openEye;
      password?.setAttribute('type' , 'password');
    } else {
      let openEye = 'fa-eye';
      this.attributeValue[indexOf] = openEye;
      password?.setAttribute('type' , 'text');
    }
    this.newAttribute = this.attributeValue?.join(' ');
    showPassword?.setAttribute('class' , this.newAttribute);
  }

  loginForm:FormGroup = this.formBuilder.group({
    email: [''],
    password:[''],
  });

  onLoginClick(){
    // console.log("Hi"+this.loginForm)
    const loginCred:LoginResponse = this.loginForm.value

    
    console.log(this.loginForm.value)
    this.loginService.loginPostRequest(loginCred);

    this.loginForm.reset()
    // this.loginForm.reset();
    // '1dipak@atai.ai' , '12'

  }

  ngOnInit(): void {
  }

}
