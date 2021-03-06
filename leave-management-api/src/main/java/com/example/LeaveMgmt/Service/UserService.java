package com.example.LeaveMgmt.Service;

import java.util.List;

import com.example.LeavaMgmt.DTO.UserDTO;
import com.example.LeaveMgmt.Entity.UserEntity;

public interface UserService {

	UserEntity login(UserDTO user);
	UserEntity signup(UserDTO user);
	UserEntity getUser(String userId);
	List<UserEntity> getAllUsers();
}
