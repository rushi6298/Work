package com.task1.demo.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.task1.demo.DTO.EmployeeDTO;
import com.task1.demo.entity.Employee;
import com.task1.demo.entity.RequestEmployee;
import com.task1.demo.service.EmployeeServiceImplementation;

@RestController
@CrossOrigin("http://localhost:4200/")
public class EmployeeController {
	@Autowired
	private EmployeeServiceImplementation ser;

	@GetMapping("/getall")
	public List<Employee> getAll() {
		List<Employee> list = ser.getAll();
		return list;
	}

	@GetMapping("/getonebyid/{id}")
	public Employee getOne(@PathVariable Integer id) {
		return ser.getById(id);
	}

	@GetMapping("/getone/{name}")
	public List<Employee> getOne(@PathVariable String name) {
		return ser.getByname(name);
	}

	@GetMapping("/getbydpet/{department}")
	public List<Employee> getByDept(@PathVariable String department) {
		return ser.getByDept(department);
	}

	@GetMapping("/getbynameanddept/{name}/{department}")
	public List<Employee> getBynameAndDpet(@PathVariable String name, @PathVariable String department) {
		if ("null".equals(name)) {
			name = null;
		}
		if ("null".equals(department)) {
			department = null;
		}
		return ser.getBynameAndDept(name, department);
	}

	@PostMapping("/create")
	public Employee createEmp(@RequestBody Employee employee) {

		return ser.saveEmployee(employee);
	}

	@GetMapping("/getallname")
	public List<String> getAllName() {
		return ser.getAllName();
	}

	@GetMapping("/department")
	public List<String> getByDept() {
		return ser.getDepartment();
	}

	@GetMapping("/gettingemp/{name}/{dept}")
	public List<Employee> getEmp(@PathVariable String name, @PathVariable String dept) {

		List<String> adi = Arrays.asList(dept.split(","));
		System.out.println("In getEmp controller" + adi.toString());
		return ser.getEmp(name, adi);

	}

	@GetMapping("/gettingempbydept/{department}")
	public List<Employee> getAllEmpByDept(@PathVariable String department) {

		List<String> adi = Arrays.asList(department.split(","));

		System.out.println("In getEmp controller" + adi.toString());
		/* return ser.getEmp(name, adi); */
		System.err.println("method succesfully passed");
		return ser.getAllEmpByDept(adi);

	}

	@DeleteMapping("/delete/{id}")
	public void deleteEmp(@PathVariable Integer id) {
		ser.deleteEmployee(id);

	}

	@PutMapping("/update/{id}")
	public Employee updateEmployee(@PathVariable int id, @RequestBody Employee e) {
		Employee emp = ser.getById(id);
		if (emp != null) {
			emp.setAddress(e.getAddress());
			emp.setDepartment(e.getDepartment());
			emp.setName(e.getName());
			emp.setSalary(e.getSalary());

			return ser.saveEmployee(emp);
		}
		return null;
		/* return ser.updateEmployee(id, e); */

	}

	@GetMapping("/getsalary/{minSalary}/{maxSalary}")
	public List<Employee> getEmployeeBySalary(@PathVariable Long minSalary, @PathVariable Long maxSalary) {
		return ser.getEmployeeBySalary(minSalary, maxSalary);

	}


	@GetMapping("/getalladdress")
	public List<String> getAddress() {
		return ser.getAddress();
	}

	@GetMapping("/departmentbycustomequery")
	public List<String> getDepartmentByCRepo() {
		return ser.getDepartmentByCRepo();
	}

	@GetMapping("/idnamedepartmentsalarycustomequery")
	public List<EmployeeDTO> getIdNameDepartmentSalary() {
		return ser.getIdNameDepartmentSalary();
	}

	@GetMapping("/nameandsalarycustomequery")
	public List<EmployeeDTO> getNameAndSalary() {
		return ser.getNameAndSalary();
	}

	@GetMapping("/allemployeebydepartmentcustomequery/{department}")
	public List<EmployeeDTO> getEmployeeByDepartment(@PathVariable String department) {
		return ser.getEmployeeByDepartment(department);
	}
	
	
	@GetMapping("/allIdByCustomQuery")
	public List<EmployeeDTO> getAllEmployeeId()
	{
		return ser.getAllEmployeeId();
	}

	@PostMapping("/gettingbynamedeptsal")
	public List<Employee> getEmployeeByNameDepartmentSalaryRange(@RequestBody RequestEmployee reqemp) {
		// reqemp.se
		System.out.println(reqemp);
		return ser.getEmployeeByNameDepartmentSalaryRange(reqemp.getId(), reqemp.getName(), reqemp.getDepartment(),
				reqemp.getMinSal(), reqemp.getMaxSal());
	}
	
	@PostMapping("/getAllEmployeeByNameIdDeptSalaryCustomQuery")
	public List<EmployeeDTO> getAllEmployeeByNameIdDeptSalary(@RequestBody RequestEmployee req)
	{
		System.out.println(req);
		return ser.getAllEmployeeByNameIdDeptSalary(req);
		
	}
	
	
	@GetMapping("/GetAllEmpByPaging")
	public Page<Employee>getAllEmployeeByPagination(@RequestParam(defaultValue = "0") int page,@RequestParam(defaultValue = "2") int size)
	{
		return ser.getAllEmployeeByPagination(page, size);
		
	}

	
	@PostMapping("/GetAllEmployeesByPaging/{page}/{size}")
	public Page<Employee> getEmployeeByNameDepartmentSalaryRangePagination(@RequestBody RequestEmployee remp,@PathVariable int page,@PathVariable int size)
	{
		return ser.getEmployeeByNameDepartmentSalaryRangePagination(remp, page, size);
		
	}
	
	
	@PostMapping("GetAllEmployeePaginationTypedquery/{page}/{size}")
	Page<EmployeeDTO> getAllEmployeeByNameIdDeptSalaryByPaginationByTypedQuery(@RequestBody RequestEmployee req,@PathVariable int page, @PathVariable int size)
	{
		System.out.println(req);
		System.out.println(page);
		System.out.println(size);
		return ser.getAllEmployeeByNameIdDeptSalaryByPaginationByTypedQuery(req, page, size);
	}

	@GetMapping("/IdwithNullValues")
	public Integer lastEmployeeIdToBePresent()
	{
		return ser.lastEmployeeIdToBePresent();
	}
	
	
	@PostMapping("/practice")
	public List<Employee> getAllByPracticePageble(
			@RequestParam (value = "pageNumber",defaultValue = "1",required = false) Integer pageNumber,
			@RequestParam (value = "pageSize",defaultValue = "10",required = false) Integer pageSize
			)
	{
		 List<Employee>  emp=ser.getAllByPracticePageble(pageNumber, pageSize);
		 return emp;
		
	}
	
	
	@PostMapping("/totalSalary")
	public Double getTotolSalary(@RequestBody RequestEmployee req) 
	{

		return ser.getEmployeeTotalSalary(req);
	}
}

