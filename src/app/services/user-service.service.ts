import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user: User = new User();

  constructor(private http:HttpClient,
    private router:Router) { }

  login(email:string, password:string) {
    let header:HttpHeaders = new HttpHeaders({
      ["Authorization"]: btoa(email.concat(":", password))
    });
    this.http.get<User>("http://localhost:8080/api/login/", {headers: header, withCredentials: true}).subscribe(
        response => {
          this.user = response;
          this.router.navigate(["/memberarea"]);
        }
    );
  }

  verifyLogin(): void{
    this.http.get<unknown>("http://localhost:8080/api/validate/", {observe: 'response', withCredentials:true}).subscribe(response => {
      if (response.status === 200) this.router.navigate(["/memberarea"]);
    });
  }
}

type statusCheck = {
  status:number;
};
