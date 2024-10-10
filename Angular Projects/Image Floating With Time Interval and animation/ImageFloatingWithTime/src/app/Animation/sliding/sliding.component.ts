import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
export interface Slide {
  imgSrc: string;
  imgAlt: string;
}
@Component({
  selector: 'app-sliding',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './sliding.component.html',
  styleUrl: './sliding.component.css'
})
export class SlidingComponent {
  slides = [
    { img: "../../../assets/image-1.jpg" },
    { img: "../../../assets/image-1.jpg" },
    { img: "../../../assets/image-3.jpg" },
    { img: "../../../assets/image-4.jpg" },
    { img: "../../../assets/image-5.jpg" },
    { img: "../../../assets/image-6.jpg" },
    { img: "../../../assets/image-7.jpg" },
    { img: "../../../assets/image-8.jpg" },
    { img: "../../../assets/image-9.jpg" },
  ];
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "autoplay": true,
    "autoPlaySpeed": 5000,
    "pauseOnHover": true,
    "infinite": true,
    "responsive": [
      {
        "breakpoint": 992,
        "settings": {
          "arrows": true,
          "infinite": true,
          "slidesToShow": 3,
          "slidesToScroll": 3


        }

      },
      {
        "breakpoint": 768,
        "settings": {
          "arrows": true,
          "infinite": true,
          "slidesToShow": 1,
          "slidesToScroll": 1


        }

      }
      
      


    ]
  }
}
