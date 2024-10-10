package com.example.demo.data.api;

import java.util.Arrays;
import java.util.List;

import com.example.demo.api.TodoService;

public class TodoServiceStub implements TodoService {
	@Override
	public List<String> retriveTodos(String user) {
		// TODO Auto-generated method stub
		
		return Arrays.asList("Learn Spring mvc","Learn Spring" , "Learn to Dance");
	}

}
