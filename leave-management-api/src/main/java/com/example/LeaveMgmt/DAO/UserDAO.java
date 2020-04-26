package com.example.LeaveMgmt.DAO;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.LeaveMgmt.Entity.UserEntity;

public interface UserDAO extends MongoRepository<UserEntity, String>{

	public UserEntity findByUserNameAndPassword(String userName, String password);
}
