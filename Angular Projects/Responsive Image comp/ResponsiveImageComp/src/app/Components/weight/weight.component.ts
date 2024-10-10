import { Component, Input, OnInit } from '@angular/core';
import { Furnace } from 'src/Model/data';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() furnace!:Furnace;

  // getWeightColor(weight:number):string{
  //   if(weight < 0)
  //   {
  //     weight=0;
  //   }
  //   else if(weight>20)
  //   {
  //     weight=20;
  //   }

  //   const colValue=Math.floor((weight/20)*100)
    
  // }

}
