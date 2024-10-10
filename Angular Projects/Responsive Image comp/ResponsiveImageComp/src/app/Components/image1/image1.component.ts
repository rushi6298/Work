import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Furnace } from 'src/Model/data';

@Component({
  selector: 'app-image1',
  templateUrl: './image1.component.html',
  styleUrls: ['./image1.component.css']
})
export class Image1Component implements OnInit {




  //  @Input() furnace!: Furnace
  percent: number = 0
  maxWeight: number = 500
  maxTemperature:number=700
  intensity: string = '';

  popoverTargetElement: any
  popOverTitle: string = ''

  movementDetails: any[] = []

  // furnace:Furnace={ furnaceId: 'BOF-1', heatId: 'HeatID', weight: 300, grade: 'Grade' }
  bofDetails: BOFDetails = {
    bofId: 'BOF-1', shellId: 'Shell ID-1', heatId: 'Heat ID -1', grade: 'Grade-1', capacity: 'capacity-1', weight: 300, lastHeatId: 'lastHeatId-1', previousGrade: 'previousGrade-1', temperature:500,lifeDetails: {
      currentCampaignId: 'currentCampaignId-1',
      totalCycleTime: 'totalCycleTime-1',
      campaignCount: '20',
      operationOrHeatCount: '20',
      lastShiftCount: '80',
      currentShiftCount: '12',
    }
  }

  svgHomeIcon: string = `<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.521" y="1.95068" width="14.4146" height="16.6906" fill="white"/>
<path d="M15.0961 1.41102H12.8038C12.6086 1.16412 12.2639 0.999512 11.8694 0.999512H6.13015C5.73563 0.999512 5.39095 1.16412 5.19577 1.41102H2.9034C1.91502 1.41102 1.10938 2.04969 1.10938 2.83321V17.5785C1.10938 18.362 1.91502 19.0007 2.9034 19.0007H15.0961C16.0845 19.0007 16.8901 18.362 16.8901 17.5785V2.83321C16.8901 2.04969 16.0845 1.41102 15.0961 1.41102ZM5.85607 1.87521C5.85607 1.75669 5.98065 1.65793 6.13015 1.65793H11.8694C12.0189 1.65793 12.1435 1.75669 12.1435 1.87521V3.2513C12.1435 3.36982 12.0189 3.46858 11.8694 3.46858H6.13015C5.98065 3.46858 5.85607 3.36982 5.85607 3.2513V1.87521ZM16.0596 17.5785C16.0596 17.9999 15.6277 18.3422 15.0961 18.3422H2.9034C2.37184 18.3422 1.93994 17.9999 1.93994 17.5785V2.83321C1.93994 2.41182 2.37184 2.06944 2.9034 2.06944H5.0255V3.2513C5.0255 3.73524 5.51969 4.127 6.13015 4.127H11.8694C12.4798 4.127 12.974 3.73524 12.974 3.2513V2.06944H15.0961C15.6277 2.06944 16.0596 2.41182 16.0596 2.83321V17.5785Z" fill="#0079CD" stroke="#0079CD" stroke-width="0.455198"/>
<path d="M12.976 7.34961H4.74452C4.5727 7.34961 4.43213 7.49792 4.43213 7.6792C4.43213 7.86047 4.5727 8.00879 4.74452 8.00879H12.9791C13.1509 8.00879 13.2915 7.86047 13.2915 7.6792C13.2915 7.49792 13.1509 7.34961 12.976 7.34961ZM12.976 9.26782H4.74452C4.5727 9.26782 4.43213 9.41614 4.43213 9.59741C4.43213 9.77869 4.5727 9.927 4.74452 9.927H12.9791C13.1509 9.927 13.2915 9.77869 13.2915 9.59741C13.2915 9.41614 13.1509 9.26782 12.976 9.26782ZM12.976 11.1893H4.74452C4.5727 11.1893 4.43213 11.3376 4.43213 11.5189C4.43213 11.7002 4.5727 11.8485 4.74452 11.8485H12.9791C13.1509 11.8485 13.2915 11.7002 13.2915 11.5189C13.2915 11.3376 13.1509 11.1893 12.976 11.1893ZM12.976 13.1108H4.74452C4.5727 13.1108 4.43213 13.2592 4.43213 13.4404C4.43213 13.6217 4.5727 13.77 4.74452 13.77H12.9791C13.1509 13.77 13.2915 13.6217 13.2915 13.4404C13.2915 13.2592 13.1509 13.1108 12.976 13.1108ZM12.976 15.0291H4.74452C4.5727 15.0291 4.43213 15.1774 4.43213 15.3586C4.43213 15.5399 4.5727 15.6882 4.74452 15.6882H12.9791C13.1509 15.6882 13.2915 15.5399 13.2915 15.3586C13.2915 15.1774 13.1509 15.0291 12.976 15.0291Z" fill="#0079CD"/>
</svg>

  `
  svgSecondIcon: string = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.02105 5.26316H3.50581C5.01787 3.18547 7.43035 1.95373 10 1.94737C10.4503 1.94696 10.8998 1.98287 11.3443 2.05469C11.6023 2.09707 11.8459 1.92227 11.8883 1.66427C11.9307 1.40621 11.7559 1.16266 11.4979 1.12027C11.0026 1.03996 10.5017 0.99977 10 1C7.22144 1.00468 4.6001 2.28991 2.89474 4.48359V2.13684C2.89474 1.87525 2.68264 1.66316 2.42105 1.66316C2.15946 1.66316 1.94737 1.87525 1.94737 2.13684V5.73684C1.9472 5.99832 2.15906 6.21035 2.42047 6.21053H6.02105C6.28264 6.21053 6.49474 5.99843 6.49474 5.73684C6.49474 5.47525 6.28264 5.26316 6.02105 5.26316ZM5.73742 13.5053C5.47595 13.5051 5.26333 13.717 5.26316 13.9784V16.4942C3.18547 14.9821 1.95373 12.5696 1.94737 10C1.94696 9.54973 1.98287 9.10016 2.05469 8.65568C2.09412 8.39721 1.91661 8.15563 1.65808 8.11619C1.40372 8.07734 1.16491 8.24878 1.12033 8.50222C1.04001 8.99741 0.99977 9.49833 1 10C1.00468 12.7786 2.28991 15.3999 4.48359 17.1053H2.13684C1.87525 17.1053 1.66316 17.3174 1.66316 17.5789C1.66316 17.8405 1.87525 18.0526 2.13684 18.0526H5.73684C5.99832 18.0528 6.21035 17.8409 6.21053 17.5795V13.9789C6.2107 13.7175 5.99884 13.5054 5.73742 13.5053ZM17.5795 13.7895H13.9789C13.7174 13.7895 13.5053 14.0016 13.5053 14.2632C13.5053 14.5247 13.7174 14.7368 13.9789 14.7368H16.4942C14.9821 16.8145 12.5696 18.0463 10 18.0526C9.54973 18.053 9.10016 18.0171 8.65568 17.9453C8.39767 17.9029 8.15412 18.0777 8.11168 18.3357C8.0693 18.5938 8.24409 18.8373 8.5021 18.8797C8.99735 18.96 9.49827 19.0002 10 19C12.7786 18.9953 15.3999 17.7101 17.1053 15.5164V17.8632C17.1053 18.1247 17.3174 18.3368 17.5789 18.3368C17.8405 18.3368 18.0526 18.1247 18.0526 17.8632V14.2632C18.0528 14.0017 17.8409 13.7896 17.5795 13.7895ZM17.8632 1.94737H14.2632C14.0017 1.9472 13.7896 2.15906 13.7895 2.42048V6.02105C13.7895 6.28264 14.0016 6.49474 14.2632 6.49474C14.5247 6.49474 14.7368 6.28264 14.7368 6.02105V3.50032C15.65 4.1562 16.4118 5.00024 16.9711 5.97559C17.6809 7.19791 18.0541 8.58652 18.0526 10C18.053 10.4503 18.0172 10.8998 17.9453 11.3443C17.9024 11.6016 18.0762 11.845 18.3335 11.8879L18.3357 11.8883C18.3614 11.8928 18.3874 11.8949 18.4134 11.8948C18.6451 11.8944 18.8424 11.7265 18.8797 11.4978C18.96 11.0026 19.0002 10.5017 19 10C19.0013 8.42057 18.5844 6.8689 17.7917 5.50278C17.2148 4.49192 16.4433 3.60549 15.5217 2.89474H17.8632C18.1247 2.89474 18.3368 2.68264 18.3368 2.42105C18.3368 2.15946 18.1247 1.94737 17.8632 1.94737Z" fill="#0079CD" stroke="#0079CD" stroke-width="0.27"/>
</svg>
`


  currentType: string = ''

  isPopOverVisible: boolean = false


  isPopUpVisible: boolean = false

  constructor() { }

  ngOnInit(): void {

    console.log(this.bofDetails);

    this.percent = this.calculatePercent(this.bofDetails.weight);

    this.intensity = this.calculateColorIntensity(this.bofDetails.temperature)

    console.log("percent is " + this.percent);


  }



  calculatePercent(weight: number): number {

    // const weightNum = parseInt(weight.replace(/[^0-9]/g, ''), 10);
    console.log("this weitgh", weight);



    return (weight / this.maxWeight) * 100
  }



  calculateColorIntensity(temperature: number): string {
    // Normalize the temperature value between 0 and 1
    const normalizedTemperature = Math.min(Math.max(temperature / this.maxTemperature, 0), 1);
  
    // Inverse the normalized temperature to make higher temperatures more red
    const inverseTemp = 1 - normalizedTemperature;
  
    // Base RGB values for "fire-like" color (#FF4500)
    const redBase = 255;   // Red value for fire orange
    const greenBase = 69;  // Green value for fire orange
    const blueBase = 0;    // Blue value for fire orange
  
    // Calculate adjusted color values based on the inverse of normalized temperature
    const red = Math.floor(inverseTemp * redBase);
    const green = Math.floor(inverseTemp * greenBase);
    const blue = Math.floor(inverseTemp * blueBase);
  
    // Return the calculated RGB color
    return `rgb(${red}, ${green}, ${blue})`;
  }
  

  showPopup(type: string, event: MouseEvent): void {
    this.currentType = type
    this.popOverTitle = this.getPopoverTitle(type)
    this.isPopOverVisible = true;
    this.popoverTargetElement = event.currentTarget


    console.log('Popup should be visible:', this.isPopOverVisible);
  }

  hidePopup(): void {
    this.isPopOverVisible = false;
    console.log('Popup should be hidden:', this.isPopOverVisible);
  }
  getPopoverTitle(type: string): string {
    return type === 'BOFDetails' ? 'BOF Details' : type === 'LifeDetails' ? 'Life Details' : 'Life Details'
  }








}


export class BOFDetails {
  bofId: string;
  shellId: string;
  heatId: string;
  grade: string;
  capacity: string;
  weight: number;
  lastHeatId: string;
  previousGrade: string;
  lifeDetails: LifeDetails;
  temperature:number;

  constructor(
    bofId: string,
    shellId: string,
    heatId: string,
    grade: string,
    capacity: string,
    weight: number,
    lastHeatId: string,
    previousGrade: string,
    lifeDetails: LifeDetails,
    temperature:number
  )
   {
    this.bofId = bofId;
    this.shellId = shellId;
    this.heatId = heatId;
    this.grade = grade;
    this.capacity = capacity;
    this.weight = weight;
    this.lastHeatId = lastHeatId;
    this.previousGrade = previousGrade;
    this.lifeDetails = lifeDetails;
    this.temperature=temperature
  }
}

export class LifeDetails {
  currentCampaignId: string;
  totalCycleTime: string;
  campaignCount: string;
  operationOrHeatCount: string;
  lastShiftCount: string;
  currentShiftCount: string;

  constructor(
    currentCampaignId: string,
    totalCycleTime: string,
    campaignCount: string,
    operationOrHeatCount: string,
    lastShiftCount: string,
    currentShiftCount: string
  ) {
    this.currentCampaignId = currentCampaignId;
    this.totalCycleTime = totalCycleTime;
    this.campaignCount = campaignCount;
    this.operationOrHeatCount = operationOrHeatCount;
    this.lastShiftCount = lastShiftCount;
    this.currentShiftCount = currentShiftCount;
  }
}