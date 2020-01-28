import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shoppinglist.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('French Fires', 'REst test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
       [
           new Ingredients('Patatoes', 1),
           new Ingredients('Salt', 2)
       ] ),
        new Recipe('Beef Stake', ' 0987654', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
        [
            new Ingredients('Salt', 2),
            new Ingredients('Meat', 1)
        ]),
      ];

      constructor(private shoppinglistService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredients[]) {
        this.shoppinglistService.addIngredients(ingredients);
      }
}
