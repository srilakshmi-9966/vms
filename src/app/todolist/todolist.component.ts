import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  list: any[] = [];

  addTask(item: string) {
    // console.warn(item);
    this.list.push({ id: this.list.length, name: item })
  }

  constructor() { }

  ngOnInit(): void {
  }

  removeTask(id = 'number') {
    console.warn(id);
    this.list=this.list.filter(item=>item.id!=id)
  }

}
