import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  showTabList=false;
  availableTabs=[
    {name:'University Search', component:'UniversitySearchComponent'},
    {name:'MAT TAB SEARCH', component:'UniversityWithMatComponent'},
    {name:'DEV-EXTREME DEMO', component:'DevextremeDemoComponent'},
    {name:'PAGINATION ', component:'UniversitySearchWithbackendPaginationComponent'},
    {name:'COLUMN SEARCH', component:'columnSearchComponent'}
    
  ]
  tabs:Tab[]=[]

  toggleTabList(){
    this.showTabList=!this.showTabList;
  }

  openTab(tab:Tab)
  {
    const existingtab=this.tabs.find(t=>t.component===tab.component);
    if(!existingtab){
      this.tabs.forEach(t=>t.active=false)
      this.tabs.push({...tab,active:true})

    }
    else
    {
      this.selectTab(existingtab)
    }
    this.showTabList=false;
  }
  selectTab(tab : Tab) {
    this.tabs.forEach(t => t.active = false);
    tab.active = true;
  }


  closeTab(tab : Tab) {
    this.tabs = this.tabs.filter(t => t !== tab);
    if (this.tabs.length > 0) {
      this.selectTab(this.tabs[this.tabs.length - 1]);
    }
  }
}

export interface Tab
{
  name:string ;
  component:string;
  active?:boolean  

}