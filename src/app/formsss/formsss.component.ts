import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formsss',
  templateUrl: './formsss.component.html',
  styleUrls: ['./formsss.component.css']
})
export class FormsssComponent implements OnInit {

userData:any={};
  constructor() { }

  ngOnInit(): void {
  }
  getData(data: NgForm) {
    console.warn(data)
    this.userData=data
  }
}
