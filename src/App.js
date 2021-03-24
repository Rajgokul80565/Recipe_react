
import './App.css';
import {useEffect,useState} from 'react';
import Card from './components/Cards';
import Navbar from './components/nav';
import Header from './components/header';
import {BrowserRouter as Router, Switch,Route}  from 'react-router-dom';
import Contact from './components/contact';
import About from './components/About';





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
}

function Home(){
  return(
    <div> 
<Header />
     <form className ='search-form' onSubmit = {getSearch} >
       <input
       className = 'search-bar'
       placeholder='5 request per minute'
        type="text"
         value={search}
         onChange = {updateSearch} 
        />
       <button className = 'search-btn' type='submit' >search</button>
     </form>
     <div className = 'recipes-card'>
     {recipes.map(recipe => (
        <Card 
          key={recipe.recipe.label}
          title = {recipe.recipe.label}
          ingredients = {recipe.recipe.ingredients}
          images = {recipe.recipe.image}
        />
     ))}
     </div>
     </div>
  )
}



  return (
    <Router>
    <div className="App">
    
    <Navbar />
    <Switch>
    <Route path= "/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contacts" component={Contact} />
    </Switch>
    
    
    
     </div>
    </Router> 
  );
}





export default App;
