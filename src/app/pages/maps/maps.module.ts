import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdvancedMapComponent } from './advanced-map/advanced-map.component';
import { SimpleMapComponent } from './simple-map/simple-map.component';

import { ThemeModule } from '../../../theme/theme.module';

import { MapsRoutingModule } from './maps-routing.module';

@NgModule({
  declarations: [
    SimpleMapComponent,
    AdvancedMapComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    MapsRoutingModule,
  ],
})
export class MapsModule { }
