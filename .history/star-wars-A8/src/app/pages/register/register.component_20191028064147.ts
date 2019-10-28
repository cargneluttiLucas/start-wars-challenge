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

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroupRegister = new FormGroup({
      name: new FormControl(this.user.name),
      lastName: new FormControl(this.user.lastName),
      userName: new FormControl(this.user.userName),
      pass: new FormControl(this.user.pass, Validators.compose([CustomValidators.number,
      CustomValidators.minlength(4),
      CustomValidators.maxlength(6)]))
    });
  }

  registerUser() {
  }

}
