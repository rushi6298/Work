import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
export class HelloWorldBean {
  constructor(public message: string) {

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }
  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/check/hellobean')
    //console.log('in WelcomeDataService'+'s'+' executeHelloWorldBeanService method')
  }
  // createBasicAuthenticationHttpMethod(){
  //     let username='rushi'
  //     let password='rushi'
  //     let basicAuthHeaderString='Basic '+window.btoa(username+':'+password);
  //     return basicAuthHeaderString; 

  // }
  executeHelloWorldBeanServiceWithpath(name:any){
    // let basicAuthHeaderString=this.createBasicAuthenticationHttpMethod();

    // let headers=new HttpHeaders(
    //   {
    //     Authorization:basicAuthHeaderString 
    //   }
    // )
    return this.http.get<HelloWorldBean>(`http://localhost:8080/check/hellobean/${name}`,
      //{headers}
    )

  }


}
