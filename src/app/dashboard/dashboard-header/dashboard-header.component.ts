import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/login/login.component';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService,
    private login: LoginComponent) {}

  onLogoutClick(){
    this.localStorageService.clear()
  }

  ngOnInit(): void {
  }

}
