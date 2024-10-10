import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsFluentaCommonComponent } from './events-fluenta-common.component';
import { DxDataGridModule } from 'devextreme-angular';

describe('EventsFluentaCommonComponent', () => {
  let component: EventsFluentaCommonComponent;
  let fixture: ComponentFixture<EventsFluentaCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsFluentaCommonComponent ], // declaring current components that we are testing  
      imports:[DxDataGridModule] // importing data grid module explicitely ... 
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsFluentaCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind eventsData to the data grid',()=>{

    component.eventsData = [
      { eventId: "1", date: new Date('2024-09-15T09:30:00') }, 
      { eventId: "2", date: new Date('2024-10-01T14:45:00') }, 
      { eventId: "3", date: new Date('2024-11-05T18:00:00') }, 
      { eventId: "4", date: new Date('2024-12-12T23:15:00') }, 
      { eventId: "5", date: new Date('2025-01-20T08:00:00') }  
    ];
    fixture.detectChanges();  // it checks the view is updated  with current data ..
    const dataGridElement = fixture.nativeElement.querySelector('dx-data-grid');
    expect(dataGridElement).toBeTruthy(); // checks the whether data grid is present or not 

    const rows = dataGridElement.querySelectorAll('dxi-row');
    expect(rows.length).toBe(component.eventsData.length); //

  })
    
});
