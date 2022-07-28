import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Hero } from '../models/hero.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

/*
Lista de Heróis = observable
Component se subscreve para o observable.
Quando ocorrer a chamada ao serviço, o componente inscrito recebe uma notificação para popular os dados
*/
export class HeroService {
  //private heroesUrl = 'api/heroes'
  private heroesUrl = `${environment.baseUrl}/heroes`
  constructor(private http: HttpClient, private messageService: MessageService) {}

  //GET /heroes
  getAll(): Observable<Hero[]> {
    return this.http
    .get<Hero[]>(this.heroesUrl)
      .pipe(
        tap((heroes: any) => this.log(`fetched ${heroes.length} hero(es)`)));
  }

  //GET /heroes/id
  getOne(id: number): Observable<Hero> {
    return this.http
    .get<Hero>(this.getUrl(id))
      .pipe(
        tap((hero) => this.log(`fetched ${this.descAttribute(hero)}`)));
  }

  //POST /heroes
  create(hero: Hero): Observable<Hero>{
    return this.http
    .post<Hero>(this.heroesUrl, hero)
      .pipe(
        tap((hero) => this.log(`created ${this.descAttribute(hero)}`)));
  }

  //PUT /heroes/id
  update(hero: Hero): Observable<Hero> {
    return this.http
    .put<Hero>(this.getUrl(hero.id), hero)
      .pipe(
        tap((hero) => this.log(`updated ${this.descAttribute(hero)}`)));
  }

  //DELETE /heroes/id
  delete(hero: Hero): Observable<any> {
    return this.http
    .delete<any>(this.getUrl(hero.id))
      .pipe(
        tap(() => this.log(`deleted ${this.descAttribute(hero)}`)));
  }

  private descAttribute(hero: Hero): string {
    console.log('descattribute: ', hero)
    return `Hero ID=${hero.id} and Name=${hero.name}`;
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }

  private getUrl(id: number): string {
    return `${this.heroesUrl}/${id}`;
  }
}
