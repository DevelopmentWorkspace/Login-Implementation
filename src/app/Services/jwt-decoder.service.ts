import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtDecoderService {
  
  jwtToken: string;
  decodedToken: { [key: string]: string };
  
  constructor() {
    
  }
  
  setToken(token: string) {
    if (token) {
      this.jwtToken = token;
      console.log(this.jwtToken)
      console.log(jwt_decode(this.jwtToken))
      console.log(this.getEmpId()?.toString() === "1571")
      }
    }
    
    decodeToken() {
      if (this.jwtToken) {
        this.decodedToken = jwt_decode(this.jwtToken);
      }
    }

    getDecodeToken() {
      return jwt_decode(this.jwtToken);
    }
    
    getUser() {
      this.decodeToken();
      return this.decodedToken ? this.decodedToken.displayname : null;
    }

    getEmpId() {
      this.decodeToken();
      return this.decodedToken ? this.decodedToken.emp_id : null;
    }
    
    getEmailId() {
      this.decodeToken();
      return this.decodedToken ? this.decodedToken.email : null;
    }
    
    getExpiryTime() {
      this.decodeToken();
      return this.decodedToken ? this.decodedToken.exp : null;
    }
    
    isTokenExpired(): boolean {
      const expiryTime: any = this.getExpiryTime();
      if (expiryTime) {
        return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
      } else {
        return false;
      }
    }
  }