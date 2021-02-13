import React from 'react';
import foodImage from '../images/food.svg';
import styles from '../css/header.module.css';

function Header(){
    return (
    <header className = {styles.landing}>
     <div className = {styles.foodImg}>
         <img src={foodImage} alt="Food Illustration image"/>
     </div>
        <div>
            <h1>Finger tip recipe for you</h1>
            <h5>Millions of Food recipes</h5>
            <p>In</p>
            <h5>Place</h5>
        </div>

    </header>
    )
}

export default Header;