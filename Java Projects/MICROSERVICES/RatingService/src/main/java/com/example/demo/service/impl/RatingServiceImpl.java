 package com.example.demo.service.impl;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Rating;
//import com.example.demo.exceptions.ResourceNotFoundException;
import com.example.demo.repository.RatingRepository;
import com.example.demo.service.RatingService;
@Service
public class RatingServiceImpl implements RatingService
{
	@Autowired
	private RatingRepository ratingRepo;
	@Override
	
	public Rating saveRating(Rating rating) {
		String randomRatingId = UUID.randomUUID().toString();
		rating.setRatingId(randomRatingId);
		return ratingRepo.save(rating);
	}@Override
	public List<Rating> getAll() {
		// TODO Auto-generated method stub
		return ratingRepo.findAll();
	}@Override
	public List<Rating> getRatingsByHotelId(String hotelId) {
		// TODO Auto-generated method stub
		return ratingRepo.findByHotelId(hotelId);
	}@Override
	public List<Rating> getRatingsByUserId(String userId) {
		//System.out.println(ratingRepo.findByUserId(userId));
		return ratingRepo.findByUserId(userId);
	}
	@Override
	public Rating getRatingsByRatingId(String ratingId) {
		
		//return ratingRepo.findById(ratingId).orElseThrow(() -> new ResourceNotFoundException("hotel for given id is not found"));
		return ratingRepo.findById(ratingId).orElseThrow(()->new com.example.demo.exception.ResourceNotFoundException("rating for given id is not found"));
	}
	@Override
	public Rating updateRating(Rating rating) 
	{
		
		return null;
	}

}
