import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const routes: Routes = [
  {
    path: '', component: HeroesComponent,
    canActivate: [ AuthGuard ] //para entrar na lista de heroes, o AuthGuard deve retornar true;
  },
  {
    path: ':id', component: HeroDetailComponent,
    canActivate: [ AuthGuard ] //para entrar no detalhe de hero, o AuthGuard deve retornar true;
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
