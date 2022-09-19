import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterServiceService {

  private actURL: Subject<string> = new Subject<string>;

  constructor(private router: Router) { }

  injectURL(urlSeg: string){
    this.actURL.next(urlSeg);
  }

  getActURL(): Observable<string> {
    return this.actURL.asObservable();
  }

  goToHome(): void {
    this.router.navigateByUrl(this.router.parseUrl("/other"));
  }
}
