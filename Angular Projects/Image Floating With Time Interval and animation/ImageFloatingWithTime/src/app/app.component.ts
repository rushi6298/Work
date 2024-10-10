import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageFloatingComponent } from "./Components/image-floating/image-floating.component";
import { DynamicImageFloatingComponent } from "./dynamic-image-floating/dynamic-image-floating.component";
import { StaticObjectWithCordinatesComponent } from './static-object-with-cordinates/static-object-with-cordinates.component';
import { SlidingComponent } from "./Animation/sliding/sliding.component";
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
// import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageFloatingComponent, DynamicImageFloatingComponent, StaticObjectWithCordinatesComponent, SlidingComponent,CommonModule,SlickCarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
//   title = 'ImageFloatingWithTime';
//   images=[
//   {
//     imgSrc:'assets/image-1.jpg',
//     imgAlt:'Image 1'

//   },
//   {
//     imgSrc:'assets/image-2.jpg',
//     imgAlt:'Image 2'

//   },
//   {
//     imgSrc:'assets/image-3.jpg',
//     imgAlt:'Image 3'

//   },
//   {
//     imgSrc:'assets/image-4.jpg',
//     imgAlt:'Image 4'

//   },
//   {
//     imgSrc:'assets/image-5.jpg',
//     imgAlt:'Image 5'

//   },
//   {
//     imgSrc:'assets/image-6.jpg',
//     imgAlt:'Image 6'

//   },
//   {
//     imgSrc:'assets/image-7.jpg',
//     imgAlt:'Image 7'

//   },
//   {
//     imgSrc:'assets/image-8.jpg',
//     imgAlt:'Image 8'

//   },
//   {
//     imgSrc:'assets/image-9.jpg',
//     imgAlt:'Image 9'

//   }
// ]
}
