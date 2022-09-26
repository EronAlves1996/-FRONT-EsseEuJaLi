import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ranking } from '../shared/ranking';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private httpService: HttpClient) { }

  getRanking(): Observable<Ranking[]>{
    return this.httpService.get<Ranking[]>("http://localhost:8080/api/readed/ranking");
  }
}
