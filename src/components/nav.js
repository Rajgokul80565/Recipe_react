import React from "react";
import style from '../css/navbar.module.css';
import {Link} from 'react-router-dom';


function Navbar(){
    return(
        <nav id={style.navbar}>
            <label className={style.brandname} htmlFor="">Recipeeco</label>
            <ul className ={style.list}>
            <Link to="/">
                <li><a href="">Home</a></li>
            </Link>
            <Link  to="/contact" >
                <li><a href="">Contact</a></li>
            </Link>
            <Link  to = "/about">
                <li><a href="">About</a></li>
            </Link>
            </ul>
        </nav>
        

 )
}

export default Navbar;