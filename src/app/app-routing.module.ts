import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';

const routes: Routes = [
  { path: '', component:IndexComponent },
  { path: 'login', component:LoginComponent },
  { path: 'registro', component:RegistroComponent },
  { path: 'dashboard1', component:Dashboard1Component },
  { path: '**', component:ErrorComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
