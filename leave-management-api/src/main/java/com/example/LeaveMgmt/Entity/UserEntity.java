package com.example.LeaveMgmt.Entity;


import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import com.example.LeavaMgmt.DTO.UserContactDTO;

@Document(collection = "USER")
public class UserEntity {
	
	@Id
	private String userId;
	@Field("USER_NAME")
	private String userName;
	@Field("PASSWORD")
	private String password;
	@Field("USER_EMAIL")
	private String userEmail;
	@Field("USER_CONTACTS")
	private List<UserContactDTO> userContacts;
	
	public UserEntity() {
		super();
	}
	
	public UserEntity(String userId, String userName, String password, String userEmail,
			List<UserContactDTO> userContacts) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.password = password;
		this.userEmail = userEmail;
		this.userContacts = userContacts;
	}
	
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public List<UserContactDTO> getUserContacts() {
		return userContacts;
	}
	public void setUserContacts(List<UserContactDTO> userContacts) {
		this.userContacts = userContacts;
	}
	
	
}
