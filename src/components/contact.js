import React from 'react';
import devimg from '../images/circle-cropped (1).png';
import instagram from '../images/instagram (1).png';
import github from '../images/github.png';
import twitter from '../images/twitter.png'
import '../css/about.css';
import '../css/about.css';



function Contact(){
    return(
        <div>
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

export default Contact;