import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './Commons/header/header.component';
import { FooterComponent } from "./Commons/footer/footer.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from './NgbComponents/date-picker/date-picker.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginService } from './Services/login.service';
import { MatIconModule } from '@angular/material/icon';
import { JwtDecoderService } from './Services/jwt-decoder.service';
import { LocalStorageService } from './Services/local-storage.service';
import { AuthGuard } from './Services/auth.guard';
import { AppCookieService } from './Services/app-cookie.service';
import { AuthorisedGuardService } from './Services/authorised-guard.service';
import { DefaultPageComponent } from './default-page/default-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHeaderComponent } from './dashboard/dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './dashboard/dashboard-footer/dashboard-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    DatePickerComponent,
    SignupPageComponent,
    DefaultPageComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [LoginService,
    JwtDecoderService,
    LocalStorageService,
    AuthorisedGuardService,
    AppCookieService,
    AuthGuard,
  LoginComponent,
  AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
