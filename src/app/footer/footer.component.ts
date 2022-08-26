import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  appName:string = '';
  copyrightInfo:string = '';

  constructor() { }

  ngOnInit(): void {
    this.appName = "Esse Eu Já Li ©  - 2022";
    this.copyrightInfo = "All rights reserved to Instituto Tecnológico da Aeronáutica and Eron Alves"
  }

}
