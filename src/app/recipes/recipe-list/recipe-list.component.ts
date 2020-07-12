import { Component, OnInit } from '@angular/core'
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pancakes',
      'this is just a test of the description in the model',
      'https://images.unsplash.com/photo-1513709630908-2fbc54f82fcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      'breakfast',
      'lorem ipsajsdpijdsaip'
    ),
    new Recipe(
      'Pancakes',
      'this is just a test of the description in the model',
      'https://images.unsplash.com/photo-1513709630908-2fbc54f82fcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      'dinner',
      'osajdopjapojdpajsdj'
    ),
    new Recipe(
      'Pancakes',
      'this is just a test of the description in the model',
      'https://images.unsplash.com/photo-1513709630908-2fbc54f82fcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      'brunch',
      'sjnaaiadiajidja'
    ),
  ]
  constructor() {}

  ngOnInit(): void {}
}
