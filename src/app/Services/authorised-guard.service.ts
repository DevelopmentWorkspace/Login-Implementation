import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtDecoderService } from './jwt-decoder.service';
import { LocalStorageService } from './local-storage.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorisedGuardService implements CanActivate {
  constructor(private loginService: LoginService,
              private authStorageService: LocalStorageService,
              private jwtService: JwtDecoderService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | boolean {
      if (this.jwtService.getUser()) {
          if (this.jwtService.isTokenExpired()) {
            // Should Redirect Sig-In Page
            return false;
          } else {
            return true;
          }
      } 
      else{
        return false;
      }
      // else {
      //   return new Promise((resolve) => {
      //     this.loginService.signIncallBack().then((e) => {
      //        resolve(true);
      //     }).catch((e) => {
      //       // Should Redirect Sign-In Page
      //     });
      //   });
      // }
  }
}