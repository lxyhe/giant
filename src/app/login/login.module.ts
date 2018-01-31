import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login-router.module'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
 	LoginComponent
  ],
  imports: [
  LoginRoutingModule,
  NgbModule
  ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }
