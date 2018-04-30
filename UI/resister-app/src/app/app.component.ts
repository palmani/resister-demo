import { Component, OnInit } from '@angular/core';
import { DropdownConfig } from './shared/form-controls/dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  selectedCountries: any = {};
  resisterColorItems: Array<DropdownConfig> = [];
  selectedBand1Color = '';
  selectedBand2Color = '';
  selectedMultiplierColor = '';
  selectedToleranceColor = '';
  ngOnInit() {
    this.resisterColorItems = [
      {
        name: 'Color1: ',
        id: 0,
        items: [
          { name: 'Select Color1', id: '0' },
          { name: 'Brown', id: '1' },
          { name: 'Red', id: '2' },
          { name: 'Orange', id: '3' },
          { name: 'Yellow', id: '4' },
          { name: 'Green', id: '5' },
          { name: 'Blue', id: '6' },
          { name: 'Violet', id: '7' },
          { name: 'Gray', id: '8' },
          { name: 'White', id: '9' },

        ],
        selectedIndex: 0,
        defaultValue: 'Choose Band1 Color'
      },
      {
        name: 'Color2: ',
        id: 1,
        items: [
          { name: 'Select Color2', id: '0' },
          { name: 'Brown', id: '1' },
          { name: 'Red', id: '2' },
          { name: 'Orange', id: '3' },
          { name: 'Yellow', id: '4' },
          { name: 'Green', id: '5' },
          { name: 'Blue', id: '6' },
          { name: 'Violet', id: '7' },
          { name: 'Gray', id: '8' },
          { name: 'White', id: '9' },
        ],
        selectedIndex: 0,
        defaultValue: 'Choose Band2 Color'
      },
      {
        name: 'Multiplier: ',
        id: 2,
        items: [
          { name: 'Select Multiplier', id: '0' },
          { name: 'Brown', id: '1' },
          { name: 'Red', id: '2' },
          { name: 'Orange', id: '3' },
          { name: 'Yellow', id: '4' },
          { name: 'Green', id: '5' },
          { name: 'Blue', id: '6' },
          { name: 'Violet', id: '7' },
          { name: 'Gray', id: '8' },
          { name: 'White', id: '9' },
        ],
        selectedIndex: 0,
        defaultValue: 'Choose Multiplier'
      },
      {
        name: 'Tolerance: ',
        id: 3,
        items: [
          { name: 'Select Tolerance', id: '0' },
          { name: 'Brown', id: '1' },
          { name: 'Red', id: '2' },
          { name: 'Orange', id: '3' },
          { name: 'Yellow', id: '4' },
          { name: 'Green', id: '5' },
          { name: 'Blue', id: '6' },
          { name: 'Violet', id: '7' },
          { name: 'Gray', id: '8' },
          { name: 'White', id: '9' },
        ],
        selectedIndex: 0,
        defaultValue: 'Choose Tolerance'
      }
    ];
  }
  selectedValue(val: any) {
    console.log(val);
    if (val && val.dropdownID === 0) {
      this.selectedBand1Color = val.id === '0' ? '' : val.name;
    } else if (val && val.dropdownID === 1) {
      this.selectedBand2Color = val.id === '0' ? '' : val.name;
    } else if (val && val.dropdownID === 2) {
      this.selectedMultiplierColor = val.id === '0' ? '' : val.name;
    } else {
      this.selectedToleranceColor = val.id === '0' ? '' :  val.name;
    }
  }
}
