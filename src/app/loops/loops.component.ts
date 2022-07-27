import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loops',
  templateUrl: './loops.component.html',
  styleUrls: ['./loops.component.css']
})
export class LoopsComponent implements OnInit {

  users=['sri', 'pavan', 'mom', 'dad'];

  userDetails=[
    {name:'sri', email:'sri@gmail.com', phone:'9966'},
    {name:'pavan', email:'pavan@gmail.com', phone:'6618'},
    {name:'dad', email:'dad@gmail.com', phone:'1806'},
    {name:'mom', email:'mom@gmail.com', phone:'0660'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
