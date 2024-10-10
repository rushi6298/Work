package com.example.demo.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entity.College;

public interface CollegeRepository extends JpaRepository<College, Integer> 
{

	@Query("SELECT c FROM College c"
			+ " WHERE "
			+ "(:uId IS NULL OR c.university.uid=:uId)"
			+ " AND "
			+ "(:cid IS NULL OR c.cid= :cid)"
			+ "AND"
			+ "(:caddress IS NULL OR c.caddress= :caddress)")
	public List<College>getAllCollegesByCriteria(Integer uId, Integer cid, String caddress);
	
	
	// No More Use
	@Query("SELECT c FROM College c"
			+ " WHERE "
			+ "(:uId IS NULL OR c.university.uid=:uId)")
	public List<College >getCollegeByUid(Integer uId);
	
	
	@Query("SELECT c FROM College c"
			+ " WHERE "
			+ "(:uId IS NULL OR c.university.uid=:uId)"
			+ " AND "
			+ "(:cid IS NULL OR c.cid= :cid)"
			+ "AND"
			+ "(:caddress IS NULL OR c.caddress= :caddress)")
	public Page<College>getAllCollegesByCriteriaWithPagination(Integer uId, Integer cid, String caddress, Pageable pageable);
	
	
	
	
}
