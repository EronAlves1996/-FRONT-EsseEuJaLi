import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterServiceService } from '../services/router-service.service';
import { UserServiceService } from '../services/user-service.service';
import { LoginInfo } from '../shared/login-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInfo: LoginInfo;

  constructor(private ar: ActivatedRoute,
    private routeServ: RouterServiceService,
    private userService: UserServiceService,
    private router: Router) {
    this.loginInfo = {
      email: '',
      password: ''
    }
   }

  ngOnInit(): void {
    this.ar.url.subscribe(route => this.routeServ.injectURL(''));
    this.userService.verifyLogin();
  }

  onSubmit(): void {
    this.userService.login(this.loginInfo.email, this.loginInfo.password);
  }

}
