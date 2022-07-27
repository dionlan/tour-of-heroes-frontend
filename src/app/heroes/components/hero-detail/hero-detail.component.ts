import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Hero } from "../../../core/models/hero.model";
import { HeroService } from "../../../core/services/hero.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit{
  hero!: Hero;
  constructor(private heroService: HeroService, private location: Location, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getOne(id).subscribe(x => {
    this.hero = x;
   });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero).subscribe(() => this.goBack());
  }

  /* se vier vazio = ''
  * negar o vazio 1x = ! => true
  * negar o vazio 2x = !! => true
  * Ex: hero = '' => !hero => true; !!herp => false
  * heroes = [] => heroes.length => 0 => false; !!heroes.length => false
  */
  ifFormValid(): boolean {
    return !!this.hero.name.trim()
  }
}
