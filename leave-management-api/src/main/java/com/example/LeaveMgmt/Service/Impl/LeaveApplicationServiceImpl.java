package com.example.LeaveMgmt.Service.Impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.LeavaMgmt.DTO.LeaveDTO;
import com.example.LeaveMgmt.DAO.LeaveDAO;
import com.example.LeaveMgmt.Entity.LeaveEntity;
import com.example.LeaveMgmt.Mapper.LeaveMapper;
import com.example.LeaveMgmt.Service.LeaveApplicationService;

@Service
public class LeaveApplicationServiceImpl implements LeaveApplicationService{

	@Autowired
	LeaveDAO leaveDAO;

	@Autowired
	LeaveMapper leaveMapper;

	@Override
	public LeaveEntity applyLeave(LeaveDTO leave) {
		LeaveEntity leaveEntity = leaveDAO.save(leaveMapper.LeaveDTOToLeaveEntity(leave));
		return leaveEntity;
	}

	@Override
	public LeaveEntity updateLeave(LeaveDTO leave) {
		Optional<LeaveEntity> leaveApplication = leaveDAO.findById(leave.getLeaveApplicationId());
		if(leaveApplication != null) {
			LeaveEntity leaveEntity = leaveDAO.save(leaveMapper.LeaveDTOToLeaveEntity(leave));
			return leaveEntity;
		}
		else {
			return null;
		}
	}
}
