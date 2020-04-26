import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-apply-leave-component',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss']
})
export class ApplyLeaveComponent implements OnInit {

  weeksOfMonth = [];
  daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor() { }

  ngOnInit() {
    const today = new Date();
    this.weeksOfMonth = this.calendarWeeks(today.getMonth(), today.getFullYear(), 1);
    console.log(this.weeksOfMonth);
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
          day: day.toDate().getDay(),
          dateNum: day.toDate().getDate(),
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
    day.selectedLeaveType = null;
  }
}
