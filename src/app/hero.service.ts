import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero.model';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes'

@Injectable({
  providedIn: 'root'
})

/*
Lista de Heróis = observable
Component se subscreve para o observable.
Quando ocorrer a chamada ao serviço, o componente inscrito recebe uma notificação para popular os dados
*/
export class HeroService {

  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(x => x.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
