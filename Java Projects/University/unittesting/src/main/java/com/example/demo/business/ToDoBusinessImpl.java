package com.example.demo.business;

import java.util.ArrayList;
import java.util.List;

import com.example.demo.api.TodoService;
// ToDoBusinessImpl is called System Under Test (SUT)
// todoService is dependency 
public class ToDoBusinessImpl 
{
	private TodoService todoService;

	public ToDoBusinessImpl(TodoService todoService) {
		super();
		this.todoService = todoService;
	}
	
	public List<String> retriveTodosRelatedToSpring(String user)
	{
		List<String> filteredTodos= new ArrayList<String>();
		List<String> todos =todoService.retriveTodos(user);
		for(String todo:todos)
		{
			if(todo.contains("Spring"))
			{
				filteredTodos.add(todo);
			}
		}
		return filteredTodos;
	}

}
