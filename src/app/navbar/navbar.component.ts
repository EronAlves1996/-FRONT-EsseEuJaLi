import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterServiceService } from '../services/router-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  route: string = '';

  constructor(
    private routerServ: RouterServiceService
  ) { }

  ngOnInit(): void {
    this.routerServ.getActURL().subscribe(route => this.route = route);
  }

}
