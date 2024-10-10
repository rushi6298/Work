package com.example.demo.business;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;

import com.example.demo.api.TodoService;
import com.example.demo.data.api.TodoServiceStub;

class TodoBusinessImplStubTest {

	@Test
	void testRetriveTodosRelatedToSpring_usingStubs() {
		// fail("Not yet implemented");
		TodoService todoServiceStub = new TodoServiceStub();
		ToDoBusinessImpl toDoBusinessImpl = new ToDoBusinessImpl(todoServiceStub);
		List<String> filteredTodos = toDoBusinessImpl.retriveTodosRelatedToSpring("Dummy");
		assertEquals(2, filteredTodos.size());

	}

}
