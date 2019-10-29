import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { CustomValidators } from 'src/app/shared/forms/custom-validators/custom-validators';
import { Router } from '@angular/router';
import { Login1Service } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  formGroupLogin: FormGroup;
  user: User;

  isLoadingPage: boolean;
  isLoadingLogin: boolean;
  isLoadingRegister = false;
  isActiveSubscription = new Subscription();

  constructor(private route: Router, private loginService: Login1Service) { }

  ngOnInit() {
    this.isActiveSubscription = this.loginService.isUserActive().subscribe((result) => {
      if (result) {
        this.route.navigate(['home']);
      }
    });
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
      this.isLoadingLogin = true;
      this.loginService.login(this.formGroupLogin.get('userName').value, this.formGroupLogin.get('pass').value)
        .subscribe((result) => {
          if (result) {
            this.isLoadingLogin = false;
            this.route.navigate(['home']);
          } else {
            this.isLoadingLogin = false;
          }
        });
    }
  }

  registerUser() {
    this.isLoadingRegister = true;
    setTimeout(() => {
      this.isLoadingRegister = false;
      this.route.navigate(['register']);
    }, 500);
  }

  ngOnDestroy() {
    this.isActiveSubscription.unsubscribe();
  }

}
