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