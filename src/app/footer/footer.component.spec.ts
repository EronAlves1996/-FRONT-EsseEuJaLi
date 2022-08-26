import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a text indicating the name of app', ()=>{
    expect(component.appName).toBe("Esse Eu Já Li ©  - 2022");
  });

  it('should have the copyright text', ()=>{
    expect(component.copyrightInfo).toBe("All rights reserved to Instituto Tecnológico da Aeronáutica and Eron Alves")
  });
});
