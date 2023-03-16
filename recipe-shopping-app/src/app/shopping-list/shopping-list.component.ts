import { Component } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
  ];

  constructor() {}

  ngOnInit() {}

  onAdd(event: Ingredient) {
    this.ingredients.push(event);
  }

  onDelete(event: Ingredient) {
    this.ingredients.splice(0, 1);
  }

  onReset() {
    this.ingredients = [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatos', 10),
    ];
  }
}