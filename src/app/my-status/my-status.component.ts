import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-my-status',
  templateUrl: './my-status.component.html',
  styleUrls: ['./my-status.component.css']
})
export class MyStatusComponent implements OnInit {

  user: User = new User();
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

}
