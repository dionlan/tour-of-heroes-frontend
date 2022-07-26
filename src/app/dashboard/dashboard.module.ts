import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashoboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [ DashboardComponent ],
  imports: [ CommonModule, FlexLayoutModule, MaterialModule, DashoboardRoutingModule ]
})
export class DashboardModule { }
