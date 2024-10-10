import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
export class hellobean{
  constructor(public message:string){

  }
}

@Injectable({
  providedIn: 'root'
})



export class HomeService {

  constructor(private http:HttpClient) { }
  executeHelloWorldBeanService()
  {
    //return this.http.get('http://localhost:8080/check/hellobean');
   return this.http.get<hellobean>('http://localhost:8080/hellobean');
   //console.log("Hello world bean service is working... ")

  
  }
  

}
