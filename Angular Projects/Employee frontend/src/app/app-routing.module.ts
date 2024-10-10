import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { EmployeeSearchByDropdownComponent } from './employee-search-by-dropdown/employee-search-by-dropdown.component';
import { EmpUpdateComponent } from './emp-update/emp-update.component';
import { FrontendPaginationComponent } from './frontend-pagination/frontend-pagination.component';
import { TypedQueryPagingComponent } from './typed-query-paging/typed-query-paging.component';
import { EmployeeWithVehicleComponent } from './employee-with-vehicle/employee-with-vehicle.component';

const routes: Routes = [
  {path:'search', component:EmployeeSearchComponent},
  {path:'', component:EmployeeSearchByDropdownComponent},
  {path:'emp', component:EmployeeSearchByDropdownComponent},
  {path:'update/:id', component:EmpUpdateComponent},
  {path:'frontEndPagination', component:FrontendPaginationComponent},
  {path:'employeevehicle', component:EmployeeWithVehicleComponent},

  {path:'typedqueryfrontEndPagination', component:TypedQueryPagingComponent},
  
  {path:'**', component:ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
