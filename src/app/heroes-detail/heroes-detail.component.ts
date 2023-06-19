import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Hero } from '../heroes/Interface/Hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.scss'],
})
export class HeroesDetailComponent implements OnInit {
  hero!: Hero | undefined;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack() {
    this.location.back();
  }
}
