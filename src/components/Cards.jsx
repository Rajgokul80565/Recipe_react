import React from 'react';
import style from '../recipes.module.css';


function Card({title,ingredients,calories,images}){
    return(

        <div className = {style.recipe}>
            <h1 className = {style.title}>{title}</h1>
            <img className ={style.img} src={images} alt=""/>
            {ingredients.map( ingre=>(
              <p className ={style.content}>{ingre.text}</p>
             ))}
          
            <h5 className = 'calories'>{calories}</h5>
        </div>


    );
};

export default Card;

//You may want to add 'directions' to the recipes, so the users know how to make them. If so in App.js when he maps through recipe just add a 'directions= {recipe.recipe.url}' , then in Recipe.js add '<a href={directions}
  //target='_blank'>  Directions  </a>'  Hope that helps someone. Awesome video! Thanks so much! I had a lot of fun with it!