import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('setSingleRecipe') singleRecipeItem: Recipe;
  //@Output('getRecipeSelected') onRecipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  onSelectRecipe() {
    //this.onRecipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.singleRecipeItem);
  }
}