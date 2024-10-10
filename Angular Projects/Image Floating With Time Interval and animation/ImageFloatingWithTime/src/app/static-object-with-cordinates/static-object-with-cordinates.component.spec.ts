import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticObjectWithCordinatesComponent } from './static-object-with-cordinates.component';

describe('StaticObjectWithCordinatesComponent', () => {
  let component: StaticObjectWithCordinatesComponent;
  let fixture: ComponentFixture<StaticObjectWithCordinatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticObjectWithCordinatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaticObjectWithCordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
