import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  sampleList=[
    {id:'SLAGXXX',type:'slag',status:'',createdDate:'',analysisDate:'',productionLine:''},
    {id:'LSXXXX',type:'Liquid Steel',status:'',createdDate:'',analysisDate:'',productionLine:''},
    {id:'',type:'',status:'',createdDate:'',analysisDate:'',productionLine:''},
    {id:'',type:'',status:'',createdDate:'',analysisDate:'',productionLine:''}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
