import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversitySearchComponent } from './components/university-search/university-search.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component'
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    UniversitySearchComponent,
    NavbarComponent,
   

    //DevextremeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
    

    //DevExtremeModule
    
    
   


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
