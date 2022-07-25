import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{

  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService){}

  ngOnInit(): void {
    this.getHeroes();
  }
  /*
    FASES OBSERVABLE
    1 = next
    2 = error
    3 = complete
  */
  getHeroes(): void{
    this.heroService.getHeroes().subscribe(x => {
      this.heroes = x
    }, error => {
      console.error(error);
    });
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
