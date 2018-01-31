import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.scss']
})
export class SorterComponent implements OnInit {
	list:any=[
		{"name":'andy',"music":"命运三部曲","area":"bg"},
		{"name":'andy',"music":"命运三部曲","area":"ng"},
		{"name":'andy',"music":"命运三部曲","area":"xg"}
		];
  constructor() { }

  ngOnInit() {
  }

}
