import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a <nav> element inside', ()=>{
    const el: HTMLElement = fixture.nativeElement;
    const navEl: HTMLElement = <HTMLElement> el.querySelector('nav');

    expect(navEl).toBeTruthy();
  });

  it('nav element should be d-flex, container-fluid, and have blue color as mockup', ()=>{
    const el: HTMLElement = fixture.nativeElement;
    const navEl: HTMLElement = <HTMLElement> el.querySelector('nav');
    const classes: string = navEl.classList.value;
    const styleBgColor: string = getComputedStyle(navEl).backgroundColor;

    expect(classes).toContain('d-flex');
    expect(classes).toContain('container-fluid');
    expect(styleBgColor).toBe('rgb(8, 61, 119)');
  });

  it('nav element have to be size defined in mockup', ()=>{
    const el: HTMLElement = fixture.nativeElement;
    const navEl: HTMLElement = <HTMLElement> el.querySelector('nav');
    const styleHeight: string = getComputedStyle(navEl).height;

    expect(styleHeight).toBe('48px');
  })
});
