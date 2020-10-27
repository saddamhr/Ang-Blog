import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'Blog App';
  currentVal="";
  getVal(val) {
    console.warn(val)
    this.currentVal = val
  }
}