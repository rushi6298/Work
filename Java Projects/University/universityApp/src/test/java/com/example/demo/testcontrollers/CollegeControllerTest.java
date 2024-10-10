package com.example.demo.testcontrollers;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.example.demo.controller.CollegeController;
import com.example.demo.entity.College;
import com.example.demo.entity.RequestUniversityOBJ;
import com.example.demo.services.CollegeService;
import com.example.demo.services.CollegeServiceImplementation;
import com.fasterxml.jackson.databind.ObjectMapper;

//@SpringBootTest
//@AutoConfigureMockMvc
@WebMvcTest(CollegeController.class)

class CollegeControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private CollegeServiceImplementation collegeService;

	@Autowired
	private ObjectMapper objectMapper;

	// @Autowired
	private College college1;
	private College college2;
	private List<String> collegeAddresses;
	private College createCollegeObject;

	@BeforeEach
	public void setUp() {
		college1 = new College();
		college1.setCid(1);
		college1.setCname("College A");
		college1.setCaddress("Address 1");

		college2 = new College();
		college2.setCid(2);
		college2.setCname("College B");
		college2.setCaddress("Address 2");
		
		 createCollegeObject = new College();
	        createCollegeObject.setCid(3);
	        createCollegeObject.setCname("College C");
	        createCollegeObject.setCaddress("Address 3");

	}

	@Test
	public void getAllCollegesTest() throws Exception {
		List<College> colleges = new ArrayList<>();
		colleges.add(college1);
		colleges.add(college2);

		when(collegeService.getAllCollege()).thenReturn(colleges);
		mockMvc.perform(get("/getAllColleges")).andExpect(status().isOk())
				.andExpect(jsonPath("$.length()").value(colleges.size()))
				.andExpect(jsonPath("$[0].cid").value(college1.getCid()))
				.andExpect(jsonPath("$[0].cname").value(college1.getCname()))
				.andExpect(jsonPath("$[0].caddress").value(college1.getCaddress()))
				.andExpect(jsonPath("$[1].cid").value(college2.getCid()))
				.andExpect(jsonPath("$[1].cname").value(college2.getCname()))
				.andExpect(jsonPath("$[1].caddress").value(college2.getCaddress()));

		System.err.println("getAllCollegesTest method is working successfully...");

	}
	
	 @Test
	    void createCollegeTest() throws Exception {
	        when(collegeService.createCollege(createCollegeObject, createCollegeObject.getCid()))
	                .thenReturn(createCollegeObject);

	        String collegeJson = objectMapper.writeValueAsString(createCollegeObject);

	        mockMvc.perform(post("/createCollegeWithUid/{uid}", createCollegeObject.getCid())
	                .contentType(MediaType.APPLICATION_JSON)
	                .content(collegeJson))
	                .andExpect(status().isOk())
	                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
	                .andExpect(jsonPath("$.cid").value(createCollegeObject.getCid()))
	                .andExpect(jsonPath("$.cname").value(createCollegeObject.getCname()))
	                .andExpect(jsonPath("$.caddress").value(createCollegeObject.getCaddress()));

	        System.err.println("createCollegeTest method is working successfully...");
	    }
	 
	 @Test
	    void deleteCollegeTest() throws Exception {
	        int cidToBeDeleted = 1;

	        mockMvc.perform(delete("/deleteCollege/{cid}", cidToBeDeleted))
	                .andExpect(status().isOk());

	        System.err.println("deleteCollegeTest method is working successfully...");
	    }
	 
	 @Test
	    void getAllCollegesByCriteriaTest() throws Exception {
	        RequestUniversityOBJ req = new RequestUniversityOBJ();
	        req.setUid(1);
	        req.setUaddress("Address 1");

	        List<College> expectedColleges = new ArrayList<>();
	        expectedColleges.add(college1);
	        expectedColleges.add(college2);

	        when(collegeService.getAllcollegesByCriteria(req)).thenReturn(expectedColleges);

	        String requestJSON = objectMapper.writeValueAsString(req);

	        mockMvc.perform(post("/getAllCollegesByCriteria")
	                .contentType(MediaType.APPLICATION_JSON)
	                .content(requestJSON))
	                .andExpect(status().isOk())
	                .andExpect(jsonPath("$.length()").value(expectedColleges.size()))
	                .andExpect(jsonPath("$[0].cid").value(college1.getCid()))
	                .andExpect(jsonPath("$[0].cname").value(college1.getCname()))
	                .andExpect(jsonPath("$[0].caddress").value(college1.getCaddress()))
	                .andExpect(jsonPath("$[1].cid").value(college2.getCid()))
	                .andExpect(jsonPath("$[1].cname").value(college2.getCname()))
	                .andExpect(jsonPath("$[1].caddress").value(college2.getCaddress()));

	        System.err.println("getAllCollegesByCriteriaTest method is working successfully...");
	    }
	 
	 @Test
	    void getAllCollegesByCriteriaWithPaginationTest() throws Exception {
	        RequestUniversityOBJ req = new RequestUniversityOBJ();
	        req.setUid(1);
	        req.setUaddress("Address 1");

	        List<College> colleges = new ArrayList<>();
	        colleges.add(college1);
	        colleges.add(college2);

	        int page = 0;
	        int pageSize = 2;

	        Page<College> collegePage = new PageImpl<>(colleges, PageRequest.of(page, pageSize), colleges.size());

	        when(collegeService.getAllcollegesByCriteriaWithPagination(req, page, pageSize)).thenReturn(collegePage);

	        String requestJSON = objectMapper.writeValueAsString(req);

	        mockMvc.perform(post("/getAllCollegesByCriteriaWithPagination/{page}/{pageSize}", page, pageSize)
	                .contentType(MediaType.APPLICATION_JSON)
	                .content(requestJSON))
	                .andExpect(status().isOk())
	                .andExpect(jsonPath("$.content.length()").value(colleges.size()))
	                .andExpect(jsonPath("$.content[0].cid").value(college1.getCid()))
	                .andExpect(jsonPath("$.content[0].cname").value(college1.getCname()))
	                .andExpect(jsonPath("$.content[0].caddress").value(college1.getCaddress()))
	                .andExpect(jsonPath("$.content[1].cid").value(college2.getCid()))
	                .andExpect(jsonPath("$.content[1].cname").value(college2.getCname()))
	                .andExpect(jsonPath("$.content[1].caddress").value(college2.getCaddress()))
	                .andExpect(jsonPath("$.totalElements").value(colleges.size()))
	                .andExpect(jsonPath("$.size").value(pageSize))
	                .andExpect(jsonPath("$.number").value(page));

	        System.err.println("getAllCollegesByCriteriaWithPaginationTest method is working successfully...");
	    }

}
