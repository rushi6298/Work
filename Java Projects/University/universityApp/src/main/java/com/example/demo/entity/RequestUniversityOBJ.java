package com.example.demo.entity;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class RequestUniversityOBJ 
{
	private Integer uid;
	//private String uname;
	private String uaddress;
	
	private Integer cid;
	
	private String caddress;
	
	private LocalDateTime startTime;
	
	private LocalDateTime endTime;
	
	

}
