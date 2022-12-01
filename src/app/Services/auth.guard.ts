import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtDecoderService } from './jwt-decoder.service';
import { LocalStorageService } from './local-storage.service';
import { AppComponent } from '../app.component';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private jwtService: JwtDecoderService,
    private router: Router,
    private localStorage : LocalStorageService,
    private appcomponent: AppComponent) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      try {
        var jwtPayload:any = JSON.parse(this.localStorage.get('jwtPayload') as string)
        if (jwtPayload.emp_id === 1571) {
          this.router.navigate(['/dashboard'])
          return true;
        } else {
          this.router.navigate([''])
          return false;
        }
      } catch (error) {
        this.router.navigate([''])
        return false;
      }
  }
  
}
