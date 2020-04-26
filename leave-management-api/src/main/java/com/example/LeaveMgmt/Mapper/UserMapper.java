package com.example.LeaveMgmt.Mapper;

import java.util.List;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;

import com.example.LeavaMgmt.DTO.UserDTO;
import com.example.LeaveMgmt.Entity.UserEntity;

@Mapper(componentModel = "spring")
public abstract class UserMapper {
	
	abstract public UserDTO UserEntityToUserDTO(UserEntity user);
	
	abstract public List<UserEntity> UserDTOListToUserEntityList(List<UserDTO> userDTO);
	
	@InheritInverseConfiguration(name = "UserEntityToUserDTO")
	abstract public UserEntity UserDTOToUserEntity(UserDTO userDTO);
}
