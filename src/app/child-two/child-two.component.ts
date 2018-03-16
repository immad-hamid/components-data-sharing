import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {
  word: string;

  @Output() wordEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendWord() {
    this.wordEvent.emit(this.word);
  }

}
