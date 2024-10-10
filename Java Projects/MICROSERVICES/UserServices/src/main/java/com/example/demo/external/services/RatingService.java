package com.example.demo.external.services;

import java.util.Map;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entites.Rating;
@Service 
@FeignClient(name = "RATING-SERVICE")
public interface RatingService {
	
	// get 
	 
	
	// post
	@PostMapping("/ratings")
	public Rating createRating( Rating values);
	
	// put
	@PutMapping("/ratings/{ratingId}")
	public Rating updateRating(@PathVariable String ratingId, Rating rating);

	@DeleteMapping("ratings/{ratingId}")
	public void deleteRating(@PathVariable String ratingId);
	
}
