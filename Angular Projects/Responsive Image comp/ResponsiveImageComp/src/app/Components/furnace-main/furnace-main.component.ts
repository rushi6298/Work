import { Component, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { Furnace } from 'src/Model/data';

@Component({
  selector: 'app-furnace-main',
  templateUrl: './furnace-main.component.html',
  styleUrls: ['./furnace-main.component.css']
})
export class FurnaceMainComponent implements OnInit {
  


  constructor(
    
  ) { }

  ngOnInit(): void {
    this.furnaces=this.randomElements.map(mapToStandardElement)
    
    
    
  }



  furnaces:Furnace[]=[]


randomElements=[
  
  { furnaceId: 'G234Y6', heatId: 'H43C', weight: 50, grade: 'HM34R' },
  { furnaceId: 'G235Y7', heatId: 'H44D',  weight: 500, grade: 'HM35S' },
     { furnaceId: 'G236Y8', heatId: 'H45E', weight: 300, grade: 'HM36T' },
     { furnaceId: 'G237Y9', heatId: 'H46F', weight: 350,grade: 'HM37U'  },
     { furnaceId: 'G238Z0', heatId: 'H47G', weight: 400,grade: 'HM38V'  },
     { furnaceId: 'G239Y9', heatId: 'H49F', weight: 450,grade: 'HM39Y'  }
]

selectedFurnace!:Furnace //| undefined

selecFurnace(furnace:Furnace)
{
  this.selectedFurnace=furnace
  

}

// closeFurnaceDetails(): void {
//   this.selectedFurnace=undefined
// }





 


// changeSvgColor(furnace:Furnace):void{
//   console.log("changeSvgColor method is calling ...");
  
//   const weightValue = parseInt(furnace.weight.replace('MT',''),10);
//   const maxWeight =Math.max(...this.furnaces.map(f=>parseInt(f.weight.replace('MT',''),10)))
//   const colorIntensity = (weightValue/maxWeight)*100;

//   console.log("changeSvgColor method is calling middle ...");
//   const backgroundContainer = this.el.nativeElement.querySelector('.background-container');
//     this.renderer.setStyle(backgroundContainer, 'filter', `invert(50%) sepia(100%) saturate(${colorIntensity}%) hue-rotate(180deg)`);

//     console.log("changeSvgColor method is calling end ...");
// }


// calculateDimensions(basewidth:number,baseHeight:number,newWidth:number):{width:string,height:string}
// {
//   const aspectRatio=baseHeight/basewidth;
//   const calculatedHeight = newWidth * aspectRatio
//   return { width: `${newWidth}px`, height: `${calculatedHeight}px`} 
// }



getFillHeight(weight: number): number {
  const maxHeight = 100;
  // Convert weight from string to number
  //const weightNumber = parseInt(weight, 10);

  // Ensure weightNumber is not NaN after parsing
  const validWeight = isNaN(weight) ? 0 : weight;

  const percentage = Math.max(0, Math.min(validWeight, 1000)) / 10;
  return Math.min(Math.round(percentage), maxHeight);
}

 }



export function mapToStandardElement(furnace: any): any {
  const keys = Object.keys(furnace);
  const mappedElement: any = {
    furnaceId: keys[0] ? furnace[keys[0]] : '',
    heatId: keys[1] ? furnace[keys[1]] : '',
    weight: keys[2] ? furnace[keys[2]] : '',
    grade: keys[3] ? furnace[keys[3]] : ''
  };

  return mappedElement;
}