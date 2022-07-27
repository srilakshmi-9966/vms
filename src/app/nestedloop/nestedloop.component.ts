import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nestedloop',
  templateUrl: './nestedloop.component.html',
  styleUrls: ['./nestedloop.component.css']
})
export class NestedloopComponent implements OnInit {


  users=[
    {name:'sri', phone:'9966', email: 'sri@gmail.com', accounts:['email','insta', 'facebook']},
    {name:'pavan', phone:'996618', email: 'pavan@gmail.com',  accounts:['monitor','insta', 'snap']},
    {name:'mom', phone:'18099', email: 'mom@gmail.com',  accounts:['google','youtube', 'facebook']},
    {name:'dad', phone:'99066', email: 'dad@gmail.com',  accounts:['node','angular', 'react']},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
