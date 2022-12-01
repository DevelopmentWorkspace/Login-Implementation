import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { LoginResponse } from '../ResponseTypings/login-response';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL = "http://testvedika.atai.ai/api/";
  

  constructor(private httpClient: HttpClient) { }

  loginPostRequest(logincred: LoginResponse): Observable<any> {
    return this.httpClient.post<any>(this.baseURL + 'login/', logincred)
  }
}
