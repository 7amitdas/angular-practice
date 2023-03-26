import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output
} from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) name: ElementRef;
  @ViewChild('amountInput', { static: true }) amount: ElementRef;
  @Output('btnAddClicked') addBtnClicked = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddClick() {
    this.addBtnClicked.emit(
      new Ingredient(
        this.name.nativeElement.value,
        this.amount.nativeElement.value
      )
    );
  }
}
