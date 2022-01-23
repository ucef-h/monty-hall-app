import { Component, OnInit } from '@angular/core';
import { GameResultModel } from './game-result.model';
import { GameService } from './game.service';
import { DialogService } from '../shared/dialog/dialog.service';

@Component({
  selector: 'app-monty-app',
  templateUrl: './monty-app.component.html',
  styleUrls: ['./monty-app.component.css'],
})
export class MontyAppComponent implements OnInit {
  results: Promise<GameResultModel[] | null>;

  constructor(private gameService: GameService, private dialog: DialogService) {
    this.results = new Promise<GameResultModel[] | null>((resolve) => {
      resolve(null);
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }

  async requestMontyGame(event: { numberOfGames: 3; switchDoor: false }) {
    try {
      await this.gameService.playGame(event.numberOfGames, event.switchDoor);
      this.fetchData();
    } catch (e) {
      console.error(e);
      this.dialog.error('error occurred during game submit');
    }
  }

  private fetchData() {
    this.results = this.gameService.getHistoryResults();
  }
}
