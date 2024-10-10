import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaddleWithHopperComponent } from './laddle-with-hopper.component';

describe('LaddleWithHopperComponent', () => {
  let component: LaddleWithHopperComponent;
  let fixture: ComponentFixture<LaddleWithHopperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaddleWithHopperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaddleWithHopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
