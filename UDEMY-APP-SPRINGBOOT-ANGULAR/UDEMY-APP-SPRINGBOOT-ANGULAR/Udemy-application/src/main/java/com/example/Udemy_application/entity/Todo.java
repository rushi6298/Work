package com.example.Udemy_application.entity;

import java.util.Date;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Todo 
{
	@Id
	@GeneratedValue
	private Long id; 
	@Column
	private String username;
	private String description;
	private Date targetDate;
	private Boolean isDone;
//	public Todo(long id, String username, String description, Date targetDate, boolean isDone) {
//		super();
//		this.id = id;
//		this.username = username;
//		this.description = description;
//		this.targetDate = targetDate;
//		this.isDone = isDone;
//	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Todo other = (Todo) obj;
		return id == other.id;
	}
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}
	

}
