package com.task1.demo.entity;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Transient;
import lombok.Data;
@Entity
@Data

public class EmployeeDateDetails
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer joiningID;
	 
	@Column
	private Date joiningDate;
	
	@Transient
	private Double experience;
	
	
	@OneToOne
	@JoinColumn(name = "id")
	@JsonBackReference
	private Employee employee;
	

}
