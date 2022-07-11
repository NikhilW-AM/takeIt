import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthRoutingModule } from './user-auth-routing.module';
import { UserAuthComponent } from './user-auth.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserAuthComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserAuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UserAuthModule { }
