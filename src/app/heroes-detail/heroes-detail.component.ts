import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../heroes/Interface/Hero';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.scss'],
})
export class HeroesDetailComponent implements OnInit {
  @Input() hero!: Hero;

  constructor() {}

  ngOnInit(): void {}
}
