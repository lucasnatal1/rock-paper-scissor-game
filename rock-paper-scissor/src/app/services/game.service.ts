import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

enum Choices {
  'paper',
  'rock',
  'scissors',
}

enum Results {
  'win',
  'lose',
  'draw',
}

@Injectable({ providedIn: 'root' })
export class GameService {
  private userPick: keyof typeof Choices | undefined;
  //   public userPickSub = new Subject<keyof typeof Choices | undefined>();
  private pcPick: keyof typeof Choices | undefined;
  public pcPickSub = new Subject<keyof typeof Choices | undefined>();
  private gameResult: keyof typeof Results | undefined;
  public gameResultSub = new Subject<keyof typeof Results | undefined>();
  private score: number = 0;
  public scoreSub = new Subject<number>();

  public onUserPick(pick: keyof typeof Choices) {
    this.userPick = pick;
    // this.userPickSub.next(this.userPick);
    this.generatePcPick();
  }

  private generatePcPick() {
    setTimeout(() => {
      let rand = Math.floor(Math.random() * 100) % 3;
      this.pcPick = rand === 0 ? 'paper' : rand === 1 ? 'rock' : 'scissors';
      this.pcPickSub.next(this.pcPick);
      this.checkResult();
    }, 750);
  }

  private checkResult() {
    if (this.userPick === 'paper') {
      switch (this.pcPick) {
        case 'paper':
          this.gameResult = 'draw';
          break;
        case 'rock':
          this.gameResult = 'win';
          break;
        default:
          this.gameResult = 'lose';
          break;
      }
    } else if (this.userPick === 'rock') {
      switch (this.pcPick) {
        case 'paper':
          this.gameResult = 'lose';
          break;
        case 'rock':
          this.gameResult = 'draw';
          break;
        default:
          this.gameResult = 'win';
          break;
      }
    } else {
      switch (this.pcPick) {
        case 'paper':
          this.gameResult = 'win';
          break;
        case 'rock':
          this.gameResult = 'lose';
          break;
        default:
          this.gameResult = 'draw';
          break;
      }
    }

    this.updateScore();
    this.gameResultSub.next(this.gameResult);
  }

  private updateScore() {
    this.score =
      this.gameResult === 'win'
        ? this.score + 1
        : this.gameResult === 'draw'
        ? this.score
        : this.score - 1;
    localStorage.setItem('score', this.score.toString());
    this.scoreSub.next(this.score);
  }

  public getScore() {
    var savedScore = localStorage.getItem('score');
    this.score = savedScore != null ? +savedScore : 0;
    this.scoreSub.next(this.score);
  }

  public playAgain() {
    this.gameResult = undefined;
    this.pcPick = undefined;
    this.pcPickSub.next(this.pcPick);
    this.gameResultSub.next(this.gameResult);
  }
}
