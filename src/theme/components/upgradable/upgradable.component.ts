import { AfterViewInit, Component } from '@angular/core';

declare const componentHandler: any;

@Component({
  selector: 'app-upgradable',
  templateUrl: './upgradable.component.html',
  styleUrls: ['./upgradable.component.scss'],
})
export class UpgradableComponent implements AfterViewInit {
  public ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

}
