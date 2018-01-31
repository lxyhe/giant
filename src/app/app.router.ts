import { RouterModule,Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SelectivePreloadingStrategy} from "./selective-preloading-strategy";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes:Routes=[

	{path:'',redirectTo:"/login",pathMatch:"full"},
	{
		path:'login',
		loadChildren:'app/login/login.module#LoginModule'
	},
	{
		path:'app',
		loadChildren:'app/main/main.module#MainModule'
	},{
		path:'home',
		loadChildren:'app/home/home.module#HomeModule'
	},{
		path:'**',
		component: PageNotFoundComponent
	}
]
@NgModule({
  imports: [
   RouterModule.forRoot(appRoutes,{preloadingStrategy:SelectivePreloadingStrategy,useHash:true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}