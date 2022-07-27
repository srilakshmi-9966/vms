import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // hostURL = environment.hostURL
  // username = environment.username
  // token=environment.token
  data=10;
  updateDate(){
    this.data=Math.random();
    // this.data=Math.floor(Math.random()*10);      it will get single digit value
  }


  // reuseable
  
  userDetails = [
    { name: 'sri', email: 'sri@gmail.com' },
    { name: 'sri', email: 'sri@gmail.com' },
    { name: 'sri', email: 'sri@gmail.com' },
    { name: 'sri', email: 'sri@gmail.com' },
     { name: 'sri', email: 'sri@gmail.com' }
  
  ]

  constructor() { }

  ngOnInit(): void {
 
}
}
