import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput', { static: true }) name: ElementRef;
  // @ViewChild('amountInput', { static: true }) amount: ElementRef;

  @ViewChild('form', { static: true }) slForm: NgForm;

  subs: Subscription;
  editMode:boolean = false;
  editedItemIndex: number = 0;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subs = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  onSubmitClick(formData: NgForm) {
    // this.addBtnClicked.emit(
    //   new Ingredient(
    //     this.name.nativeElement.value,
    //     this.amount.nativeElement.value
    //   )
    // );
    // const ingName = this.name.nativeElement.value;
    // const ingAmount = this.amount.nativeElement.value;
    const value = formData.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    formData.reset();
  }

  onDelete() {
    // Not Working
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
