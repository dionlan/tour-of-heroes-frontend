import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

/**
 * Modulo que eh compartilhado por toda a aplicacao
 */
const COMPONENTS = [ MessagesComponent, ToolbarComponent ];
const MODULES = [ FlexLayoutModule, MaterialModule, RouterModule]

@NgModule({
  declarations: [ COMPONENTS ],
  imports: [ MODULES, CommonModule],
  exports: [ COMPONENTS, MODULES]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule){
    if(parentModule){
      throw new Error(
        'CoreModule has already been loaded. Import this module in the AppModule.'
      )
    }
  }
}
