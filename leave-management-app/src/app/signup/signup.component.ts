import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../shared/types/custom-types';
import { UserService } from '../shared/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: UserDTO;

  constructor(
    private toastr: ToastrService,
    private userService: UserService,
    private router:Router
  ) {
    this.user = {
      userId: '',
      userName: '',
      password: '',
      confirmPassword: '',
      userEmail: '',
      userContacts: [
        {
          contactNum: 0,
          contactType: ''
        }
      ]
    }
  }

  ngOnInit() {
    
  }

  submit() {
    this.userService.signup(this.user).subscribe(
      resp => {
        this.toastr.success('Sigunup successful', 'Success');
        this.router.navigate(['/login']);
      },
      err => {
        this.toastr.error('Please try again', 'Signup failed');
      }
    );
  }
}
