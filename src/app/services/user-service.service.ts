import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user: User = new User();

  constructor(private http:HttpClient,
    private router:Router) { }

  login(email:string, password:string): Observable<User> {
    let header:HttpHeaders = new HttpHeaders({
      ["Authorization"]: btoa(email.concat(":", password))
    });
    return this.http.get<User>("http://localhost:8080/api/login/", {headers: header, withCredentials: true});
  }

  verifyLogin(): Observable<unknown>{
    return this.http.get<unknown>("http://localhost:8080/api/validate/", {observe: 'response', withCredentials:true});
  }
}

type statusCheck = {
  status:number;
};
