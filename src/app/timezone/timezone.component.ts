import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {

  title: string = "US Time Zone Display";
  timeZones : string[] = ["PST", "MST", "CST", "EST", "Clear"];
  selectedZone: string;
  time : Date;

  constructor() { }

  ngOnInit() {
  }

  changeZone(zone: string) : void {
    this.time = new Date();
    console.log(this.time.getTimezoneOffset());
    this.selectedZone = zone;

    if (zone === 'MST') {
      this.time.setHours(this.time.getHours() + 1);
    } else if (zone === 'CST') {
      this.time.setHours(this.time.getHours() + 2);
    } else if (zone === 'EST') {
      this.time.setHours(this.time.getHours() + 3);
    } else if (zone === 'Clear') {
      this.time = null;
    }
  }

}
