import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/forms/custom-validators/custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = new FormGroup({
      name: new FormControl(''),
      lastName: new FormControl(''),
      userName: new FormControl(''),
      pass: new FormControl('', Validators.compose[CustomValidators.number, 
        CustomValidators.minlength(4),
        CustomValidators.maxlength(6)])
    });
  }

}
