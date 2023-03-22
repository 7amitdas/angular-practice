import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe(
      (status:string) => {
        alert('New Status: ' + status);
      }
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus,
    // });
    this.accountService.addAccount(accountName, accountStatus);
  }
}