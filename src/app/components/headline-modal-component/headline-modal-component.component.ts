import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'headline-modal',
  templateUrl: './headline-modal-component.component.html',
  styleUrls: ['./headline-modal-component.component.scss'],
})
export class HeadlineModalComponent {
  @Input() headline: any;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closeCard() {
    this.close.emit();
  }
}
