import React from 'react';
import styles from '../css/header.module.css';
import foodImage from '../images/food.svg';


function Header(){
    return (
    <header className = {styles.landing}>
     <div className = {styles.foodImg}>
         <img src={foodImage} alt="Food Illustration image"/>
     </div>
        <div className = {styles.introLines}>
            <h1>Taste the Best that <span className = {styles.wordColor}> Surprise</span> you.</h1>
            <h1>Get the Most Popular Recipes</h1>
            
            <button className = {styles.btn}> <a href=""> Get Started</a>  </button>
        </div>

    </header>
    )
}

            //<h2 className = {styles.wordColor}></h2>
export default Header;