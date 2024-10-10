package com.example.demo.services;

import java.util.List;

import com.example.demo.entites.User;

public interface UserService 
{
	public User saveUser(User user);
	
	public List<User> getAllUser();
	
	public User getByUserId(String userId);
	

}
