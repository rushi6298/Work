import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingUsingCssComponent } from './sliding-using-css.component';

describe('SlidingUsingCssComponent', () => {
  let component: SlidingUsingCssComponent;
  let fixture: ComponentFixture<SlidingUsingCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidingUsingCssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlidingUsingCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
