import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterServiceService } from '../services/router-service.service';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(
    private ar: ActivatedRoute,
    private routerServ: RouterServiceService,
    private userServ: UserServiceService
    ) { }

  ngOnInit(): void {
    this.ar.url.subscribe(n => this.routerServ.injectURL(n[0].path));
    this.userServ.verifyLogin().subscribe(user => {
      this.userServ.setUser((<{body:User}>user).body);
    })
  }

}
