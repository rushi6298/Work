import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevextremeDemoComponent } from './devextreme-demo/devextreme-demo.component';
import { UniversitySearchComponent } from './components/university-search/university-search.component';
import { UniversityWithMatComponent } from './university-with-mat/university-with-mat.component';
import { UniversitySearchWithbackendPaginationComponent } from './components/university-search-withbackend-pagination/university-search-withbackend-pagination.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ColumnSearchComponent } from './components/column-search/column-search.component';

const routes: Routes = [
 // {path:'', component:SideMenuComponent},
  {path:'main', component:UniversitySearchComponent},
  {path:'mat', component:UniversityWithMatComponent},
  {path:'dev', component:DevextremeDemoComponent},
  {path:'paginationWithBackend', component:UniversitySearchWithbackendPaginationComponent},
  {path:'columnSearch',component:ColumnSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
