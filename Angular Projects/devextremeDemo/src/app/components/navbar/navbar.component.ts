  import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UniversitySearchComponent } from '../university-search/university-search.component';
import { UniversityWithMatComponent } from 'src/app/university-with-mat/university-with-mat.component';
import { DevextremeDemoComponent } from 'src/app/devextreme-demo/devextreme-demo.component';
import { UniversitySearchWithbackendPaginationComponent } from '../university-search-withbackend-pagination/university-search-withbackend-pagination.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  components=[
    {name:'Component main', route:'main'},
    {name:'Component mat', route:'mat'},
    {name:'Component devExtreme', route:'dev'},
    {name:'Component paginationWithBackend', route:'paginationWithBackend'}
  ]

  constructor(
    private router:Router
    
  ) { }

  ngOnInit(): void {
  }
  
 
  onSelectChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const route = target.value;
    this.router.navigate([route]);
  }


}
