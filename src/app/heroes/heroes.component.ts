import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{

  heroes: Hero[] = [];

  constructor(private heroService: HeroService){}

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
}
