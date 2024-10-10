package com.task1.demo.DTO;

import java.math.BigDecimal;
import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeVehicleDTO
{
	private Integer id;
	private String name;
	private String department;
	private String address;
	private Double salary;
	private Integer vehicleId;
	private String vehicleNumber;
	private String vehicleSpot;
	private Integer joiningID;
	private Date joiningDate;
	private Double experience;
	public EmployeeVehicleDTO(Integer id, String name, String department, String address, Double salary,
			Integer vehicleId, String vehicleNumber, String vehicleSpot, Integer joiningID, Date joiningDate) {
		super();
		this.id = id;
		this.name = name;
		this.department = department;
		this.address = address;
		this.salary = salary;
		this.vehicleId = vehicleId;
		this.vehicleNumber = vehicleNumber;
		this.vehicleSpot = vehicleSpot;
		this.joiningID = joiningID;
		this.joiningDate = joiningDate;
	}
		
	

}
