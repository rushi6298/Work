import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevextremeDemoComponent } from './devextreme-demo.component';

describe('DevextremeDemoComponent', () => {
  let component: DevextremeDemoComponent;
  let fixture: ComponentFixture<DevextremeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevextremeDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevextremeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
