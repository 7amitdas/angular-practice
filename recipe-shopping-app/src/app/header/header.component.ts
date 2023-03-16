import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output('getSelectedMenuItemName') selectedMenu = new EventEmitter<string>();

  onSelectMenuItem(menuItemName: string) {
    this.selectedMenu.emit(menuItemName);
  }
}
