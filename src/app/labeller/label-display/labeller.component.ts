import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labeller',
  templateUrl: './labeller.component.html',
  styleUrls: ['./labeller.component.css']
})
export class LabellerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSwipeLeft() {
    console.log('Left Swipe');
  }

  onSwipeRight() {
    console.log('Right Swipe');
  }

  onRequestHelp() {
    console.log('Request help');
  }

}
