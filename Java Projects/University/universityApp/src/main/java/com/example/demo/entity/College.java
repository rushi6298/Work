package com.example.demo.entity;

import org.hibernate.annotations.ManyToAny;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class College {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer cid;
	@Column
	private String cname;
	@Column
	private String caddress;
	@Column
	private String email;
	@Column
	private String phonenumber;
	@Column
	private Character rating;

	@ManyToOne
	@JoinColumn(name = "uid")
	@JsonBackReference
	private University university;
	

}
