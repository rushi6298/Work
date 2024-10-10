import { Component, OnInit } from '@angular/core';
// export class CurDate{
//   constructor(day:number=new Date().getDay(),
// month:number=new Date().getMonth()+1,
// year:number=new Date().getFullYear()
// ){

//   }
// }
export  class Todo{
  constructor( public id:number,
    public description : string,
    public done: boolean,
    public targetDate:Date){
   

  }
}

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})
export class ListToDosComponent implements OnInit {

  // day=new Date().getDay();
  // month=new Date().getMonth();
  // year=new Date().getFullYear();
  // today=''+this.day+'/'+this.month+'/'+this.year;
  
  todos=[new Todo(1,'Expert in JAVA',false,new Date() ),
    new Todo(2,'Expert in Angular',false,new Date() ),
    new Todo(3,'Expert in DevOps',false,new Date() ),
    new Todo(4,'Data Base Management',false,new Date() ),
    new Todo(5,'Managment',false,new Date() )
    
    
  ]
  
  constructor() { }
  

  ngOnInit(): void {
  console.log(this.todos);
  }


}
