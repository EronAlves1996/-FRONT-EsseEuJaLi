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

  it('should have a <footer> tag in it', ()=>{
    const el: HTMLElement = fixture.nativeElement;
    const footer: HTMLElement = <HTMLElement> el.querySelector('footer');
    expect(footer).toBeTruthy();
  });

  it('should have a style defined on mockups', ()=>{
    const el: HTMLElement = fixture.nativeElement;
    const footer: HTMLElement = <HTMLElement> el.querySelector('footer');
    const classes: string = footer.classList.value;

    expect(classes).toContain("d-flex");
    expect(classes).toContain("container-fluid");
    expect(classes).toContain("flex-column");

    expect(getComputedStyle(footer).backgroundColor).toBe('rgb(54, 49, 31)');
  });

  it('should have 2 tags \'p in it', ()=>{
    const el: HTMLElement = fixture.nativeElement;
    const footer: HTMLElement = <HTMLElement> el.querySelector('footer');
    const pTags:HTMLCollectionOf<HTMLParagraphElement> = footer.getElementsByTagName('p');

    expect(pTags.length).toBe(2);
  });

  it('should have text inside the p tags elements', ()=>{
    const el: HTMLElement = fixture.nativeElement;
    const footer: HTMLElement = <HTMLElement> el.querySelector('footer');
    const pTags:HTMLCollectionOf<HTMLParagraphElement> = footer.getElementsByTagName('p');

    expect(pTags[0].textContent).toBe(component.appName);
    expect(pTags[1].textContent).toBe(component.copyrightInfo);
  });

  it('should have p tags with white color', ()=>{
    const el: HTMLElement = fixture.nativeElement;
    const footer: HTMLElement = <HTMLElement> el.querySelector('footer');
    const pTags:HTMLCollectionOf<HTMLParagraphElement> = footer.getElementsByTagName('p');

    expect(getComputedStyle(pTags[0]).color).toBe('rgb(240, 239, 244)');
    expect(getComputedStyle(pTags[1]).color).toBe('rgb(240, 239, 244)');
  });

  it('the pTags should have aligned', ()=>{
    const el: HTMLElement = fixture.nativeElement;
    const footer: HTMLElement = <HTMLElement> el.querySelector('footer');
    const pTags:HTMLCollectionOf<HTMLParagraphElement> = footer.getElementsByTagName('p');

    expect(pTags[0].classList.value).toContain('m-0');
    expect(pTags[1].classList.value).toContain('m-0');
    expect(footer.classList.value).toContain('align-items-center');
    expect(footer.classList.value).toContain('justify-content-center');
    expect(footer.classList.value).toContain('py-2');
  });
});
