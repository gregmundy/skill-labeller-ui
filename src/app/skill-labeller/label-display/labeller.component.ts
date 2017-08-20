import { Component, OnInit } from '@angular/core';
import { LabelsService } from '../labels.services';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/animations';
import { MdDialog, MdDialogRef } from '@angular/material';
import { LabelHelpComponent } from '../label-help/label-help.component';

@Component({
  selector: 'app-labeller',
  templateUrl: './labeller.component.html',
  styleUrls: ['./labeller.component.css'],
  animations: [
    trigger('swipeResponse', [
      state('default', style({
        transform: 'translateX(0)'
      })),
      state('hide', style({
        transform: 'scale(1.0)'
      })),
      state('left', style({
        transform: 'translateX(-100%) rotate(-7deg)'
      })),
      state('right', style({
        transform: 'translateX(100%) rotate(7deg)'
      })),
      transition('default => left', [
        animate('0.5s 0.1s ease-out')
      ]),
      transition('default => right', [
        animate('0.5s 0.1s ease-out')
      ]),
      transition('* => default', [
        style({ transform: 'scale(1.5)' }),
        animate('0.4s 0.1s ease-in')
      ])
    ])
  ]
})
export class LabellerComponent implements OnInit {
  constructor(private labelsService: LabelsService, private dialog: MdDialog) { }
  transitionState = 'default';
  isHidden = false;
  possibleSkill: string;

  ngOnInit() {
    this.possibleSkill = this.labelsService.getRandomLabel();
  }

  onSwipe(transitionState: string, $event) {
    this.transitionState = transitionState;
    setTimeout(() => {
      this.isHidden = true;
      setTimeout(() => {
        this.isHidden = false;
        this.transitionState = 'default';
        this.possibleSkill = this.labelsService.getRandomLabel();
      }, 500);
    }, 500);
  }

  onRequestHelp() {
    this.dialog.open(LabelHelpComponent);
  }


}
