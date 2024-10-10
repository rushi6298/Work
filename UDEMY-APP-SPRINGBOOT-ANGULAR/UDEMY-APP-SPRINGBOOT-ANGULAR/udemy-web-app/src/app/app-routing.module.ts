import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListToDosComponent } from './list-to-dos/list-to-dos.component';
import { LogoutComponent } from './logout/logout.component';
import { RaoteguardService } from './service/raoteguard.service';
// welcome
const routes: Routes = [
  {path:'',component:HomeComponent, },
  {path:'home',component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'welcome/:name', component:WelcomeComponent, canActivate:[RaoteguardService]},
  {path:'todos',component:ListToDosComponent, canActivate:[RaoteguardService]},
  {path:'logout',component:LogoutComponent, canActivate:[RaoteguardService]},
  {path:'**',component:ErrorComponent, canActivate:[RaoteguardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
