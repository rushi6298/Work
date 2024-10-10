import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-fluenta-common',
  templateUrl: './events-fluenta-common.component.html',
  styleUrls: ['./events-fluenta-common.component.css']
})
export class EventsFluentaCommonComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {

 
    


  }

  eventsData: Events[] = [
    { eventId: "1", date: new Date('2024-09-15T09:30:00') }, 
    { eventId: "2", date: new Date('2024-10-01T14:45:00') }, 
    { eventId: "3", date: new Date('2024-11-05T18:00:00') }, 
    { eventId: "4", date: new Date('2024-12-12T23:15:00') }, 
    { eventId: "5", date: new Date('2025-01-20T08:00:00') }  
  ];
}

  export interface Events {
    eventId: string;
    date: Date;
  }
  