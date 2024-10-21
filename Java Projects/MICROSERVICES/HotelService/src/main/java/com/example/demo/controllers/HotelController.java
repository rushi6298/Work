package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.example.demo.entites.User;
import com.example.demo.entities.Hotel;
import com.example.demo.services.HotelService;

@RestController
@RequestMapping("/hotels")
public class HotelController {
	@Autowired
	private HotelService hotelService;

	@PostMapping
	public ResponseEntity<Hotel> createHotel(@RequestBody Hotel hotel) {
		return ResponseEntity.status(HttpStatus.CREATED).body(hotelService.createHotel(hotel));
	}

	@GetMapping("/{hotelId}")
	public ResponseEntity<Hotel> getSingleHotel(@PathVariable String hotelId) {
		return ResponseEntity.status(HttpStatus.OK).body(hotelService.getSingleHotel(hotelId));
	}

	@GetMapping
	public ResponseEntity<List<Hotel>> getAll() {
		return ResponseEntity.ok(hotelService.getAll());
	}

	@PutMapping("/{hotelId}")
	public ResponseEntity<Hotel> updateHotel(@PathVariable String hotelId, @RequestBody Hotel hotel) {
		System.err.println("Clients user Id is : " + hotelId);
		// Ensure the userId from the URL matches the userId in the user object
		System.err.println("Required user Id is : " + hotel.getId());
		if (!hotelId.equals(hotel.getId())) {
			throw new IllegalArgumentException("User ID in the path and request body do not match");
		}

		// Update the user
		Hotel updatedHotel = hotelService.updateHotel(hotel);

		// Return the updated user with 200 OK status
		return ResponseEntity.ok(updatedHotel);
	}

}
