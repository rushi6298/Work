import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitySearchComponent } from './university-search.component';
import { of } from 'rxjs';
import { UniversityServiceService } from 'src/app/Services/university-service.service';

// defining the MockUniversityService 

 

describe('UniversitySearchComponent', () => {
  let component: UniversitySearchComponent;
  let fixture: ComponentFixture<UniversitySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversitySearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversitySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
