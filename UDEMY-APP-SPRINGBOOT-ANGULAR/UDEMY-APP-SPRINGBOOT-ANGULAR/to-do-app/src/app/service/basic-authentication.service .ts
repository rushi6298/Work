  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { map } from 'rxjs';
import { API_URL } from '../app.constants';
  export const TOKEN='token';
  export const AUTHENTICATED_USER='authenticateUser';

  @Injectable({
    providedIn: 'root'
  })
  export class BasicAuthenticationService 
  {

    constructor(
      private http:HttpClient
    ) { }
    // authenticate(username:any,password:any)
    // {
    //   console.log('before logged in : '+this.isUserLogedIn())
    //   if(username==='ajay' && password==='dummy')
    //     {
    //       sessionStorage.setItem('authenticateUser',username)
    //       console.log('after logged in : '+this.isUserLogedIn())
    //     return true
        

    //     }
    //     else
    //     return false;
    // }
    
  executeAuthenticationService(username:any,password:any){
  
      let basicAuthHeaderString='Basic '+ window.btoa(username+':'+password);
      //return basicAuthHeaderString; 
    //let basicAuthHeaderString=this.createBasicAuthenticationHttpMethod();

    let headers=new HttpHeaders(
      {
        Authorization:basicAuthHeaderString 
      }
    ) 
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauthentication`,
      {headers}).pipe(
        map(
          data=>{
            sessionStorage.setItem(AUTHENTICATED_USER,username)
            sessionStorage.setItem(TOKEN,basicAuthHeaderString)
            return data;
          }
        )
      )

  }
  getAuthenticatedUser()
  {
   return sessionStorage.getItem(AUTHENTICATED_USER)
    

  }
  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
    return sessionStorage.getItem(TOKEN)
  else
  return null

  }
  
    isUserLogedIn(){
      let user=sessionStorage.getItem(AUTHENTICATED_USER)
      return !(user===null)

    }
    isUserLoggedOut()
    {
      sessionStorage.removeItem(AUTHENTICATED_USER)
      sessionStorage.removeItem(TOKEN)
    }
  }export class AuthenticationBean{
    constructor(
      public message:string
    ){

    }
  }
