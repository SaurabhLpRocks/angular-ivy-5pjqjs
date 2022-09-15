import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

const ANGULAR_MATERIAL_MODULES = [
  MatAutocompleteModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatMenuModule,
  MatSelectModule,
  MatTooltipModule,
];

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, AdminRoutingModule, ...ANGULAR_MATERIAL_MODULES],
  providers: [],
})
export class AdminModule {}
