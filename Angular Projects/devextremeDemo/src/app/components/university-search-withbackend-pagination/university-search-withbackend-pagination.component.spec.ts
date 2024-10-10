import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitySearchWithbackendPaginationComponent } from './university-search-withbackend-pagination.component';

describe('UniversitySearchWithbackendPaginationComponent', () => {
  let component: UniversitySearchWithbackendPaginationComponent;
  let fixture: ComponentFixture<UniversitySearchWithbackendPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversitySearchWithbackendPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversitySearchWithbackendPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
