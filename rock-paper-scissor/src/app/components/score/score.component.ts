import { Component, OnInit } from '@angular/core';

import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  score: number = 0;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.scoreSub.subscribe((score) => {
      this.score = score;
    });
    
    this.gameService.getScore();
  }
}
