import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchboard',
  templateUrl: './switchboard.component.html',
  styleUrls: ['./switchboard.component.css']
})


export class SwitchboardComponent implements OnInit {

  switch_title:string = "Switchboard";
  numSwitches: number = 10;
  switches:boolean[] = [];
  constructor() {
    
  }

  ngOnInit() {
    for (let i = 0; i < this.numSwitches; i++ ) {
      this.switches.push(true);
    }
  }

  flipswitch(index) {
    console.log(index);
    this.switches[index] = !this.switches[index];
  }

}
