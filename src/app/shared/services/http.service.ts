import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GameResultModel } from '../../monty-app/game-result.model';
import { ResponseBaseModel } from '../models/response-base.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url: string = `${environment.baseAddress}/Game`;

  constructor(private httpClient: HttpClient) {}

  requestGameStats(
    games: number,
    switchDoor: boolean = false,
  ): Promise<ResponseBaseModel<GameResultModel>> {
    return lastValueFrom(
      this.httpClient.get<ResponseBaseModel<GameResultModel>>(`${this.url}/PlayGame`, {
        params: { games, switchDoor },
      }),
    );
  }

  getHistoryResults(): Promise<ResponseBaseModel<GameResultModel[]>> {
    return lastValueFrom(
      this.httpClient.get<ResponseBaseModel<GameResultModel[]>>(`${this.url}/GetResultList`),
    );
  }
}
