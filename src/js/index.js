import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import { elements, loaded, clearlod} from './views/base';

const state = {};

/////// search recipe

const controlSearch = async() => {
  //take input from user
  const query = searchView.reu();
  //console.log(query);
  
  if(query){
  //create new object 
  state.search = new Search(query);

  //update ui
  searchView.clearser();
  searchView.clearrec();
  loaded(elements.searchRes);

  //result of search query
  await state.search.getrecipes();

  //result
  clearlod();
  searchView.renderResult(state.search.result); 
  }
  
};

elements.searchForm.addEventListener('submit', el => {
  el.preventDefault();
  controlSearch();
});

/////////search for one recipe

const recipeSearch = async() =>{

  //take id
  let id1 = window.location.hash.replace('#recipe_' , ' ');
  let id = id1.split(' ');
  
  //create new object of id
  state.recipe = new Recipe(id[1]);

  if(id) {
  //update ui
  recipeView.clearrecipe();
  loaded(elements.recipe);

  //result of search
  await state.recipe.recipeid();
  
  //final result on ui
  clearlod();
  recipeView.recipeSearch(state.recipe);
  }

};

//window.addEventListener('hashchange',recipeSearch);
//window.addEventListener('load',recipeSearch);

['hashchange','load'].forEach(event => window.addEventListener(event,recipeSearch));
