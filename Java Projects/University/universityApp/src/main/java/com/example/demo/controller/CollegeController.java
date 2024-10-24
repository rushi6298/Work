package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.College;
import com.example.demo.entity.RequestUniversityOBJ;
import com.example.demo.services.CollegeService;

@RestController
@CrossOrigin("*")
public class CollegeController 
{
	@Autowired
	private CollegeService cserv;
	
	@GetMapping("/getAllColleges")
	public List<College>getAllColleges()
	{
		return cserv.getAllCollege();
	}
	
	
	
	
	// No More Use
	@GetMapping("/getCollegeByUid/{uId}")
	public List<College> getCollegeByUid(@PathVariable Integer uId)
	{
		return cserv.getCollegeByUid(uId);
	}
	@PostMapping("/updateCollege")
	public College updateCollege(@RequestBody College college)
	{
		return cserv.updateCollege(college);
	}
	
	 @PostMapping("/createCollegeWithUid/{uid}")
	    public College createCollege(@RequestBody College college, @PathVariable Integer uid) {
		 
		 System.err.println("College controller starts here");
		 System.out.println(college);
		 System.out.println(uid);
	        return cserv.createCollege(college, uid);
	    }
	 
	 @DeleteMapping("/deleteCollege/{cid}")
	 public void deleteCollege(@PathVariable Integer cid)
	 {
		 cserv.deleteCollege(cid);
	 }
	 
	 @PostMapping("/getAllCollegesByCriteria")
		public List<College>getAllCollegesByCriteria(@RequestBody RequestUniversityOBJ req)
		{
			return cserv.getAllcollegesByCriteria(req);
			
		}
	 
	 @PostMapping("/getAllCollegesByCriteriaWithPagination/{page}/{pageSize}")
	 public Page<College>getAllCollegesByCriteriaWithPagination(@RequestBody RequestUniversityOBJ req,
			 @PathVariable int page,
			 @PathVariable int pageSize)
	 {
		 return cserv.getAllcollegesByCriteriaWithPagination(req, page, pageSize);
	 }
	
	
	
	

}
