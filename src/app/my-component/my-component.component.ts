import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  

  
  colors:string[] = [];
  bar_title:string = "Bar Codes"; 

  constructor() {
      
  }

  ngOnInit() {
    var letters:string[] = '0123456789ABCDEF'.split('');
    var color:string = '#';
    for (let j = 0; j < 10; j++) {
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      this.colors.push(color);
      color="#";
    }
    console.log(this.colors);
  }
  

}
