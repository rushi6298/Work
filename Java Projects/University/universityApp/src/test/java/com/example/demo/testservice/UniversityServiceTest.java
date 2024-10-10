package com.example.demo.testservice;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.timeout;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.assertj.core.util.Arrays;
//import org.hibernate.query.Page;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;

import com.example.demo.entity.RequestUniversityOBJ;
import com.example.demo.entity.University;
import com.example.demo.repository.UniversityRepository;
import com.example.demo.services.UniversityServiceImplementation;

@SpringBootTest
class UniversityServiceTest {
	@Mock
	private UniversityRepository universityRepository;

	@InjectMocks
	private UniversityServiceImplementation universityService;

	@Test
	void getAllUniversitiesTest() {
		University university1 = new University();
		university1.setUid(1);
		university1.setUaddress("University 1");

		University university2 = new University();
		university2.setUid(2);
		university2.setUaddress("University 2");

		University university3 = new University();
		university3.setUid(3);
		university3.setUaddress("University 3");

		List<University> list = new ArrayList<>();
		list.add(university1);
		list.add(university2);
		list.add(university3);
		when(universityRepository.findAll()).thenReturn(list);

		// acting

		List<University> universities = universityService.getAlluniversities();

		// asserting

		System.out.println(universities);
		Assertions.assertEquals(3, universities.size());

	}

	@Test
	public void createUniversityTest() {
		University university = new University();
		university.setUid(1);
		university.setUname("University A");

		when(universityRepository.save(university)).thenReturn(university);

		University savedUniversity = universityService.createUniversity(university);

		Assertions.assertNotNull(savedUniversity);
		Assertions.assertEquals(1, savedUniversity.getUid());
		Assertions.assertEquals(null, savedUniversity.getUaddress());
		System.out.println("code run successful");

	}

	@Test
	public void deleteUniversityTest() {

		int uid = 1;

		universityService.deleteUniversity(uid);

	}

	@Test
	public void getAllUniversitiesByCriteriaTest() {
		RequestUniversityOBJ req = new RequestUniversityOBJ();
		req.setUid(1);
		req.setUaddress(" ");

		University university1 = new University();
		university1.setUid(1);
		university1.setUname("University A");
		university1.setUaddress("Address 1");

		University university2 = new University();
		university2.setUid(2);
		university2.setUname("University B");
		university2.setUaddress("Address 2");

		List<University> list = new ArrayList<University>();
		list.add(university1);
		list.add(university2);
		
		System.out.println(list);
		
		when(universityRepository.getAllUniversitiesByCriteria(anyInt(), anyString(), any(LocalDateTime.class),any(LocalDateTime.class))).thenReturn(list);
		List<University> actualUniversities = universityService.getAllUniversitiesByCriteria(req);

		System.out.println(actualUniversities);
		assertEquals(list, actualUniversities);
		System.out.println("getAllUniversitiesByCriteriaTest....");

	}

	@Test
	public void getAllAddressesTest() {
		University university1 = new University();
		university1.setUaddress("Address 1");

		University university2 = new University();
		university2.setUaddress("Address 2");

		List<String> universityAddresses = new ArrayList<>();
		universityAddresses.add(university1.getUaddress());
		universityAddresses.add(university2.getUaddress());

		when(universityRepository.getAllUniversitiesAdresses()).thenReturn(universityAddresses);

		List<String> actualUniversityAddresses = universityService.getAllUniversitiesAdresses();

		Assertions.assertEquals(2, universityAddresses.size());
		Assertions.assertEquals("Address 1", actualUniversityAddresses.get(0));
		Assertions.assertEquals("Address 2", actualUniversityAddresses.get(1));

		System.out.println("getAllAddressesTest test running successful	");

	}

	@Test
	public void getAllUniversitiesByCriteriaWithPaginationTest() {
		RequestUniversityOBJ req = new RequestUniversityOBJ();
		req.setUid(0); // sending null
		req.setUaddress(""); // sending null uaddress

		University university1 = new University();
		university1.setUid(1);
		university1.setUaddress("Address A");
		University university2 = new University();
		university2.setUid(2);
		university2.setUaddress("Address B");

		List<University> expectedUniversities = new ArrayList<>();
		expectedUniversities.add(university1);
		expectedUniversities.add(university2);

		Page<University> universityPage = new PageImpl<>(expectedUniversities);

		// Creating Page Request
		int page = 0;
		int pageSize = 10;
		PageRequest pageRequest = PageRequest.of(page, pageSize);

		when(universityRepository.getAllUniversitiesByCriteriaWithPagination(null, null,null,null, pageRequest))
				.thenReturn(universityPage);

		// calling method in service

		Page<University> actualPage = universityService.getAllUniversitiesByCriteriaWithPagination(req, page, pageSize);

		assertEquals(2, actualPage.getTotalElements());
		System.err.println("getAllUniversitiesByCriteriaWithPagination method runnig successfully.....");

	}
	
	

}
