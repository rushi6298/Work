import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevextremeDemoComponent } from './devextreme-demo/devextreme-demo.component';
import { DxAutocompleteModule, DxDataGridModule, DxTemplateModule, DxTabPanelModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { UniversitySearchComponent } from './components/university-search/university-search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { DxSelectBoxModule  } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UniversityWithMatComponent } from './university-with-mat/university-with-mat.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { UniversitySearchWithbackendPaginationComponent } from './components/university-search-withbackend-pagination/university-search-withbackend-pagination.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ColumnSearchComponent } from './components/column-search/column-search.component';

//import { DxAutocompleteModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    AppComponent,
    DevextremeDemoComponent,
    UniversitySearchComponent,
    NavbarComponent,
    UniversityWithMatComponent,
    UniversitySearchWithbackendPaginationComponent,
    SideMenuComponent,
    ColumnSearchComponent
    
   

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    FormsModule,
    HttpClientModule,
    DxSelectBoxModule,
    DxButtonModule,
    DxTemplateModule,
    DxAutocompleteModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCardModule,
    DxTabPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
