import { UserType } from './user-type'

export class User {
    userId: number;
    name: string;
    surname: string;
    email: string;
    cellPhonenumber: string;
    dateOfBirth: Date;
    userTypeId: number;
    userType: UserType;
}