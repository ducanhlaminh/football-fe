import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'zing_news_fe';
  a: string;
  constructor() {}
  ngOnInit() {
    if (localStorage.getItem('token')) {
    }
  }
  onScroll() {
    console.log('scrolled!!');
  }
}
