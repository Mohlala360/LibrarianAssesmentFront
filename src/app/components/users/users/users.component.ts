import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import { UserType } from 'src/app/models/users/user-type';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userTypes: UserType[];

  constructor(private userService: UserService) {
    this.userTypes = [];
  }

  ngOnInit() {
    this.userService.getUserTypes().subscribe((userTypesTheReturn: UserType[]) => {
      this.userTypes = userTypesTheReturn;
      console.log(this.userTypes);
    });
  }

}
