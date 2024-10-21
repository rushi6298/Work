package com.example.demo.services;

import java.util.List;

import com.example.demo.entities.Hotel;

public interface HotelService
{
	public Hotel createHotel(Hotel hotel);
	public Hotel getSingleHotel(String id);
	public List<Hotel> getAll();
	public Hotel updateHotel(Hotel hotel);
}
