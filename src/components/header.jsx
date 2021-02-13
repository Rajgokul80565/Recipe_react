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
            <h1>Rain or shine, it's time to <span className = {styles.wordColor}>Dine</span>.</h1>
            <button className = {styles.btn}> Get Started </button>
        </div>

    </header>
    )
}

            //<h2 className = {styles.wordColor}></h2>
export default Header;