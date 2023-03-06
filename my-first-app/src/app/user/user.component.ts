import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  username: string = '';
  //isAddUserButtonEnabled = false;

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
}
