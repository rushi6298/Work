package com.example.demo.entity;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class RequestNewUniversity
{
	private Integer uid;
	
	private String uname;
	//private String uname;
	private String uaddress;
	
	private Integer cid;
	
	private String caddress;
	
	private LocalDateTime startTime;
	
	private LocalDateTime endTime;
	
	private String nameFilter;
	
	private String addressfilter;
	
	private String emailFilter;
	
	private String phoneFilter;
	
	private LocalDateTime lastUpdatedFilter;

}
