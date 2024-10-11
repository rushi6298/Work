import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { HammerModule } from '@angular/platform-browser';

@Component({
  selector: 'app-sliding-image',
  standalone: true,
  imports: [CommonModule, HammerModule],
  templateUrl: './sliding-image.component.html',
  styleUrl: './sliding-image.component.scss'
})
export class SlidingImageComponent {

  @Input() images : Slide[] = [];

  selectedIndex = 0;

  showPrev(i:number) {
    if(this.selectedIndex > 0){
      this.selectedIndex = i - 1;
    }
  }

  showNext(i:number) {
    if(this.selectedIndex < this.images.length - 1) {
      this.selectedIndex = i + 1;
    }
  }
}

export interface Slide {
  imgSrc: string;
  imgAlt: string;
}
