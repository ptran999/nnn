import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
   // Initialize the sign-in form as a FormGroup.
   signInForm: FormGroup = new FormGroup({});
   errorMessage: string = ''; // Initialize an error message variable.

constructor(
  private router: Router,
  private cookieService: CookieService,
  private fb: FormBuilder,

) {}

ngOnInit(): void {
  // Initialize the sign-in form with validation rules
  this.signInForm = this.fb.group({
    email: [
      '', // Initial empty value
      [
        Validators.required, // Field is required
        Validators.email, // Input must be a valid email address
      ],
    ],
    password: [
      '',
      Validators.compose([
        Validators.required, // Field is required
        Validators.pattern(
          '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[A-Z])[A-Za-z\\d]{8,}$' // Password requires 1 uppercase letter and 1 number with a minimum length of 8 characters.
        ),
      ]),
    ],
  });
}
}