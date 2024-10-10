package com.example.demo.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entity.RequestNewUniversity;
import com.example.demo.entity.RequestUniversityOBJ;
import com.example.demo.entity.University;

public interface UniversityRepository extends JpaRepository<University, Integer> {
	@Query("SELECT DISTINCT uaddress FROM University")
	public List<String> getAllUniversitiesAdresses();

	@Query("SELECT u FROM University u WHERE " + "(:uId IS NULL OR u.id = :uId) AND "
			+ "(:uaddress IS NULL OR u.uaddress = :uaddress) AND "
			+ "(:startTime IS NULL OR u.lastUpdatedOn >= :startTime) AND "
			+ "(:endTime IS NULL OR u.lastUpdatedOn <= :endTime)")
	public List<University> getAllUniversitiesByCriteria(Integer uId, String uaddress, LocalDateTime startTime,
			LocalDateTime endTime);

	@Query("SELECT u FROM University u " + "WHERE (:uId IS NULL OR u.id = :uId) "
			+ "AND (:uaddress IS NULL OR u.uaddress = :uaddress) "
			+ "AND (:startTime IS NULL OR u.lastUpdatedOn >= :startTime) "
			+ "AND (:endTime IS NULL OR u.lastUpdatedOn <= :endTime)")
	public Page<University> getAllUniversitiesByCriteriaWithPagination(Integer uId, String uaddress,
			LocalDateTime startTime, LocalDateTime endTime, Pageable pageable);

	@Query("SELECT u FROM University u" + " WHERE " + "(:searchTerm IS NULL OR "
			+ " LOWER(u.uname)LIKE LOWER(CONCAT('%',:searchTerm,'%')) OR"
			+ " LOWER(u.uaddress)LIKE LOWER(CONCAT('%',:searchTerm,'%')) OR"
			+ " LOWER(u.email)LIKE LOWER(CONCAT('%',:searchTerm,'%')) OR"
			+ " LOWER(u.phonenumber)LIKE LOWER(CONCAT('%',:searchTerm,'%'))) ")
	Page<University> searchInWithPagination(String searchTerm, Pageable pageable);

	@Query("SELECT u FROM University u" + " WHERE ("
			+ "(:uname IS NULL OR LOWER(u.uname) LIKE LOWER(CONCAT('%', :uname, '%'))) AND "
			+ "(:uaddress IS NULL OR LOWER(u.uaddress) LIKE LOWER(CONCAT('%', :uaddress, '%'))) AND "
			+ "(:email IS NULL OR LOWER(u.email) LIKE LOWER(CONCAT('%', :email, '%'))) AND "
			+ "(:phonenumber IS NULL OR LOWER(u.phonenumber) LIKE LOWER(CONCAT('%', :phonenumber, '%')))" + ")")
	Page<University> searchInColumnsWithPagination(String uname, String uaddress, String email, String phonenumber,
			Pageable pageable);

	@Query("SELECT u FROM University u WHERE " + "(:uid IS null OR u.uid = :uid) AND "
			+ "(:uname is NULL OR u.uname=:uname) AND "
			// + "(:uaddress IS null OR LOWER(u.uaddress) LIKE CONCAT('%', LOWER(:uaddress),
			// '%')) AND "
			+ "(:uaddress IS null OR u.uaddress =:uaddress) AND "
			+ "(:startTime IS null OR u.lastUpdatedOn >= :startTime) AND "
			+ "(:endTime IS null OR u.lastUpdatedOn <= :endTime) AND "
			// + "(:addressfilter IS null OR LOWER(u.uaddress) LIKE CONCAT('%',
			// LOWER(:addressfilter), '%')) AND "
			+ "(:nameFilter IS null OR LOWER(u.uname) LIKE CONCAT('%', LOWER(:nameFilter), '%')) " + " AND "
			+ " (:addressfilter IS null OR LOWER(u.uaddress) LIKE CONCAT('%', LOWER(:addressfilter), '%')) AND "
			// + "(:phoneFilter IS null OR LOWER(u.phonenumber) LIKE CONCAT('%',
			// LOWER(:phoneFilter), '%')) AND "
			+ "(:emailFilter IS null OR LOWER(u.email) LIKE CONCAT('%', LOWER(:emailFilter), '%'))" + "AND "
			+ " (:phoneFilter IS null OR LOWER(u.phonenumber) LIKE CONCAT('%', LOWER(:phoneFilter), '%')) AND "
			+ "(:lastUpdatedFilter IS null OR STR(u.lastUpdatedOn) LIKE CONCAT('%', LOWER(:lastUpdatedFilter), '%'))")
	public Page<University> searchWithEachAndEveryColumn(Integer uid, String uname, String uaddress,
			LocalDateTime startTime, LocalDateTime endTime, String nameFilter, String addressfilter, String emailFilter ,
			String phoneFilter, LocalDateTime lastUpdatedFilter, Pageable pageable);

}
