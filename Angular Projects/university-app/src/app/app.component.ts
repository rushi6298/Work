import { Component } from '@angular/core';
import { UniversityServiceService } from './Services/university-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'university-app';
  constructor(
    public universityService: UniversityServiceService
  ) { }

  fetchAllUniversities() {
    this.universityService.getAllUniversityAdresses().subscribe(
      data => {
        localStorage.setItem('addresses', JSON.stringify(data));
        console.log("Addresses stored in local storage..");




      }
    )

  }
}
