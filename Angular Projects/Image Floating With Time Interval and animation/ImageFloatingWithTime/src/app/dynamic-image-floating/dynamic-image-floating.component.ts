import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-dynamic-image-floating',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dynamic-image-floating.component.html',
  styleUrl: './dynamic-image-floating.component.css'
})
export class DynamicImageFloatingComponent {




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


  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      this.adjustCircle();
      this.adjustCircle2()
      window.addEventListener('resize', this.adjustCircle.bind(this));
      window.addEventListener('resize', this.adjustCircle2.bind(this));
    }
  }







  adjustCircle2() {
    const img = this.backgroundImage.nativeElement;
    const circle = this.circleBall2.nativeElement;
    const text = this.circleText2.nativeElement;


    const circleSizePercentage = 3;


    this.actualImageHeight = img.clientHeight
    this.actualImageWidth = img.clientWidth

    //const imgWidth = img.clientWidth;



    //const imgHeight = img.clientHeight;
    // console.log("Image Height is.."+imgHeight);




    let circleLeftPercentage = (this.xCordinate / (this.customeWidth > 0 ? this.customeWidth : this.actualImageWidth)) * 100;
    let circleTopPercentage = (this.yCordinate / (this.customeHeight > 0 ? this.customeHeight : this.actualImageHeight)) * 100;


    switch (this.selectedOrigine) {
      case 'top-right':
        console.log(" pre calculation  : 100 - " + (circleLeftPercentage - 3));
        circleLeftPercentage = 100 - circleLeftPercentage - (circleSizePercentage / 100 * 100); // Adjust for circle size
        // circleLeftPercentage=circleLeftPercentage + circleSizePercentage
        console.log(" op-right circleLeftPercentage is .." + circleLeftPercentage);
        break;
      case 'bottom-right':
        // console.log(" pre calculation  : 100 - "+ (circleLeftPercentage-3));
        // circleLeftPercentage = 100 - circleLeftPercentage - (circleSizePercentage / 100 * 100);
        // console.log("pre calculation : 100 - "+(circleTopPercentage-3));
        // circleTopPercentage=100 - circleTopPercentage + (circleTopPercentage/100*100);
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
      //break;
      default:
        circleLeftPercentage = circleLeftPercentage
        circleTopPercentage = circleTopPercentage



    }
    //circleLeftPercentage = Math.max(0, Math.min(100 - circleSizePercentage, circleLeftPercentage));
    //circleTopPercentage = Math.max(0, Math.min(100 - circleSizePercentage, circleTopPercentage));

    const circleSize = this.actualImageWidth * 0.03; // Size of the circle relative to the image width
    // Convert percentage positions to pixels based on image dimensions
    // const circleLeft = imgWidth * (circleLeftPercentage / 100);
    const circleLeft = circleLeftPercentage

    // console.log('circle left percentage' + circleLeft);

    //const circleTop = imgHeight * (circleTopPercentage / 100);
    const circleTop = circleTopPercentage


    //console.log('circle left percentage' + circleTop);

    circle.style.width = `${circleSize}px`;
    circle.style.height = `${circleSize}px`;
    circle.style.left = `${circleLeft}%`;
    circle.style.top = `${circleTop}%`;

    text.style.fontSize = `${circleSize * 0.4}px`;

    // Ensure the circle size variable is set for the keyframe animation to work correctly
    circle.style.setProperty('--circle-size', `${circleSize}px`);
  }


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

    this.adjustCircle2()
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
