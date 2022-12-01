import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../Services/login.service';
import { LoginResponse } from '../ResponseTypings/login-response';
import { LocalStorageService } from '../Services/local-storage.service'; 
import { JwtDecoderService } from '../Services/jwt-decoder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: HTMLElement | null | undefined;
  attributeValue: any = [];
  newAttribute: any;
  response: any;
  errorMessage: any;

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private localStorageService: LocalStorageService,
    private jwtDecoder: JwtDecoderService,
    private router: Router) {
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
      password?.setAttribute('type', 'password');
    } else {
      let openEye = 'fa-eye';
      this.attributeValue[indexOf] = openEye;
      password?.setAttribute('type', 'text');
    }
    this.newAttribute = this.attributeValue?.join(' ');
    showPassword?.setAttribute('class', this.newAttribute);
  }

  loginForm: FormGroup = this.formBuilder.group({
    email: ['',Validators.required],
    password: ['',Validators.required],
  });

  decodingJWtToken(){
    console.log('on decoder method')
    if (this.response?.success) {
      console.log('on decoder method')
      this.localStorageService.set('token',this.response.results.token);
      this.jwtDecoder.setToken(this.response.results.token);
    } else {
      this.router.navigate(['/landingPage'])
      alert('retry login');
    }
    
  }
  
  loginServiceCall(){
    const loginCred: LoginResponse = this.loginForm.value
    console.log(this.loginForm)
    this.loginService.loginPostRequest(loginCred).subscribe({
      next: async data => {
        this.response = await data;
        console.log(this.response.token)
        console.log('results.token',this.response.results.token)
        this.decodingJWtToken();
      },
      error: async error => {
        this.errorMessage = await error.message;
        console.error('There was an error!', error);
        this.decodingJWtToken();
      }        
    });
    console.log('login Servicec call')
  }

  onLoginClick() {

    if (this.loginForm.status === 'VALID') {
      this.loginServiceCall();
      this.loginForm.reset();
    } else {
      alert('Please enter login Details')
    }
  }

  ngOnInit(): void {
  }

}
