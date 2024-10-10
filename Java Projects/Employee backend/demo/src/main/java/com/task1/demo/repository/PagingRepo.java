package com.task1.demo.repository;

import org.hibernate.query.Page;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.task1.demo.entity.Employee;

public interface PagingRepo extends PagingAndSortingRepository<Employee, Integer> 
{
	
}
