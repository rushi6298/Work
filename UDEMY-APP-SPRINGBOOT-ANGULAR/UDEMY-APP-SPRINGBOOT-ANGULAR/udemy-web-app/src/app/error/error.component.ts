import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage='Error occured.Contact ASAP to the Manager '

  constructor() { }

  ngOnInit(): void {
  }

}
