package com.task1.demo.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

import com.task1.demo.DTO.EmployeeDTO;
import com.task1.demo.entity.Employee;
import com.task1.demo.entity.RequestEmployee;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;

@Repository
public class EmployeeDTORepository {
	@Autowired
	private EntityManager entityManager;

	public List<String> getAllDepartments() {
		TypedQuery<String> q = entityManager.createQuery("SELECT DISTINCT e.department FROM Employee e", String.class);
		return q.getResultList();
	}

	public List<EmployeeDTO> getIdNameDepartmentSalary() {
		TypedQuery<EmployeeDTO> q = entityManager.createQuery(
				"SELECT new com.task1.demo.DTO.EmployeeDTO(e.id, e.name, e.department, e.salary )FROM Employee e",
				EmployeeDTO.class);
		return q.getResultList();
	}

	public List<EmployeeDTO> getNameAndSalary() {
		TypedQuery<EmployeeDTO> q = entityManager.createQuery(
				"SELECT new com.task1.demo.DTO.EmployeeDTO(e.name,e.salary) FROM Employee e", EmployeeDTO.class);
		return q.getResultList();
	}

	public List<EmployeeDTO> getEmployeeByDepartment(String department) {
		TypedQuery<EmployeeDTO> q = entityManager.createQuery(
				"SELECT new com.task1.demo.DTO.EmployeeDTO (e.id, e.name, e.department, e.salary) FROM Employee e WHERE e.department=:department",
				EmployeeDTO.class);
		q.setParameter("department", department);
		return q.getResultList();
	}

	public List<EmployeeDTO> getAllEmployeeId() {
		TypedQuery<EmployeeDTO> q = entityManager.createQuery(
				"Select new com.task1.demo.DTO.EmployeeDTO " + " (e.id) from Employee e", EmployeeDTO.class);
		return q.getResultList();

	}

	public List<EmployeeDTO> getAllEmployeeByNameIdDeptSalary(RequestEmployee req) {
		boolean flag = false;
		if (req.getDepartment() != null && req.getDepartment().isEmpty()) {
			flag = true;
		}
		TypedQuery<EmployeeDTO> q = entityManager.createQuery(
				"SELECT new com.task1.demo.DTO.EmployeeDTO (e.id, e.name, e.department)" + "FROM Employee e " + "WHERE"
						+ "(:name IS NULL OR e.name = :name)" + "AND" + "(:id IS NULL OR e.id = :id)" + "AND"
						+ "(:minSal IS NULL OR e.salary>= :minSal)" + "AND" + "(:maxSal IS NULL OR e.salary<= :maxSal)"
						+ "AND" + "(:flag IS FALSE OR e.department IN :department)",
				EmployeeDTO.class);
		q.setParameter("name", req.getName());
		q.setParameter("id", req.getId());
		q.setParameter("minSal", req.getMinSal());
		q.setParameter("maxSal", req.getMaxSal());
		System.out.println(req.getDepartment());
		q.setParameter("department", req.getDepartment());
		q.setParameter("flag", flag);
		System.err.println(q.getResultList());
		return q.getResultList();

	}

	public Page<EmployeeDTO> getAllEmployeeByNameIdDeptSalaryByPaginationbyTypedQuery(RequestEmployee req, int page,int size) {
		boolean flag = false;
		if (req.getDepartment() != null && req.getDepartment().isEmpty())
		{
			flag = true;
		}
		TypedQuery<EmployeeDTO> q = entityManager.createQuery("SELECT new com.task1.demo.DTO.EmployeeDTO "
				+ "(e.id, e.name, e.department, e.salary)" + "FROM Employee e " + "WHERE"
				+ "(:name IS NULL OR e.name=:name)" + "AND" + "(:id IS NULL or e.id =:id)" + "AND"
				+ "(:flag IS FALSE OR e.department IN :department)" + "AND" + "(:minSal IS Null OR e.salary >=:minSal)"
				+ "AND" + "(:maxSal IS NULL OR e.salary <=:maxSal)", EmployeeDTO.class);
		
		
		q.setParameter("name", req.getName());
		q.setParameter("id", req.getId());
		q.setParameter("minSal", req.getMinSal());
		q.setParameter("maxSal", req.getMaxSal());
		System.out.println(req.getDepartment());
		q.setParameter("department", req.getDepartment());
		q.setParameter("flag", flag);
//		System.err.println(q.getResultList());
//		System.out.println(q.getResultList().);
		q.setFirstResult(page*size);
		q.setMaxResults(size);
		return new PageImpl<>(q.getResultList());
		
		
		
		//return q.getResultList());

	}
	
	
	
	public List<EmployeeDTO> getTotolSalary(RequestEmployee req) {
		boolean flag = false;
		if (req.getDepartment() != null && req.getDepartment().isEmpty()) {
			flag = true;
		}
		TypedQuery<EmployeeDTO> q = entityManager.createQuery(
				"SELECT  new com.task1.demo.DTO.EmployeeDTO (e.id, e.name, e.department)" + "FROM Employee e " + "WHERE"
						+ "(:name IS NULL OR e.name = :name)" + "AND" + "(:id IS NULL OR e.id = :id)" + "AND"
						+ "(:minSal IS NULL OR e.salary>= :minSal)" + "AND" + "(:maxSal IS NULL OR e.salary<= :maxSal)"
						+ "AND" + "(:flag IS FALSE OR e.department IN :department)",
				EmployeeDTO.class);
		q.setParameter("name", req.getName());
		q.setParameter("id", req.getId());
		q.setParameter("minSal", req.getMinSal());
		q.setParameter("maxSal", req.getMaxSal());
		System.out.println(req.getDepartment());
		q.setParameter("department", req.getDepartment());
		q.setParameter("flag", flag);
		System.err.println(q.getResultList());
		return q.getResultList();

	}

}
