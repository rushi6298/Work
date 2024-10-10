import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDKDragAndDropComponent } from './cdkdrag-and-drop.component';

describe('CDKDragAndDropComponent', () => {
  let component: CDKDragAndDropComponent;
  let fixture: ComponentFixture<CDKDragAndDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CDKDragAndDropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CDKDragAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
