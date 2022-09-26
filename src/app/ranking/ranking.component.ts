import { Component, OnInit } from '@angular/core';
import { RankingService } from '../services/ranking.service';
import { Ranking } from '../shared/ranking';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  ranking: Ranking[] = [];

  constructor(private rankingService: RankingService) { }

  ngOnInit(): void {
    this.rankingService.getRanking().subscribe(ranking => this.ranking = ranking);
  }

}
