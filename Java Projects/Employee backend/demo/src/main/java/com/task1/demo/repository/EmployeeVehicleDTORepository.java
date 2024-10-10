package com.task1.demo.repository;

import java.math.BigDecimal;
import java.sql.Date;
import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import com.task1.demo.DTO.EmployeeVehicleDTO;
import com.task1.demo.entity.RequestEmployee;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;

@Repository
public class EmployeeVehicleDTORepository
{
	@Autowired
	private EntityManager entityManager;
	
	public Page<EmployeeVehicleDTO>getAllEmployeeVehicleWithPaginationEx(RequestEmployee req,int page,int size)
	{
		boolean flag=false;
		if(req.getDepartment()!=null && !req.getDepartment().isEmpty())
		{
			flag = true;
		}
		TypedQuery<EmployeeVehicleDTO> q=entityManager.createQuery("SELECT new com.task1.demo.DTO.EmployeeVehicleDTO"
				+ "(e.id, e.name, e.department,e.address, e.salary, v.vehicleId, v.vehicleNumber, v.vehicleSpot, d.joiningID, d.joiningDate) "
				+ "FROM Employee e "
				+ "LEFT JOIN e.employeeVehicle v "
				+ "LEFT JOIN e.employeeDateDetails d "
				+ "WHERE "
				+ "(:id IS NULL OR e.id =:id)"
				+ "AND"
				+ "(:name IS NULL OR e.name =:name)"
				+ "AND"
				+ "(:flag is FALSE OR e.department IN :department)"
				+ "AND"
				+ "(:minSal IS NULL OR e.salary>=:minSal)"
				+ "AND"
				+ "(:maxSal IS NULL OR e.salary<=:maxSal)",EmployeeVehicleDTO.class);
		q.setParameter("name", req.getName());
		q.setParameter("id", req.getId());
		q.setParameter("minSal", req.getMinSal());
		q.setParameter("maxSal", req.getMaxSal());
		System.out.println(req.getDepartment());
		q.setParameter("department", req.getDepartment());
		q.setParameter("flag", flag);
//		System.err.println(q.getResultList());
//		System.out.println(q.getResultList().);
		int count=q.getResultList().size();
		q.setFirstResult(page*size);
		q.setMaxResults(size);
		Pageable pageble=PageRequest.of(page, size);
		System.out.println(q.getResultList());
		return new PageImpl<>(q.getResultList(), pageble,count);
		
		
		
		//return q.getResultList());
		
	}
	
	
	
	public List<EmployeeVehicleDTO>getAllEmployeeVehicle(RequestEmployee req)
	{
		boolean flag=false;
		if(req.getDepartment()!=null && !req.getDepartment().isEmpty())
		{
			flag = true;
		}
		TypedQuery<EmployeeVehicleDTO> q=entityManager.createQuery("SELECT new com.task1.demo.DTO.EmployeeVehicleDTO"
				+ "(e.id, e.name, e.department,e.address, e.salary, v.vehicleId, v.vehicleNumber, v.vehicleSpot, d.joiningID, d.joiningDate) "
				+ "FROM Employee e"
				+ " LEFT JOIN e.employeeVehicle v "
				+ " LEFT JOIN e.employeeDateDetails d "
				+ "WHERE "
				+ "(:id IS NULL OR e.id =:id)"
				+ "AND"
				+ "(:name IS NULL OR e.name =:name)"
				+ "AND"
				+ "(:flag is FALSE OR e.department IN :department)"
				+ "AND"
				+ "(:minSal IS NULL OR e.salary>=:minSal)"
				+ "AND"
				+ "(:maxSal IS NULL OR e.salary<=:maxSal)",EmployeeVehicleDTO.class);
		q.setParameter("name", req.getName());
		q.setParameter("id", req.getId());
		q.setParameter("minSal", req.getMinSal());
		q.setParameter("maxSal", req.getMaxSal());
		System.out.println(req.getDepartment());
		q.setParameter("department", req.getDepartment());
		q.setParameter("flag", flag);
//		System.err.println(q.getResultList());
//		System.out.println(q.getResultList().);
//		int count=q.getResultList().size();
//		q.setFirstResult(page*size);
//		q.setMaxResults(size);
//		Pageable pageble=PageRequest.of(page, size);
		System.out.println(q.getResultList());
		return q.getResultList();
		
		
		
		//return q.getResultList());
		
	}
	
	public Page<EmployeeVehicleDTO>getAllEmployeeVehicleWithPaginationWithExperience(RequestEmployee req,int page,int size)
	{
		boolean flag=false;
		if(req.getDepartment()!=null && !req.getDepartment().isEmpty())
		{
			flag = true;
		}
		TypedQuery<Object[]> q=entityManager.createQuery("SELECT "
				+ "(e.id, e.name, e.department,e.address, e.salary, v.vehicleId, v.vehicleNumber, v.vehicleSpot, d.joiningID, d.joiningDate ) "
				+ "FROM Employee e "
				+ "LEFT JOIN e.employeeVehicle v "
				+ "LEFT JOIN e.employeeDateDetails d "
				+ "WHERE "
				+ "(:id IS NULL OR e.id =:id)"
				+ "AND"
				+ "(:name IS NULL OR e.name =:name)"
				+ "AND"
				+ "(:flag is FALSE OR e.department IN :department)"
				+ "AND"
				+ "(:minSal IS NULL OR e.salary>=:minSal)"
				+ "AND"
				+ "(:maxSal IS NULL OR e.salary<=:maxSal)",Object[].class);
		q.setParameter("name", req.getName());
		q.setParameter("id", req.getId());
		q.setParameter("minSal", req.getMinSal());
		q.setParameter("maxSal", req.getMaxSal());
		System.out.println(req.getDepartment());
		q.setParameter("department", req.getDepartment());
		q.setParameter("flag", flag);
	
		int count=q.getResultList().size();
		q.setFirstResult(page*size);
		q.setMaxResults(size);
		Pageable pageble=PageRequest.of(page, size);
		System.out.println(q.getResultList());
		
		// process of result set to calculate experience
		List<EmployeeVehicleDTO> empvlist= new ArrayList<>();
		List<Object[]> results=q.getResultList();
		for(Object[] result : results )
		{
			Integer id= (Integer) result[0];
			String name= (String) result[1];
			String department= (String) result[2];
			String address= (String) result[3];
			Double salary= (Double) result[4];
			Integer vehicleId= (Integer) result[5];
			String vehicleNumber= (String) result[6];
			String vehicalSpot= (String) result[7];
			Integer joiningID = (Integer)result[8];
			Date joiningDate = (Date)result[9];
			// calculating Experience 
			Double experience = calculateExperience(joiningDate);
			
			EmployeeVehicleDTO empdto= new EmployeeVehicleDTO(id,name,department,address,salary,vehicleId,vehicleNumber,vehicalSpot,joiningID,joiningDate,experience);
			empvlist.add(empdto);
			
			
		}
		
		return new PageImpl<>(empvlist, pageble,count);
		
		
		
		//return q.getResultList());
		
	}
	
	public Double calculateExperience(Date joiningDate)
	{
		if(joiningDate!=null)
		{
			LocalDate joinDate= joiningDate.toLocalDate();
			LocalDate now= LocalDate.now();
			Period period=Period.between(joinDate, now);
			return (double)period.toTotalMonths()/12;
			
		}
		return 0.0;
		
	}
	
	
	

}
