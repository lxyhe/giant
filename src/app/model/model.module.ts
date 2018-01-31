import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ModelRoutingModule} from './model-router.module';
import{ ModelComponent} from './model.component';
import { NgxEchartsModule } from 'ngx-echarts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import {SorterComponent} from './sorter/sorter.component'
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
   ModelComponent,
   SorterComponent 
  ],
  imports: [
   ModelRoutingModule,
   NgxEchartsModule,
   FormsModule,
   CommonModule,
   NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: []
})
export class ModelModule { }
