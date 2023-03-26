import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService : ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (inds: Ingredient[]) => {
        this.ingredients = inds;
      }
    );
  }

  onAdd(event: Ingredient) {
    //  this.ingredients.push(event);
    this.shoppingListService.addIngredient(event);
  }

  // onDelete(event: Ingredient) {
  //   this.ingredients.splice(0, 1);
  // }

  // onReset() {
  //   this.ingredients = [
  //     new Ingredient('Apples', 5),
  //     new Ingredient('Tomatos', 10),
  //   ];
  // }
}