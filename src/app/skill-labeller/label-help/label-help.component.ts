import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-label-help',
  templateUrl: './label-help.component.html',
  styleUrls: ['./label-help.component.css']
})
export class LabelHelpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LabelHelpComponent>) { }

  ngOnInit() {
  }

}
