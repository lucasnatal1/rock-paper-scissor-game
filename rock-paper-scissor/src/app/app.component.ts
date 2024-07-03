import { Component, OnInit } from '@angular/core';

import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rock-paper-scissor';
  isFinished = false;
  flagRules = false;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.gameResultSub.subscribe((result) => {
      this.isFinished = result != undefined ? true : false;
    });
  }
}
