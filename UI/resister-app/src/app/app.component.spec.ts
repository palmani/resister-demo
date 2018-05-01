import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DropdownConfig } from './shared/form-controls/dropdown';
import { AppService } from './app.service';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';

// Mock service

export class MockAppService {
  getOhms(obj: any): Observable<any> {
    return Observable.of('1500');
  }
}
@Component({
  selector: 'app-dropdown',
  template: ''
})

// Mock dynamic component
export class MockDropdownComponent {
  @Input() config: DropdownConfig;
  @Output('selectedValue') selectedValue: EventEmitter<any> = new EventEmitter<any>();
  selectedItem: any = {};
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockDropdownComponent
      ],
      providers: [
        {
          provide: AppService,
          useClass: MockAppService
        }]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should get the Ohms value', async(() => {
    const obj = {
      ColorA: '1',
      ColorB: '5',
      ColorC: '100',
      ColorD: '± 10%'
    };
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.submit(obj);
    expect(app.resisterVal).toBeTruthy('1500');
  }));

  it('should select bandAColor is black', async(() => {
    const obj = { name: 'Black', id: '0', dropdownID: 0 };
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.selectedValue(obj);
    expect(app.selectedBand1Color.name).toBeTruthy('Black');
  }));
  it('should select bandBColor is black', async(() => {
    const obj = { name: 'Black', id: '0', dropdownID: 1 };
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.selectedValue(obj);
    expect(app.selectedBand2Color.name).toBeTruthy('Black');
  }));
  it('should select Tolerance is Red', async(() => {
    const obj = { name: 'Red', id: '± 2%', dropdownID: 3 };
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.selectedValue(obj);
    expect(app.selectedToleranceColor.name).toBeTruthy('Black');
  }));
  it('should select Multiplier is Brown', async(() => {
    const obj = { name: 'Brown', id: 'x10', value: '10', dropdownID: 2 };
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.selectedValue(obj);
    expect(app.selectedMultiplierColor.name).toBeTruthy('Black');
  }));
});
