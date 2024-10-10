import { Injectable } from '@angular/core';


// this annotation makes this class service
@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate (username:any,password:any){
    console.log('before'+this.isUserLoggedIn())
    if(username==='RYNE' && password==='RYNE')
     {
      sessionStorage.setItem('authenticatedUser',username)
      console.log('after'+this.isUserLoggedIn())
        return true;
     }
    
    return false;
  }
  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticatedUser')
    return !(user===null)


  }
  logOut(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
