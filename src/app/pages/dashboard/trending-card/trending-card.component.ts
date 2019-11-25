import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-trending-card',
  templateUrl: './trending-card.component.html',
  styleUrls: ['./trending-card.component.scss'],
})
export class TrendingCardComponent {
  @HostBinding('class.trending') public readonly trending = true;

}
