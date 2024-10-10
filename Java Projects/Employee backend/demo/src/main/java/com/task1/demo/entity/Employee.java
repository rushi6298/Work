package com.task1.demo.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column
	private String name;
	@Column
	private String department;
	@Column
	private String address;

	@Column
	private Double salary;
	
	
	@OneToOne(mappedBy = "employee", cascade = CascadeType.ALL)
	@JsonManagedReference
	private EmployeeVehicle employeeVehicle;
	
	@OneToOne(mappedBy = "employee" ,cascade = CascadeType.ALL)
	@JsonManagedReference
	private EmployeeDateDetails employeeDateDetails;
	

}
