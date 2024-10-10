package com.example.demo.testcontrollers;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
//import static org.springframework.test.web.client.match.MockRestRequestMatchers.content;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.assertj.core.util.Arrays;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.example.demo.entity.RequestUniversityOBJ;
import com.example.demo.entity.University;
import com.example.demo.services.UniversityServiceImplementation;
import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootTest
@AutoConfigureMockMvc
class UniversityControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private UniversityServiceImplementation universityService;

	@Autowired
	private ObjectMapper objectMpapper;

	private University university1;
	private University university2;
	private List<String> universityAddresses;
	private University createUniversityObject;

	@BeforeEach
	void setUp() {
		university1 = new University();
		university1.setUid(1);
		university1.setUaddress("University A");
		university1.setUaddress("Address 1");

		university2 = new University();
		university2.setUid(2);
		university2.setUaddress("University B");
		university2.setUaddress("Address 2");

		universityAddresses = new ArrayList<>();
		universityAddresses.add("Address 1");
		universityAddresses.add("Address 2");
		universityAddresses.add("Address 3");

		createUniversityObject = new University();
		createUniversityObject.setUid(3);
		createUniversityObject.setUname("University C");
		createUniversityObject.setUaddress("Address 3");

	}

	@Test
	void getAllUniversitiesTest() throws Exception {
		List<University> universities = new ArrayList<>();
		universities.add(university1);
		universities.add(university2);

		when(universityService.getAlluniversities()).thenReturn(universities);
		mockMvc.perform(get("/getAllUniversities")).andExpect(status().isOk());

		System.err.println("getAllUniversitiesTest method is working successfull...");

	}

	@Test
	void getAllAddressesTest() throws Exception {

		List<University> universities = new ArrayList<>();
		universities.add(university1);
		universities.add(university2);

		// when(universityService.getAllUniversitiesAdresses()).thenReturn(universities.)

		when(universityService.getAllUniversitiesAdresses()).thenReturn(universityAddresses);

		// performing the GET Service layer

		mockMvc.perform(get("/getAllUniversitiesAdresses")).andExpect(status().isOk())
				.andExpect(jsonPath("$[0]").value("Address 1")).andExpect(status().isOk())
				.andExpect(jsonPath("$[1]").value("Address 2"))
				.andExpect(jsonPath("$.length()").value(universityAddresses.size()));
		System.out.println(universityAddresses.size());

		System.err.println("getAllAddressesTest method is working successfull...");

	}

	@Test
	public void createUniversityTest() throws Exception
	{
		when(universityService.createUniversity(createUniversityObject)).thenReturn(createUniversityObject);
		
		// above code converting object to the json
		String universityJson=objectMpapper.writeValueAsString(createUniversityObject);
		
		// performing post request
		
		mockMvc.perform(post("/createAndUpdateUniversity").
				contentType(MediaType.APPLICATION_JSON).
				content(universityJson)).
		andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON)).
		andExpect(jsonPath("$.uid").value(createUniversityObject.getUid())).
		andExpect(jsonPath("$.uname").value(createUniversityObject.getUname())).
		andExpect(jsonPath("$.uaddress").value(createUniversityObject.getUaddress()));
		
		 System.err.println("createUniversityTest method is working successfully...");
		
			
		}

	@Test
	public void deleteUniversityTest() throws Exception {
		int uidToBeDeleted = 1;

		// performing delete

		mockMvc.perform(delete("/deleteUniversity/{uid}", uidToBeDeleted)).andExpect(status().isOk());
		System.err.println("deleteUniversityTest method is working successfully...");

	}

	@Test
	public void getAllUniversitiesByCriteriaTest() throws Exception {
		RequestUniversityOBJ req = new RequestUniversityOBJ();

		req.setUid(1);
		req.setUaddress("Address 1");

		List<University> expectedUniversity = new ArrayList<>();
		expectedUniversity.add(university1);
		expectedUniversity.add(university2);

		when(universityService.getAllUniversitiesByCriteria(req)).thenReturn(expectedUniversity);

		String requestJSON = objectMpapper.writeValueAsString(req);

		// performing getUniversitiesByCriteria

		mockMvc.perform(
				post("/getAllUniversitiesByCriteria").contentType(MediaType.APPLICATION_JSON).content(requestJSON))
				.andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON))
				.andExpect(jsonPath("$.length()").value(expectedUniversity.size()))
				.andExpect(jsonPath("$[0].uid").value(university1.getUid()))
				.andExpect(jsonPath("$[0].uaddress").value(university1.getUaddress()))
				.andExpect(jsonPath("$[1].uid").value(university2.getUid()))
				.andExpect(jsonPath("$[1].uaddress").value(university2.getUaddress()));

		System.err.println("Total Universities present " + expectedUniversity.size());

		System.err.println("getAllUniversitiesByCriteriaTest method is working successfully...");

	}

	@Test
	public void getAllUniversitiesByCriteriaWithPaginationTest() throws Exception {
		RequestUniversityOBJ req = new RequestUniversityOBJ();
		req.setUid(1);
		req.setUaddress("Address 1");

		// create a list of universities to be included in the page object

		List<University> universities = new ArrayList<>();
		universities.add(university1);
		universities.add(university2);

		// create a Page object with the list of universities

		int page = 0;
		int pageSize = 2;

		Page<University> universityPage = new PageImpl<>(universities, PageRequest.of(page, pageSize),
				universities.size());

		// Mock the Service call to the return the mock page object

		when(universityService.getAllUniversitiesByCriteriaWithPagination(req, page, pageSize))
				.thenReturn(universityPage);

		// converting request object to JSON

		String requJSON = objectMpapper.writeValueAsString(req);

		// performing the POST request

		mockMvc.perform(post("/getAllUniversitiesByCriteriaWithPagination/{page}/{pageSize}", page, pageSize)
				.contentType(MediaType.APPLICATION_JSON).content(requJSON)).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON))
				.andExpect(jsonPath("$.content.length()").value(universities.size()))
				.andExpect(jsonPath("$.content[0].uid").value(university1.getUid()))
				.andExpect(jsonPath("$.content[0].uaddress").value(university1.getUaddress()))
				.andExpect(jsonPath("$.content[1].uid").value(university2.getUid()))
				.andExpect(jsonPath("$.content[1].uaddress").value(university2.getUaddress()))
				.andExpect(jsonPath("$.totalElements").value(universities.size()))
				.andExpect(jsonPath("$.size").value(pageSize)).andExpect(jsonPath("$.number").value(page));

		System.err.println("getAllUniversitiesByCriteriaWithPaginationTest method is working successfully...");
	

}

}
