import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityWithMatComponent } from './university-with-mat.component';

describe('UniversityWithMatComponent', () => {
  let component: UniversityWithMatComponent;
  let fixture: ComponentFixture<UniversityWithMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityWithMatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityWithMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
