import { Component, OnInit } from '@angular/core';
import { Laddel, Laddel2 } from 'src/Model/data';

@Component({
  selector: 'app-ladder',
  templateUrl: './ladder.component.html',
  styleUrls: ['./ladder.component.css']
})
export class LadderComponent implements OnInit {
  laddels: Laddel[] = []
  selectLaddel!: Laddel2


  constructor() { }

  ngOnInit(): void {
    this.laddels = this.ladderData.map(mapToStandardLaddel)
    console.log(this.laddels);


  }

  // ladderData = [
  //   { ladleId: 'LH123', heatId: 'H23F', location: '14QYCZ', weight: '500MT', temperature: '50F',laddleDetails: {operationId:'QWE',grade:'WDS',ladleType:'ASD',lastUnit:'MMD',TDC:'ERT',capacity:'QWER',quantity:'QAXC',schId:'ZXCM',ladleTemp:'SFASAA',torpedoId:'QSAZXC',castNumber:'MLJD'}
  // , LifeDetails:{currentCampaignId:898,totalCycleTime:657,campaignCount:676,avdCycleTime:323,operationHeatCount:234},MovementDetails:{
  //   currentRunID:3232,productionLineUnit:'CASCA', receivingDate:'2024-09-02T14:20:30',dispatchDate:'2024-09-02T14:20:30',nextPLUnit:'DCASFAS'
  // }},
  //   { laddelId: 'LH124', heatId: 'H24G', location: '15QYDA', weight: '550MT', temperature: '200F'},
  //   { laddelId: 'LH125', heatId: 'H25H', location: '16QYEB', weight: '600MT', temperature: '230F' },
  //   { laddelId: 'LH126', heatId: 'H26I', location: '17QYFC', weight: '650MT', temperature: '350F' },
  //   { laddelId: 'LH127', heatId: 'H27J', location: '18QYGD', weight: '700MT', temperature: '350F' }
  // ];
  ladderData: Laddel2[] = [
    { ladleId: "01", heatId: "G453273", location: "HMDS-01", weight: 100, temperature: 50, ladleDetails: { ladleId: "01", operationId: "OP101", grade: "A", ladleType: "Type1", lastUnit: "Unit1", TDC: "2023-09-01", capacity: "1000", quantity: "900", schId: "SCH101", ladleTemp: "50", torpedoId: "TP101", castNumber: "CN101" }, lifeDetails: { currentCampaignId: 1, totalCycleTime: 120, campaignCount: 5, avgCycleTime: 24, operationHeatCount: 10, runCount: 3 }, movementDetails: { currentRunID: 101, productionLineUnit: "PLU-1", receivingDate: new Date('2024-09-01'), dispatchDate: new Date('2024-09-02'), nextPLUnit: "PLU-2" } }, { ladleId: "02", heatId: "G453274", location: "HMDS-02", weight: 200, temperature: 100, ladleDetails: { ladleId: "02", operationId: "OP102", grade: "B", ladleType: "Type2", lastUnit: "Unit2", TDC: "2023-09-02", capacity: "2000", quantity: "1800", schId: "SCH102", ladleTemp: "100", torpedoId: "TP102", castNumber: "CN102" }, lifeDetails: { currentCampaignId: 2, totalCycleTime: 140, campaignCount: 6, avgCycleTime: 23, operationHeatCount: 12, runCount: 4 }, movementDetails: { currentRunID: 102, productionLineUnit: "PLU-2", receivingDate: new Date('2024-09-03'), dispatchDate: new Date('2024-09-04'), nextPLUnit: "PLU-3" } }, { ladleId: "03", heatId: "G453275", location: "HMDS-03", weight: 300, temperature: 150, ladleDetails: { ladleId: "03", operationId: "OP103", grade: "A", ladleType: "Type1", lastUnit: "Unit3", TDC: "2023-09-03", capacity: "3000", quantity: "2700", schId: "SCH103", ladleTemp: "150", torpedoId: "TP103", castNumber: "CN103" }, lifeDetails: { currentCampaignId: 3, totalCycleTime: 160, campaignCount: 7, avgCycleTime: 22, operationHeatCount: 14, runCount: 5 }, movementDetails: { currentRunID: 103, productionLineUnit: "PLU-3", receivingDate: new Date('2024-09-05'), dispatchDate: new Date('2024-09-06'), nextPLUnit: "PLU-4" } }, { ladleId: "04", heatId: "G453276", location: "HMDS-04", weight: 400, temperature: 200, ladleDetails: { ladleId: "04", operationId: "OP104", grade: "B", ladleType: "Type2", lastUnit: "Unit4", TDC: "2023-09-04", capacity: "4000", quantity: "3600", schId: "SCH104", ladleTemp: "200", torpedoId: "TP104", castNumber: "CN104" }, lifeDetails: { currentCampaignId: 4, totalCycleTime: 180, campaignCount: 8, avgCycleTime: 21, operationHeatCount: 16, runCount: 6 }, movementDetails: { currentRunID: 104, productionLineUnit: "PLU-4", receivingDate: new Date('2024-09-07'), dispatchDate: new Date('2024-09-08'), nextPLUnit: "PLU-5" } }, { ladleId: "05", heatId: "G453277", location: "HMDS-05", weight: 500, temperature: 250, ladleDetails: { ladleId: "05", operationId: "OP105", grade: "A", ladleType: "Type1", lastUnit: "Unit5", TDC: "2023-09-05", capacity: "5000", quantity: "4500", schId: "SCH105", ladleTemp: "250", torpedoId: "TP105", castNumber: "CN105" }, lifeDetails: { currentCampaignId: 5, totalCycleTime: 200, campaignCount: 9, avgCycleTime: 20, operationHeatCount: 18, runCount: 7 }, movementDetails: { currentRunID: 105, productionLineUnit: "PLU-5", receivingDate: new Date('2024-09-09'), dispatchDate: new Date('2024-09-10'), nextPLUnit: "PLU-6" } }, { ladleId: "06", heatId: "G453278", location: "HMDS-06", weight: 600, temperature: 300, ladleDetails: { ladleId: "06", operationId: "OP106", grade: "B", ladleType: "Type2", lastUnit: "Unit6", TDC: "2023-09-06", capacity: "6000", quantity: "5400", schId: "SCH106", ladleTemp: "300", torpedoId: "TP106", castNumber: "CN106" }, lifeDetails: { currentCampaignId: 6, totalCycleTime: 220, campaignCount: 10, avgCycleTime: 19, operationHeatCount: 20, runCount: 8 }, movementDetails: { currentRunID: 106, productionLineUnit: "PLU-6", receivingDate: new Date('2024-09-11'), dispatchDate: new Date('2024-09-12'), nextPLUnit: "PLU-7" } }, { ladleId: "07", heatId: "G453279", location: "HMDS-07", weight: 700, temperature: 350, ladleDetails: { ladleId: "07", operationId: "OP107", grade: "A", ladleType: "Type1", lastUnit: "Unit7", TDC: "2023-09-07", capacity: "7000", quantity: "6300", schId: "SCH107", ladleTemp: "350", torpedoId: "TP107", castNumber: "CN107" }, lifeDetails: { currentCampaignId: 7, totalCycleTime: 240, campaignCount: 11, avgCycleTime: 18, operationHeatCount: 22, runCount: 9 }, movementDetails: { currentRunID: 107, productionLineUnit: "PLU-7", receivingDate: new Date('2024-09-13'), dispatchDate: new Date('2024-09-14'), nextPLUnit: "PLU-8" } }, { ladleId: "08", heatId: "G453280", location: "HMDS-08", weight: 800, temperature: 400, ladleDetails: { ladleId: "08", operationId: "OP108", grade: "B", ladleType: "Type2", lastUnit: "Unit8", TDC: "2023-09-08", capacity: "8000", quantity: "7200", schId: "SCH108", ladleTemp: "400", torpedoId: "TP108", castNumber: "CN108" }, lifeDetails: { currentCampaignId: 8, totalCycleTime: 260, campaignCount: 12, avgCycleTime: 17, operationHeatCount: 24, runCount: 10 }, movementDetails: { currentRunID: 108, productionLineUnit: "PLU-8", receivingDate: new Date('2024-09-15'), dispatchDate: new Date('2024-09-16'), nextPLUnit: "PLU-9" } }, { ladleId: "09", heatId: "G453281", location: "HMDS-09", weight: 900, temperature: 450, ladleDetails: { ladleId: "09", operationId: "OP109", grade: "A", ladleType: "Type1", lastUnit: "Unit9", TDC: "2023-09-09", capacity: "9000", quantity: "8100", schId: "SCH109", ladleTemp: "450", torpedoId: "TP109", castNumber: "CN109" }, lifeDetails: { currentCampaignId: 9, totalCycleTime: 280, campaignCount: 13, avgCycleTime: 16, operationHeatCount: 26, runCount: 11 }, movementDetails: { currentRunID: 109, productionLineUnit: "PLU-9", receivingDate: new Date('2024-09-17'), dispatchDate: new Date('2024-09-18'), nextPLUnit: "PLU-10" } }, { ladleId: "10", heatId: "G453282", location: "HMDS-10", weight: 1000, temperature: 500, ladleDetails: { ladleId: "10", operationId: "OP110", grade: "B", ladleType: "Type2", lastUnit: "Unit10", TDC: "2023-09-10", capacity: "10000", quantity: "9000", schId: "SCH110", ladleTemp: "500", torpedoId: "TP110", castNumber: "CN110" }, lifeDetails: { currentCampaignId: 10, totalCycleTime: 300, campaignCount: 14, avgCycleTime: 15, operationHeatCount: 28, runCount: 12 }, movementDetails: { currentRunID: 110, productionLineUnit: "PLU-10", receivingDate: new Date('2024-09-19'), dispatchDate: new Date('2024-09-20'), nextPLUnit: "PLU-11" } }
  ];


  selectedLaddel(laddel: Laddel2) {
   this.selectLaddel = laddel
  }


  getFillHeight(weight: number): number {
    const maxHeight = 100;
    // Convert weight from string to number
    const weightNumber = weight

    // Ensure weightNumber is not NaN after parsing
    const validWeight = isNaN(weightNumber) ? 0 : weightNumber;

    const percentage = Math.max(0, Math.min(validWeight, 1000)) / 10;
    return Math.min(Math.round(percentage), maxHeight);
  }


  parseTemperature(temperature: string): number {
    // Use regex to extract the numeric value and the unit
    const match = temperature.match(/^(\d+)([CF])$/);
    if (!match) {
      throw new Error('Invalid temperature format');
    }

    const value = parseFloat(match[1]);
    const unit = match[2];

    if (unit === 'F') {
      // Convert Fahrenheit to Celsius
      return (value - 32) * 5 / 9;
    }
    // If already in Celsius
    return value;
  }

  calculatePointer(temperature: string): number {
    // Parse and convert temperature
    const tempCelsius = this.parseTemperature(temperature);

    // Clamp temperature value between 0 and 500
    const clampedTemperature = Math.max(0, Math.min(tempCelsius, 500));

    // Define positions for 0°C and 500°C
    const maxY = 275; // Position for 0°C
    const minY = 20;  // Position for 500°C

    // Calculate pointer position
    const pointerY = maxY - ((clampedTemperature / 500) * (maxY - minY));

    return pointerY;
  }





}


export function mapToStandardLaddel(laddel: any): any {
  const keys = Object.keys(laddel)
  const mapLaddel: any = {
    laddelId: keys[0] ? laddel[keys[0]] : '',
    heatId: keys[1] ? laddel[keys[1]] : '',
    location: keys[2] ? laddel[keys[2]] : '',
    weight: keys[3] ? laddel[keys[3]] : '',
    temperature: keys[4] ? laddel[keys[4]] : '',
    // operationId: keys[5] ? laddel[keys[5]] : '',
    // grade: keys[6] ? laddel[keys[6]] : '',
    // ladleType: keys[7] ? laddel[keys[7]] : '',
    // lastUnit: keys[8] ? laddel[keys[8]] : '',
    // TDC: keys[9] ? laddel[keys[9]] : '',
    // capacity: keys[10] ? laddel[keys[10]] : '',
    // quantity: keys[11] ? laddel[keys[11]] : '',
    // schId: keys[12] ? laddel[keys[12]] : '',

    // torpedoId: keys[13] ? laddel[keys[13]] : '',
    // castNumber: keys[14] ? laddel[keys[14]] : ''


  };
  return mapLaddel;
} 