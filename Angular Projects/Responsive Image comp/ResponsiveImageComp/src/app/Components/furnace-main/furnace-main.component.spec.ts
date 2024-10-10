import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnaceMainComponent } from './furnace-main.component';

describe('FurnaceMainComponent', () => {
  let component: FurnaceMainComponent;
  let fixture: ComponentFixture<FurnaceMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnaceMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnaceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
