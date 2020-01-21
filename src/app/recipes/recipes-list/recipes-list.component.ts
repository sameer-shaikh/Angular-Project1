import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output()  recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("REsp1","REst test", 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    new Recipe("REsp1 TEst2","REst test 0987654", 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
