package com.task1.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.task1.demo.DTO.EmployeeVehicleDTO;
import com.task1.demo.entity.RequestEmployee;
import com.task1.demo.service.EmployeeVehicleService;

@RestController
@CrossOrigin("*")
public class EmployeeVehicleController 
{
	@Autowired
	public EmployeeVehicleService empvehser;
	
	
	@PostMapping("/empwithvehicle/{page}/{size}")
	public Page<EmployeeVehicleDTO>getAllEmployeeVehicleWithPagination(@RequestBody RequestEmployee req ,@PathVariable int page , @PathVariable int size)
	{
		return empvehser.getAllEmployeeVehicleWithPaginationWithExperince(req, page, size);
	}
	
	@PostMapping("/allempvehicle")
	public List<EmployeeVehicleDTO> getAllEmployeeVehicle(@RequestBody RequestEmployee req)
	{
		return empvehser.getAllEmployeeVehicle(req);
	}

}
