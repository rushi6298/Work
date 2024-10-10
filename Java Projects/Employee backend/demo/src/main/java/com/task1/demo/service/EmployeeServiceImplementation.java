package com.task1.demo.service;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.task1.demo.DTO.EmployeeDTO;
import com.task1.demo.entity.Employee;
import com.task1.demo.entity.RequestEmployee;
import com.task1.demo.repository.EmployeeDTORepository;
import com.task1.demo.repository.EmployeeRepository;
import com.task1.demo.repository.PagingRepo;

@Service

public class EmployeeServiceImplementation implements EmployeeServiceInterface {

	@Autowired
	private EmployeeDTORepository crepo;

	@Autowired
	private EmployeeRepository repo;	
	
	@Autowired
	private PagingRepo prepo;

	@Override
	public List<Employee> getAll() {
		List<Employee> list = repo.findAll();

		return list;
	}

	@Override
	public List<String> getAllName() {

		return repo.getAllName();
	}

	@Override
	public Employee getById(Integer id) {
		Optional<Employee> emp = repo.findById(id);
		if (emp.isPresent()) {
			return emp.get();
		} else
			return null;

	}

	@Override
	public List<Employee> getByname(String name) {
		return repo.getByname(name);

	}

	@Override
	public List<Employee> getByDept(String department) {

		return repo.getByDept(department);
	}

	@Override
	public List<Employee> getBynameAndDept(String name, String department) {
		return repo.getBynameAndDpet(name, department);
	}

	@Override
	public Employee saveEmployee(Employee employee) {
		return repo.save(employee);

	}

	@Override
	public List<String> getDepartment() {

		return repo.getDepartment();

	}

	// for another component
	@Override
	public List<Employee> getEmp(String name, List<String> dept) {
		return repo.getEmp(name, dept);

	}

	@Override
	public List<Employee> getAllEmpByDept(List<String> department) {

		return repo.getAllEmpByDept(department);
	}

	@Override
	public void deleteEmployee(int id) {
		repo.deleteById(id);

	}

	// date/{id}")
	public Employee updateEmployee(int id, Employee e) {
		return repo.save(e);
	}

	@Override
	public List<Employee> getEmployeeBySalary(Long minSal, Long maxSal) {

		return repo.getEmployeeBySalary(minSal, maxSal);
	}

	@Override
	public List<Employee> getEmployeeByNameDepartmentSalaryRange(Integer id, String name, List<String> dept,
			Long minSal, Long maxSal) {
		if (dept != null && dept.size() == 0) {
			dept = null;
		}

		return repo.getEmployeeByNameDepartmentSalaryRange(id, name, dept, minSal, maxSal);
	}

	@Override
	public List<String> getAddress() {

		return repo.getAddress();
	}

	@Override
	public List<String> getDepartmentByCRepo() {
		return crepo.getAllDepartments();

	}

	@Override
	public List<EmployeeDTO> getIdNameDepartmentSalary() {

		return crepo.getIdNameDepartmentSalary();
	}

	@Override
	public List<EmployeeDTO> getNameAndSalary() {

		return crepo.getNameAndSalary();
	}

	@Override
	public List<EmployeeDTO> getEmployeeByDepartment(String department) {

		return crepo.getEmployeeByDepartment(department);
	}
	
	public List<EmployeeDTO> getAllEmployeeId()
	{
		return crepo.getAllEmployeeId();
	}
	@Override
	public List<EmployeeDTO> getAllEmployeeByNameIdDeptSalary(RequestEmployee req) {
		// TODO Auto-generated method stub
		return crepo.getAllEmployeeByNameIdDeptSalary(req);
	}

//	public List<EmployeeDTO> getAllEmployeeByNameIdDeptSalary(Integer id, String name, List<String> department,
//			Long minSal, Long maxSal) {
//		// TODO Auto-generated method stub
//		return null;
//	}
	
	@Override
	 public Page<Employee> getAllEmployeeByPagination(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return prepo.findAll(pageable);
    }
	
	
	
	
	public Page<Employee> getEmployeeByNameDepartmentSalaryRangePagination(RequestEmployee remp,int page,int size)
	{
		if (remp.getDepartment() != null && remp.getDepartment().size() == 0) {
			remp.setDepartment(null);
		}
		System.out.println(remp);
		return repo.getEmployeeByNameDepartmentSalaryRangePagination(remp.getId(), remp.getName(),remp.getDepartment(),remp.getMinSal(),remp.getMaxSal(), PageRequest.of(page, size));
	}
	
	
	@Override
	public Page<EmployeeDTO> getAllEmployeeByNameIdDeptSalaryByPaginationByTypedQuery(RequestEmployee req, int page,
			int size) {
		// TODO Auto-generated method stub
		return crepo.getAllEmployeeByNameIdDeptSalaryByPaginationbyTypedQuery(req, page, size);
	}
	@Override
	public Integer lastEmployeeIdToBePresent() {
		// TODO Auto-generated method stub
		return repo.lastEmployeeIdToBePresent();
	}
	
	
	public List<Employee> getAllByPracticePageble(Integer pageNumbe, Integer pageSize)
	{
//		int pageSize=5;
//		int pageNumbe=1; 
		Pageable p=PageRequest.of(pageNumbe, pageSize);
		 
		Page <Employee> allPage= repo.findAll(p);
		List<Employee> allData = allPage.getContent();
		return allData;
		
	}
	
	@Override
	public Double getEmployeeTotalSalary(RequestEmployee req) {
		if(req.getDepartment()!=null && req.getDepartment().isEmpty())
		{
			req.setDepartment(null);
		}
		return repo.getTotalEmployeeSalary(req.getId(), req.getName(),req.getDepartment(),req.getMinSal(),req.getMaxSal());
		
	}
	
	
	
	
}
