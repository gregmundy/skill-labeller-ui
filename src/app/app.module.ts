import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LabellerComponent } from './skill-labeller/label-display/labeller.component';

import { MdToolbarModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdDialogModule, MdDialogRef, MdDialog } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import 'hammerjs';
import { LabelsService } from './skill-labeller/labels.services';
import { LabelHelpComponent } from './skill-labeller/label-help/label-help.component';

@NgModule({
  declarations: [
    AppComponent,
    LabellerComponent,
    LabelHelpComponent
  ],
  entryComponents: [
    LabelHelpComponent
  ],
  imports: [
    BrowserModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdDialogModule,
    BrowserAnimationsModule
  ],
  providers: [LabelsService, MdDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
