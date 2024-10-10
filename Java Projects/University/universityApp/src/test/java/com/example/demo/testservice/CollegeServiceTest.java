package com.example.demo.testservice;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

//import org.assertj.core.util.Arrays;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.exceptions.base.MockitoException;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.entity.College;
import com.example.demo.entity.RequestUniversityOBJ;
import com.example.demo.entity.University;
import com.example.demo.repository.CollegeRepository;
import com.example.demo.repository.UniversityRepository;
import com.example.demo.services.CollegeServiceImplementation;
import com.example.demo.services.universityService;
//@ExtendWith(MockitoExtension.class)

@SpringBootTest

class CollegeServiceTest {

	@Mock
	private CollegeRepository collegeRepository;
	@Mock
	private UniversityRepository universityRepository;

	@InjectMocks
	private CollegeServiceImplementation collegeService;

	@Test
	void getAllCollegeTest() {
		College college1 = new College();
		college1.setCid(1);
		college1.setCname("college 1");

		College college2 = new College();
		college2.setCid(2);
		college2.setCname("college 2");

		List<College> expectedColleges = new ArrayList<>();
		expectedColleges.add(college1);
		expectedColleges.add(college2);

		when(collegeRepository.findAll()).thenReturn(expectedColleges);

		List<College> actualColleges = collegeService.getAllCollege();

		assertEquals(2, actualColleges.size());
		System.err.println("getAllCollegeTest worked successfull....");

	}

	@Test
	public void getCollegeByUidTest() {
		College college1 = new College();
		college1.setCid(1);
		college1.setCname("Name 1");
		college1.setCaddress("Address 1");

		College college2 = new College();
		college2.setCid(2);
		college2.setCname("Name 2");
		college2.setCaddress(null);

		List<College> expectedColleges = new ArrayList<>();
		expectedColleges.add(college1);
		expectedColleges.add(college2);

		int cid = 1;
		when(collegeRepository.getCollegeByUid(cid)).thenReturn(expectedColleges);
		List<College> actualCollege = collegeService.getCollegeByUid(cid);

		assertEquals(2, actualCollege.size());
		assertEquals(1, actualCollege.get(0).getCid());
		assertEquals(null, actualCollege.get(1).getCaddress());
		assertEquals("Name 2", actualCollege.get(1).getCname());
		System.err.println("getCollegeByUidTest successfull.....");

	}

	@Test
	public void updateCollegeTest() {

		College college1 = new College();
		college1.setCid(1);
		college1.setCname("Name 1");
		college1.setCaddress("Address 1");
		college1.setEmail("email 1");
		college1.setPhonenumber("123 ");

		College updatedCollege = new College();
		updatedCollege.setCid(1);
		updatedCollege.setCname("Name 2");
		updatedCollege.setCaddress("Address 2");
		updatedCollege.setEmail("email 2");
		updatedCollege.setPhonenumber("456");
		updatedCollege.setRating('A');

		when(collegeRepository.findById(1)).thenReturn(Optional.of(college1));
		when(collegeRepository.save(college1)).thenReturn(college1);

		College result = collegeService.updateCollege(updatedCollege);

		assertNotNull(result);
		assertEquals("Name 2", result.getCname());
		assertEquals("Address 2", result.getCaddress());
		System.err.println("updateCollegeTest Successfull....");

	}

	@Test
	public void createCollegeTest_WithValidUID_SettingUniversity() {
		Integer uid = 1;
		University university1 = new University();
		university1.setUid(1);
		university1.setUname("University 1");

		College college = new College();
		college.setCid(1);
		college.setCname("College 1");

		when(universityRepository.findById(uid)).thenReturn(Optional.of(university1));
		when(collegeRepository.save(college)).thenReturn(college);

		College result = collegeService.createCollege(college, uid);

		assertEquals(1, result.getCid());
		System.err.println("createCollegeTest_WithValidUID_SettingUniversity working successfully..");
	}

	@Test
	public void createCollegeTest_WithNullUid_SettingUniversityNotNecessary() {
		College college = new College();
		college.setCid(1);
		college.setCname("Name 1");
		college.setCaddress("Address 1");

		when(collegeRepository.save(college)).thenReturn(college);

		College result = collegeService.createCollege(college, null);

		assertEquals("Address 1", result.getCaddress());
		System.err.println("createCollegeTest_WithValidUID_SettingUniversityNotNecessary working successfully..");
	}

	/*
	 * @Test public void
	 * createCollegeTest_WithInvalidUid_SettingUniversityNotNecessary() { Integer
	 * uid=1; College college=new College(); college.setCid(1);
	 * college.setCname("Name 1"); college.setCaddress("Address 1");
	 * 
	 * when(universityRepository.findById(uid)).thenReturn(Optional.empty()); // no
	 * university will be there when(collegeService.createCollege(college, uid));
	 * 
	 * College result = collegeService.createCollege(college, uid);
	 * 
	 * assertEquals("Name 1",result.getCname());
	 * assertEquals("Address 1",result.getCaddress());
	 * 
	 * System.err.println("createCollegeTest_WithInvalidUid_SettingUniversityNotNecessary working successfully.."
	 * );
	 * 
	 * 
	 * This method will always give you error and we adding college without putting
	 * it into any university
	 * 
	 * }
	 */

	@Test
	public void deleteCollegeTest() {
		int cid = 1;

		collegeService.deleteCollege(cid);
		System.err.println("deleteCollegeTest working successfully..");

	}
	
	
	@Test
	public void getAllcollegesByCriteriaTest()
	{
		RequestUniversityOBJ req = new RequestUniversityOBJ();
		req.setUid(1);
		req.setCid(1);
		req.setCaddress(" ");
		req.setUaddress(" ");
		
		College college1=new College();
		college1.setCname("Name 1");
		college1.setCaddress("Address 1");
		
		College college2=new College();
		college2.setCname("Name 2");
		college2.setCaddress("Address 2");
		
		List<College>expectedColleges=new ArrayList<>();
		expectedColleges.add(college1);
		expectedColleges.add(college2);
		
		when(collegeRepository.getAllCollegesByCriteria(anyInt(), anyInt(), anyString())).thenReturn(expectedColleges);
		System.err.println(expectedColleges);
		
		
		List<College>actualColleges= collegeService.getAllcollegesByCriteria(req);
		System.err.println(actualColleges);
		assertEquals(2, actualColleges.size());
		
		System.err.println("getAllcollegesByCriteriaTest working successfully..");
		
		
	}

}
