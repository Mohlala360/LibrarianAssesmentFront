import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import { User } from 'src/app/models/users/user';
import { UserType } from 'src/app/models/users/user-type';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;
  userTypes: UserType[];
  constructor(private userService: UserService) {

  }

  ngOnInit() {  
    this.user = new User();
    this.getUserTypes();
  }

  getUserTypes(): void {
    this.userService.getUserTypes().subscribe((userTypesTheReturn: UserType[]) => {
      this.userTypes = userTypesTheReturn;
      console.log(this.userTypes);
    });
  }

  getFormData(): User {
    const data = new User()
    data.name = (<HTMLInputElement>document.getElementById('inputName')).value;
    data.surname = (<HTMLInputElement>document.getElementById('inputSurname')).value;
    data.email = (<HTMLInputElement>document.getElementById('inputEmail')).value;
    data.cellPhonenumber = (<HTMLInputElement>document.getElementById('inputCellnumber')).value;
    data.dateOfBirth = new  Date((<HTMLInputElement>document.getElementById('inputDateofbirth')).value);
    data.userTypeId = Number((<HTMLInputElement>document.getElementById('inputUsertype')).value);
    return data;
  }

  submit(): void {
    this.user = this.getFormData();
    this.userService.addUser(this.user).subscribe((returnedUser: User) => {
      console.log(returnedUser);
    });
  }
}
