import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `<main> 
              <header class="brand-name">
              <img class = "brand-logo" src="assets/images/logo.svg">`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
