package com.example.Udemy_application.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.Udemy_application.entity.Todo;

@Repository
public interface TodoJPARepository extends JpaRepository<Todo, Long>
{
	@Query("select t from Todo t where t.username = :username")
	public Todo findByUsername(String username);

}
