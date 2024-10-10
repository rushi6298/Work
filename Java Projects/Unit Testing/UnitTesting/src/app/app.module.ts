import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { GradePipePipe } from './grade-pipe.pipe';
import { GradeDirective } from './grade.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GradePipePipe,
    GradeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
