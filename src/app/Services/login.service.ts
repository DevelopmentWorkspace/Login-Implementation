import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { LoginResponse } from '../ResponseTypings/login-response';
import * as _ from 'lodash';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL = "http://testvedika.atai.ai/api/";
  response: any;
  errorMessage: any;

  constructor(private httpClient: HttpClient) { }

  loginPostRequest(logincred: LoginResponse): Observable<any> {
    console.log(logincred);
    this.httpClient.post<any>(this.baseURL + 'login/', logincred).subscribe({
      next: data => {
        this.response = data;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    })
    return this.response + this.errorMessage;
  }
}
