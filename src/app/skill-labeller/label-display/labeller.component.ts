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
  skill_label: boolean;
  get_url: string;

  ngOnInit() {
    this.possibleSkill = this.labelsService.getRandomLabel();
  }

  onSwipe(transitionState: string, $event) {
    this.get_url = 'https://jsonplaceholder.typicode.com/posts/1';
    this.transitionState = transitionState;
    this.skill_label = false;
    if(this.transitionState == 'right'){
        this.skill_label = true;
    }

    console.log("\t Whoa we swiped/clicked!")
    console.log("\n this is the label " + this.skill_label)

    setTimeout(() => {
      this.isHidden = true;
      setTimeout(() => {
        this.isHidden = false;
        this.transitionState = 'default';
        // todo: rename to candidateSkill 
        this.possibleSkill = this.labelsService.getRandomLabel();
        console.log("\t url is:" + this.get_url)

        console.log( this.labelsService.getCandidateSkill());

        //this.labelsService.putCandidateLabel(this.skill_label, candidateSkill)

      }, 500);
    }, 500);
  }

  onRequestHelp() {
    this.dialog.open(LabelHelpComponent);
  }


}
