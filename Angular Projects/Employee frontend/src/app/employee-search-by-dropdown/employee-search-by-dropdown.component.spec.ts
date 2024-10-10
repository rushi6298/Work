import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSearchByDropdownComponent } from './employee-search-by-dropdown.component';

describe('EmployeeSearchByDropdownComponent', () => {
  let component: EmployeeSearchByDropdownComponent;
  let fixture: ComponentFixture<EmployeeSearchByDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSearchByDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeSearchByDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
