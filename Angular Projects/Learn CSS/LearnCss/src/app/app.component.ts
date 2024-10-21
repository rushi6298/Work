import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Practice1Component } from "./Components/practice1/practice1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Practice1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LearnCss';
}
