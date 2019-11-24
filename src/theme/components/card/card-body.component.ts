import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-base-card app-base-card-body',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./card.component.scss'],
})
export class CardBodyComponent {
  @HostBinding('class.mdl-card__supporting-text') public readonly mdlCardSupportingText = true;

  @HostBinding('class.mdl-card--expand') public isExpanded = false;

  @Input() set expanded(value) {
    if (value || value === '') {
      this.isExpanded = true;
    }
  }
}
