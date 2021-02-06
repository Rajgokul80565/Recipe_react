import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';
import Card from './components/Cards';







function App() {


const appId = '0735d9a3';
const appKey = 'b9711dc39155ee71072a0465451ddf60';

//
const url =`https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}`;

const [recipes, setRecipes] = useState([]);

useEffect(() =>{
  getrecipes();
},[])




const getrecipes = async () =>{
  const response = await fetch(url);
  const data = await response.json();
  setRecipes(data.hits);

}



  return (
    <div className="App">
     <form >
       <h2>Enter you Keywords</h2>
       <input type="text"/>
       <button  type='submit' >search</button>
     </form>
     {recipes.map(recipe => (
        <Card 
          title = {recipe.recipe.label}
          steps = {recipe.recipe.ingredientLines}
          calories = {recipe.recipe.calories}
        />
     ))}

     <Card />
     
    </div>
  );
}

export default App;
