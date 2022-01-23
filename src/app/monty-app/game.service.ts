import { Injectable } from '@angular/core';
import { GameResultModel } from './game-result.model';
import { HttpService } from '../shared/services/http.service';
import { ResponseUtils } from '../shared/models/response-base.model';
import { DialogService } from '../shared/dialog/dialog.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private gameHttp: HttpService, private dialogService: DialogService) {}

  async playGame(
    numberOfGames: number,
    switchDoor: boolean = false,
  ): Promise<GameResultModel | null> {
    try {
      return await ResponseUtils.unwrapResponse(
        this.gameHttp.requestGameStats(numberOfGames, switchDoor),
      );
    } catch (e: any) {
      if (e instanceof Error) {
        ResponseUtils.showError(e, this.dialogService);
        return null;
      }
      throw new Error('unknown');
    }
  }

  async getHistoryResults(): Promise<GameResultModel[]> {
    try {
      return await ResponseUtils.unwrapResponse(this.gameHttp.getHistoryResults());
    } catch (e: any) {
      ResponseUtils.showError(e, this.dialogService);
      return [];
    }
  }
}
