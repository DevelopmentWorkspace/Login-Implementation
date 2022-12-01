import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultPageComponent } from './default-page/default-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch: 'full' },
  { path : 'login' , component:DefaultPageComponent},
  { path : 'landingPage' , component:LandingPageComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
