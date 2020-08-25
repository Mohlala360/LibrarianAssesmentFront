import { UserType } from './user-type'

export class User {
    userId: number = 0;
    name: string = null;
    surname: string = null;;
    email: string = null;
    cellPhonenumber: string = null;
    dateOfBirth: Date = new Date;
    userTypeId: number = 0;
    userType: UserType;
}