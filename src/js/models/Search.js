import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getrecipes() {
    try{
    const res = await axios(`https://api.edamam.com/search?q=${this.query}&app_id=fcf1a54a&app_key=6b181200baf261ec70773cabc469cb7c&from=0&to=10`);
    this.result = res.data.hits;
    //console.log(this.result);
    } catch(error) {
      alert(error);
    }
  }
}

