import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app.router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {SelectivePreloadingStrategy} from "./selective-preloading-strategy";

import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
  	SelectivePreloadingStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
