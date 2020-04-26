package com.example.LeavaMgmt.DTO;

import java.util.List;

public class UserDTO {
	
	private String userId;
	private String userName;
	private String password;
	private String userEmail;
	private List<UserContactDTO> userContacts;
	
	public UserDTO() {
		super();
	}
	
	public UserDTO(String userId, String userName, String password, String userEmail,
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
