import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-to-dos/list-to-dos.component';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number=0
  name:any
  todo !: Todo;

  constructor(
    private router:Router,
    private todoDataService:TodoDataService,
    //public todo:Todo,  
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.todo=new Todo(this.id,'','',false,new Date())
    if(this.todo.id!=-1)
    {
      this.todoDataService.retriveTodo('Rushikesh',this.id).subscribe(
        data=>this.todo=data
  
      )
    }
  }
  saveTodo(){
    if(this.id===-1)
      {
        this.todoDataService.createTodo('Rushikesh',this.todo).subscribe(
          data => {
            console.log(data)
          this.router.navigate(['todos'])
          }
        )
        
      }// add code here 
    else
    {
      this.todoDataService.updateTodo('Rakesh',this.id,this.todo).subscribe(
        (data)=>{
          console.log(data)
          console.log("Updating is working fine and smooth.. ")
          this.router.navigate(['todos'])
        },
        
        
        )
    }



  }


}
