import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterServiceService } from '../services/router-service.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(
    private ar: ActivatedRoute,
    private routerServ: RouterServiceService
    ) { }

  ngOnInit(): void {
    this.ar.url.subscribe(n => this.routerServ.injectURL(n[0].path));
  }

}
