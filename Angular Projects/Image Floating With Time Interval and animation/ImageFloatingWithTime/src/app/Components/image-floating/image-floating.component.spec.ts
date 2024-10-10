import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFloatingComponent } from './image-floating.component';

describe('ImageFloatingComponent', () => {
  let component: ImageFloatingComponent;
  let fixture: ComponentFixture<ImageFloatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageFloatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageFloatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
