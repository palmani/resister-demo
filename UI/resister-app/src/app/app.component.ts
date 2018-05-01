import { Component, OnInit } from '@angular/core';
import { DropdownConfig } from './shared/form-controls/dropdown';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  resisterVal: number;
  showResults: boolean;
  isSelectedAllColor: boolean;
  title = 'app';
  selectedCountries: any = {};
  resisterColorItems: Array<DropdownConfig> = [];
  selectedBand1Color: any = {};
  selectedBand2Color: any = {};
  selectedMultiplierColor: any = {};
  selectedToleranceColor: any = {};
  selectedColor: any = {};
  constructor(private appService: AppService) { }
  ngOnInit() {
    this.resisterColorItems = [
      {
        name: 'Color1: ',
        id: 0,
        items: [
          { name: 'Select Color1', id: '' },
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
          { name: 'Black', id: 'x1', value: 1 },
          { name: 'Brown', id: 'x10', value: 10 },
          { name: 'Red', id: 'x100', value: 100 },
          { name: 'Orange', id: 'x1K', value: 1000 },
          { name: 'Yellow', id: 'x10K', value: 10000 },
          { name: 'Green', id: 'x100K', value: 100000 },
          { name: 'Blue', id: 'x1M', value: 1000000 },
          { name: 'Violet', id: 'x10M', value: 10000000 },
          { name: 'Gray', id: 'x100M', value: 100000000 },
          { name: 'White', id: 'x1G', value: 1000000000 },
          { name: 'Pink', id: '×0.001', value: 0.001 },
          { name: 'Gold', id: '×0.01', value: 0.01 },
          { name: 'Silver', id: '×0.1', value: 0.1 },
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
      this.selectedBand1Color = val.id === '' ? '' : val;
    } else if (val && val.dropdownID === 1) {
      this.selectedBand2Color = val.id === '' ? '' : val;
    } else if (val && val.dropdownID === 2) {
      this.selectedMultiplierColor = val.id === '' ? '' : val;
    } else {
      this.selectedToleranceColor = val.id === '' ? '' : val;
    }

    if (this.selectedBand1Color && this.selectedBand2Color && this.selectedMultiplierColor && this.selectedToleranceColor) {
      this.isSelectedAllColor = true;
    } else {
      this.isSelectedAllColor = false;
    }
    this.selectedColor = {
      ColorA: this.selectedBand1Color.id,
      ColorB: this.selectedBand2Color.id,
      ColorC: this.selectedMultiplierColor.value,
      ColorD: this.selectedToleranceColor.id
    };
    this.showResults = false;
  }

  getValue() {
    this.appService.getOhms(this.selectedColor).subscribe(res => {
      console.log(res);
      this.showResults = true;
      this.resisterVal = res;
    });
  }
}
