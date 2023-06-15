import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Hero } from '../heroes/Interface/Hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService, private location: Location) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe((hero) => {
      this.heroes = hero;
    });
  }
  goBack() {
    this.location.back();
  }
}
