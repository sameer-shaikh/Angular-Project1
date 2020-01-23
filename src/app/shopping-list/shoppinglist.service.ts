import { Ingredients } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    ingredientsChanges = new EventEmitter<Ingredients[ ]>();

    private ingredients: Ingredients[] = [
        new Ingredients('Chille', 10),
        new Ingredients('tomato', 10),
        new Ingredients('Masala', 10)
      ];

      getIngredients() {
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredients) {
        this.ingredients.push(ingredient);
        this.ingredientsChanges.emit(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredients[]) {
        // for (const ingr of ingred) {
        //   this.addIngredient(ingr);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanges.emit(this.ingredients.slice());
      }
}
