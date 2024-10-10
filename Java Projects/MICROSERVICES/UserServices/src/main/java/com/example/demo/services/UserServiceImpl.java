package com.example.demo.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.demo.entites.Hotel;
import com.example.demo.entites.Rating;
import com.example.demo.entites.User;
import com.example.demo.exceptions.ResourceNotFoundException;
import com.example.demo.external.services.HotelService;
import com.example.demo.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository repo;

	@Autowired
	private RestTemplate restTemplate;

	private Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
	
	@Autowired
	private HotelService hotelService;

	
	@Override
	public List<User> getAllUser() {
		// IMPLEMENTING RATING SERVICE CALL USING REST TEMPLATE

		return repo.findAll();
	}
//	@Override
//	public User getByUserId(String userId) {
//		// TODO Auto-generated method stub
//		Optional<User> user = repo.findById(userId);
//		if(user.isEmpty())
//		{
//			return null;
//		}
//		return user.get() ;
//	}

	@Override
	public User getByUserId(String userId) {
		User user = repo.findById(userId).orElseThrow(() -> new ResourceNotFoundException(
				"User Not Found On The Server..!! : " + userId + "  please enter valid user id"));

		System.err.println("User  id is " + user.getUserId());

		Rating[] ratingOfUser = restTemplate.getForObject("http://RATING-SERVICE/ratings/users/" + user.getUserId(),
				Rating[].class);
		System.err.println(ratingOfUser);

		List<Rating> ratings = Arrays.stream(ratingOfUser).toList();
		System.err.println(ratings);

		System.out.println(user.getUserId());

		List<Rating> ratingList = ratings.stream().map(rating -> {

			System.out.println("hotel id" + rating.getHotelId());
//			ResponseEntity<Hotel> forEntity = restTemplate.getForEntity("http://HOTELSERVICE/hotels/" + rating.getHotelId(), Hotel.class);
			// above method using rest template and below method is using feign client
			Hotel hotel = hotelService.getHotel(rating.getHotelId());

			rating.setHotel(hotel);

			return rating;

		}).collect(Collectors.toList());

		user.setRatings(ratingList);

		return user;
	}

	@Override
	public User saveUser(User user) {
		// it generates uniqe ID everytime
		String randomUserId = UUID.randomUUID().toString();
		user.setUserId(randomUserId);
		return repo.save(user);
	}

}
