import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LabellerComponent } from './labeller/label-display/labeller.component';

import {MdToolbarModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdDialogModule, MdDialogRef, MdDialog} from '@angular/material';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    LabellerComponent
  ],
  imports: [
    BrowserModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
