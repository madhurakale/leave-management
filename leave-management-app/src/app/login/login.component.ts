import { Router } from '@angular/router';
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
    public toastr: ToastrService,
    private router: Router
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
      resp => {
        this.toastr.success('Login Successful', 'Success');
        this.userService.loggedInUser = resp;        
        this.router.navigate(['/applyLeave']);
      },
      err => {
        this.toastr.error('Please try again', 'Login failed')
      }
    ) 
  }

}
