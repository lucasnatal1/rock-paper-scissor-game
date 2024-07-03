import { Component, OnInit } from '@angular/core';

import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  resultMsg: string = '';

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.gameResultSub.subscribe((result) => {
      console.log(result);
      this.resultMsg = result === 'win' ? 'you win' : result === 'draw' ? 'draw' : 'you lose';
    });
  }

  onPlayAgain() {
    this.gameService.playAgain();
  }
}
