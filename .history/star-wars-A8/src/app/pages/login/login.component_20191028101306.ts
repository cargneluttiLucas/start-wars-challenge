import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroupLogin: FormGroup;
  user: User;

  isLoading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
