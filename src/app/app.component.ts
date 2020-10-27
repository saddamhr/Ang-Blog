import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'Blog App';
  name = 'Saddam Rakib';
  getName() {
    return this.name
  }
  obj = {
    name: 'Rakib',
    age: 20
  }
  arr = ['Masud', 'Taifur']
  siteURL = window.location.href
}