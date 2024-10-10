import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { ErrorComponent } from './error/error.component';
//import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import {HttpClientModule} from '@angular/common/http'
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EmployeeSearchByDropdownComponent } from './employee-search-by-dropdown/employee-search-by-dropdown.component';
import { EmpUpdateComponent } from './emp-update/emp-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { FrontendPaginationComponent } from './frontend-pagination/frontend-pagination.component';
import { TypedQueryPagingComponent } from './typed-query-paging/typed-query-paging.component';
import { DecimalPipe } from './decimal.pipe';
import { EmployeeWithVehicleComponent } from './employee-with-vehicle/employee-with-vehicle.component';
import { CustomeDatePipe } from './custome-date.pipe';
//import { NgXMultiSelectDropdownModule } from 'ngx-multi-select-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeSearchComponent,
    ErrorComponent,
    //HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    EmployeeSearchByDropdownComponent,
    EmpUpdateComponent,
    EmployeeSearchByDropdownComponent,
    FrontendPaginationComponent,
    TypedQueryPagingComponent,
    DecimalPipe,
    EmployeeWithVehicleComponent,
    CustomeDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    NgxPaginationModule

   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
