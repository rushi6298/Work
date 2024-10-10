import { Component, Input, OnInit } from '@angular/core';
import { Laddel, Laddel2 } from 'src/Model/data';

@Component({
  selector: 'app-main-ladder',
  templateUrl: './main-ladder.component.html',
  styleUrls: ['./main-ladder.component.css']
})
export class MainLadderComponent implements OnInit {

  @Input() laddels!: Laddel2
  percent:number=0
  maxWeight:number=1000
  maxTemparature:number=1000
  intensity:string=''
  popoverTargetElement:any
  popOverTitle:string=''
  movementDetails:any[]=[]

  

  svgHomeIcon:string=`<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_17161_147883)">
<rect x="2" y="1" width="32" height="32" rx="4" fill="white" shape-rendering="crispEdges"/>
<rect x="2.5" y="1.5" width="31" height="31" rx="3.5" stroke="#EBEFF5" shape-rendering="crispEdges"/>
<path d="M26.4381 12.0947L12.2568 12.0947" stroke="#0079CD" stroke-linejoin="round"/>
<path d="M12.8974 21.8749L12.7565 9.55415L27.6414 9.55434L26.1781 12.3817L26.1195 12.495L26.1223 12.6226L26.3375 22.3474L26.3375 25.1311L14.8469 25.1307L12.8974 21.8749Z" stroke="#0079CD"/>
<path d="M20.3596 17.626L20.7623 17.3296L20.5408 17.0287C20.6017 16.8621 20.6555 16.6872 20.7007 16.5031C20.9298 16.8488 21.1901 17.2553 21.4501 17.6894C21.8243 18.3142 22.1924 18.9873 22.4654 19.6132C22.7029 20.1576 22.8494 20.6246 22.8882 20.9763C22.8423 20.8554 22.7922 20.7351 22.74 20.6169C22.5145 20.1063 22.2179 19.5703 21.9275 19.0881C21.6361 18.6043 21.3455 18.1657 21.1282 17.8486C21.0194 17.6898 20.9285 17.5609 20.8646 17.4713C20.8326 17.4265 20.8074 17.3915 20.79 17.3675L20.7699 17.3399L20.7645 17.3325L20.763 17.3305L20.7625 17.3299L20.7624 17.3297C20.7624 17.3296 20.7623 17.3296 20.3596 17.626ZM17.8214 21.2153C17.821 21.1943 17.8208 21.1733 17.8208 21.1522C17.8208 20.8279 17.9462 20.5397 18.1948 20.2103C18.374 19.9728 18.5845 19.7522 18.8289 19.4963C18.9474 19.3721 19.0739 19.2397 19.2086 19.0929C19.3978 18.8867 19.5899 18.665 19.773 18.421C19.6118 19.1113 19.2462 19.5835 18.8539 20.0054C18.7783 20.0867 18.6952 20.1723 18.6096 20.2606C18.4126 20.4635 18.2024 20.68 18.0415 20.8874C17.9624 20.9894 17.8872 21.0983 17.8214 21.2153Z" fill="white" stroke="#0079CD"/>
<path d="M19.96 21.7921C20.185 21.5601 20.4248 21.2783 20.6004 20.908C20.6323 20.9574 20.6643 21.0079 20.6963 21.0592C20.8803 21.3539 21.0578 21.6659 21.1876 21.9514C21.3246 22.2527 21.3802 22.4645 21.3802 22.5785C21.3802 23.0154 21.2345 23.2993 21.0558 23.4739C20.8716 23.654 20.6204 23.7492 20.3607 23.7492C20.101 23.7492 19.8499 23.654 19.6656 23.4739C19.4869 23.2993 19.3413 23.0154 19.3413 22.5785C19.3413 22.5081 19.3652 22.4303 19.469 22.3006C19.548 22.202 19.6342 22.1171 19.745 22.0078C19.8078 21.946 19.8784 21.8764 19.96 21.7921Z" fill="#0079CD" stroke="#0079CD"/>
<path d="M10.4751 20.769L8.00173 20.9591L8.0051 14.0551L10.4751 14.3181L10.4751 20.769Z" stroke="#0079CD"/>
<path d="M10.2368 19.499L10.2368 15.499L15.7368 15.499C16.013 15.499 16.2368 15.7229 16.2368 15.999L16.2368 18.999C16.2368 19.2752 16.013 19.499 15.7368 19.499L10.2368 19.499Z" fill="white" stroke="#0079CD"/>
<mask id="path-9-inside-1_17161_147883" fill="white">
<path d="M14.4445 17.1758C14.1893 17.1758 13.9824 17.3827 13.9824 17.6379L13.9824 17.7942C13.9824 18.0494 14.1893 18.2563 14.4445 18.2563C14.6997 18.2563 14.9066 18.0494 14.9066 17.7942L14.9066 17.6379C14.9066 17.3827 14.6997 17.1758 14.4445 17.1758Z"/>
</mask>
<path d="M14.4445 17.1758C14.1893 17.1758 13.9824 17.3827 13.9824 17.6379L13.9824 17.7942C13.9824 18.0494 14.1893 18.2563 14.4445 18.2563C14.6997 18.2563 14.9066 18.0494 14.9066 17.7942L14.9066 17.6379C14.9066 17.3827 14.6997 17.1758 14.4445 17.1758Z" fill="#0079CD"/>
<path d="M14.9824 17.6379L14.9824 17.7942L12.9824 17.7942L12.9824 17.6379L14.9824 17.6379ZM13.9066 17.7942L13.9066 17.6379L15.9066 17.6379L15.9066 17.7942L13.9066 17.7942ZM13.9066 17.6379C13.9066 17.9349 14.1474 18.1758 14.4445 18.1758L14.4445 16.1758C15.252 16.1758 15.9066 16.8304 15.9066 17.6379L13.9066 17.6379ZM14.4445 17.2563C14.1474 17.2563 13.9066 17.4971 13.9066 17.7942L15.9066 17.7942C15.9066 18.6017 15.252 19.2563 14.4445 19.2563L14.4445 17.2563ZM14.9824 17.7942C14.9824 17.4971 14.7416 17.2563 14.4445 17.2563L14.4445 19.2563C13.637 19.2563 12.9824 18.6017 12.9824 17.7942L14.9824 17.7942ZM12.9824 17.6379C12.9824 16.8304 13.637 16.1758 14.4445 16.1758L14.4445 18.1758C14.7416 18.1758 14.9824 17.9349 14.9824 17.6379L12.9824 17.6379Z" fill="#0079CD" mask="url(#path-9-inside-1_17161_147883)"/>
</g>
<defs>
<filter id="filter0_d_17161_147883" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17161_147883"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_17161_147883" result="shape"/>
</filter>
</defs>
</svg>
` 
svgSecondIcon:string=`<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_17161_147862)">
<rect x="2" y="1" width="32" height="32" rx="4" fill="white" shape-rendering="crispEdges"/>
<rect x="2.5" y="1.5" width="31" height="31" rx="3.5" stroke="#EBEFF5" shape-rendering="crispEdges"/>
<path d="M14.0211 12.2632H11.5058C13.0179 10.1855 15.4304 8.95373 18 8.94737C18.4503 8.94696 18.8998 8.98287 19.3443 9.05469C19.6023 9.09707 19.8459 8.92227 19.8883 8.66427C19.9307 8.40621 19.7559 8.16266 19.4979 8.12027C19.0026 8.03996 18.5017 7.99977 18 8C15.2214 8.00468 12.6001 9.28991 10.8947 11.4836V9.13684C10.8947 8.87525 10.6826 8.66316 10.4211 8.66316C10.1595 8.66316 9.94737 8.87525 9.94737 9.13684V12.7368C9.9472 12.9983 10.1591 13.2104 10.4205 13.2105H14.0211C14.2826 13.2105 14.4947 12.9984 14.4947 12.7368C14.4947 12.4753 14.2826 12.2632 14.0211 12.2632ZM13.7374 20.5053C13.4759 20.5051 13.2633 20.717 13.2632 20.9784V23.4942C11.1855 21.9821 9.95373 19.5696 9.94737 17C9.94696 16.5497 9.98287 16.1002 10.0547 15.6557C10.0941 15.3972 9.91661 15.1556 9.65808 15.1162C9.40372 15.0773 9.16491 15.2488 9.12033 15.5022C9.04001 15.9974 8.99977 16.4983 9 17C9.00468 19.7786 10.2899 22.3999 12.4836 24.1053H10.1368C9.87525 24.1053 9.66316 24.3174 9.66316 24.5789C9.66316 24.8405 9.87525 25.0526 10.1368 25.0526H13.7368C13.9983 25.0528 14.2104 24.8409 14.2105 24.5795V20.9789C14.2107 20.7175 13.9988 20.5054 13.7374 20.5053ZM25.5795 20.7895H21.9789C21.7174 20.7895 21.5053 21.0016 21.5053 21.2632C21.5053 21.5247 21.7174 21.7368 21.9789 21.7368H24.4942C22.9821 23.8145 20.5696 25.0463 18 25.0526C17.5497 25.053 17.1002 25.0171 16.6557 24.9453C16.3977 24.9029 16.1541 25.0777 16.1117 25.3357C16.0693 25.5938 16.2441 25.8373 16.5021 25.8797C16.9974 25.96 17.4983 26.0002 18 26C20.7786 25.9953 23.3999 24.7101 25.1053 22.5164V24.8632C25.1053 25.1247 25.3174 25.3368 25.5789 25.3368C25.8405 25.3368 26.0526 25.1247 26.0526 24.8632V21.2632C26.0528 21.0017 25.8409 20.7896 25.5795 20.7895ZM25.8632 8.94737H22.2632C22.0017 8.9472 21.7896 9.15906 21.7895 9.42048V13.0211C21.7895 13.2826 22.0016 13.4947 22.2632 13.4947C22.5247 13.4947 22.7368 13.2826 22.7368 13.0211V10.5003C23.65 11.1562 24.4118 12.0002 24.9711 12.9756C25.6809 14.1979 26.0541 15.5865 26.0526 17C26.053 17.4503 26.0172 17.8998 25.9453 18.3443C25.9024 18.6016 26.0762 18.845 26.3335 18.8879L26.3357 18.8883C26.3614 18.8928 26.3874 18.8949 26.4134 18.8948C26.6451 18.8944 26.8424 18.7265 26.8797 18.4978C26.96 18.0026 27.0002 17.5017 27 17C27.0013 15.4206 26.5844 13.8689 25.7917 12.5028C25.2148 11.4919 24.4433 10.6055 23.5217 9.89474H25.8632C26.1247 9.89474 26.3368 9.68264 26.3368 9.42105C26.3368 9.15946 26.1247 8.94737 25.8632 8.94737Z" fill="#0079CD" stroke="#0079CD" stroke-width="0.27"/>
</g>
<defs>
<filter id="filter0_d_17161_147862" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17161_147862"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_17161_147862" result="shape"/>
</filter>
</defs>
</svg>`
svgThirsIcon:string=`<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_17161_147895)">
<rect x="2" y="1" width="32" height="32" rx="4" fill="white" shape-rendering="crispEdges"/>
<rect x="2.5" y="1.5" width="31" height="31" rx="3.5" stroke="#EBEFF5" shape-rendering="crispEdges"/>
<path d="M26.7657 24.0979L20.9975 16.3999V11.6C21.3159 11.6 21.6212 11.4735 21.8464 11.2485C22.0715 11.0235 22.198 10.7182 22.198 10.4V9.19999C22.198 8.88173 22.0715 8.57651 21.8464 8.35147C21.6212 8.12643 21.3159 8 20.9975 8H14.9953C14.6769 8 14.3716 8.12643 14.1464 8.35147C13.9213 8.57651 13.7948 8.88173 13.7948 9.19999V10.4C13.7948 10.7182 13.9213 11.0235 14.1464 11.2485C14.3716 11.4735 14.6769 11.6 14.9953 11.6V16.3999L9.2271 24.0979C9.10068 24.2687 9.02372 24.4711 9.00466 24.6827C8.98561 24.8944 9.02519 25.1072 9.11906 25.2979C9.21932 25.5088 9.37754 25.6867 9.57523 25.811C9.77293 25.9354 10.0019 26.0009 10.2355 25.9999H25.7573C25.9883 26.003 26.2155 25.9411 26.413 25.8212C26.6104 25.7013 26.7701 25.5283 26.8737 25.3219C26.9724 25.1283 27.0146 24.9108 26.9955 24.6944C26.9764 24.4779 26.8968 24.2712 26.7657 24.0979ZM14.9953 9.19999H20.9975V10.4H14.9953V9.19999ZM16.0757 16.9639C16.1536 16.8601 16.1957 16.7338 16.1957 16.6039V11.6H19.7971V16.6039C19.7971 16.7338 19.8392 16.8601 19.9171 16.9639L22.198 19.9999H13.7948L16.0757 16.9639ZM10.1935 24.7999L12.9005 21.1999H23.1043L25.7873 24.7999H10.1935Z" fill="#0079CD"/>
</g>
<defs>
<filter id="filter0_d_17161_147895" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17161_147895"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_17161_147895" result="shape"/>
</filter>
</defs>
</svg>
`
svgFourthIcong:string=`<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_17161_147864)">
<rect x="2" y="1" width="32" height="32" rx="4" fill="white" shape-rendering="crispEdges"/>
<rect x="2.5" y="1.5" width="31" height="31" rx="3.5" stroke="#EBEFF5" shape-rendering="crispEdges"/>
<path d="M20.95 9.06006L20.065 9.94381L22.125 12.0026H10.5075V13.2526H22.1237L20.065 15.3101L20.9487 16.1938L24.5163 12.6276L20.95 9.06006ZM13.8138 17.8063L10.25 21.3726L13.8162 24.9401L14.7 24.0563L12.6425 21.9976H24.2587V20.7476H12.6413L14.6988 18.6901L13.8138 17.8063Z" fill="#0079CD"/>
</g>
<defs>
<filter id="filter0_d_17161_147864" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17161_147864"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_17161_147864" result="shape"/>
</filter>
</defs>
</svg>
`
  currentType:string=''

  isPopOverVisible:boolean=false

  private isMouseOverPopup = false;
  constructor() { }

  ngOnInit(): void {
    console.log('in laddel');


    
    console.log(this.laddels);
    
    //this.intensity=this.calculateColorIntensity(this.laddels.temparature);
    console.log(this.intensity);
    
    this.percent=this.calculatePercent(this.laddels.weight);
    this.movementDetails[0]=this.laddels.movementDetails

  }
  calculatePercent(weight: number): number {
    
    //const weightNum = parseInt(weight.replace(/[^0-9]/g, ''), 10);
    const weightNum = weight;
    console.log("this weitgh",weightNum);
      
    
    
    return (weightNum/this.maxWeight)*100 

}

calculateColorIntensity(temperature:number):string{
  let temp = 0;
  //console.log(temperature);
  
  if(temperature)
  //temp=parseInt(temperature.replace(/[^0-9]/g, ''),10)
temp = temperature;
//console.log(temp);

  const normalizedTemp = 1-(temp/this.maxTemparature);
  //console.log(normalizedTemp);
  
const clampedTemp = Math.max(0,Math.min(1,normalizedTemp));
const red =Math.floor(clampedTemp * 255)
//console.log(red);

return `rgb(${red}, 0, 0)`;
}



showPopup(type:string,event:MouseEvent): void {
  this.currentType=type
  this.popOverTitle=this.getPopoverTitle(type)
  this.isPopOverVisible = true;
  this.popoverTargetElement=event.currentTarget
  
  
  console.log('Popup should be visible:', this.isPopOverVisible);
}

hidePopup(): void {
  this.isPopOverVisible = false;
  console.log('Popup should be hidden:', this.isPopOverVisible);
}
getPopoverTitle(type:string):string{
  return type === 'LadleDetails' ? 'Ladle details' : type === 'LifeDetails' ? 'Life Details' : 'Movement Details'
}



}