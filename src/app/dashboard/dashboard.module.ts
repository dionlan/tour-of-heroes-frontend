import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashoboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ DashboardComponent ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    DashoboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
