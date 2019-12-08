import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  @HostBinding('class.user-form') public readonly employerForm = true;
  public qualifications = ['Junger Bulle', 'Junior', 'Erfahren', 'Experte'];

}
