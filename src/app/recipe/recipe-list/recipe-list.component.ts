import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe [] = [];

  constructor() { 
  }

  ngOnInit() {
    this.recipes.push(new Recipe('Recipe Test', 'A Description', 'https://fotw.info/images/u/us$arby69r.gif'));
    this.recipes.push(new Recipe('Recipe Test', 'A Description', 'https://fotw.info/images/u/us$arby69r.gif')); 
  }

}
