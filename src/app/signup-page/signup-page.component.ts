import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(private fb: FormBuilder) { }



  signUpForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    emailID: [''],
    date:[''],
    newPassword: [''],
    confirmPassword: [''],
    gender: [''],
    location: this.fb.group({
    address: [''],
    country: [''],
    state: [''],
    zip: [''],
    })
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.signUpForm.value)
  }

  ngOnInit(): void {
    console.log(this.signUpForm.value)
  }

}
