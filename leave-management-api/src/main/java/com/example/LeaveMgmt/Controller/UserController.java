package com.example.LeaveMgmt.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.LeavaMgmt.DTO.UserDTO;
import com.example.LeaveMgmt.Entity.UserEntity;
import com.example.LeaveMgmt.Service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {	
	
	@Autowired
	UserService userService;
	
	@GetMapping(value = "/{userId}", produces = {MediaType.APPLICATION_JSON_VALUE})
	@ResponseBody
	public UserEntity getUser(@PathVariable String userId) {
		UserEntity userDetails = userService.getUser(userId);
		return userDetails;
	}

	@PostMapping(value = "/signup", produces = {MediaType.APPLICATION_JSON_VALUE} )
	@ResponseBody
	public ResponseEntity<UserEntity> signup(@RequestBody UserDTO userDTO) {
		UserEntity userEntity = userService.signup(userDTO);
		if(userEntity != null) {
			return ResponseEntity.status(HttpStatus.OK).body(userEntity);
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}
	
	@PostMapping(value = "/login", produces = {MediaType.APPLICATION_JSON_VALUE}) 
	@ResponseBody
	public ResponseEntity<UserEntity> login(@RequestBody UserDTO userDTO) {
		UserEntity userEntity = userService.login(userDTO);
		if(userEntity != null) {
			return ResponseEntity.status(HttpStatus.OK).body(userEntity);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}
	}
}
