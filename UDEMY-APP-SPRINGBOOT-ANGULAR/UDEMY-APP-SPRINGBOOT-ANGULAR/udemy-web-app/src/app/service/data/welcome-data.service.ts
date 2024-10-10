import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor() { }
  executeHelloWorldBeanService(){
    console.log("Hello world bean service is working... ")
  }
}
