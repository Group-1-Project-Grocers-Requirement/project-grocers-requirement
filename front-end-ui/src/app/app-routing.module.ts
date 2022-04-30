import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SignInComponent as AdminSignin } from './Admin/sign-in/sign-in.component';
import { EmployeeSignInComponent as EmployeeSignin } from './Employee/sign-in/sign-in.component';
import { SigninComponent as UserSignin } from './User/signin/signin.component';
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'admin', component: AdminSignin },
  { path: 'shopper', component: UserSignin },
  { path: 'employee', component: EmployeeSignin },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
