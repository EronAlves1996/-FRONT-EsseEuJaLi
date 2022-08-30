import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a div to embrace all elements', ()=>{
    const div: HTMLElement = <HTMLElement> el.querySelector('div');
    expect(div).toBeTruthy();
  });

  it('the div has to be of certain style', ()=>{
    const div: HTMLElement = <HTMLElement> el.querySelector('.outer-container');
    const classes: string = div.classList.value;
    const bgColor: string = getComputedStyle(div).backgroundColor;

    expect(classes).toContain('d-flex');
    expect(classes).toContain('container-fluid');
    expect(bgColor).toBe('rgb(240, 239, 244)')
  });

  it('should have two divs inside the outer-container', ()=>{
    const div: HTMLElement = <HTMLElement> el.querySelector('.outer-container');
    const child: NodeList = div.childNodes;
    expect(child.length).toBe(2);
  });

  it('the login div should have certain classes fort styling', ()=>{
    const login: HTMLElement = <HTMLElement> el.querySelector('.login-form');
    const classes: string = login.classList.value;

    expect(classes).toContain('d-flex');
    expect(classes).toContain('flex-column');
  });

  it('the image container should have an img inner tag', ()=>{
    const imgCont: HTMLElement = <HTMLElement> el.querySelector('.img-container');
    const imgTag: HTMLElement = <HTMLElement> imgCont.querySelector('img');

    expect(imgTag).toBeTruthy();
  });

  it('should login form have the logo and form', ()=>{
    const login: HTMLElement = <HTMLElement> el.querySelector('.login-form');

    expect(login.querySelector('form')).toBeTruthy();
    expect(login.querySelector('img')).toBeTruthy();
    expect(login.querySelector('button')).toBeTruthy();
    expect(login.querySelector('a')).toBeTruthy();
  });

  it('the img element should have src and alt', ()=>{
    const img: HTMLImageElement = <HTMLImageElement> el.querySelector('.logo');
    expect(img.src).toBe("http://localhost:9876/assets/images/logo.png" );
    expect(img.alt).toBe("Logo de Esse eu já li!");
  });

  it('the form element should have two inputs fields with labels', ()=>{
    const form: HTMLFormElement = <HTMLFormElement> el.querySelector('form');
    const labels = form.getElementsByTagName('label');
    const inputs = form.getElementsByTagName('input');

    expect(labels.length).toBe(2);
    expect(inputs.length).toBe(2);
    expect(labels[0].textContent).toBe("E-mail");
    expect(labels[1].textContent).toBe("Senha");
    expect(inputs[0].type).toBe('email');
    expect(inputs[1].type).toBe('password');
  });

  it('the button should be the type submit an have an Login subtitle', ()=>{
    const button: HTMLButtonElement = <HTMLButtonElement> el.querySelector('button');
    
    expect(button.textContent).toBe("Entrar");
    expect(button.type).toBe('submit');
  });

  it('the anchor should have a text content of \'esqueci minha senha \'', ()=>{
    const anchor: HTMLAnchorElement = <HTMLAnchorElement> el.querySelector('a');
    expect(anchor.textContent).toBe('Esqueci minha senha');
  });
  
  it('should have a little description of site right below the logo', ()=>{
    const p: HTMLParagraphElement = <HTMLParagraphElement> el.querySelector('p');
    expect(p.textContent).toBe('Comece a coletar seus pontos!!!');
  })
});
