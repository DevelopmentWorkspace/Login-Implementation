import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  { path : 'login' , component: DefaultPageComponent},
  { path : 'dashboard' , component: DashboardComponent, canActivate: [AuthGuard]},
  {path:'',redirectTo:'login', pathMatch: 'full' },
  { path : '**' , component: LandingPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
