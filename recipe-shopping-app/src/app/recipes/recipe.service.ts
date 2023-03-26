import { EventEmitter } from '@angular/core';
import { Recipe } from './../model/recipe.model';

export class RecipeService {
  recipeSelected  = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a Test',
      'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/a019-jakubk-0033-quick-pasta-to-go.jpg?w=1200&h=1200&fit=clip&crop=default&dpr=1&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=66e7cea6b7919fb9e923049341a67c3e'
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a Test 2',
      'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/a019-jakubk-0033-quick-pasta-to-go.jpg?w=1200&h=1200&fit=clip&crop=default&dpr=1&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=66e7cea6b7919fb9e923049341a67c3e'
    ),
    new Recipe(
      'A Test Recipe 3',
      'This is simply a Test 3',
      'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/a019-jakubk-0033-quick-pasta-to-go.jpg?w=1200&h=1200&fit=clip&crop=default&dpr=1&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=66e7cea6b7919fb9e923049341a67c3e'
    )
  ];

  getRecipes(): Recipe[] {
    // Return a Copy of Actual Array
    return this.recipes.slice();
  }


}
