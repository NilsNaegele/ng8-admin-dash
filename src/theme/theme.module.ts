import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CheckboxComponent } from './components/checkbox/checkbox.component';

import { UpgradableComponent } from './components/upgradable/upgradable.component';

const BASE_COMPONENTS = [
  UpgradableComponent,
  CheckboxComponent,
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
    ReactiveFormsModule,
  ],
  exports: [
    ...BASE_COMPONENTS,
    ...BASE_DIRECTIVES,
    ...BASE_PIPES,
  ],
})
export class ThemeModule { }
