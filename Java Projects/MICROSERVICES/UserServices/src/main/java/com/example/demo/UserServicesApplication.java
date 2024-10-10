package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;

@SpringBootApplication

@EnableFeignClients
@EnableEncryptableProperties
public class UserServicesApplication {
	public static void main(String[] args) {
		SpringApplication.run(UserServicesApplication.class, args);
		System.err.println("User Service application is running");
	}

}
