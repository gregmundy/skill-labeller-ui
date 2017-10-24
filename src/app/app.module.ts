import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LabellerComponent } from './skill-labeller/label-display/labeller.component';

import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material';
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
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [LabelsService, MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
