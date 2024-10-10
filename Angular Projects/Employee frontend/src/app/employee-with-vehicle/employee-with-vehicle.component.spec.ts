import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeWithVehicleComponent } from './employee-with-vehicle.component';

describe('EmployeeWithVehicleComponent', () => {
  let component: EmployeeWithVehicleComponent;
  let fixture: ComponentFixture<EmployeeWithVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeWithVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeWithVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
