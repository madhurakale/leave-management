package com.example.LeaveMgmt.Service;

import java.util.List;

import com.example.LeavaMgmt.DTO.LeaveDTO;
import com.example.LeaveMgmt.Entity.LeaveEntity;

public interface LeaveApplicationService {

	LeaveEntity applyLeave(LeaveDTO leave);
	LeaveEntity updateLeave(LeaveDTO leave);
	List<LeaveEntity> getAllLeaveApplications();
}
