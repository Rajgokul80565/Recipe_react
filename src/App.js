
import './App.css';
import {useEffect,useState} from 'react';
import Card from './components/Cards';







function App() {


const appId = '0735d9a3';
const appKey = 'b9711dc39155ee71072a0465451ddf60';

//

const [recipes, setRecipes] = useState([]);
const [search,setSearch] = useState("");
const [query,setQuery] = useState('chicken');


useEffect(() =>{
  getrecipes();
},[query]);

const updateSearch = e =>{
  setSearch(e.target.value);
}

const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

const url =`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;





const getrecipes = async () =>{
  const response = await fetch(url);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);

}



  return (
    <div className="App">
     <form onSubmit = {getSearch} >
       <h2>Enter you Keywords</h2>
       <input
        type="text"
         value={search}
         onChange = {updateSearch} 
        />
       <button  type='submit' >search</button>
     </form>
     {recipes.map(recipe => (
        <Card 
          key={recipe.recipe.label}
          title = {recipe.recipe.label}
          ingredients = {recipe.recipe.ingredients}
          calories = {recipe.recipe.calories}
          images = {recipe.recipe.image}
        />
     ))}
     
    </div>
  );
}

export default App;
