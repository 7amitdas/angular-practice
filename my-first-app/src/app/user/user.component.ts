import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
    `
      .colWhite {
        color: white;
      }
    `,
  ],
})
export class UserComponent {
  username: string = '';
  //isAddUserButtonEnabled = false;
  displaySecretPass: boolean = false;
  buttonLog: number[] = [];
  // changeLogBackgroundColor: boolean = false;
  // changeLogTextColor: boolean = false;

  constructor() {}

  //   onUserNameInput(event) {
  //     if (event.target.value.length > 0) {
  //       this.isAddUserButtonEnabled = true;
  //     } else {
  //       this.isAddUserButtonEnabled = false;
  //     }
  //   }

  // onReset() {
  //     this.username = '';
  //     //this.isAddUserButtonEnabled = false;
  //   }

  onClickDisplayDetails() {
    this.displaySecretPass = !this.displaySecretPass;
    if (this.displaySecretPass) {
      this.buttonLog.push(1);
    } else {
      this.buttonLog.push(0);
    }
    // if (this.buttonLog.length >= 5) {
    //   this.changeLogBackgroundColor = true;
    //   this.changeLogTextColor = true;
    // }
  }

  getLogBackGroundColor(indexOfelement): string {
    return indexOfelement >= 4 ? 'blue':'white';
  }
}
