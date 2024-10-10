package com.example.demo.service;

import java.util.List;

import com.example.demo.entities.Rating;

public interface RatingService
{
	// creating 
	public Rating saveRating(Rating rating);
	
	// get all ratings 
	public List<Rating> getAll();
	
	
	public List<Rating> getRatingsByUserId(String userId);
	
	public List<Rating> getRatingsByHotelId(String hotelId);
	
	public Rating getRatingsByRatingId(String ratingId);
	
	
	
	
	
	

}
