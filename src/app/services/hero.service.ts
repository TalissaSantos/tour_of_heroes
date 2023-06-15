import { Injectable } from '@angular/core';
import { Hero } from '../heroes/Interface/Hero';
import { Heroes } from '../mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { log } from 'console';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessagesService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(Heroes);
    this.messageService.add('Hello, my friend');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = Heroes.find((h) => h.id === id)!;
    this.messageService.add(` O id do herói buscado é = ${id}`);
    return of(hero);
  }
}
