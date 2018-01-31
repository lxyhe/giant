import { Component, OnInit } from '@angular/core';
import {RouterModule,Routes,Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	name:string='';
	password:string='';
  constructor(public router:Router) { }

  ngOnInit() {
  }
  //提交表单 进入主界面
  public login(name,password){
  	this.router.navigate(['/app'],{queryParams:{id:'1'}});
  }
  
}
