import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import {MyServiceService} from "./my-service.service";
import {HttpClientModule} from "@angular/common/http";
import {TypeaheadModule} from "ngx-bootstrap";
import {FormsModule} from "@angular/forms";
import {EscapeHtmlPipe} from "./pipes/keep-html-pipe";
import {SafePipe} from "./pipes/safe";


@NgModule({
  declarations: [
    AppComponent,
    EscapeHtmlPipe,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  providers: [MyServiceService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
