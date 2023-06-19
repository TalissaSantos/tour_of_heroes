import { Component, OnInit } from '@angular/core';

import { Hero } from './Interface/Hero';
import { HeroService } from '../services/hero.service';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  heroSelected!: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessagesService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.heroSelected = hero;
    this.messageService.add(
      `O ID ${hero.id}  foi selecionado é o herói  ${hero.name}   `
    );
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
