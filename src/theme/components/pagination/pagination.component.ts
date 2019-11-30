import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'app-base-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @HostBinding('class.pagination') public readonly pagination = true;

  @Input() numPage = 1;
  @Input() currentPage = 1;
  @Output() changePage = new EventEmitter();
  inputNumPage: number;

  onChangePage(direction: number) {
    this.currentPage = Math.min(Math.max(this.currentPage + direction, 1), this.numPage);
    this.changePage.emit(this.currentPage);
  }

  goToPage(event) {
    event.preventDefault();
    this.currentPage = (this.inputNumPage <= this.numPage && this.inputNumPage > 0) ? this.inputNumPage : this.currentPage;
    this.inputNumPage = null;
    this.changePage.emit(this.currentPage);
  }
}
