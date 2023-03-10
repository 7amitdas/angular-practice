import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'Test Server', content: 'Just a Test!' },
  ];

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  onGameStarted(firedNo: number) {
    if (firedNo % 2 === 0) {
      this.evenNumbers.push(firedNo);
    } else {
      this.oddNumbers.push(firedNo);
    }
  }

  onGamePaused(firedNo: number) {

  }

  onGameStopped(firedNo: number) {
    if (firedNo === 0) {
      this.oddNumbers = [];
      this.evenNumbers = [];
    }
  }
}