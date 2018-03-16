import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  check: string = 'Hello';
  title: string;

  checkVal() {
    this.title = this.check;
  }
}
// https://www.youtube.com/watch?v=I317BhehZKM