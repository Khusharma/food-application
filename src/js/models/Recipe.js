import axios from 'axios';
//import {element} from './views/base';

export default class Recipe {
  constructor(id){
    this.id = id;
  }

  async recipeid(){
    try{
      const recid = await axios(`https://api.edamam.com/search?q=${this.id}&app_id=fcf1a54a&app_key=6b181200baf261ec70773cabc469cb7c`);
     this.label = recid.data.hits[0].recipe.label;       
     this.uri = recid.data.hits[0].recipe.uri;       
     this.source = recid.data.hits[0].recipe.source;       
     this.image = recid.data.hits[0].recipe.image;       
    }catch(error){
      alert('error');
    }
  }
}


