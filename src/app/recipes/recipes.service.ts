import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Samosas',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Samosachutney.jpg/280px-Samosachutney.jpg',
      ingredients: ['Pastry', 'Potatoes', 'Peas']
    },
    {
      id: 'r2',
      title: 'Pasta al pomodoro',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Orecchiette_al_Pomodoro.jpg/220px-Orecchiette_al_Pomodoro.jpg',
      ingredients: ['Pasta', 'Olive oil', 'Tomatoes']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => recipe.id === recipeId)};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }
}
