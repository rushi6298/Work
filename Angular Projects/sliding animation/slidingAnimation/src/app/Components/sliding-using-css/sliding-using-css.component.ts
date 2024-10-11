import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sliding-using-css',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sliding-using-css.component.html',
  styleUrl: './sliding-using-css.component.scss'
})
export class SlidingUsingCssComponent {
  @Input() images : Slide[]=[]
  selectedIndex=0;

  showPrevious(i:number)
  {
    if(this.selectedIndex>0)
      this.selectedIndex = i-1

  }
  showNext(i:number)
  {
    if(this.selectedIndex < this.images.length-1 )
    {
      this.selectedIndex=i+1
    }

  }

}
export interface Slide{
  imgSrc:string,
  imgAlt:string
}
