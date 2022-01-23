import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export interface GameResultModel {
  playerStrategy: { id: StringMap,  name: string};
  playCount: number;
  winCount: number;
  probabilityOfWinning: number;
}
