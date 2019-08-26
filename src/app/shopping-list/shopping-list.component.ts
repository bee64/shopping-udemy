import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../models/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient [] = [];

  constructor() { }

  ngOnInit() {
    this.ingredients.push(new Ingredient('pasta', 10));
    this.ingredients.push(new Ingredient('spam', 40000));
  }

}
