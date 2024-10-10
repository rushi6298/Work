import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversitySearchComponent } from './components/university-search/university-search.component';


const routes: Routes = [
  {path:'universities', component:UniversitySearchComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
