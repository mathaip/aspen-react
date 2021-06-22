import "../stylesheet/new-style.css";
import logo from '../images/white-logo-scaled.png';
import {NavLink} from 'react-router-dom';
import discord from '../images/social_icons/Discord_black.png';
import medium from '../images/social_icons/Medium_black.png';
import telegram from '../images/social_icons/Telegram_black.png';
import twitter from '../images/social_icons/Twitter_black.png';

function SideNav() {
    return (
        <header className="d-none d-md-flex">
        <div className="header">
            <a href="/AmericanRevolution">
                <img src={logo} alt="Logo"/>
            </a>
            {/* <NavLink to="">
                <img src={logo} alt="Logo"/>
            </NavLink> */}
            <h2 className="title">DCOLLECT</h2>
            <ul className="social-links">
                <li>
                    <a target="_blank" href="https://t.me/aspenlabs">
                        <img src={telegram} className="social-link"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://medium.com/@aspenlabs1">
           
                        <img src={medium} className="social-link"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://twitter.com/LabsAspen"> 
                        <img src={twitter} className="social-link"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://discord.gg/VSRRjJqFr4" >
                        <img src={discord} className="social-link"/>
                    </a>
                </li>
            </ul>
        </div>
         
        
      </header>
    )
}

export default SideNav