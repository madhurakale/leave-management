import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { LeaveDTO, UserDTO } from '../shared/types/custom-types';
import { LeaveService } from '../shared/services/leave.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private leaveService: LeaveService,
    private toastr: ToastrService
  ) {
    this.leave = {
      leaveApplicationId: '',
      applicantId: '',
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
        let isHoliday = false;
        let holiday = '';
        // Check if Weekend Holiday
        if (day.toDate().getDay() === 0 || day.toDate().getDay() === 6) {
          isHoliday = true;
          holiday = 'Weekend';
        }
        // Push to days array
        days.push({
          day: moment(day.toDate()).format('YYYY-MMM-DD'),
          dateNum: day.toDate().getDate(),
          month: moment(day.toDate()).format('MMM'),
          date: day.toDate(),
          isHoliday: isHoliday,
          holiday: holiday,
          isSelected: false,
          selectedLeaveType: null
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
  }

  createLeave() {
    this.leaveService.applyLeave(this.leave).subscribe(
      resp => {
        this.toastr.success('Leave created successfully', 'Success');
      },
      err => {
        this.toastr.error('Leave creation failed', 'Failure');
      }
    )
  }
}
