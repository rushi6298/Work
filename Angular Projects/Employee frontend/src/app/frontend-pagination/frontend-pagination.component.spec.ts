import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendPaginationComponent } from './frontend-pagination.component';

describe('FrontendPaginationComponent', () => {
  let component: FrontendPaginationComponent;
  let fixture: ComponentFixture<FrontendPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontendPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
