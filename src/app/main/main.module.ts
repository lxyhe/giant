import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MainRoutingModule} from './main-router.module';
import{ MainComponent} from './main.component';
import { NgxEchartsModule } from 'ngx-echarts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
 	MainComponent	
  ],
  imports: [
   MainRoutingModule,
   NgxEchartsModule,
   NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: []
})
export class MainModule { }


