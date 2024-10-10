package com.example.demo.business;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.jupiter.api.Test;

class ListTest {

	@Test
	void letsMockListSizeMethod() {
		//fail("Not yet implemented");
		 List listMock=mock(List.class);
		 when(listMock.size()).thenReturn(2); 
		 assertEquals(2, listMock.size());
		 assertEquals(2, listMock.size());
		 assertEquals(2, listMock.size());
		 
	}
	
	@Test
	void letsMockListSize_ReturnMultipleValues() {
		//fail("Not yet implemented");
		 List listMock=mock(List.class);
		 when(listMock.size()).thenReturn(2).thenReturn(3); 
		// assertEquals(2, listMock.size());
		 assertEquals(2, listMock.size());
		 assertEquals(3, listMock.size());
		 
	}
	
	@Test
	void letsMockListSizeGet() {
		//fail("Not yet implemented");
		 List listMock=mock(List.class);
		 when(listMock.get(anyInt())).thenReturn("in28Minutes"); 
		// assertEquals(2, listMock.size());
		 assertEquals("in28Minutes", listMock.get(0));
		 assertEquals("in28Minutes", listMock.get(1));
		 //assertEquals(3, listMock.size());
		 
	}
	
	@Test
	public void letsMockList_throwAnException() {
		//fail("Not yet implemented");
		 List listMock=mock(List.class);
		 when(listMock.get(anyInt())).thenThrow(new RuntimeException("Something")); 
		// assertEquals(2, listMock.size());
		  assertThrows(RuntimeException.class, () -> {
		       listMock.get(0);
		        });
		 
	}
	

}
