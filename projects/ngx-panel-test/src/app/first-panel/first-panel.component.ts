import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-panel',
  templateUrl: './first-panel.component.html',
  styleUrls: ['./first-panel.component.css']
})
export class FirstPanelComponent implements OnInit {
  title = 'First Panel';
  position = 'center';
  radius;

  constructor() {
  }

  ngOnInit() {
  }

  changeTitle() {
    this.title = 'Changed Panel Title';
  }

  changePosition() {
    this.position = 'left-top 10 10';
  }

  changeRadius() {
    this.radius = '1em 3em';
  }
}
