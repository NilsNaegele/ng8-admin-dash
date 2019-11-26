import { Component, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-base-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent {
  private progressValue = 0;
  private bufferValue = 100;
  private isDeterminate = true;

  @Input() private color;

  @Input() set indeterminate(value) {
    if (value || value === '') {
      this.isDeterminate = false;
    }
  }

  @Input() set progress(value) {
    this.progressValue = value;
    if (this.el.nativeElement.MaterialProgress) {
      this.el.nativeElement.MaterialProgress.setProgress(this.progressValue);
    }
  }

  @Input() set buffer(value) {
    this.bufferValue = value;
    if (this.el.nativeElement.MaterialProgress) {
      this.el.nativeElement.MaterialProgress.setBuffer(this.bufferValue);
    }
  }

  @HostBinding('class') public get className() {
    return `mdl-progress mdl-js-progress progress--colored-${this.color}`;
  }

  @HostBinding('class.mdl-progress__indeterminate') public get mdlProgressIndeterminate() {
    return !this.isDeterminate;
  }

  @HostListener('mdl-componentupgraded') public mdlComponentUpgraded() {
    this.el.nativeElement.MaterialProgress.setProgress(this.progressValue); this.el.nativeElement.MaterialProgress.setBuffer(this.bufferValue);
  }

  constructor(
    private el: ElementRef,
  ) { }

}
