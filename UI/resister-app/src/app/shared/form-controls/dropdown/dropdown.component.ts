import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DropdownConfig } from '.';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input()config: DropdownConfig;
  @Output('selectedValue')selectedValue: EventEmitter<any> = new EventEmitter<any>();
  selectedItem: any = {};
  constructor() { }
  ngOnInit() {
    this.selectedItem = this.config.items[this.config.selectedIndex];
  }
  OnChange() {
    this.selectedValue.emit(Object.assign({}, this.selectedItem, {dropdownID: this.config.id}));
  }

}
