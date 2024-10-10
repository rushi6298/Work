import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeResizeComponent } from './size-resize.component';

describe('SizeResizeComponent', () => {
  let component: SizeResizeComponent;
  let fixture: ComponentFixture<SizeResizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeResizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizeResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
