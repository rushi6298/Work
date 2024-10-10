import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedQueryPagingComponent } from './typed-query-paging.component';

describe('TypedQueryPagingComponent', () => {
  let component: TypedQueryPagingComponent;
  let fixture: ComponentFixture<TypedQueryPagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypedQueryPagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypedQueryPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
