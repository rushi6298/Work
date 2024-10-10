import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {

  images:string[]=[
    'assets\image 1.jpg',
    'assets\image 2.jpg',
    'assets\image 3.jpg',
  ]

  droppedImage:string=''
  constructor() { }

  ngOnInit(): void {

  }
  drop(event:CdkDragDrop<string[]>){
    if(!this.droppedImage){
      const dragedImage = event.item.data;
      this.droppedImage=dragedImage
    }
  }


}
