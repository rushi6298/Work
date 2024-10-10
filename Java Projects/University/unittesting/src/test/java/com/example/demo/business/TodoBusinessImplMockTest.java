package com.example.demo.business;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;

import com.example.demo.api.TodoService;
import com.example.demo.data.api.TodoServiceStub;

class TodoBusinessImplMockTest {

	@Test
	void testRetriveTodosRelatedToSpring_usingAMock() {
		// fail("Not yet implemented");
		TodoService todoServiceMock= mock(TodoService.class);
		List<String> todos= Arrays.asList("Learn Spring mvc","Learn Spring" , "Learn to Dance");
		when(todoServiceMock.retriveTodos("Dummy")).thenReturn(todos);
		ToDoBusinessImpl toDoBusinessImpl = new ToDoBusinessImpl(todoServiceMock);
		
		List<String> filteredTodos = toDoBusinessImpl.retriveTodosRelatedToSpring("Dummy");
		assertEquals(2, filteredTodos.size());

	}
	
	@Test
	void testRetriveTodosRelatedToSpring_withEmptyList() {
		// fail("Not yet implemented");
		TodoService todoServiceMock= mock(TodoService.class);
		List<String> todos= Arrays.asList();
		when(todoServiceMock.retriveTodos("Dummy")).thenReturn(todos);
		ToDoBusinessImpl toDoBusinessImpl = new ToDoBusinessImpl(todoServiceMock);
		
		List<String> filteredTodos = toDoBusinessImpl.retriveTodosRelatedToSpring("Dummy");
		assertEquals(0, filteredTodos.size());

	}

}
