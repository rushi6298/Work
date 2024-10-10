	package com.task1.demo.entity;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequestEmployee {
	private Integer id;
	private String name;

	private List<String> department;

	private Long minSal;
	private Long maxSal;

}
