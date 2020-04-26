package com.example.LeavaMgmt.DTO;

public class UserContactDTO {
	
	private String contactType;
	private double contactNum;
	
	public UserContactDTO() {
		super();
	}
	
	public UserContactDTO(String contactType, int contactNum) {
		super();
		this.contactType = contactType;
		this.contactNum = contactNum;
	}

	public double getContactNum() {
		return contactNum;
	}
	
	public String getContactType() {
		return contactType;
	}

	public void setContactType(String contactType) {
		this.contactType = contactType;
	}

	public void setContactNum(double contactNum) {
		this.contactNum = contactNum;
	}
}
