package com.example.demo.models;

import java.util.Collection;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class AuthResponse
{
	private String userId;
	private String acceessToken;
	private String refreshToken;
	private long expireAt;
	private Collection<String> authorities;
	

}
