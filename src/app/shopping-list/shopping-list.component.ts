import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Chille',10),
    new Ingredients('tomato',10),
    new Ingredients('Masala', 10)
  ];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredients){
    this.ingredients.push(ingredient);

  }
}
