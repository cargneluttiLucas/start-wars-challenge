import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/forms/custom-validators/custom-validators';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formGroupRegister: FormGroup;
  user: User;

  isLoadingRegister = false;
  isLoadingLogin = false;

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroupRegister = new FormGroup({
      name: new FormControl(''),
      lastName: new FormControl(''),
      userName: new FormControl(''),
      pass: new FormControl('', Validators.compose([CustomValidators.number,
      CustomValidators.minlength(4),
      CustomValidators.maxlength(6)]))
    });
  }

  registerUser() {
    if (this.createUser() && this.formGroupRegister.valid) {
      this.isLoadingRegister = true;
      this.userService.createUser(this.user).subscribe((response) => {
        if (response) {
          this.route.navigate(['login']);
          this.isLoadingRegister = false;
        } else {
          // TODO: aviso de error
          this.isLoadingRegister = false;
        }
      });
    }
  }

  private createUser() {
    if (this.formGroupRegister.valid) {
      const user = this.formGroupRegister.value;
      this.user = new User(
        user.name,
        user.lastName,
        user.userName,
        btoa(user.pass)
      );
      return true;
    }
    return false;
  }

  login() {
    this.isLoadingLogin = true;
    setTimeout(() => {
      this.isLoadingLogin = false;
      this.route.navigate(['login']);
    }, 500);
  }

}
