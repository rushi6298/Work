import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laddle-with-hopper',
  templateUrl: './laddle-with-hopper.component.html',
  styleUrls: ['./laddle-with-hopper.component.css']
})
export class LaddleWithHopperComponent implements OnInit {
  element: LadleElement = {
    ladleId: "01", heatId: "G453273", location: "HMDS-01", weight: 800, temperature: 400,
    ladleDetails: { ladleId: "01", operationId: "OP101", grade: "A", ladleType: "Type1", lastUnit: "Unit1", TDC: "2023-09-01", capacity: "1000", quantity: "900", schId: "SCH101", ladleTemp: "50", torpedoId: "TP101", castNumber: "CN101" },
    lifeDetails: { currentCampaignId: 1, totalCycleTime: 120, campaignCount: 5, avgCycleTime: 24, operationHeatCount: 10, runCount: 3 },
    movementDetails: {
      currentRunID: 101, details: [
        {
          productionLineUnit: "PLU-1",
          receivingDate: new Date('2024-09-01'),
          dispatchDate: new Date('2024-09-02'),
          nextPLUnit: "PLU-2"
        }
      ]
    }
  };

  percent!: number;
  maskId!: string;
  selectedButton: number = 0;
  popupVisible: boolean = false;
  details: string = '';
  movementDetails: any[] = [];
  popupElement !: any;

  constructor() { }

  ngOnInit(): void {
    
    this.percent = this.getFillHeight(this.element.weight);
    console.log(this.percent);
    this.maskId = `mask-${this.element.ladleId}`;
  }

  
  getTemperatureColor(temperature: number): string {
    if (temperature < 0) {
      temperature = 0;
    } else if (temperature > 500) {
      temperature = 500;
    }

    const minRedValue = 150;
    const redValue = Math.floor(((temperature / 500) * (255 - minRedValue)) + minRedValue);

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
    const baseY = 85;
    const calculatedY = baseY - (percent * 0.8);
    return `${Math.max(0, calculatedY)}%`;
  }

  selectButton(buttonNumber: number): void {
    this.selectedButton = buttonNumber;
    this.popupVisible = true;
    console.log(this.element);
    console.log(buttonNumber);

    if (this.selectedButton == 1) {
      this.details = "Ladle Details"
    } else if (this.selectedButton == 2) {
      this.details = "Life Details"
    } else if (this.selectedButton == 3) {
      this.details = "Title 3"
    } else if (this.selectedButton == 4) {
      this.details = "Movement Details"
    }
  }

  showDetails(buttonId: number, event: MouseEvent) {
    this.selectedButton = buttonId;
    this.popupVisible = true;
    this.popupElement = event.target;

    if (this.selectedButton == 1) {
      this.details = "Ladle Details"
    } else if (this.selectedButton == 2) {
      this.details = "Life Details"
    } else if (this.selectedButton == 3) {
      this.details = "Details";
    } else if (this.selectedButton == 4) {
      this.details = "Movement Details"
    }
    
  }

  hideDetails() {
    this.popupVisible = false;
    this.selectedButton = 0;
  }

}

export interface LadleElement {
  ladleId: string;
  heatId: string;
  location: string;
  weight: number;
  temperature: number;
  ladleDetails: LadleDetails;
  lifeDetails: LifeDetails;
  movementDetails: MovementDetails;
}

export interface LadleDetails {
  ladleId: string;
  operationId: string;
  grade: string;
  ladleType: string;
  lastUnit: string;
  TDC: string;
  capacity: string;
  quantity: string;
  schId: string;
  ladleTemp: string;
  torpedoId: string;
  castNumber: string;
}

export interface LifeDetails {
  currentCampaignId: number;
  totalCycleTime: number;
  campaignCount: number;
  avgCycleTime: number;
  operationHeatCount: number;
  runCount: number;
}

export interface MovementDetail {
  productionLineUnit: string;
  receivingDate: Date;
  dispatchDate: Date;
  nextPLUnit: string;
}


export interface MovementDetails {
  currentRunID: number;
  details: MovementDetail[];
}
