package com.task1.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.task1.demo.DTO.EmployeeVehicleDTO;
import com.task1.demo.entity.RequestEmployee;
import com.task1.demo.repository.EmployeeVehicleDTORepository;

@Service
public class EmployeeVehicleService {
	@Autowired
	public EmployeeVehicleDTORepository emvrepo;
	
	public Page<EmployeeVehicleDTO>getAllEmployeeVehicleWithPaginationWithExperince(RequestEmployee req , int page , int size)
	{
		return emvrepo.getAllEmployeeVehicleWithPaginationWithExperience(req, page, size);
	}
	
	public List<EmployeeVehicleDTO>getAllEmployeeVehicle(RequestEmployee req)
	{
		System.out.println(emvrepo.getAllEmployeeVehicle(req));
		return emvrepo.getAllEmployeeVehicle(req);
	}
	
	

}
