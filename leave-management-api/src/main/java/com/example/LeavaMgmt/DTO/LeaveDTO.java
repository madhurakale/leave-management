package com.example.LeavaMgmt.DTO;

import java.util.List;

public class LeaveDTO {

	private String leaveApplicationId;
	private String applicantId;
	private String approverId;
	private String leaveReason;
	private String leaveStatus;
	private List<LeaveDetailDTO> leaveDetails;
	
	public LeaveDTO() {
		super();
	}

	
	public LeaveDTO(String leaveApplicationId, String applicantId, String approverId, String leaveReason, String leaveStatus,
			List<LeaveDetailDTO> leaveDetails) {
		super();
		this.leaveApplicationId = leaveApplicationId;
		this.applicantId = applicantId;
		this.approverId = approverId;
		this.leaveReason = leaveReason;
		this.leaveStatus = leaveStatus;
		this.leaveDetails = leaveDetails;
	}


	public String getApplicantId() {
		return applicantId;
	}

	public void setApplicantId(String applicantId) {
		this.applicantId = applicantId;
	}

	public String getApproverId() {
		return approverId;
	}

	public void setApproverId(String approverId) {
		this.approverId = approverId;
	}

	public String getLeaveReason() {
		return leaveReason;
	}

	public void setLeaveReason(String leaveReason) {
		this.leaveReason = leaveReason;
	}

	public String getLeaveStatus() {
		return leaveStatus;
	}

	public void setLeaveStatus(String leaveStatus) {
		this.leaveStatus = leaveStatus;
	}


	public List<LeaveDetailDTO> getLeaveDetails() {
		return leaveDetails;
	}


	public void setLeaveDetails(List<LeaveDetailDTO> leaveDetails) {
		this.leaveDetails = leaveDetails;
	}


	public String getLeaveApplicationId() {
		return leaveApplicationId;
	}


	public void setLeaveApplicationId(String leaveApplicationId) {
		this.leaveApplicationId = leaveApplicationId;
	}

	
}
