import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { HomeComponent }   from './home.component';


/**
 * 主体路由
 */
const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {path:'model',loadChildren:'app/model/model.module#ModelModule'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }