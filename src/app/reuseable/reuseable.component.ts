import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reuseable',
  templateUrl: './reuseable.component.html',
  styleUrls: ['./reuseable.component.css']
})
export class ReuseableComponent implements OnInit {

  constructor() { }


  @Input() item:{name:string, email:string}={name:'', email:''}; 
  ngOnInit(): void {
  }

}
