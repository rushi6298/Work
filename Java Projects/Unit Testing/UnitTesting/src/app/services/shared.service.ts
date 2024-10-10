import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
    console.log('in constructor');
   }
  mySharedFunction(){
    console.log('In mySharedFunction ');
    
  }
}
