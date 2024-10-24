package com.example.demo.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entites.User;
import com.example.demo.services.UserService;
import com.example.demo.services.UserServiceImpl;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.ratelimiter.annotation.RateLimiter;
import io.github.resilience4j.retry.annotation.Retry;

@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private UserServiceImpl userService;
	//create 
	
	
	@PostMapping()
	public ResponseEntity<User> createUser(@RequestBody User user)
	{
		 
		User user1 = userService.saveUser(user);
		return ResponseEntity.status(HttpStatus.CREATED).body(user1);
	}
	
	
	
	int retryCount=1;
//  single user get
	@GetMapping("/{userId}")
//  @CircuitBreaker(name="ratingHotelBreaker",fallbackMethod = "ratingHotelFallBack")
	
	
//	@Retry(name="ratingHotelBreaker",fallbackMethod = "ratingHotelFallBack")
	@RateLimiter(name="userRateLimiter",fallbackMethod = "ratingHotelFallBack" )
	public ResponseEntity<User> getSingleUser(@PathVariable String userId)
	{
		System.err.println(" Retry Count :{} "+ retryCount);
		retryCount++;
		User user=userService.getByUserId(userId);
		return ResponseEntity.ok(user);
		
	}
	
	
	
	// crating fallBack Method for circuit breaker
	// return type should be the same with the method you have who using circuit breaker
	// name should be same as you have mentioned in above method's @circuitBrfeaker name column
	
	
	public ResponseEntity<User> ratingHotelFallBack(String userId,Exception e)
	{
		
		User user =User.builder().
				name("dummy").
				about("this user created as dummy because some services down ").
				email("dummy@gmail.com").
				userId("Dummy").build();
		System.out.println("fall back is executed because service is down");
		return new ResponseEntity<User>(user,HttpStatus.OK);
		
	}
	
	
	@GetMapping
	public ResponseEntity<List<User>> getAllUser()
	{
		 List<User> users= userService.getAllUser();
		return ResponseEntity.ok(users);
	}
	
	@PutMapping("/{userId}")
	public ResponseEntity<User> updateUser(@PathVariable String userId, @RequestBody User user) {
		System.err.println("Clients user Id is : "+userId);
	    // Ensure the userId from the URL matches the userId in the user object
		System.err.println("Required user Id is : "+user.getUserId());
	    if (!userId.equals(user.getUserId())) {
	        throw new IllegalArgumentException("User ID in the path and request body do not match");
	    }
	    
	    
	    // Update the user
	    User updatedUser = userService.updateUser(user);
	    
	    // Return the updated user with 200 OK status
	    return ResponseEntity.ok(updatedUser);
	}
	
	

	
}
