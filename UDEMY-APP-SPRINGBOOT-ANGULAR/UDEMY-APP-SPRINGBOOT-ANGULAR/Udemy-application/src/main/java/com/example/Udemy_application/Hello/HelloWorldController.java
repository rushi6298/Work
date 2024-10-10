package com.example.Udemy_application.Hello;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
@RestController
@CrossOrigin(origins ="http://localhost:4200")
@RequestMapping("/check")
public class HelloWorldController 
{
	//@GetMapping("/helloworld")
	//@RequestMapping(method = RequestMethod.GET,path = "/hello")
	@GetMapping("/hello")
	public String helloWorldProject()
	{
		return "Hello Aditya....!!";
	}
	
	
		
		
	
	  @GetMapping("/hellobean") public HelloBean helloBean()
	  { 
		  HelloBean h=new HelloBean();
	  h.setMessage("Hello user!!! this is your customized message!!!");
//	  throw new RuntimeException("Some error occured..contact support asap");
	  return h; 
	  }
	  
	  @GetMapping("/hellobean/{name}") 
	  public HelloBean helloBean(@PathVariable String name ) 
	  {
		  HelloBean h=new HelloBean();
	  h.setMessage("Welcome brother"+name); 
	  return h; 
	  }
	 
}
