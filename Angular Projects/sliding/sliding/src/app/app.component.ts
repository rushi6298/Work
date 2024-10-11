import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlidingImageComponent } from './components/sliding-image/sliding-image.component';
import { HammerModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SlidingImageComponent,HammerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sliding';

  images = [
    {
      imgSrc : '/assets/image-1.jpg',
      imgAlt : 'Image 1'
    },
    {
      imgSrc : '/assets/image-2.jpg',
      imgAlt : 'Image 2'
    },
    {
      imgSrc : '/assets/image-3.jpg',
      imgAlt : 'Image 3'
    },
    {
      imgSrc : '/assets/image-4.jpg',
      imgAlt : 'Image 4'
    },
    {
      imgSrc : '/assets/image-5.jpg',
      imgAlt : 'Image 5'
    },
    {
      imgSrc : '/assets/image-6.jpg',
      imgAlt : 'Image 6'
    },
    {
      imgSrc : '/assets/image-7.jpg',
      imgAlt : 'Image 7'
    }
  ]
}
