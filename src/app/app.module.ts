import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    //@Angular
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    //features são carregadas quando a aplicação é iniciada no main.js
    //No Lazy-Loading Feature será removido para ser carregado os módulos sob demanda, apenas quando acessado
    /*DashboardModule,
    HeroesModule,*/

    //third-party
    FlexLayoutModule,

    //app
    AuthModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
