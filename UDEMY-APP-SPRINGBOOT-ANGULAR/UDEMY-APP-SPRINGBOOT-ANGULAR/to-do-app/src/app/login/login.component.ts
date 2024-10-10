import { Component, OnInit } from '@angular/core';
import { Data, Route, Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service ';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  errormessage = 'Invalid Credentials'
  inValidLogin = false
  // here we taking router from another file so it is called as dependency injection
  //hence we delcalsring it in constructor..
  constructor(
    private router: Router,
   // private hardCodedAuthenticationService: HardCodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  ngOnInit(): void {
  }

  // handleLogin() {
  //   console.log(this.username)
  //   console.log(this.password)
  //   //if(this.username==='ajay' && this.password==='dummy')

  //   if (this.hardCodedAuthenticationService.authenticate(this.username, this.password)) {
  //     //if login is successful then lets route to the welcome page ...
  //     this.router.navigate(['welcome', this.username])
  //     this.inValidLogin = false;
  //   }
  //   else
  //     this.inValidLogin = true
  // }

  handleBasicAuthLogin() {
    // console.log(this.username)
    // console.log(this.password)
      //if(this.username==='ajay' && this.password==='dummy')

      this.basicAuthenticationService.executeAuthenticationService(this.username, this.password).subscribe
      (
        (data: any) => {
          console.log(data)
          this.router.navigate(['welcome', this.username])
          this.inValidLogin = false;
        },
        (error:any)=>{
          console.log(error)
          this.inValidLogin=true

        }
      )
  
   
 
}}
