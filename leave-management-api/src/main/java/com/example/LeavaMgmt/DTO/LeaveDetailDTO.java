package com.example.LeavaMgmt.DTO;

import java.util.Date;

public class LeaveDetailDTO {
	
	private Date leaveDate;
	private String leaveType;
	
	public LeaveDetailDTO() {
		super();
	}
	
	public LeaveDetailDTO(Date leaveDate, String leaveType) {
		super();
		this.leaveDate = leaveDate;
		this.leaveType = leaveType;
	}

	public Date getLeaveDate() {
		return leaveDate;
	}

	public void setLeaveDate(Date leaveDate) {
		this.leaveDate = leaveDate;
	}

	public String getLeaveType() {
		return leaveType;
	}

	public void setLeaveType(String leaveType) {
		this.leaveType = leaveType;
	}
}
