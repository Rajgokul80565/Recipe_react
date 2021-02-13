import React from "react";
import style from '../css/navbar.module.css';


function Navbar(){
    return(
        
        <nav id={style.navbar}>
            <label className={style.brandname} htmlFor="">Recipeeco</label>
            <ul className ={style.list}>
                <li><a href="">Home</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">About</a></li>
            </ul>
        </nav>
        

 )
}

export default Navbar;