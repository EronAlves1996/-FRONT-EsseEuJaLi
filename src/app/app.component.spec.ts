import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {
            path:'',
            component: LoginComponent
          }
        ])
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'esseEuJaLi'`, () => {
    expect(app.title).toEqual('esseEuJaLi');
  });

  it('should have the footer and navbar by default', ()=>{
    const el = fixture.nativeElement;
    const navbar = el.querySelector('app-navbar');
    const footer = el.querySelector('app-footer');

    expect(navbar).toBeTruthy();
    expect(footer).toBeTruthy();
  });

  it('should have the router-outlet', ()=>{
    const el = fixture.nativeElement;
    const router = el.querySelector('router-outlet');

    expect(router).toBeTruthy();
  });
});
