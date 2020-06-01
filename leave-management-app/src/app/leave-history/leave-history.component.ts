import { DialogDetailsComponent } from './../dialog-details/dialog-details.component';
import { LeaveService } from './../shared/services/leave.service';
import { LeaveDTO } from './../shared/types/custom-types';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.scss']
})
export class LeaveHistoryComponent implements OnInit {

  leave: LeaveDTO;
  allLeaveApplications: LeaveDTO[] = [];

  constructor(private leaveService: LeaveService,
    public dialog: MatDialog) {
    this.leave = {
      leaveApplicationId: '',
      applicantId: '',
      approverId: '',
      leaveReason: '',
      leaveStatus: '',
      leaveDetails: []
    }
  }
  
  openDialog() {
    this.dialog.open(DialogDetailsComponent);
  }

  ngOnInit() {
    this.getLeaveApplcations();
  }

  getLeaveApplcations() {
    this.leaveService.getLeaveApplications().subscribe(
      resp => {
        this.allLeaveApplications = resp;
        console.log(resp);
      },
      err => {
        console.log('error');
      }
    )
  }
}
