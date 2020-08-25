import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/users/user';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User;
  pageTitle: string;

  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private location: Location) { 
      this.pageTitle = 'User Details';
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const userId = +params['id'];
      this.userService.getUser(userId).subscribe((returnedUser: User) => {
        this.user = returnedUser;
      });
    });
  }

  navigateBack(): void {
    this.location.back();
  }
}
