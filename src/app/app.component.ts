import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cwh-togo-list';
  constructor(){
    // setTimeout(() =>{
    //   this.title = 'Changed Title';
    // }, 5000);
  }
}
