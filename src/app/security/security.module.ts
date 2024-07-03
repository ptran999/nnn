/**
 * Title: security.module.ts
 * Author: Professor Krasso
 * Date: 8/5/23
*/

// imports statements
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [
    SecurityComponent,
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    ReactiveFormsModule,

  ]
})
export class SecurityModule { }
