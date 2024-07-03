/**
 * Title: security-routing.module.ts
 * Author: Professor Krasso
 * Date: 8/5/23
 */

// imports statements
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security.component';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  {
    path: '',
    component: SecurityComponent,
    title: 'BCRS: Security',
  },
    {
      path: 'sign-in',
      component: SignInComponent,
      title: 'BCRS: Login'
    },
  {
    path: '', // The default path for the Security component.
    component: SecurityComponent,
    children: [],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }

