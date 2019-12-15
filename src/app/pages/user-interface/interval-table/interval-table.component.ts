import { Component, HostBinding, OnInit } from '@angular/core';
import { IntervalService } from './interval.service';

import { UpgradableComponent } from './../../../../theme/components/upgradable/upgradable.component';

import { TablesService } from '../tables/tables.service';

@Component({
  selector: 'app-interval-table',
  templateUrl: './interval-table.component.html',
  styleUrls: ['./interval-table.component.scss'],
})
export class IntervalTableComponent extends UpgradableComponent implements OnInit {
  readonly Array = Array;

  @HostBinding('class.mdl-grid') public readonly mdlGrid = true;
  @HostBinding('class.mdl-cell') public readonly mdlCell = true;
  @HostBinding('class.mdl-cell--12-col-desktop') public readonly mdlCell12ColDesktop = true;
  @HostBinding('class.mdl-cell--12-col-tablet') public readonly mdlCell12ColTablet = true;
  @HostBinding('class.mdl-cell--4-col-phone') public readonly mdlCell4ColPhone = true;
  @HostBinding('class.mdl-cell--top') public readonly mdlCellTop = true;
  @HostBinding('class.ui-tables') public readonly uiTables = true;

  constructor(private intervalService: IntervalService) {
    super();
  }

  readonly sortOrder = {
    asc: 1,
    desc: -1,
  };

  advancedHeaders = this.intervalService.getAdvancedHeaders();

  currentPage = 1;
  private countPerPage = 10;
  numPage = this.intervalService.getAdvancedTableNumOfPage(this.countPerPage);

  advancedTable = this.intervalService.getAdvancedTablePage(1, this.countPerPage);

  changePage(page, force = false) {
    if (page !== this.currentPage || force) {
      this.currentPage = page;
      this.advancedTable = this.intervalService.getAdvancedTablePage(page, this.countPerPage);
    }
  }

  changeSorting(header, index) {
    const current = header.sort;
    if (current !== null) {
      this.advancedHeaders.forEach((cell) => {
        cell.sort = (cell.sort !== null) ? 0 : null;
      });
      header.sort = (current === 1) ? -1 : 1;
      this.intervalService.changeAdvanceSorting(header.sort, index);
      this.changePage(1, true);
    }
  }

  ngOnInit() {
  }

}
