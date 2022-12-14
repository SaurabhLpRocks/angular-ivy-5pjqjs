import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from '@theme/theme.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, DashboardRoutingModule, ThemeModule],
  declarations: [DashboardComponent],
  providers: [],
})
export class DashboardModule {}
