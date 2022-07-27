import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title='Angular project';

  user =
    {name:'sri', salary:'1', phone:'9966'};



  constructor() { }

  ngOnInit(): void {
  }
}

