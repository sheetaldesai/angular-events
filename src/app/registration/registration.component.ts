import { Component, OnInit } from '@angular/core';
import {User} from './user';

enum States {
  CA,
  NC,
  NY,
  WA  
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registration_title: string = "Registration Form";
  user : User = new User();
  users : User[] = [];

  constructor() { }


  ngOnInit() {
    
  }

  onSubmit() {
    console.log("onSubmit");
    this.users.push(this.user);
    this.user = new User();
    console.log(this.users);
  }

}
