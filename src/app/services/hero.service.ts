import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../heroes/Interface/Hero';
import { Heroes } from '../mock-heroes';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessagesService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(Heroes);
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = Heroes.find((h) => h.id === id)!;
    this.messageService.add(`O id do herói selecionado foi ${id}  `);
    return of(hero);
  }
}
