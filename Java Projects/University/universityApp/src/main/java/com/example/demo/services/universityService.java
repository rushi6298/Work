package com.example.demo.services;

import java.io.ByteArrayInputStream;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.demo.entity.RequestNewUniversity;
import com.example.demo.entity.RequestUniversityOBJ;
import com.example.demo.entity.University;

public interface universityService 
{
	public List<University> getAlluniversities();
	
	public List<String> getAllUniversitiesAdresses();
	
	public List<University>getAllUniversitiesByCriteria(RequestUniversityOBJ req);
	
	public University createUniversity(University university);
	
	public void deleteUniversity(Integer uid);

	public Page<University>getAllUniversitiesByCriteriaWithPagination(RequestUniversityOBJ req,int page,int pageSize);
	
	public Page<University> searchInWithPagination(String searchTerm,int page,int pageSize);
	
	public Page<University> searchInColumnsWithPagination(String uname, String uaddress, String email, String phonenumber, int page,int pageSize);
	
	public ByteArrayInputStream generateExcel(RequestUniversityOBJ req);
	
	public Page<University> searchWithEachAndEveryColumn( RequestNewUniversity req,int page,int pageSize);
	
}
