export interface UserDTO {
    userId: string;
    userName: string;
    password: string;
    confirmPassword?: string;
    userEmail: string;
    userContacts: UserContactDTO[];
}

export interface UserContactDTO {
    contactType: string;
    contactNum: number;
}

export interface LeaveDTO {
    leaveApplicationId: string;
    applicantId: string;
    approverId: string;
    leaveReason: string;
    leaveStatus: string;
    leaveDetails: LeaveDetailDTO[];
}

export interface LeaveDetailDTO {
    leaveDate: Date;
    leaveType: string;
}