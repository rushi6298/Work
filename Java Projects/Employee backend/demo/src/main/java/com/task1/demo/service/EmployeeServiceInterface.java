package com.task1.demo.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.task1.demo.DTO.EmployeeDTO;
import com.task1.demo.entity.Employee;
import com.task1.demo.entity.RequestEmployee;

public interface EmployeeServiceInterface {
	public List<Employee> getAll();

	public Employee getById(Integer id);

	public List<Employee> getByname(String name);

	public List<Employee> getByDept(String department);

	public List<Employee> getBynameAndDept(String name, String department);

	public List<String> getAllName();

	public List<Employee> getEmp(String name, List<String> dept);

	public List<Employee> getAllEmpByDept(List<String> department);

	public List<String> getDepartment();

	public Employee saveEmployee(Employee employee);

	public void deleteEmployee(int id);

	public List<Employee> getEmployeeBySalary(Long minSal, Long maxSal);

	public List<String> getAddress();

	public List<Employee> getEmployeeByNameDepartmentSalaryRange(Integer id, String name, List<String> dept,
			Long minSal, Long maxSal);

	public List<String> getDepartmentByCRepo();

	public List<EmployeeDTO> getIdNameDepartmentSalary();

	public List<EmployeeDTO> getNameAndSalary();

	public List<EmployeeDTO> getEmployeeByDepartment(String department);

	public List<EmployeeDTO> getAllEmployeeByNameIdDeptSalary(RequestEmployee req);
	
	public Page<Employee>getAllEmployeeByPagination(int page,int size);
	
	public Integer lastEmployeeIdToBePresent();
	
	public Double getEmployeeTotalSalary(RequestEmployee req);
	
	
	Page<EmployeeDTO> getAllEmployeeByNameIdDeptSalaryByPaginationByTypedQuery(RequestEmployee req,int page,int size);

}
