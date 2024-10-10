import { Component, OnInit } from '@angular/core';
import { UniversityServiceService } from './Services/university-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'devextremeDemo';
  constructor(
    private  universityAddressService:UniversityServiceService
  ){}
  ngOnInit(): void {
   this. fetchAllUniversityAddresses()
      
  }

  fetchAllUniversityAddresses(){
    this.universityAddressService.getAllUniversityAdresses().subscribe(
      data=>{
        localStorage.setItem('addresses',JSON.stringify(data));
        console.log("local storage addresses...");
        
      }
    )
  }
}
