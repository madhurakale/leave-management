package com.example.LeaveMgmt.Mapper;

import java.util.List;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;

import com.example.LeavaMgmt.DTO.LeaveDTO;
import com.example.LeaveMgmt.Entity.LeaveEntity;

@Mapper(componentModel = "spring")
public abstract class LeaveMapper {

	abstract public LeaveDTO LeaveEntityToLeaveDTO(LeaveEntity leave);
	
	abstract public List<LeaveEntity> LeaveDTOListToLeaveEntityList(List<LeaveDTO> leaveDTO);
	
	@InheritInverseConfiguration(name = "LeaveEntityToLeaveDTO")
	abstract public LeaveEntity LeaveDTOToLeaveEntity(LeaveDTO leaveDTO);
}
