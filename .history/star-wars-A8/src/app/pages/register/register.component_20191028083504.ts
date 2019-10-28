import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/forms/custom-validators/custom-validators';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formGroupRegister: FormGroup;
  user: User = new User();

  isLoading: boolean;

  constructor(private userService: User) { }

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
    this.isLoading = true;

    // setTimeout(() => {
    //   this.isLoading = false;
    // },         1000);
  }

}
