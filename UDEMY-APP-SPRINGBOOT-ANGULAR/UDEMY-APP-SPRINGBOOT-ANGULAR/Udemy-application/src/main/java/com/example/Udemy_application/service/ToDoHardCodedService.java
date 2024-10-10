package com.example.Udemy_application.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.Udemy_application.entity.Todo;
@Service
public class ToDoHardCodedService
{
	private static List<Todo>todos=new ArrayList();
	private static Long idCounter=0L;
	static {
		todos.add(new Todo(++idCounter,"Ruhsikesh","Love to Play cricket",new Date(),true));
		todos.add(new Todo(++idCounter,"Rakesh","Love to sing",new Date(),true));
		todos.add(new Todo(++idCounter,"Aditya","Love to Play soccer",new Date(),false));
		todos.add(new Todo(++idCounter,"Sankalp","learn to code",new Date(),false));
	}
	
	public List<Todo>findAll(){
		return todos;
		 
	}
	
	public Todo deleteById(long id)
	{
		Todo todo=findById(id);
		if(todo==null)
			return null;
		if(todos.remove(todo))
		return todo;
		else
		return null;
	}

	public Todo findById(long id) {
		// TODO Auto-generated method stub
		for(Todo todo:todos)
		{
			if(todo.getId()==id)
				return todo;
				
		}
		return null;
	}
	public Todo save(Todo todo)
	{
		if(todo.getId()==-1||todo.getId()==0)
		{
			todo.setId(++idCounter);
			todos.add(todo);
			//return todo; 
		
		}
		else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		
		return todo;
	}
	
			

}
