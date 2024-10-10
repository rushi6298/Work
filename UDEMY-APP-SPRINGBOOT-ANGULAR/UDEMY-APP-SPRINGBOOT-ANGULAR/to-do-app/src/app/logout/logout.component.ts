import { Component, OnInit } from '@angular/core';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( 
    private hardCodedAuthenticationService:HardCodedAuthenticationService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.hardCodedAuthenticationService.isUserLoggedOut();
    this.router.navigate(['login'])

  }

}
