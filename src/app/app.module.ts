import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { SwitchboardComponent } from './switchboard/switchboard.component';
import { onOffPipe } from './onOff.pipe';
import { TimezoneComponent } from './timezone/timezone.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    SwitchboardComponent,
    onOffPipe,
    TimezoneComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
