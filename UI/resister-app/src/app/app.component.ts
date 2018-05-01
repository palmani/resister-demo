import { Component, OnInit } from '@angular/core';
import { DropdownConfig } from './shared/form-controls/dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isSelectedAllColor: boolean;
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
          { name: 'Select Color1', id: '' },
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
          { name: 'Select Color2', id: '' },
          { name: 'Black', id: '0' },
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
          { name: 'Select Multiplier', id: '' },
          { name: 'Black', id: 'x1' },
          { name: 'Brown', id: 'x10' },
          { name: 'Red', id: 'x100' },
          { name: 'Orange', id: 'x1K' },
          { name: 'Yellow', id: 'x10K' },
          { name: 'Green', id: 'x100K' },
          { name: 'Blue', id: 'x1M' },
          { name: 'Violet', id: 'x10M' },
          { name: 'Gray', id: 'x100M' },
          { name: 'White', id: 'x1G' },
          { name: 'Gold', id: '÷10' },
          { name: 'Silver', id: '÷100' },
        ],
        selectedIndex: 0,
        defaultValue: 'Choose Multiplier'
      },
      {
        name: 'Tolerance: ',
        id: 3,
        items: [
          { name: 'Select Tolerance', id: '0' },
          { name: 'Brown', id: '± 1%' },
          { name: 'Red', id: '± 2%' },
          { name: 'Orange', id: '± 3%' },
          { name: 'Yellow', id: '± 4%' },
          { name: 'Green', id: '± 0.5%' },
          { name: 'Blue', id: '± 0.25%' },
          { name: 'Violet', id: '± 0.10%' },
          { name: 'Gray', id: '± 0.05%' },
          { name: 'Gold', id: '± 5%' },
          { name: 'Gold', id: '± 10%' },
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

    if (this.selectedBand1Color && this.selectedBand2Color && this.selectedMultiplierColor && this.selectedToleranceColor) {
      this.isSelectedAllColor = true;
    } else {
      this.isSelectedAllColor = false;
    }
  }

  getValue() {
  }
}
