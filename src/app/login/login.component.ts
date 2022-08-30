import { Component, OnInit } from '@angular/core';
import { LoginInfo } from '../shared/login-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInfo: LoginInfo;

  constructor() {
    this.loginInfo = {
      email: '',
      password: ''
    }
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.loginInfo);
  }
}
