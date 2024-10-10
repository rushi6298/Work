import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public username: string,
    public descriptipn: string,
    public isDone: boolean,
    public targetDate: Date

  ) {

  }

}

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})

export class ListToDosComponent implements OnInit {
  todos: Todo[] = []
  message: string = ''
  // todos= [
  //   new Todo(1,'learn to dance',false,new Date()),
  //   new Todo(2,'become a expert in angular',false,new Date()),
  //   new Todo(3,'Cisit idonesia',false,new Date()),
  //   new Todo(4,'SOmething is doing ',false,new Date())
  // ]

  constructor(
    private router:Router,
    private todoDataService: TodoDataService
  ) { }

  ngOnInit(): void {
    
    this.refreshToDo()
  }
  deleteToDo(id: any) {
    this.todoDataService.deleteTodo('Rushikesh', id).subscribe(
      response => {
        console.log(response);
        this.message = 'User Deleted successfully'
        this.refreshToDo()
      }
    )

  }
  refreshToDo(){
    this.todoDataService.retriveAll('Rushikesh').subscribe(
      response => {
        console.log(response)
        this.todos = response;
        
      })
    
    }
    updateTodo(id:any)
    {
      this.router.navigate(['todos',id])

    }
    addTodo()
    {
      this.router.navigate(['todos',-1])
    }

}
