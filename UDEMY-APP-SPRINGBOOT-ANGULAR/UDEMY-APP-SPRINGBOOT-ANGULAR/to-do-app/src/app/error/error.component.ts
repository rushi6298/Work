import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage='Error Occured. Contact support at ***___%%%'
  constructor() { }

  ngOnInit(): void {
  }

}
