import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  message: string = 'Father to Child One';
  word: string = 'Child Two'
  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event) {
    this.word = $event;
  }

}
