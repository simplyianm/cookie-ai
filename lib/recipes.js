import _ from 'lodash';
import { readFileSync } from 'fs';
import * as bigoven from './bigoven';

let data = readFileSync(__dirname + '/../data/recipes.json').toString();
let recipes = JSON.parse(data);

export async function get(name) {
  let local = _.detect(recipes, (recipe) => {
    return recipe.name.toLowerCase() === name.toLowerCase();
  });
  if (local) {
    return local;
  }
  return await bigoven.getFirstRecipe(name);
}

export async function suggest(keywords) {
  return await bigoven.getRecipes(keywords).then((res) => {
    return res.Results;
  });
}
