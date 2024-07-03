import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScoreComponent } from './components/score/score.component';
import { BoardComponent } from './components/board/board.component';
import { ResultComponent } from './components/result/result.component';
import { RulesComponent } from './components/rules/rules.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    BoardComponent,
    ResultComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
