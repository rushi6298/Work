import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicImageFloatingComponent } from './dynamic-image-floating.component';

describe('DynamicImageFloatingComponent', () => {
  let component: DynamicImageFloatingComponent;
  let fixture: ComponentFixture<DynamicImageFloatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicImageFloatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicImageFloatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
