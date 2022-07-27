import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {
  title = 'style binding';
  
  color = 'orange';
  bgColor ='red';

  updatecolor() {
    this.color = 'violet';
    this.bgColor='green';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
