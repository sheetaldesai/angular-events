import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title:string = 'app works!';
  // user: {[key:string]:(string)} = {
  //   firstName: "sheetal",
  //   lastName: "desai"
  // }
  // amount = 1.20;
  // today = new Date();
  title: string = "Dojo Mail";
  emails:{address:string,important:boolean, subject:string, content:string}[] = [
    {address:"Sheetal@gmail.com", important:true, subject:"garbage", content:"rubbish"},
    {address:"Radha@gmail.com", important:false, subject:"hello", content:"rubbish"},
    {address:"kalea@gmail.com", important:true, subject:"Happy birthday", content:"rubbish"},
    {address:"Jocy@gmail.com", important:true, subject:"Hi!", content:"rubbish"},
    {address:"Noel@gmail.com", important:false, subject:"Ola!", content:"rubbish"}
  ];
 
 
}
