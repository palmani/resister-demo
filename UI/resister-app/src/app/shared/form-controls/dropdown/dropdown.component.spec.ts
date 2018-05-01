import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';
import { FormsModule } from '@angular/forms';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ DropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    component.config = {
      name: 'Color1: ',
      id: 0,
      items: [
        { name: 'Select Color1', id: '' },
        { name: 'Black', id: '0' },
        { name: 'Brown', id: '1' },
      ],
      selectedIndex: 0,
      defaultValue: 'Choose Band1 Color'
    };
// @Output('selectedValue')selectedValue: EventEmitter<any> = new EventEmitter<any>();
component.selectedItem = {};
    fixture.detectChanges();
  });

  it('should create dynamic dropdown component', () => {
    expect(component).toBeTruthy();
  });
});
