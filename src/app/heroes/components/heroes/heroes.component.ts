import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../core/models/hero.model';
import { HeroService } from '../../../core/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name']
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
    this.heroService.getAll().subscribe(x => {
      this.heroes = x
    }, error => {
      console.error(error);
    });
  }
}
