import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input('setSingleRecipe') singleRecipeItem: Recipe;
  @Output('getRecipeSelected') onRecipeSelected = new EventEmitter<void>();

  onSelectRecipe() {
    this.onRecipeSelected.emit();
  }
}
