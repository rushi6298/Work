import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-static-object-with-cordinates',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './static-object-with-cordinates.component.html',
  styleUrl: './static-object-with-cordinates.component.css'
})
export class StaticObjectWithCordinatesComponent {


  @ViewChild('backgroundImage', { static: false }) backgroundImage!: ElementRef<HTMLImageElement>;
  @ViewChild('circleBall', { static: false }) circleBall!: ElementRef<HTMLDivElement>;
  @ViewChild('circleText', { static: false }) circleText!: ElementRef<HTMLSpanElement>;
  @ViewChild('circleBall2', { static: false }) circleBall2!: ElementRef<HTMLDivElement>;
  @ViewChild('circleText2', { static: false }) circleText2!: ElementRef<HTMLSpanElement>


  circleYPosition: number = 60;
  // imageWidth:number=100
  // imageHeight:number=100
  xCordinate: number = 0;
  yCordinate: number = 0;

  actualImageHeight = 0
  actualImageWidth = 0


  customeHeight: number = 0
  customeWidth: number = 0


  selectedOrigine: string = ''

  customeWidthForOrigin:number=0

  customeHeightForOrigin:number=0



  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      this.adjustCircle();
      this.modifyingOrigin()
      //this.adjustCircle2()
      window.addEventListener('resize', this.adjustCircle.bind(this));
      
      //window.addEventListener('resize', this.adjustCircle2.bind(this));
    }
  }

  modifyingOrigin() {
    const img = this.backgroundImage.nativeElement
    const circle = this.circleBall2.nativeElement
    const circleText = this.circleText2.nativeElement

    const originalImageWidth = img.clientWidth
    const originalImageHeight = img.clientHeight

    // for just shocase not using anywhere ↓↓↓↓↓↓↓↓↓↓↓
    this.actualImageWidth=originalImageWidth
    this.actualImageHeight=originalImageHeight
    // for just shocase not using anywhere ↑↑↑↑↑↑↑↑↑↑↑


    const circleSize = originalImageWidth * 0.05

    circle.style.width = `${circleSize}px`;
    circle.style.height = `${circleSize}px`;

    let xCor = 0;
    let yCor = 0;

    let width = this.customeWidth
    let height = this.customeHeight

    if (this.customeWidth == 0) {
      width = originalImageWidth

    }
    if (this.customeHeight == 0) {
      height = originalImageHeight
    }

    console.log('switch case entering..');
    
    switch (this.selectedOrigine) {
      case 'top-left':
        xCor = this.xCordinate
        yCor = this.yCordinate
        break

      case 'top-right':
        console.log('in top right');
        
        xCor = this.xCordinate + width
        yCor = this.yCordinate
        break

      case 'bottom-left':
        xCor = this.xCordinate
        yCor = this.yCordinate + height
        break
      case 'bottom-right':
        xCor = this.xCordinate + width
        yCor = this.yCordinate + height
        break
      case 'middle':
        xCor=this.xCordinate + (width/2)
        yCor=this.yCordinate + (height/2)
        break
        case 'custom':
          
        // xCor=width-(this.xCordinate + (width-this.customeWidthForOrigin))
        // yCor=height- (this.yCordinate + (height-this.customeHeightForOrigin))
        xCor=this.xCordinate + this.customeWidthForOrigin 
        yCor=this.yCordinate + this.customeHeightForOrigin  

         


    }
    const leftPercentage = (xCor/(this.customeWidth==0 ? originalImageWidth : this.customeWidth))*100
    const topPercentage = (yCor/(this.customeHeight==0 ? originalImageHeight : this.customeHeight))*100

    circle.style.left = `${leftPercentage}%`;
    circle.style.top = `${topPercentage}%`;
    


    circleText.style.left = `50%`;
    circleText.style.top = `50%`;
    circleText.style.fontSize = `${circleSize * 0.4}px`;
    circleText.style.transform = `translate(-50% , -50%)`







  }







  /* adjustCircle2() {
     const img = this.backgroundImage.nativeElement;
     const circle = this.circleBall2.nativeElement;
     const text = this.circleText2.nativeElement;
 
 
     const circleSizePercentage = 3;
 
 
     this.actualImageHeight = img.clientHeight
     this.actualImageWidth = img.clientWidth
 
 
 
 
 
     let circleLeftPercentage = (this.xCordinate / (this.customeWidth > 0 ? this.customeWidth : this.actualImageWidth)) * 100;
     let circleTopPercentage = (this.yCordinate / (this.customeHeight > 0 ? this.customeHeight : this.actualImageHeight)) * 100;
 
 
     switch (this.selectedOrigine) {
       case 'top-right':
         console.log(" pre calculation  : 100 - " + (circleLeftPercentage - 3));
         circleLeftPercentage = 100 - circleLeftPercentage - (circleSizePercentage / 100 * 100);
         console.log(" op-right circleLeftPercentage is .." + circleLeftPercentage);
         break;
       case 'bottom-right':
 
         circleLeftPercentage = 100 - circleLeftPercentage - (circleSizePercentage / 100 * 100);
         circleTopPercentage = 100 - circleTopPercentage - (circleSizePercentage / 100 * 100); // Invert to move upwards
         break;
       case 'bottom-left':
         console.log(" pre calculation  : 100 - " + (circleTopPercentage - 3));
         circleTopPercentage = 100 - circleTopPercentage - (circleSizePercentage / 100 * 100); // Invert to move upwards
         console.log("final value is " + circleTopPercentage);
         break;
       case 'middle':
         let centerOffsetX = (this.xCordinate / (this.customeWidth > 0 ? this.customeWidth : this.actualImageWidth)) * 100;
         let centerOffsetY = (this.yCordinate / (this.customeHeight > 0 ? this.customeHeight : this.actualImageHeight)) * 100;
 
 
         circleLeftPercentage = 50 - centerOffsetX;
         circleTopPercentage = 50 - centerOffsetY;
 
         console.log("circleLeftPercentage (middle):", circleLeftPercentage);
         console.log("circleTopPercentage (middle):", circleTopPercentage);
         break;
 
       default:
         circleLeftPercentage = circleLeftPercentage
         circleTopPercentage = circleTopPercentage
 
 
 
     }
 
 
     const circleSize = this.actualImageWidth * 0.03;
 
     const circleLeft = circleLeftPercentage
 
 
     const circleTop = circleTopPercentage
 
 
 
 
     circle.style.width = `${circleSize}px`;
     circle.style.height = `${circleSize}px`;
     circle.style.left = `${circleLeft}%`;
     circle.style.top = `${circleTop}%`;
 
     text.style.fontSize = `${circleSize * 0.4}px`;
 
 
     circle.style.setProperty('--circle-size', `${circleSize}px`);
   }*/


  adjustCircle() {
    const img = this.backgroundImage.nativeElement;
    const circle = this.circleBall.nativeElement;
    const text = this.circleText.nativeElement;

    const imgWidth = img.clientWidth;
    const imgHeight = img.clientHeight;

    const circleSize = imgWidth * 0.03;
    const circleLeft = imgWidth * 0.10;
    //const circleTop = imgHeight * 0.60; 

    circle.style.width = `${circleSize}px`;
    circle.style.height = `${circleSize}px`;
    circle.style.left = `${circleLeft}px`;
    circle.style.top = `${imgHeight * (this.circleYPosition / 100)}px`;

    text.style.fontSize = `${circleSize * 0.4}px`;

    circle.style.setProperty('--circle-size', `${circleSize}px`);
  }

  updateCirclePosition() {
    if (this.circleYPosition > 90) {
      this.circleYPosition = 90
    }
    if (this.circleYPosition < 3) {
      this.circleYPosition = 3
    }
    this.adjustCircle()
  }


  updatePosition2() {
    // if (this.xCordinate > 1300) {
    //   this.xCordinate = 1300
    // }
    // if (this.yCordinate > 673) {
    //   this.yCordinate = 673
    // }
    // if (this.xCordinate < 0) {
    //   this.xCordinate = 1300
    // }
    // if (this.yCordinate < 0) {
    //   this.yCordinate = 0
    // }

    //this.adjustCircle2()

    this.modifyingOrigin()

  }

  // updateImageSize(){
  //   if(this.imageWidth<20)
  //   {
  //     this.imageWidth=20
  //   }
  //   if(this.imageHeight>100)
  //   {
  //     this.imageHeight=100
  //   }
  //   this.adjustCircle2()
  // }
}
