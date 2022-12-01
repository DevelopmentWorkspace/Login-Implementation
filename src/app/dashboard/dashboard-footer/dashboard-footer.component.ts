import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-dashboard-footer',
  templateUrl: './dashboard-footer.component.html',
  styleUrls: ['./dashboard-footer.component.css']
})
export class DashboardFooterComponent implements OnInit {
  constructor(private login: LoginComponent) { }

  ngOnInit(): void {
  }

}
