import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { HomeService } from '../service/data/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message='some welcome message'
  welcomeMessageFromService:string
  name=''

  constructor(
    private route:ActivatedRoute,
    private  service:HomeService
  ) { }

  ngOnInit(): void {
  }
  getWelcomeMessage(){
    console.log("home.component.ts method is calling ")
    this.service.executeHelloWorldBeanService().subscribe(
      response=>/*this.handleSuccessResponse(response)*/console.log(response.message) 
    );
    console.log('this is last line of getWelcomeMessage method')
  }
  handleSuccessResponse(response:strinf){
    this.welcomeMessageFromService=response.message
    console.log(response);
    console.log(response.message);
  }

}
