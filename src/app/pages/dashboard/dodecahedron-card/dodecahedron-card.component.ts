import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-dodecahedron-card',
  templateUrl: './dodecahedron-card.component.html',
  styleUrls: ['./dodecahedron-card.component.scss'],
})
export class DodecahedronCardComponent {
  @HostBinding('class.dodecahedron') public readonly dodecahedron = true;

}
