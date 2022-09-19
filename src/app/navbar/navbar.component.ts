import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterServiceService } from '../services/router-service.service';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  route: string = '';
  userName:string = '';

  constructor(
    private routerServ: RouterServiceService,
    private userServ: UserServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.routerServ.getActURL().subscribe(route => this.route = route);
    this.userServ.getUser().subscribe(user => this.userName = user.name);
  }

  logout(): void {
    this.userServ.logout().subscribe(n => {
      this.userServ.setUser(new User());
      this.router.navigate(['/']);
    })
  }

}
