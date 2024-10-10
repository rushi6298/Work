import { Component, OnInit } from '@angular/core';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 // not been used 
  // isUserLoggedIn:boolean=false;
  constructor(
    public hardCodedAuthentication:HardCodedAuthenticationService
  ) { }

  ngOnInit(): void {
    // not been used..
    //this.isUserLoggedIn=this.hardCodedAuthentication.isUserLogedIn()
    

  }

}
