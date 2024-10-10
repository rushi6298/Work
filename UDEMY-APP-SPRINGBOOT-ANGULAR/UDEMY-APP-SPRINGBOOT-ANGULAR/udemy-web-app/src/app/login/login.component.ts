import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username=''
  password=''
  errorMessage='Invalid Credentials...'
  invalidLogin=false
  //router:Router
  // need instance of router for redirection 
  // dependency injection is being used 
  // router is dependency for LoginComponent 



  constructor(private router:Router,
    private hardCodedAuthenticati:HardcodedAuthenticationService
  ) { } //this operation called dependency injecction

  ngOnInit(): void {
  }
  handleClick(){
     console.log(this.username);
     console.log(this.password);
    if(this.hardCodedAuthenticati.authenticate(this.username,this.password))
     {
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false 
    }
    else
    this.invalidLogin=true
  // handling redirection 
  }
  

}
