import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { LeaveDTO, UserDTO, LeaveDetailDTO , LeaveStatus } from '../shared/types/custom-types';
import { LeaveService } from '../shared/services/leave.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/services/user.service';


@Component({
  selector: 'app-apply-leave-component',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss']
})

export class ApplyLeaveComponent implements OnInit {

  weeksOfMonth = [];
  daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  selectedYear: number;
  selectedMonth: string;
  monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  leave: LeaveDTO;
  allUsers: UserDTO[] = [];
  isButtonVisible: boolean = false;


  constructor(
    private leaveService: LeaveService,
    private toastr: ToastrService,
    private userService: UserService,
  ) {
    this.leave = {
      leaveApplicationId: '',
      applicantId: this.userService.loggedInUser.userId,
      approverId: '',
      leaveReason: '',
      leaveStatus: '',
      leaveDetails: []
    }
  }

  ngOnInit() {
    const today = new Date();
    this.selectedYear = today.getFullYear();
    this.selectedMonth = moment(today).format('MMMM');
    this.weeksOfMonth = this.calendarWeeks(today.getMonth(), today.getFullYear(), 1);
    this.loadAllUsers();
  }

  calendarWeeks(month, year, startDate) {
    let noOfWeeks = 6;
    let date = new Date(year, month, startDate);
    let weeks = [];
    while (noOfWeeks > 0) {
      let days = [];
      const startOfWeek = moment(date).startOf('week');
      const endOfWeek = moment(date).endOf('week');
      let day = startOfWeek;
      while (day < endOfWeek) {
        let gridDay = moment(day.toDate()).format('YYYY-MM-DD');
        let isHoliday = false;
        let isSelected = false;
        let selectedLeaveType = null;
        let holiday = '';
        // Check if Weekend Holiday
        if (day.toDate().getDay() === 0 || day.toDate().getDay() === 6) {
          isHoliday = true;
          holiday = 'Weekend';
        }
        // Check for selected leave dates
        const leaveDay = this.leave.leaveDetails.filter(x => x.leaveDate.toString() === gridDay)[0];
        if (leaveDay) {
          isSelected = true;
          selectedLeaveType = leaveDay.leaveType;
        }
        // Push to days array
        days.push({
          day: gridDay,
          dateNum: day.toDate().getDate(),
          month: moment(day.toDate()).format('MMM'),
          date: day.toDate(),
          isHoliday: isHoliday,
          holiday: holiday,
          isSelected: isSelected,
          selectedLeaveType: selectedLeaveType
        });
        day = day.clone().add(1, 'd');
        date = day.toDate();
      }
      weeks.push(days);
      noOfWeeks--;
    }
    return weeks;
  }

  cancelLeaveSelection(day) {
    day.isSelected = false;
    const index = this.leave.leaveDetails.findIndex(ld => ld.leaveDate === day.day);
    this.leave.leaveDetails.splice(index, 1);
    day.selectedLeaveType = null;
  }

  changeMonth(i: number) {
    const month = this.monthsOfYear.indexOf(this.selectedMonth);
    this.selectedMonth = this.monthsOfYear[month + i];
    this.weeksOfMonth = this.calendarWeeks(month + i, this.selectedYear, 1);
  }

  updateLeaveDetails(day) {
    day.isSelected = true;
    const leaveDetail = this.leave.leaveDetails.find(ld => ld.leaveDate === day.day);
    if (leaveDetail) {
      leaveDetail.leaveType = day.selectedLeaveType;
    } else {
      this.leave.leaveDetails.push({
        leaveDate: day.day,
        leaveType: day.selectedLeaveType
      });
    }
    this.leave.leaveDetails.sort((i: LeaveDetailDTO, j: LeaveDetailDTO) => {
      return new Date(i.leaveDate).getTime() - new Date(j.leaveDate).getTime();
    });
  }

  createLeave() {
    this.leave.leaveStatus = LeaveStatus.DRAFT.toString();
    this.isButtonVisible = true;
    this.leaveService.applyLeave(this.leave).subscribe(
      resp => {
        this.toastr.success('Leave created successfully', 'Success');
        // this.isButtonVisible = false;
        this.leave = resp;
        console.log(this.leave);
      },
      err => {
        this.toastr.error('Leave creation failed', 'Failure');
      }
    )
  }

  updateLeave() {
    this.isButtonVisible = true;
    this.leaveService.updateLeave(this.leave).subscribe(
      resp => {
        this.toastr.success('Leave updated successfully', 'Success');
        
      },
      err => {
        this.toastr.error('Leave updation failed', 'Failure');
      }
    )
  }

  loadAllUsers() {
    this.userService.allUsers().subscribe(
      resp => {

        this.allUsers = resp.filter(user => user.userId !== this.userService.loggedInUser.userId);
      },
      err => {
        console.log('error' + err);
      }
    )
  }
}
