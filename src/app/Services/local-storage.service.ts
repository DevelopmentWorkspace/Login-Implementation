import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

    loggedIn = false;

    constructor(){}

    set(key: string, value: any) {
        localStorage.setItem(key, value);
    }

    isLoggedIn(status:any) {
        // console.log('@@@@@@@@@@@@@@',this.loggedIn , this.login.status)
        if (status) {
          this.loggedIn = true;
          console.log(this.loggedIn)
          this.set('isLoggedIn',this.loggedIn)
        } else {
          this.loggedIn = false;
          console.log(this.loggedIn)
          this.set('isLoggedIn',this.loggedIn)
        }
      }

    get(key: string) {
        return localStorage.getItem(key);
    }

    remove(key: string) {
        localStorage.removeItem(key);
    }

    clear(){
        localStorage.clear();
    }
}