package com.example.demo.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Hotel;
import com.example.demo.exceptions.ResourceNotFoundException;
import com.example.demo.repository.HotelRepository;

@Service
public class HotelServiceImpl implements HotelService
{
	
	@Autowired
	private HotelRepository hotelRepository;
	@Override
	public Hotel createHotel(Hotel hotel) 
	{
		
		String id = UUID.randomUUID().toString();
		hotel.setId(id); 
		return hotelRepository.save(hotel);
	}
	@Override
	public List<Hotel> getAll() {
		
		return hotelRepository.findAll();
	}
	@Override
	public Hotel getSingleHotel(String id) {
		
		return hotelRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("hotel for given id is not found"));
	}
	
	@Override
	public Hotel updateHotel(Hotel hotel) {
		Optional<Hotel> exstingHotel = hotelRepository.findById(hotel.getId());
		Hotel existingHotelPerticular;
		if(exstingHotel.isPresent())
		{
			existingHotelPerticular = exstingHotel.get();
			existingHotelPerticular.setAbout(hotel.getAbout());
			existingHotelPerticular.setName(hotel.getName());
			existingHotelPerticular.setLocation(hotel.getLocation());
			return hotelRepository.save(existingHotelPerticular);
			
		}
		return null;
		
	
	}

}
