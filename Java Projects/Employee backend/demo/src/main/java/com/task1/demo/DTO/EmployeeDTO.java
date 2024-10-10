package com.task1.demo.DTO;

import com.task1.demo.entity.EmployeeVehicle;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Value;

@Data
@AllArgsConstructor
public class EmployeeDTO {

	private Integer id;
	private String name;
	private String department;
	private Double salary;
	
	
	//private Long minSal;
	//private Long maxSal;
	
	
	

	public EmployeeDTO(String name, Double salary) {
		super();
		this.name = name;
		this.salary = salary;
	}

	public EmployeeDTO(String department) {
		super();
		this.department = department;
	}

	public EmployeeDTO(Integer id) {
		super();
		this.id = id;
	}

	public EmployeeDTO(Integer id, String name, String department, Long minSal, Long maxSal) {
		super();
		this.id = id;
		this.name = name;
		this.department = department;
		//this.minSal = minSal;
		//this.maxSal = maxSal;
	}

	public EmployeeDTO(Integer id, String name, String department) {
		super();
		this.id = id;
		this.name = name;
		this.department = department;
	}
	

	
	
	

}
