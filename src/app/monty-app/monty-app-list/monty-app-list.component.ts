import { Component, Input } from '@angular/core';
import { GameResultModel } from '../game-result.model';

@Component({
  selector: 'app-monty-app-list',
  templateUrl: './monty-app-list.component.html',
  styleUrls: ['./monty-app-list.component.css'],
})
export class MontyAppListComponent {
  @Input() list: GameResultModel[] | null;
}
