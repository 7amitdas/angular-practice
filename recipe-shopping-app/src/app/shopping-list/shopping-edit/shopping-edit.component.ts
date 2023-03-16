import { Component, EventEmitter, ViewChild, Output, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', {static:true}) name: ElementRef;
  @ViewChild('amountInput', {static:true}) amount: ElementRef;
  @Output('btnAddClicked') addBtnClicked = new EventEmitter<Ingredient>();
  @Output('btnDeleteClicked') delBtnClicked = new EventEmitter<Ingredient>();
  @Output('btnResetClicked') resetBtnClicked = new EventEmitter<void>();

  onAddClick() {
    this.addBtnClicked.emit(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  }

  onDeleteClick() {
    this.delBtnClicked.emit(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  }

  onResetClick() {
    this.resetBtnClicked.emit();
  }
}
