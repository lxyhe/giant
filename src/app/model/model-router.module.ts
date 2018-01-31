import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { ModelComponent }   from './model.component';
import { SorterComponent }   from './sorter/sorter.component';


/**
 * 主体路由
 */
const modelRoutes: Routes = [
  {
    path: '',
    component: ModelComponent
  },{
    path:'sorter',
    component:SorterComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(modelRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ModelRoutingModule { }