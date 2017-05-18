import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import {MdButtonModule, MdCheckboxModule, MdCardModule, MdGridListModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AppAlgorithmComponent } from './app-algorithm/app-algorithm.component';

@NgModule({
  declarations: [
    AppComponent,
    AppAlgorithmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
