package com.example.demo.external.services;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.entites.Hotel;

@FeignClient(name = "HOTEL-SERVICE")
public interface HotelService 
{
	@GetMapping("/hotels/{hotelId}")
	Hotel getHotel(@PathVariable String hotelId);
	
	@GetMapping("/hotels")
	public List<Hotel> getAllHotels();
	

}
