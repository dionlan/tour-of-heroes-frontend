import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    //@Angular
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    //features são carregadas quando a aplicação é iniciada no main.js
    //No Lazy-Loading Feature será removido para ser carregado os módulos sob demanda, apenas quando acessado
    /*DashboardModule,
    HeroesModule,*/

    //app
    CoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
