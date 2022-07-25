import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero.model';
import { HEROES } from './mock-heroes'

@Injectable({
  providedIn: 'root'
})

/*
Lista de Heróios = observable
Component se subscreve para o observable.
Quando ocorrer a chamada ao serviço, o componente inscrito recebe uma notificação para popular os dados
*/
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
