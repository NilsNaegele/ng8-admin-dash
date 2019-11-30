import { Component, HostBinding } from '@angular/core';
import { UpgradableComponent } from '../../../../theme/components/upgradable/upgradable.component';
import { TablesService } from './tables.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent extends UpgradableComponent {
  readonly Array = Array;

  @HostBinding('class.mdl-grid') public readonly mdlGrid = true;
  @HostBinding('class.mdl-cell') public readonly mdlCell = true;
  @HostBinding('class.mdl-cell--12-col-desktop') public readonly mdlCell12ColDesktop = true;
  @HostBinding('class.mdl-cell--12-col-tablet') public readonly mdlCell12ColTablet = true;
  @HostBinding('class.mdl-cell--4-col-phone') public readonly mdlCell4ColPhone = true;
  @HostBinding('class.mdl-cell--top') public readonly mdlCellTop = true;
  @HostBinding('class.ui-tables') public readonly uiTables = true;

  constructor(private tablesService: TablesService) {
    super();
  }

  readonly sortOrder = {
    asc: 1,
    desc: -1,
  };

  headers = this.tablesService.getHeaders();
  simpleTable = this.tablesService.getSimpleTable();
  borderedTable = this.tablesService.getBorderedTable();
  strippedTable = this.tablesService.getStrippedTable();
  borderlessTable = this.tablesService.getBorderlessTable();
  advancedHeaders = this.tablesService.getAdvancedHeaders();
  genreColors = {
    'Kinder Buch': 'orange',
    'Gothische Fiktion': 'purple',
    'Horror fiction': 'dark-gray',
    'Fiktion': 'green',
    'Roman': 'teal',
    'Fantasie': 'red',
    'Abenteuer': 'light-blue',
  };

  currentPage = 1;
  private countPerPage = 4;
  numPage = this.tablesService.getAdvancedTableNumOfPage(this.countPerPage);

  advancedTable = this.tablesService.getAdvancedTablePage(1, this.countPerPage);

  changePage(page, force = false) {
    if (page !== this.currentPage || force) {
      this.currentPage = page;
      this.advancedTable = this.tablesService.getAdvancedTablePage(page, this.countPerPage);
    }
  }

  changeSorting(header, index) {
    const current = header.sort;
    if (current !== null) {
      this.advancedHeaders.forEach((cell) => {
        cell.sort = (cell.sort !== null) ? 0 : null;
      });
      header.sort = (current === 1) ? -1 : 1;
      this.tablesService.changeAdvanceSorting(header.sort, index);
      this.changePage(1, true);
    }
  }

}
