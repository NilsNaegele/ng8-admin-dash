import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-base-card app-base-card-title',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./card.component.scss'],
})
export class CardTitleComponent {
  @HostBinding('class.mdl-card__title') public readonly mdlCardTitle = true;

  @HostBinding('class.mdl-card--expand') public isExpanded = false;

  @Input() set expanded(value) {
    if (value || value === '') {
      this.isExpanded = true;
    }
  }
}
