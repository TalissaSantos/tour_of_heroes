import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isListHeroes: boolean = false;
  title = ' Tour pelos heróis';
  constructor() {}

  ngOnInit(): void {}
  buttons() {
    this.isListHeroes = true;
  }
}
