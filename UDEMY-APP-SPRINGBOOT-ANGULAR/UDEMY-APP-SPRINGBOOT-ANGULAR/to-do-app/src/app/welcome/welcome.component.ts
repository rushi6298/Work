import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message='welcome to our awsome app'
  name='Rushikesh'
  welcomeMessageFromService=''

  constructor(
    private rout:ActivatedRoute,
    private welcomeDataService:WelcomeDataService
  ) { }

  ngOnInit(): void {
    console.log(this.message);
    this.name=this.rout.snapshot.params['name']
  }

  getWelcomeMessage(){
    // console.log(this.welcomeDataService.executeHelloWorldBeanService().subscribe())
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response=>this.handleSuccessfulResponse(response),
      error=>this.handleErrorResponse(error)

      
    )
    console.log('last line of getWelcomeMessage')

  }


  handleSuccessfulResponse(response:any){
    this.welcomeMessageFromService=response.message
    

  }
  handleErrorResponse(error:any)
  {
    console.log(error)
    console.log(error.error)
    console.log(error.error.message)
    this.welcomeMessageFromService=error.error.message
    
  }
  getWelcomeMessageWithPath(){
    console.log('getWelcomeMessageWithPath calling 1')
    this.welcomeDataService.executeHelloWorldBeanServiceWithpath(this.name).subscribe(
      response=>this.handleSuccessfulResponse(response),
      error=>this.handleErrorResponse(error)
      


    )
    console.log('getWelcomeMessageWithPath calling ends')

  }

  

}
