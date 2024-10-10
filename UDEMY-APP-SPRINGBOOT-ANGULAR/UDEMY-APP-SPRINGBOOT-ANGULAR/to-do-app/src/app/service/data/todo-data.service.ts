import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/list-to-dos/list-to-dos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }
  retriveAll(username:any){

    return this.http.get<Todo[]>(`http://localhost:8080/getall/${username}/todos`)
  }
  deleteTodo(username:any,id:any)
  {
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`)

  }
  retriveTodo(username:any,id:any)
  {
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`)
  }
  updateTodo(username:any,id:any,todo:any)
  {
    return this.http.put<Todo>(`${API_URL}/users/${username}/todos/${id}`,todo) 
  }

  createTodo(username:any,todo:any)
  {
    return this.http.post<Todo>(`${API_URL}/users/${username}/todos`,todo) 
  }

}
