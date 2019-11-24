import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UpgradableComponent } from './components/upgradable/upgradable.component';

const BASE_COMPONENTS = [
  UpgradableComponent,
];

const BASE_DIRECTIVES = [];

const BASE_PIPES = [];

@NgModule({
  declarations: [
    ...BASE_COMPONENTS,
    ...BASE_DIRECTIVES,
    ...BASE_PIPES,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...BASE_COMPONENTS,
    ...BASE_DIRECTIVES,
    ...BASE_PIPES,
  ],
})
export class ThemeModule { }
