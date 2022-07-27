import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functiononbutton',
  templateUrl: './functiononbutton.component.html',
  styleUrls: ['./functiononbutton.component.css']
})
export class FunctiononbuttonComponent implements OnInit {
  count = 0;
  constructor() { }

  ngOnInit(): void {
  }
 
  getName(name: any) {
    alert(name);
  }
   // count
   counter(type : string) {
    // this.count++;
    type==='add'? this.count++:this.count--
  }
}
