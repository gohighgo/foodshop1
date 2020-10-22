import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({ height: '0'})),
      state('final', style({
        height: '193px'
      })),
      transition('initial=>final', animate('400ms')),
      transition('final=>initial', animate('400ms'))
    ]),
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }
  private elem: any;
  currentState = 'initial';

  mouseOver(): void {
    this.elem = document.getElementById('signIn');
    this.elem.style.background = 'linear-gradient(134.17deg, #EE7575 4.98%, #d75454 94.88%)';
    console.log('Over');
  }

  mouseOut(): void {
    this.elem = document.getElementById('signIn');
    this.elem.style.background = 'linear-gradient(134.17deg, #EF6767 4.98%, #d73d3d 94.88%)';
    console.log('Out');
  }

  changeState(): void {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  ngOnInit(): void {
  }

}
