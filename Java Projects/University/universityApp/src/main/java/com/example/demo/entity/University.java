package com.example.demo.entity;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Entity
@Getter
@Setter
public class University 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer uid;
	
	@Column
	@NotBlank(message = "University name must not be blank ")
	@Size(min = 3,max = 100, message = "University must be between 3 to 100 charactor")
	private String uname;
	@Column
	@NotBlank(message = "University address must not be blank")
    @Size(min = 2, max = 200, message = "University address must be between 10 and 200 characters")
	private String uaddress;
	@Column
	@Email(message = "Email should be valid")
	private String email;
	@Column
	@Pattern(regexp = "^\\+?[0-9. ()-]{7,25}$", message = "Phone number is invalid")
	private String phonenumber;
	
	@Column
	private LocalDateTime lastUpdatedOn;
	
	@OneToMany(mappedBy = "university", cascade = CascadeType.ALL)
	@JsonManagedReference
	private List<College> colleges;
	
	
	


	

}
