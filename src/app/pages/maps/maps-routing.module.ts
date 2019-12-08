import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonLayoutComponent } from '../../layouts/common-layout/common-layout.component';
import { LayoutsModule } from '../../layouts/layouts.module';
import { AdvancedMapComponent } from './advanced-map/advanced-map.component';
import { SimpleMapComponent } from './simple-map/simple-map.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CommonLayoutComponent,
        children: [
          { path: 'simple', component: SimpleMapComponent, pathMatch: 'full' },
          { path: 'advanced', component: AdvancedMapComponent, pathMatch: 'full' },
        ],
      },
    ]),
    LayoutsModule,
  ],
  exports: [RouterModule],
})
export class MapsRoutingModule {}
