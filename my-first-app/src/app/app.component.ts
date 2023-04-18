import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import { UserService } from './services/user.service';
import { ObserveUserService } from './observ-user/observ-user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
})
export class AppComponent implements OnInit, OnDestroy {
  showCustomStrucDir: boolean = false;

  // Test Ng Switch
  cusValue: number = 5;

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

  onGamePaused(firedNo: number) {}

  onGameStopped(firedNo: number) {
    if (firedNo === 0) {
      this.oddNumbers = [];
      this.evenNumbers = [];
    }
  }

  accounts: { name: string; status: string }[] = [];

  constructor(
    private accountService: AccountService,
    private obsUserService: ObserveUserService
  ) {}

  userActivated: boolean = false;
  private activatedSub: Subscription;

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
    this.activatedSub = this.obsUserService.activatedEmitter.subscribe((isActivated) => {
      this.userActivated = isActivated;
    });
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }

  onAccountAdded(name: string, status: string) {
    this.accountService.addAccount(name, status);
  }

  onStatusChanged(id: number, newStatus: string) {
    this.accountService.updateStatus(id, newStatus);
  }
}
