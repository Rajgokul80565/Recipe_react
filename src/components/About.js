import React from 'react';
import devimg from '../images/circle-cropped (1).png';
import instagram from '../images/instagram (1).png';
import github from '../images/github.png';
import twitter from '../images/twitter.png'
import '../css/about.css';


function About(){
    return(
        <div className = "about-page" >
            <div>
            <h1 className = "title"> About </h1>
            <p>
            Recipeeco is an Web application managing
            All kinds of Foods recipes from the internet.
            It's developed and designed by an independent  Web developer.
            This project is to showcase my work and experience of my React JS journey.
            Technology stacks are HTML,CSS,REACT JS and deployed by Netlify.
            </p>
            </div>
            <div id="Avatar">
                <img src={devimg} alt="dev-img"/>
                <div>
                <a href=""><img className = "icons" src={instagram} alt="Instagram Icon"/></a> 
                <a href="https://github.com/Rajgokul80565" target="blank" ><img className = "icons" src={github} alt="Github Icon"/></a>
                <a href="https://twitter.com/Mmmok86727315?s=08" target="blank" ><img className = "icons" src={twitter} alt="Twitter Icon"/></a>
                </div>
                </div>
                
        </div> 
        )
}

export default About;

