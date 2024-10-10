package com.example.demo.controller;

import java.io.ByteArrayInputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.RequestNewUniversity;
import com.example.demo.entity.RequestUniversityOBJ;
import com.example.demo.entity.University;
import com.example.demo.services.UniversityServiceImplementation;

import jakarta.persistence.Table;
import jakarta.validation.Valid;

@RestController
@CrossOrigin("*")
public class UniversityController {
	@Autowired
	UniversityServiceImplementation uniserv;

	@GetMapping("/getAllUniversities")
	public List<University> getAllUniversities() {
		return uniserv.getAlluniversities();
	}

	@GetMapping("/getAllUniversitiesAdresses")
	public List<String> getAllUniversitiesAdresses() {
		return uniserv.getAllUniversitiesAdresses();
	}

	@PostMapping("/createAndUpdateUniversity")
	public University createUniversity(@Valid @RequestBody University university) {
		return uniserv.createUniversity(university);
	}

//	@PostMapping("/UpdateUniversity")
//	public University UpdateUniversity(@RequestBody University university)
//	{
//		return uniserv.createUniversity(university);
//	}				
	@DeleteMapping("/deleteUniversity/{uid}")
	public void deleteUniversity(@PathVariable Integer uid) {
		uniserv.deleteUniversity(uid);
	}

	@PostMapping("/getAllUniversitiesByCriteria")
	public List<University> getAllUniversitiesByCriteria(@RequestBody RequestUniversityOBJ req) {
		System.err.println(req);
		return uniserv.getAllUniversitiesByCriteria(req);
	}

	@PostMapping("/getAllUniversitiesByCriteriaWithPagination/{page}/{pageSize}")
	public Page<University> getAllUniversitiesByCriteriaWithPagination(@RequestBody RequestUniversityOBJ req,
			@PathVariable int page, @PathVariable int pageSize) {
		System.out.println(req);
		return uniserv.getAllUniversitiesByCriteriaWithPagination(req, page, pageSize);

	}
	
	@GetMapping("/searchInWithPagination/{searchTerm}/{page}/{pageSize}")
	public Page<University> searchInWithPagination(
			@PathVariable(required = false) String searchTerm,
            @PathVariable int page,
            @PathVariable int pageSize
			)
	{
		  return uniserv.searchInWithPagination(searchTerm, page, pageSize);
		
	}
	
	@PostMapping("/getUniversitiesByAllWithPagination/{page}/{size}")
    public Page<University> getUniversitiesByAllWithPagination(@RequestBody RequestNewUniversity req,@PathVariable int page, @PathVariable int size){
        //System.out.println("University pagination");
        System.out.println(req);
        return uniserv.searchWithEachAndEveryColumn(req, page, size);
    }
	
	
	@GetMapping("/searchInColumnsWithPagination/{page}/{pageSize}")
    public Page<University> searchInColumnsWithPagination(
            @RequestParam(required = false) String uname,
            @RequestParam(required = false) String uaddress,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String phonenumber,
            @PathVariable int page,
            @PathVariable int pageSize) {
        
        return uniserv.searchInColumnsWithPagination(uname, uaddress, email, phonenumber, page,pageSize);
    }
	
	
    @PostMapping("/downloadexcel")
    public ResponseEntity<byte[]> downloadExcel(@RequestBody RequestUniversityOBJ req) {
       ByteArrayInputStream in = uniserv.generateExcel(req);
       HttpHeaders headers = new HttpHeaders();
           
       headers.add("Content-Disposition", "attachment; filename=data.xlsx");
       headers.add("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
       return ResponseEntity.ok()
           .headers(headers)
           .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
           .body(in.readAllBytes());
    }
    
    
    @PostMapping("/searchWithEachAndEveryColumn/{page}/{pageSize}")
    public Page<University> searchWithEachAndEveryColumn(
    		@RequestBody RequestNewUniversity req, 
    		@PathVariable int page,
    		@PathVariable int pageSize)
    {
    	System.err.println(req);
    	return uniserv.searchWithEachAndEveryColumn(req, page, pageSize);
    	
    	
    }
    
    
	
	

}
