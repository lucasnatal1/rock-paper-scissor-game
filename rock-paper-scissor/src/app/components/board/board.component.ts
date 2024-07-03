import { Component, OnDestroy, OnInit } from '@angular/core';

import { GameService } from 'src/app/services/game.service';

enum Choices {
  'paper',
  'rock',
  'scissors'
}

enum Results {
  'win',
  'lose',
  'draw'
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  userChoice: keyof typeof Choices | undefined;
  pcChoice: keyof typeof Choices | undefined;
  gameResult: keyof typeof Results | undefined;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {

    this.gameService.pcPickSub.subscribe((pick) => {
      this.pcChoice = pick;
    });

    this.gameService.gameResultSub.subscribe((result) => {
      if (result == undefined) {
        this.userChoice = undefined
      }
      this.gameResult = result;
    });
  }

  onUserChoice(pick: keyof typeof Choices) {
    this.userChoice = pick;
    this.gameService.onUserPick(pick);
  }
}
