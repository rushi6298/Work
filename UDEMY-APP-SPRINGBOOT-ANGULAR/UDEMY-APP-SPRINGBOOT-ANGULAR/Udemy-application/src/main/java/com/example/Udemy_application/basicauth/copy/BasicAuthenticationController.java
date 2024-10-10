package com.example.Udemy_application.basicauth.copy;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class BasicAuthenticationController {
	// @GetMapping("/helloworld")
	// @RequestMapping(method = RequestMethod.GET,path = "/hello")
//	@GetMapping("/hello")
//	public String helloWorldProject() {
//		return "Hello Aditya....!!";
//	} 

	@GetMapping("/basicauthentication")
	public AuthenticationBean helloBean() {
		AuthenticationBean h = new AuthenticationBean();
		h.setMessage("Hello user!!! You are athenticated!!!");
//	  throw new RuntimeException("Some error occured..contact support asap");
		return h;
	}

//	@GetMapping("/hellobean/{name}")
//	public HelloBean helloBean(@PathVariable String name) {
//		HelloBean h = new HelloBean();
//		h.setMessage("Welcome brother" + name);
//		return h;
//	}

}
