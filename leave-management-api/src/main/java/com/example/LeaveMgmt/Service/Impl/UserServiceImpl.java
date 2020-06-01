package com.example.LeaveMgmt.Service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.LeavaMgmt.DTO.UserDTO;
import com.example.LeaveMgmt.DAO.UserDAO;
import com.example.LeaveMgmt.Entity.UserEntity;
import com.example.LeaveMgmt.Mapper.UserMapper;
import com.example.LeaveMgmt.Service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserDAO userDAO;
	
	@Autowired
	UserMapper userMapper;
	
	@Override
	public UserEntity login(UserDTO user) {
		UserEntity userEntity = userDAO.findByUserNameAndPassword(user.getUserName(),user.getPassword());
		return userEntity;
	}

	@Override
	public UserEntity signup(UserDTO user) {
		UserEntity userEntity = userDAO.save(userMapper.UserDTOToUserEntity(user));
		return userEntity;
	}

	@Override
	public UserEntity getUser(String userId) {
		UserEntity userEntity = userDAO.findById(userId).get();
		return userEntity;
	}

	@Override
	public java.util.List<UserEntity> getAllUsers() {
		List<UserEntity> allUsers = userDAO.findAll();
		return allUsers;
	}
}
