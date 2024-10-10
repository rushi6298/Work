import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Image1Component } from './Components/image1/image1.component';
import { FurnaceMainComponent } from './Components/furnace-main/furnace-main.component';
import { WeightComponent } from './Components/weight/weight.component';
import { MainLadderComponent } from './PracticeComponent/main-ladder/main-ladder.component';
import { LadderComponent } from './PracticeComponent/ladder/ladder.component';
import { SizeResizeComponent } from './SizeResize/size-resize/size-resize.component';
import { DxDataGridModule, DxButtonModule, DxPopupModule,DxPopoverModule } from 'devextreme-angular';
import { EventsFluentaCommonComponent } from './Components/events-fluenta-common/events-fluenta-common.component';
import { LaddleWithHopperComponent } from './Components/laddle-with-hopper/laddle-with-hopper.component';
import { SampleComponent } from './Components/sample/sample.component';
import { DragAndDropComponent } from './Components/drag-and-drop/drag-and-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CDKDragAndDropComponent } from './Components/cdkdrag-and-drop/cdkdrag-and-drop.component';


@NgModule({
  declarations: [
    AppComponent,
    Image1Component,
    FurnaceMainComponent,
    WeightComponent,
    MainLadderComponent,
    LadderComponent,
    SizeResizeComponent,
    EventsFluentaCommonComponent,
    LaddleWithHopperComponent,
    SampleComponent,
    DragAndDropComponent,
    CDKDragAndDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,  // Import Data Grid module
    DxButtonModule,    // Import Button module
    DxPopupModule,
    DxPopoverModule,
    DragDropModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
