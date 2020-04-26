package com.example.LeaveMgmt.Entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import com.example.LeavaMgmt.DTO.LeaveDetailDTO;

@Document(collection = "LEAVE_APPLICATION")
public class LeaveEntity {
	
	@Id
	private String leaveApplicationId;
	@Field("LEAVE_APPLICANT")
	private String applicantId;
	@Field("LEAVE_APPROVER")
	private String approverId;
	@Field("LEAVE_REASON")
	private String leaveReason;
	@Field("LEAVE_STATUS")
	private String leaveStatus;
	@Field("LEAVE_DETAILS")
	private List<LeaveDetailDTO> leaveDetails;
	
	public LeaveEntity() {
		super();
	}

	public LeaveEntity(String leaveApplicationId, String applicantId, String approverId, String leaveReason,
			String leaveStatus, List<LeaveDetailDTO> leaveDetails) {
		super();
		this.leaveApplicationId = leaveApplicationId;
		this.applicantId = applicantId;
		this.approverId = approverId;
		this.leaveReason = leaveReason;
		this.leaveStatus = leaveStatus;
		this.leaveDetails = leaveDetails;
	}



	public String getLeaveApplicationId() {
		return leaveApplicationId;
	}

	public void setLeaveApplicationId(String leaveApplicationId) {
		this.leaveApplicationId = leaveApplicationId;
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
	
	
}
