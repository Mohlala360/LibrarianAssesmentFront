import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/users/user';
import { UserType } from 'src/app/models/users/user-type';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

const apiCaller = environment.apiBaseUrl;

@Injectable({
    providedIn: 'root'
})
export class ControlService {

    pageTitle: string;

    constructor(private http: HttpClient,
        public router: Router,
        public location: Location) { 
            this.pageTitle = "Home";
        }

    navigateHome(): void {
        this.router.navigate(['']);
    }

    navigateBack(): void {
        this.location.back();
    }
}
