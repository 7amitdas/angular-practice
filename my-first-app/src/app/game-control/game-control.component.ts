import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  counter: number = 0;
  @Output('startGame') intervalFired = new EventEmitter<number>();
  interval:any;

  constructor() {}

  ngOnInit(): void {

  }

  onClickStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.counter + 1);
      this.counter++;
    }, 1000);
  }

  onClickEnd() {
    clearInterval(this.interval);
  }
}