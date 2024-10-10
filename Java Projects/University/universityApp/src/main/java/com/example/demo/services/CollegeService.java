package com.example.demo.services;

import java.util.List;

import org.springframework.data.domain.Page;

import com.example.demo.entity.College;
import com.example.demo.entity.RequestUniversityOBJ;

public interface CollegeService 
{
	public List<College>getAllCollege();
	
	public List<College>getAllcollegesByCriteria(RequestUniversityOBJ req);
	
	public College updateCollege(College college);
	
	public College createCollege(College college, Integer uid);
	
	//public College updateCollege(College college);

	// No More Use
	public List<College> getCollegeByUid(Integer id);
	
	public void deleteCollege(Integer cid);
	
	public Page<College>getAllcollegesByCriteriaWithPagination(RequestUniversityOBJ req,int page,int pageSize);
}
