package com.example.LeaveMgmt.DAO;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.LeaveMgmt.Entity.LeaveEntity;

public interface LeaveDAO extends MongoRepository<LeaveEntity, String>{

	public LeaveEntity findByApplicantIdAndApproverId(String applicantId,String approverId);
}
