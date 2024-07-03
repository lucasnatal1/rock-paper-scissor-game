import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent {
  @Output() onCloseEvent = new EventEmitter<null>();

  onClose() {
    this.onCloseEvent.emit()
  }
}
