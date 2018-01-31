import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HomeRoutingModule} from './home-router.module';
import{ HomeComponent} from './home.component';
import { NgxEchartsModule } from 'ngx-echarts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
   HomeComponent  
  ],
  imports: [
   HomeRoutingModule,
   NgxEchartsModule,
   FormsModule,
   NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
