import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  styleUrls: ['dropdown.component.scss'],
  templateUrl: 'dropdown.component.html'
})
export class DropdownComponent {
  @Input()
  public name = '';
  @Input()
  public selection: any;
  @Input()
  public options: any[];

  @Output()
  selectionChange: EventEmitter<any> = new EventEmitter();

  public onChange($event: any) {
    this.selectionChange.emit($event.value);
  }
}
