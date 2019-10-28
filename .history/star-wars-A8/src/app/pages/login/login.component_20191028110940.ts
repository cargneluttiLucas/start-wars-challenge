import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { CustomValidators } from 'src/app/shared/forms/custom-validators/custom-validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroupLogin: FormGroup;
  user: User;

  isLoading: boolean;

  constructor(private route: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroupLogin = new FormGroup({
      userName: new FormControl(''),
      pass: new FormControl('', Validators.compose([CustomValidators.number,
      CustomValidators.minlength(4),
      CustomValidators.maxlength(6)]))
    });
  }

  login() {
    if (this.formGroupLogin.valid) {
      this.route.navigate(['home']);
    }
  }

  registerUser() {
    this.route.navigate(['register']);
  }

}
