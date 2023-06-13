import { Component, OnInit } from '@angular/core';
import { Hero } from './Interface/Hero';
import { Heroes } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = Heroes;

  heroSelected!: Hero;

  constructor() {}

  ngOnInit(): void {}

  onSelect(hero: Hero) {
    this.heroSelected = hero;
  }
}
