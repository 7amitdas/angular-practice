import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  counter: number = 0;
  @Output('startGame') intervalFired = new EventEmitter<number>();
  @Output('stopGame') stopGame = new EventEmitter<number>();
  interval: any;

  isStartButtonDisabled: boolean = false;
  isPauseButtonDisabled: boolean = true;
  isStopButtonDisabled: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onClickStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.counter + 1);
      this.counter++;
    }, 1000);
    this.isStartButtonDisabled = true;
    this.isPauseButtonDisabled = false;
    this.isStopButtonDisabled = false;
  }

  onClickPause() {
    clearInterval(this.interval);
    this.isStartButtonDisabled = false;
    this.isPauseButtonDisabled = true;
    this.isStopButtonDisabled = false;
  }

  onClickStop() {
    this.counter = 0;
    clearInterval(this.interval);
    this.stopGame.emit(this.counter);
    this.isStartButtonDisabled = false;
    this.isPauseButtonDisabled = true;
    this.isStopButtonDisabled = true;
  }
}
