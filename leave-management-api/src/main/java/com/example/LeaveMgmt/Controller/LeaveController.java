package com.example.LeaveMgmt.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.LeavaMgmt.DTO.LeaveDTO;
import com.example.LeaveMgmt.Entity.LeaveEntity;
import com.example.LeaveMgmt.Service.LeaveApplicationService;

@RestController	
@RequestMapping("/leave")
public class LeaveController {

	@Autowired
	LeaveApplicationService leaveService;
	
	@GetMapping(value = "/getLeaveApplications", produces = {MediaType.APPLICATION_JSON_VALUE}) 
	@ResponseBody
	public ResponseEntity<List<LeaveEntity>> getAllLeaveApplications() {
		List<LeaveEntity> allLeaveApplications = leaveService.getAllLeaveApplications();
		if(allLeaveApplications != null && allLeaveApplications.size() > 0) {
			return ResponseEntity.status(HttpStatus.OK).body(allLeaveApplications);
		}
		else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}
	
	@PostMapping(value = "/applyLeave", produces = {MediaType.APPLICATION_JSON_VALUE})
	@ResponseBody
	public ResponseEntity<LeaveEntity> leaveApply(@RequestBody LeaveDTO leaveDTO) {
		LeaveEntity leaveEntity = leaveService.applyLeave(leaveDTO);
		if(leaveEntity != null) {
			return ResponseEntity.status(HttpStatus.OK).body(leaveEntity);
		}
		else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}
	
	@PostMapping(value = "/updateLeave", produces = {MediaType.APPLICATION_JSON_VALUE}) 
	@ResponseBody
	public ResponseEntity<LeaveEntity> leaveUpdate(@RequestBody LeaveDTO leaveDTO) {
		LeaveEntity leaveEntity = leaveService.updateLeave(leaveDTO);
		if(leaveEntity != null) {
			return ResponseEntity.status(HttpStatus.OK).body(leaveEntity);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}
	}
}
