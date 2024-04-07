import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
     RouterOutlet, 
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular - Assignment 1';
  date = new Date();
  author = "Sydnee Snowball";

  constructor() {}
}