import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import { Location } from '@angular/common';
import { User } from 'src/app/models/users/user';
import { ActivatedRoute } from '@angular/router';
import { ControlService } from 'src/app/services/controlService';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  pageTitle: string;

  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private controlService:ControlService) {
    this.users = [];
    this.controlService.pageTitle = "Users";
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userService.getUsers().subscribe((userTypesTheReturn: User[]) => {
        this.users = userTypesTheReturn;
      });
    });
  }

  navigateBack(): void {
    this.controlService.navigateBack();
  }

}
