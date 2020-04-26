import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../shared/types/custom-types';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserDTO;

  constructor(
    private userService: UserService,
    public toastr: ToastrService
  ) {
    this.user = {
      userId: '',
      userName: '',
      password: '',
      confirmPassword: '',
      userEmail: '',
      userContacts: [{
        contactNum: 0,
        contactType: ''
      }
      ]
    }
  }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.user).subscribe(
      resp =>{
        this.toastr.success('Login Successful','Success');
      },
      err=>{
        this.toastr.error('Please try again','Login failed')
      }
    )
  }

}
