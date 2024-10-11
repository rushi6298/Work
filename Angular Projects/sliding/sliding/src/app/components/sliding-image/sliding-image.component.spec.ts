import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingImageComponent } from './sliding-image.component';

describe('SlidingImageComponent', () => {
  let component: SlidingImageComponent;
  let fixture: ComponentFixture<SlidingImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidingImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlidingImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
