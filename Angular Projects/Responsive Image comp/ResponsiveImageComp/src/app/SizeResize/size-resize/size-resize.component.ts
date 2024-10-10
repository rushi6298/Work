import { Component, OnInit } from '@angular/core';
import { Laddel, Laddel1 } from 'src/Model/data';

@Component({
  selector: 'app-size-resize',
  templateUrl: './size-resize.component.html',
  styleUrls: ['./size-resize.component.css']
})
export class SizeResizeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  percent:number=0;
  maskId!:string;
  laddel:Laddel1={ laddelId:'10',heatId:'23JD5', location:'JGFG30',temperature:1050,weight:600}

  tempColor(temperature:number):string{
    if(temperature<0)
    {
      temperature=0;
    }
    else if(temperature>2000)
    {
      temperature=2000
    }
    const minRedvalue=150;
    const redValue= Math.floor(((temperature/2000)*(255-minRedvalue))+ minRedvalue);
    const maxGreenBlueValue = 150; 
    const greenBlueValue = Math.floor(maxGreenBlueValue * (1 - (temperature / 500)));
  
    return `rgb(${redValue}, ${greenBlueValue}, ${greenBlueValue})`;
  }
  getFillHeight(weight: number): number {
    const maxHeight = 100; 
    const percentage = Math.max(0, Math.min(weight, 1000)) / 10;
    return Math.min(Math.round(percentage), maxHeight); 
  }
  calculateYPosition(percent: number): string {
    const baseY = 60; 
    const calculatedY = baseY - (percent * 0.6); 
    return `${Math.max(0, calculatedY)}%`;
  }

}
