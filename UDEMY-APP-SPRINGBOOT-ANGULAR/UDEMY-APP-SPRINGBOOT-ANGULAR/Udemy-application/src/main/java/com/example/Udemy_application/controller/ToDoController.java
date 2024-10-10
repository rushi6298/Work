package com.example.Udemy_application.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.Udemy_application.entity.Todo;
import com.example.Udemy_application.service.ToDoHardCodedService;
@RestController
@CrossOrigin(origins ="http://localhost:4200")
public class ToDoController
{
	@Autowired 
	private ToDoHardCodedService todoService;
	
	@GetMapping("/getall/{username}/todos")
	public List<Todo>getAllToDo(@PathVariable String username)
	{
		return todoService.findAll();
	}
	
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void>deleteToDo(@PathVariable String username,@PathVariable int id)
	{
		Todo todo=todoService.deleteById(id);
		if(todo!=null)
		{
			return ResponseEntity.noContent().build();
			
		}
		else
		return ResponseEntity.notFound().build();
	}
	@GetMapping("/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username,@PathVariable int id)
	{
		return todoService.findById(id);
	}
	
	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Todo>UpdateTodo(
			@PathVariable String username,
			@PathVariable long id,
			@RequestBody Todo todo)
	{
		Todo updatedToDo=todoService.save(todo);
		return new ResponseEntity<Todo>(todo,HttpStatus.OK);
		
	}
	@PostMapping("/users/{username}/todos")
	/*
	 after the successful post operation the user should directly go to the 
	 his own details
	 
	 so hence send current resource url
	  */ 
	public ResponseEntity<Void>createTodo(@PathVariable String username, @RequestBody Todo todo)
	{
		Todo createdTodo=todoService.save(todo);
		URI uri=ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}


}
