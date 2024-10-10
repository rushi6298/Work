import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService 
{

  constructor() { }
  authenticate(username:any,password:any)
  {
    console.log('before logged in : '+this.isUserLogedIn())
    if(username==='ajay' && password==='dummy')
      {
        sessionStorage.setItem('authenticateUser',username)
        console.log('after logged in : '+this.isUserLogedIn())
       return true
       

      }
      else
      return false;
  }
  isUserLogedIn(){
    let user=sessionStorage.getItem('authenticateUser')
    return!(user===null)

  }
  isUserLoggedOut()
  {
    sessionStorage.removeItem('authenticateUser')
  }
}
