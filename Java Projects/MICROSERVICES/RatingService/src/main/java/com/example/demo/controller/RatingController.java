package com.example.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Rating;
import com.example.demo.service.impl.RatingServiceImpl;


@RestController
@RequestMapping("/ratings")
public class RatingController 
{
	@Autowired
	private RatingServiceImpl ratingService;
	
	// create rating
	@PostMapping
		public ResponseEntity<Rating> crete(@RequestBody Rating rating){
			return ResponseEntity.status(HttpStatus.CREATED).body(ratingService.saveRating(rating));
			
	}
		
	@GetMapping
		public ResponseEntity<List<Rating>>getAllRatings(){
			return ResponseEntity.ok(ratingService.getAll());
		}
	
	@GetMapping("/users/{userID}")
	public ResponseEntity<List<Rating>>getRatingsByUserId(@PathVariable String userID){
		//System.out.println(ResponseEntity.ok(ratingService.getRatingsByUserId(userID)));
		return ResponseEntity.ok(ratingService.getRatingsByUserId(userID));
	}

	@GetMapping("/hotels/{hotelId}")
	public ResponseEntity<List<Rating>>getRatingsByhotelID(@PathVariable String hotelId){
		return ResponseEntity.ok(ratingService.getRatingsByHotelId(hotelId));
	}
	@GetMapping("/{ratingId}")
	public ResponseEntity<Rating>getRatingsByRatingID(@PathVariable String ratingId){
		return ResponseEntity.ok(ratingService.getRatingsByRatingId(ratingId));
	}
	
	
}
	
