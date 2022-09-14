import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterServiceService {

  private actURL: Subject<string> = new Subject<string>;

  constructor() { }

  injectURL(urlSeg: string){
    this.actURL.next(urlSeg);
  }

  getActURL(): Observable<string> {
    return this.actURL.asObservable();
  }
}
