package com.task1.demo.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.task1.demo.entity.Employee;

@Repository

public interface EmployeeRepository extends JpaRepository<Employee, Integer>, PagingAndSortingRepository<Employee, Integer>{

	@Query("select e from Employee e where e.name=:name")
	public List<Employee> getByname(String name);

	@Query("select e from Employee e where e.department=:department")
	public List<Employee> getByDept(String department);

	@Query("SELECT DISTINCT e.department FROM Employee e")
	public List<String> getDepartment();
	
	@Query("SELECT DISTINCT  e.address FROM Employee e")
	public List<String> getAddress();

	@Query("SELECT e FROM Employee e WHERE (:name IS NULL OR e.name=:name) AND (:department IS NULL OR e.department=:department)")
	public List<Employee> getBynameAndDpet(String name, String department);

	@Query("SELECT DISTINCT e.name FROM Employee e")
	public List<String> getAllName();

	@Query("SELECT e FROM Employee e WHERE e.name=:name AND (e.department IN :dept)")
	public List<Employee> getEmp(String name, List<String> dept);

	@Query("SELECT e FROM Employee e WHERE e.department IN:department")
	public List<Employee> getAllEmpByDept(List<String> department);

	@Query("SELECT e FROM Employee e WHERE e.salary BETWEEN :minSal AND :maxSal")
	public List<Employee> getEmployeeBySalary(Long minSal, Long maxSal);
	
	
	
	
	
	 
	
	
	
	

	/*
	 * @Query("SELECT e FROM Employee e WHERE " +
	 * "(:name IS NULL OR e.name = :name) AND " +
	 * "(:address IS NULL OR e.address  = :address ) AND" +
	 * "(:id IS NULL OR e.id = :id) AND " +
	 * "(:dept IS NULL  OR e.department IN :dept) AND " +
	 * "(:minSal IS NULL OR :maxSal IS NULL OR e.salary >= :minSal AND e.salary<= :maxSal)"
	 * ) public List<Employee> getEmployeeByNameDepartmentSalaryRange(
	 * 
	 * @Param("id") Integer id,
	 * 
	 * @Param("name") String name,
	 * 
	 * @Param("address") String adress,
	 * 
	 * @Param("dept") List<String> dept,
	 * 
	 * @Param("minSal") Long minSal,
	 * 
	 * @Param("maxSal") Long maxSal);
	 */
	@Query("SELECT e FROM Employee e " +
	           "WHERE (:selectedname IS NULL OR e.name = :selectedname) " +
	           "AND (:empId IS NULL OR e.id = :empId) "+
	           "AND (:min IS NULL OR e.salary >= :min) " +
	           "AND (:max IS NULL OR e.salary <= :max) " +
	           "AND (:selecteddepts IS NULL OR e.department IN :selecteddepts)")
	 List<Employee> getEmployeeByNameDepartmentSalaryRange(
			 	@Param("empId") Integer empId,
	            @Param("selectedname") String selectedname,
	            @Param("selecteddepts") List<String> selecteddepts,
	            @Param("min") Long min,
	            @Param("max") Long max);
	
	
	//by pagination 
	@Query("SELECT e FROM Employee e " +
	           "WHERE (:selectedname IS NULL OR e.name = :selectedname) " +
	           "AND (:empId IS NULL OR e.id = :empId) "+
	           "AND (:min IS NULL OR e.salary >= :min) " +
	           "AND (:max IS NULL OR e.salary <= :max) " +
	           "AND (:selecteddepts IS NULL OR e.department IN :selecteddepts)")
	 Page<Employee> getEmployeeByNameDepartmentSalaryRangePagination(
			 	@Param("empId") Integer empId,
	            @Param("selectedname") String selectedname,
	            @Param("selecteddepts") List<String> selecteddepts,
	            @Param("min") Long min,
	            @Param("max") Long max,
	            Pageable pageble);
	
	
	@Query("SELECT e.id FROM Employee e WHERE e.name IS NULL")
	public Integer lastEmployeeIdToBePresent();
	
	
	@Query("SELECT SUM(e.salary) FROM Employee e " +
	           "WHERE (:selectedname IS NULL OR e.name = :selectedname) " +
	           "AND (:empId IS NULL OR e.id = :empId) "+
	           "AND (:min IS NULL OR e.salary >= :min) " +
	           "AND (:max IS NULL OR e.salary <= :max) " +
	           "AND (:selecteddepts IS NULL OR e.department IN :selecteddepts)")
	 public Double getTotalEmployeeSalary(
			 	@Param("empId") Integer empId,
	            @Param("selectedname") String selectedname,
	            @Param("selecteddepts") List<String> selecteddepts,
	            @Param("min") Long min,
	            @Param("max") Long max);
	
	
	
	
	
	


}
