import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { UserServiceService } from './services/user-service.service';
import { User } from './shared/user';

@Injectable({
  providedIn: 'root'
})
export class ValidationGuard implements CanActivate, CanActivateChild {

  constructor(private userServ: UserServiceService, private router: Router) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.userServ.verifyLogin().pipe(
      map(user => {
        this.userServ.setUser((<{ body: User }>user).body);
        return true;
      }), catchError(err => {
        this.router.navigate(['/']);
        return of(false);
      })
    )
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }

}
