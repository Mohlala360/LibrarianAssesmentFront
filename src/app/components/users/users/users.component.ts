import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import { UserType } from 'src/app/models/users/user-type';
import { User } from 'src/app/models/users/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userTypes: User[];

  constructor(private userService: UserService) {
    this.userTypes = [];
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((userTypesTheReturn: User[]) => {
      this.userTypes = userTypesTheReturn;
    });
  }
}
