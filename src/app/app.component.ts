import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
// import { AuthGuard } from './Services/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login-Implementation';

  loggedIn = false;

  constructor(
    location: Location, router: Router
  ) {

    router.events.subscribe(val => {
      if (location.path() != "/login") {
        console.log('in dashboard')
          this.loggedIn = true;
      } else {
        console.log('in login')
        this.loggedIn = false;
      }
    });

  }

  

  

  ngOnInit() {
  }

}
